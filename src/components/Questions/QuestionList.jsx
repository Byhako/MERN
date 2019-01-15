import React, { Component } from 'react'
import { connect } from 'react-redux'
import '@/styles/questionList.styl'

class QuestionList extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render () {
    return (
      <ul className="list-group">
        {this.props.questionList.map((question, i) => {
          {this.props.answerList[question.idQuestion] ? (
            this.number = this.props.answerList[question.idQuestion].length
          ) : (
            this.number = 0
          )}
          return (
            <li className="list-group-item row" key={i}>
              <div className="col-2 col-list">
                {question.icon ? (
                  <i className={question.icon} style={{fontSize: '42px'}} />
                ) : (
                  <i className="fas fa-question-circle" style={{fontSize: '42px'}} />
                )}
              </div>
              <div className="col-10 offset-2 col-list">
                <h4>{question.title}</h4>
                <p>
                  <small>{this.number} respuestas. - {question.createAt}</small>
                </p>
              </div>
            </li>
          )
        })}
      </ul>
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
