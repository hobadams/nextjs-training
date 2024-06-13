import dynamic from "next/dynamic";
export default function Page() {

  const EnvVar = dynamic(() => import('@/components/EnvVar'), { ssr: false, loading: () => <p>Loading...</p>, })

  return (
    <>
      <h1>Public dynamic</h1>
      <EnvVar />
    </>
  )

}