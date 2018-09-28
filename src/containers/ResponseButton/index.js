import { NO, YES } from '@state/constants'
import {
  userRespondedWithNo,
  userRespondedWithNotSure,
  userRespondedWithYes
} from '@state/actions'

import { getCurrentResponseAnswer } from '@state/selectors'

import StyledResponseButton from '@components/styled/ResponseButton'
import { connect } from 'react-redux'

function getAction (type) {
  switch (type) {
    case NO:
      return userRespondedWithNo()
    case YES:
      return userRespondedWithYes()
    default:
      return userRespondedWithNotSure()
  }
}

function mapStateToProps (state, { type }) {
  getCurrentResponseAnswer(state).length > 0
    ? console.log(getCurrentResponseAnswer(state))
    : console.log('No responses')

  return {
    alreadyAnswered: undefined
  }
}

function mapDispatchToProps (dispatch, { type }) {
  return {
    onClick: () => dispatch(getAction(type))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledResponseButton)
