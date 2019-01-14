import React, { Component, Fragment } from 'react'

import Header from './Header'
import QuestionsDetails from '@/components/Questions/QuestionsDetails'


class Home extends Component {
  render () {
    const { classes } = this.props
    return (
      <Fragment>
        <Header />
        <QuestionsDetails />
      </Fragment>
    )
  }
}

export default Home
