import { useRouter } from 'next/navigation';

export const useEdit = () => {
  const { push } = useRouter();
  const onSubmit = async (data: any) => {
    const formData = new FormData();
    const url = `${data.id}/api`;

    try {
      let response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          id: data.id,
          title: data.title
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (data.image?.[0]) {
        formData.append('id', data.id);
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
    } finally {
      push(`/zukkos/admin/list`);
    }
  };

  return { onSubmit };
};
