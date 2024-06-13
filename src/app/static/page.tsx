export default async function Page() {

  const { time } = await fetch('http://localhost:3000/api/time').then(res => res.json())

  return <h1>Static Page: {time}</h1>

}