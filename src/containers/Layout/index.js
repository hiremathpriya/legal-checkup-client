import React, { Fragment } from 'react'

import Footer from '@components/Footer'
import Header from '../Header'
import { Helmet } from 'react-helmet'
import StyledLayout from '@components/styled/Layout'

export default function Layout ({ children, ...props }) {
  return (
    <Fragment>
      <Helmet>
        <title>Legal Checkup</title>
      </Helmet>
      <Header />
      <StyledLayout {...props}>{children}</StyledLayout>
      <Footer />
    </Fragment>
  )
}
