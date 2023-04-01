export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="bg-zinc-900 max-w-xl h-full min-h-screen pt-5 pb-20 relative">{children}</main>;
}
