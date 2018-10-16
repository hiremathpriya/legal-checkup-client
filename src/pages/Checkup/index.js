import React, { Fragment } from 'react'

import AnswerBar from '@containers/AnswerBar'
import Layout from '@containers/Layout'
import MobileProgressBar from '@containers/MobileProgressBar'
import DesktopProgressBar from '@containers/DesktopProgressBar'
import QuestionBox from '@containers/QuestionBox'
import QuestionCounter from '@containers/QuestionCounter'
import QuestionExampleText from '@containers/QuestionExampleText'
import { Desktop, Tablet, Mobile, Default } from '@responsive'

export default function Checkup () {
  return (
    <Fragment>
      <Desktop>
        <Layout>
          <DesktopProgressBar />
          <QuestionCounter />
          <QuestionBox />
          <QuestionExampleText />
          <AnswerBar />
        </Layout>
      </Desktop>

      <Tablet>
        <Layout>
          <MobileProgressBar />
          <QuestionCounter />
          <QuestionBox />
          <QuestionExampleText />
          <AnswerBar />
        </Layout>
      </Tablet>

      <Mobile>
        <Layout mobile>
          <MobileProgressBar />
          <QuestionCounter />
          <QuestionBox />
          <QuestionExampleText />
          <AnswerBar />
        </Layout>
      </Mobile>

      <Default>
        <Layout>
          <MobileProgressBar />
          <QuestionCounter />
          <QuestionBox />
          <QuestionExampleText />
          <AnswerBar />
        </Layout>
      </Default>
    </Fragment>
  )
}
