import Link from 'next/link'
import styles from './Button.module.scss'

interface ButtonProps {
  intent?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  underline?: boolean
  href?: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ 
  intent = "primary", 
  size = "md", 
  underline,
  href,
  className = "",
  onClick,
  children 
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[intent],
    styles[size],
    underline ? styles.underline : '',
    className
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}