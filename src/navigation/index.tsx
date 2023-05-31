import { Route, Routes } from 'react-router-dom'

import { LoginLayout, ProtectedLayout } from 'src/components'
import { HomePage, LoginPage, TenantPage } from 'src/views'

const AppRouting = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginLayout />}
      >
        <Route
          index
          element={<LoginPage />}
        />
      </Route>
      <Route
        path="/"
        element={<ProtectedLayout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="tenant/:tenantId"
          element={<TenantPage />}
        />
      </Route>
      {/* Fallback route */}
      <Route
        path="*"
        element={<div>404: The route doesn&apos;t exists</div>}
      />
    </Routes>
  )
}

export default AppRouting
