import React, { Component, Fragment } from 'react'

import Header from './Header'
import QuestionsDetails from '@/components/Questions/QuestionsDetails'
import Signin from '@/components/Auth/Signin'
import Signup from '@/components/Auth/Signup'
import QuestionList from '@/components/Questions/QuestionList'

class Home extends Component {
  render () {
    const { classes } = this.props
    return (
      <Fragment>
        <Header />
        {/*<QuestionsDetails />*/}
        {/*<Signin />*/}
        {/*<Signup />*/}
        <QuestionList />
      </Fragment>
    )
  }
}

export default Home
