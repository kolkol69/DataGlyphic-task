import { useNavigate } from 'react-router-dom'

import { useGetTenants } from 'src/api/hooks'
import { LoadingSpinner } from 'src/components'

import { List, ListItem } from './Home.styled'

const Home = () => {
  const { tenants, isLoading } = useGetTenants()
  const navigate = useNavigate()

  const openTenantChart = (tenantId: string, tenantName: string) => {
    navigate(`/tenant/${tenantId}`, {
      state: { tenantName },
    })
  }

  return (
    <div>
      <h1>Home</h1>
      <h3>List of tenants</h3>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <List>
          {tenants?.map((tenant) => (
            <ListItem
              key={tenant.tenantId}
              onClick={() => openTenantChart(tenant.tenantId, tenant.name)}
            >
              {tenant.name}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  )
}
export default Home
