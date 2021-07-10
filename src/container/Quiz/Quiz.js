import React, {Component} from 'react'
import classes  from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

    state = {
        quiz: [
            {
                question: 'Какого цвета твои глаза?', 
                rightAnswerId: 2,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Голубые', id: 2},
                    {text: 'Карие', id: 3},
                    {text: 'Зеленые', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id: ', answerId);
    }


    render() {
        return (
            <div className={classes.Quiz}>
                    <div className={classes.QuizWrapper}>
                        <h1>{this.props.question}</h1>

                        <ActiveQuiz 
                            answers={this.state.quiz[0].answers}
                            question={this.state.quiz[0].question}
                            onAnswerClick={this.onAnswerClickHandler}
                        />
                    </div>
            </div>
        )
    }
}

export default Quiz