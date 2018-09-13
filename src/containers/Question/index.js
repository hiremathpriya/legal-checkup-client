import { connect } from 'react-redux'

import { Question } from '../../components'
import { getActiveQuestion, getQuestions } from '../../state'

function mapStateToProps (state) {
  return {
    activeQuestion: getActiveQuestion(state),
    questions: getQuestions(state)
  }
}

export default connect(mapStateToProps)(Question)
