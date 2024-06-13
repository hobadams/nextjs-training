'use client';

export default function Page() {
  const handleClick = () => {
    fetch('http://localhost:3000/api/middleware', { cache: 'no-store' }).then(res => res.json())
  }

  return (
    <>
      <h1>Middleware Page</h1>
      <button onClick={handleClick}>Click me</button>
    </>
  )

}