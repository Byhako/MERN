import React, { Component, Fragment }  from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Signin from '@/components/Auth/Signin'
import Signup from '@/components/Auth/Signup'
import QuestionsDetails from '@/components/Questions/QuestionsDetails'
import QuestionList from '@/components/Questions/QuestionList'
import QuestionForm from '@/components/Questions/QuestionForm'

class AppRouter extends Component {

  render () {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path='/' component={QuestionList} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/questionsDetails' component={QuestionsDetails} />
            <Route exact path='/questionForm' component={QuestionForm} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default AppRouter
