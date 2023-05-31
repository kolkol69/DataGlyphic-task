import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from 'src/hooks'

import { Container } from './LoginLayout.style'

const LoginLayout = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default LoginLayout
