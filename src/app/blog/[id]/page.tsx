interface PageProps {
  params: {
    id: string
  }
}

// export async function generateStaticParams() {
//   return [
//     { id: '1' },
//     { id: '2' }
//   ]
// }

export default function Page({ params }: PageProps) {
  return (
    <h1>blog post {params.id}</h1>
  )
}