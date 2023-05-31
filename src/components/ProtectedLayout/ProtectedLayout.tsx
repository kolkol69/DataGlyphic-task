import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from 'src/hooks'

import { Container, Nav, NavLink } from './ProtectedLayout.style'

const ProtectedLayout = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
      </Nav>
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default ProtectedLayout
