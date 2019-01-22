import React, { Component, Fragment } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '@/actions'
import '@/styles/questionList.styl'

class QuestionList extends Component {

  state = {
    questionSelected: false
  }

  selectQuestion = (e) => {
    const idQuestion = e.target.dataset.id
    const index = e.target.dataset.index

    this.props.dispatch(actions.getAnswers(idQuestion, index))
    this.setState({questionSelected: true})
  }

  render () {
    return (
      <Fragment>
        {!this.state.questionSelected ? (
          <Fragment>
          <ul className="list-group">
            {this.props.questionList.map((question, i) => {
              {this.props.answerList[question.idQuestion] ? (
                this.number = this.props.answerList[question.idQuestion].length
              ) : (
                this.number = 0
              )}
              return (
                <li
                  onClick={this.selectQuestion}
                  className="list-group-item row"
                  key={i}
                  data-id={question.idQuestion}
                  data-index={i}
                >
                  <div className="col-2 col-list">
                    {question.icon ? (
                      <i 
                        data-id={question.idQuestion}
                        data-index={i}
                        className={question.icon}
                        style={{fontSize: '42px'}}
                      />
                    ) : (
                      <i
                        data-id={question.idQuestion}
                        data-index={i}
                        className="fas fa-question-circle"
                        style={{fontSize: '42px'}} 
                      />
                    )}
                  </div>
                  <div 
                    data-id={question.idQuestion}
                    data-index={i}
                    className="col-10 offset-2 col-list"
                  >
                    <h4 data-id={question.idQuestion} data-index={i}>{question.title}</h4>
                    <p data-id={question.idQuestion} data-index={i}>
                      <small data-id={question.idQuestion} data-index={i}>
                        {this.number} respuestas. - {question.createAt}
                      </small>
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
            
            <Link to='/questionForm' className='link-btn'>
              <button type="button" className="btn btn-danger btn-add">+</button>
            </Link>
          </Fragment>
        ) : (
          <Redirect to='/questionsDetails' />
        )}
      </Fragment>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    questionList: state.questionList,
    answerList: state.answerList
  }
}

export default connect(mapStateToProps)(QuestionList)