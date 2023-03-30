import { useCallback } from 'react';

export const useSave = () => {
  const onSubmit = useCallback(async (data: any) => {
    const formData = new FormData();
    const url = data.id ? `${data.id}/api` : 'create/api';

    try {
      let response = await fetch(url, {
        method: data.id ? 'PUT' : 'POST',
        body: JSON.stringify({
          id: data.id,
          title: data.title
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const entity: { id: string } = await response.json();

      if (data.image?.[0]) {
        formData.append('id', data.id || entity.id);
        formData.append('image', data.image?.[0]);
        formData.append('x', data.imageCropArea.x);
        formData.append('y', data.imageCropArea.y);
        formData.append('width', data.imageCropArea.width);
        formData.append('height', data.imageCropArea.height);

        response = await fetch('/api/zukkos/upload', {
          method: 'POST',
          body: formData
        });
      }

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      console.info(data.message);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    }
  }, []);

  return { onSubmit };
};
