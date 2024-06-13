'use client';

import { Button } from "@/components/Button";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <Button />
    </div>
  );
}