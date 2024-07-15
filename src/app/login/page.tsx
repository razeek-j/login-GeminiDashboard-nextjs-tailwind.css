// src/app/login/page.tsx
"use client"
import * as React from "react"
import { CardWithForm } from "@/components/CardWithForm"

export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <CardWithForm />
    </div>
  )
}
