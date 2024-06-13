import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // randomly get true or false
  const isAuth = Math.random() < 0.5;

  console.log('checking auth status', { isAuth })

  if (!isAuth) {
    return (
      <>
        <Nav />
        <h1>Not authorized</h1>
        {children}
      </>
    )
  }

  return (
    <>
      <Nav />
      <h1>authorized</h1>
      {children}
    </>
  );
}


const Nav = () => {
  return (
    <nav className="flex mb-8">
      <Link href="/auth-layout/page1" className="underline mr-4">Page 1</Link>
      <Link href="/auth-layout/page2" className="underline mr-4">Page 2</Link>
      <Link href="/auth-layout/page3" className="underline mr-4">Page 3</Link>
      <Link href="/auth-layout/page4" className="underline mr-4">Page 4</Link>
    </nav>
  )
}