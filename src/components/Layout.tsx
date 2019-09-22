import * as React from 'react'

import GlobalStyle from 'styles/global'
import Header from 'components/Header'
import Footer from 'components/Footer'

type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <GlobalStyle />
    <Header
      title={title}
      navigationItems={[
        {
          title: 'about',
          link: '/about',
        },
      ]}
    />
    {children}
    <Footer />
  </div>
)

export default Layout
