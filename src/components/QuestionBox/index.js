import React from 'react'

import Question from '../../containers/Question'
import QuestionCounter from '../../containers/QuestionCounter'

export default function QuestionBox () {
  return (
    <div>
      <QuestionCounter />
      <Question />
    </div>
  )
}
