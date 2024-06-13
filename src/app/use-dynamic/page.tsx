'use client';

import dynamic from 'next/dynamic'
export default function Page() {
  const Input = dynamic(() => import('@/components/Input'), { ssr: false, loading: () => <p>Loading...</p>, })
  return (
    <>
      <h1>Use dynamic</h1>
      <Input />
    </>

  )
}