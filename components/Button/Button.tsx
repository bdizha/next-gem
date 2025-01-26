"use client"

import { Button as RadixButton } from "@radix-ui/themes"
import type { ComponentPropsWithoutRef } from "react"

export interface ButtonProps extends ComponentPropsWithoutRef<typeof RadixButton> {
  intent?: "primary" | "secondary"
  size?: "sm" | "lg"
  underline?: boolean
  href?: string
}

export function Button({ 
  intent = "primary", 
  size = "sm", 
  underline,
  href,
  className = "",
  ...props 
}: ButtonProps) {
  const variant = intent === "primary" ? "solid" : "outline"
  const radixSize = size === "sm" ? "2" : "3"

  const baseStyles = [
    className,
    underline ? "underline" : "",
    intent === "primary" ? "bg-yellow-500 hover:bg-yellow-600" : "border border-gray-700 hover:bg-gray-800",
    "transition-colors"
  ].filter(Boolean).join(" ")

  return (
    <RadixButton
      {...props}
      variant={variant}
      size={radixSize}
      className={baseStyles}
      asChild={href ? true : false}
    >
      {href ? (
        <a href={href}>
          {props.children}
        </a>
      ) : (
        props.children
      )}
    </RadixButton>
  )
}