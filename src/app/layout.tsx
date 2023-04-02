"use client"
import HeadMenu from '@/components/HeadMenu'
import GlobalStyle from '@/styles/GlobalStyles'
import { Layout } from 'antd'
import StyledJsxRegistry from './registry'

const { Content } = Layout

const RootLayout = ({children}: {children: React.ReactNode}) => {

  return (
    <>
      <GlobalStyle/>
      <html lang={'en'}>
        <body>
          <StyledJsxRegistry>
            <Layout>
              <HeadMenu/>
              <Content>
                {children}
              </Content>
            </Layout>
          </StyledJsxRegistry>
        </body>
      </html>
    </>
  )
}

export default RootLayout