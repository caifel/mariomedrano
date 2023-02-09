const Divider = () => (
  <div style={{ height: 1, width: 100, backgroundColor: 'white', marginBottom: 20, marginTop: 20 }} />
);
type TCardProps = {
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;
const Card = ({ title, className }: TCardProps) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <p>
        <span></span>
      </p>
    </div>
  );
};
// --------------------------------
// PAGE
// --------------------------------
const Page = () => {
  return (
    <>
      <main style={{ padding: 30, fontSize: 18, letterSpacing: 5 }}>
        {/* <Divider /> */}
        <Card title="Write predictable code" className="border-cyan-500 bg-red-900 text-white mt-px" />
      </main>
    </>
  );
};

export default Page;
