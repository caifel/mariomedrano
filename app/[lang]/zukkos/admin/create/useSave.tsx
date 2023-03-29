import { useCallback } from 'react';

export const useSave = () => {
  const onSubmit = useCallback(async (data: any) => {
    const formData = new FormData();

    try {
      let response = await fetch('create/api', {
        method: 'POST',
        body: JSON.stringify({
          title: data.title
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const entity: { id: string } = await response.json();

      formData.append('id', entity.id);
      formData.append('image', data.image?.[0]);
      formData.append('x', data.imageCropArea.x);
      formData.append('y', data.imageCropArea.y);
      formData.append('width', data.imageCropArea.width);
      formData.append('height', data.imageCropArea.height);

      response = await fetch('/api/zukkos/upload', {
        method: 'POST',
        body: formData
      });

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
