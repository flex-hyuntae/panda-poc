import { ReactNode } from "react"
import { css } from '@panda-poc/panda-css/css'

const Button = ({ children }: {
  children: ReactNode
}) => {
  return (
    <button type="button" className={css({ bg: 'blue.400', px: '2', py: '3' })}>
      {children}
    </button>
  )
}

const Title = () => {
  return <p />
}

export { Button, Title }
