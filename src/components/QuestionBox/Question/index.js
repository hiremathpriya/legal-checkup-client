import React from 'react'
import { StyledQuestion } from '../../styled'

import { handleFalsy } from '../../../utilities'

export default function Question ({ questions, activeQuestion }) {
  const { body } = questions[activeQuestion]

  return handleFalsy(body, <StyledQuestion>{body}</StyledQuestion>)
}
