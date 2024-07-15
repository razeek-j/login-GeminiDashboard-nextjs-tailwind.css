// src/components/CardWithForm.tsx
"use client"
import * as React from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardWithForm() {
  const router = useRouter()

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()
    // Redirect to the dashboard
    router.push("/dashboard")
  }

  return (
    <Card className="w-[500px] shadow-lg">
      <CardHeader>
        <CardTitle>Log In</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="User name" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your Password" required />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="outline" type="button">Forget</Button>
            <Button variant="outline" type="submit">Login</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
