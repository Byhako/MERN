import React, { Component, Fragment } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
moment.locale('es')
import actions from '@/actions'
import '@/styles/questionList.styl'

class QuestionList extends Component {
  constructor(props) {
    super(props)
    this.props.dispatch({ type: 'SET_NEWQUESTION', newQuestion: false })
  
    this.state = {
      questionSelected: false
    }
  }

  componentDidMount () {
    this.props.dispatch(actions.getquestions())
  }

  selectQuestion = (e) => {
    const idQuestion = e.target.dataset.id
    const index = e.target.dataset.index
    const list = this.props.questionList
    const user = `${list[index].user.firstName} ${list[index].user.surname}`

    this.props.dispatch({ type: 'SET_INDEXQUESTION', indexQuestion: index })
    this.props.dispatch({ type: 'SET_IDQUESTION', idQuestion })
    this.setState({questionSelected: true})
  }

  render () {
    console.log(this.props.questionLis)
    if (this.props.questionList.length === 0) {
      return (
        <div className="container-spiner"
          style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}
        >
          <div
            className="spinner-border"
            style={{width: "3rem", height: "3rem", color: 'brown'}} 
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
            <Link to='/questionForm' className='link-btn'>
              <button type="button" className="btn btn-danger btn-add">+</button>
            </Link>
        </div>
      )
    } else {
      return (
        <Fragment>
          {!this.state.questionSelected ? (
            <Fragment>
            <ul className="list-group">
              {this.props.questionList.map((question, i) => {
                {this.number = question.answers.length}
                return (
                  <li
                    onClick={this.selectQuestion}
                    className="list-group-item row"
                    key={i}
                    data-id={question._id}
                    data-index={i}
                  >
                    <div className="col-2 col-list">
                      {question.icon ? (
                        <i 
                          data-id={question._id}
                          data-index={i}
                          className={question.icon}
                          style={{fontSize: '42px'}}
                        />
                      ) : (
                        <i
                          data-id={question._id}
                          data-index={i}
                          className="fas fa-question-circle"
                          style={{fontSize: '42px'}} 
                        />
                      )}
                    </div>
                    <div 
                      data-id={question._id}
                      data-index={i}
                      className="col-10 offset-2 col-list"
                    >
                      <h4 data-id={question._id} data-index={i}>{question.title}</h4>
                      <p data-id={question._id} data-index={i}>
                        <small data-id={question._id} data-index={i}>
                          {this.number} respuestas. - {moment(question.createAt, "lll").fromNow()}
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
}

function mapStateToProps (state, props) {
  return {
    questionList: state.questionList
  }
}

export default connect(mapStateToProps)(QuestionList)
