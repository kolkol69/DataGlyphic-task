export interface ILoginPayload {
  email: string
  password: string
}

export interface ILoginResponse {
  firstName: string
  lastName: string
  email: string
  userId: string
  sessionId: string
}

export interface ITenantResponse {
  tenantId: string
  name: string
  parentId: string
}

export type ITenantsResponse = ITenantResponse[]
