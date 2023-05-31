import { MutableRefObject, useRef } from 'react'

import { useLogin } from 'src/api/hooks'

import { Container } from './Login.style'

const Login = () => {
  const { loginUser } = useLogin()
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputRef: MutableRefObject<HTMLInputElement | null>,
  ) => {
    if (inputRef.current != null) {
      inputRef.current.value = e.target.value
    }
  }

  const handleFormSubmit = () => {
    if (emailRef.current?.value == null || passwordRef.current?.value == null) return

    loginUser({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
  }

  return (
    <Container>
      <h2>Login page</h2>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        ref={emailRef}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, emailRef)
        }
        type="text"
        placeholder="email"
      />
      <label htmlFor="email">Password</label>
      <input
        name="password"
        ref={passwordRef}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e, passwordRef)
        }
        type="password"
        placeholder="password"
      />
      <button onClick={handleFormSubmit}>login</button>
    </Container>
  )
}
export default Login
