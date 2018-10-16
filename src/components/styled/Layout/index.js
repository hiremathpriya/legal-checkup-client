import styled from 'styled-components'

const Layout = styled.section`
  padding: 0 ${props => (props.mobile ? '30px' : '15px')};
`
Layout.displayName = 'StyledLayout'

export default Layout
