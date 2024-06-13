export default async function Page() {

  const { time } = await fetch('http://localhost:3000/api/time', { cache: 'no-store' }).then(res => res.json())

  return <h1>Dynamic: {time}</h1>

}