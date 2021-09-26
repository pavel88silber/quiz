import React, {Component} from 'react'
import classes  from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

    state = {
        activeQuestion: 1,
        quiz: [
            {
                question: 'Какого цвета твои глаза?', 
                rightAnswerId: 2,
                id:1,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Голубые', id: 2},
                    {text: 'Карие', id: 3},
                    {text: 'Зеленые', id: 4}
                ]
            },
            {
                question: 'Какого цвета твои волосы?', 
                rightAnswerId: 3,
                id:2,
                answers: [
                    {text: 'Рыжие', id: 1},
                    {text: 'Брюнет', id: 2},
                    {text: 'Блонд', id: 3},
                    {text: 'Руссые', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id: ', answerId);

        const question = this.state.quiz[this.state.activeQuestion]

        if(question.rightAnswerId === answerId) {
            
            const timeout = window.setTimeout(() => {

            if(this.isQuizFinished()) {
                console.log('Quiz finished!')
            }
            
            window.clearTimeout(timeout)
            }, 1000)
            
            this.setState({
                activeQuestion: this.state.activeQuestion + 1
            })
        } else {

        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.quiz.length
    }

    render() {
        return (
            <div className={classes.Quiz}>
                    <div className={classes.QuizWrapper}>
                        <h1>{this.props.question}</h1>

                        <ActiveQuiz 
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion  + 1}
                        />
                    </div>
            </div>
        )
    }
}

export default Quiz