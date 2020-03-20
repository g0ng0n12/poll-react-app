import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion} from "../actions/questions";
import { Redirect } from 'react-router-dom';


class UnAnsweredQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            toAnswer: false,
        };
    
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleOptionChange(event) {
        this.setState({selectedOption: event.target.value});
    }
    
    handleFormSubmit(event) {
        event.preventDefault();
        const { selectedOption  } = this.state;
        const { dispatch, question } = this.props;
        
        dispatch(handleAnswerQuestion(question.id, selectedOption));
        console.log(this.props)
        this.setState(() => ({
            selectedOption,
            toAnswer: true,
        }));
    }

    render(){
        let { userFound, question } = this.props;

        if (this.state.toAnswer === true){
            let url = `/question/${question.id}`;
            return <Redirect to={url} />
        }
        return(
            <div>
                { userFound  &&
                    <div className='container center'> 
                        <h3> {userFound.name} Asks:</h3>
                        <div className="question">
                            <div className='avatar'>
                                <img src={userFound.avatarURL} alt={`Avatar of ${userFound.name}`} className='avatar' />
                            </div>
                            <form onSubmit={this.handleFormSubmit}>
                                <div className='question-details'>
                                    <h4>Would you Rather</h4>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" value='optionOne'
                                                checked={this.state.selectedOption === 'optionOne'} 
                                                onChange={this.handleOptionChange} />
                                                {question.optionOne.text}
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" value='optionTwo'
                                                checked={this.state.selectedOption === 'optionTwo'}
                                                onChange={this.handleOptionChange} />
                                                {question.optionTwo.text}
                                        </label>
                                    </div>
                                    <button className='btn' type='submit'>
                                            Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
            }
            </div>           
        )
    }

}

function mapStateToProps({users, questions, authedUser}, props) {

    const { id } = props.match.params;
    let questionsArray = Object.keys(questions).map( key => questions[key])
    let usersArray= Object.keys(users).map( key => users[key])
    let question  = questionsArray.find( question => question.id === id)
    let userFound = usersArray.find((user) => user.id === authedUser);

  
    return {
        userFound,
        question
    }
}

export default connect(mapStateToProps)(UnAnsweredQuestion);