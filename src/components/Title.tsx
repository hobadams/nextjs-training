'use client';

export const Title = () => {

  const text = window?.innerHeight > 0 ? 'Client' : 'Server'

  return (
    <h1>{text}</h1>
  )
}