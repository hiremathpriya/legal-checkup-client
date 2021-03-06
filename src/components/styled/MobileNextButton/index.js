import styled from 'styled-components'

const MobileNextButton = styled.button`
  background-color: #ededed;
  border: none;
  border-radius: 0 5px 5px 0;
  color: ${({ enabled }) => (enabled ? '#000' : '#c0c0c0')};
  height: 42px;
  outline: none;
  width: 48px;
`
MobileNextButton.displayName = 'StyledMobileNextButton'

export default MobileNextButton
