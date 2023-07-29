import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'

export const PageLayout = () => {
  return (
    <PageLayoutContainer>
      <Outlet />
    </PageLayoutContainer>
  )
}

const PageLayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 768px;
`
