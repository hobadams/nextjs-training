export const dynamic = 'force-dynamic';

export default function Page() {

  const varName = 'NEXT_PUBLIC_TEST_VAR';
  const privateVarName = 'PRIVATE_VAR'

  return (
    <>
      <h1>Public dynamic</h1>
      <p>- {process.env.NEXT_PUBLIC_TEST_VAR}</p>
      <p>- {process.env[varName]}</p>
      <p>- {process.env[privateVarName]}</p>
    </>
  )

}