import styled from 'styled-components'

const CurrentTopic = styled.div`
  background-color: #ededed;
  color: #000000;
  font-weight: bold;
  height: 42px;
  line-height: 42px;
  margin: 0 1px;
  padding: 0 10px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: auto;
`

CurrentTopic.displayName = 'StyledCurrentTopic'

export default CurrentTopic
