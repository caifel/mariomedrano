import FileUploadForm from './FileUploadForm';

const IndexPage = async () => {
  return (
    <>
      <main>
        <h1>Image Upload</h1>
        <FileUploadForm />
      </main>
    </>
  );
};

export default IndexPage;
