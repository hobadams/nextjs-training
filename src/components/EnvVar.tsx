export default function EnvVar() {
  return (
    <main>
      <h2>EnvVar Component</h2>
      <p>Public var: {process.env.NEXT_PUBLIC_TEST_VAR}</p>
    </main>

  )
}