'use client';

import dynamic from 'next/dynamic'
import { useState } from 'react';
export default function Page() {
  const [showInput, setShowInput] = useState(false)
  const Input = dynamic(() => import('@/components/Input'), { ssr: false, loading: () => <p>Loading...</p>, })

  return (
    <>
      <h1>Use dynamic</h1>
      <button onClick={() => setShowInput(true)}>Show Input</button>
      {showInput && <Input />}
    </>

  )
}