import React, { Component } from 'react';
import { connect } from 'react-redux';


class AnsweredQuestion extends Component {

   

    render(){
        let { authedUser, user, question, optionOnePercentage, optionTwoPercentage } = this.props;
        let optionOneBar = {
            width: optionOnePercentage+'%',
            height: '30px',
            backgroundColor: '#4CAF50',
            textAlign: 'center',
            lineHeight: '30px',
            color: 'white',
        };

        let optionTwoBar = {
            width: optionTwoPercentage+'%',
            height: '30px',
            backgroundColor: '#4CAF50',
            textAlign: 'center',
            lineHeight: '30px',
            color: 'white',
        };

        return(
            <div>
                <div className='container center'> 
                    <h3> {user.name} Asks:</h3>
                    <div className="question">
                        <div className='avatar'>
                            <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar' />
                        </div>
                        <div>
                            <div class='question-result'>
                                <div className='container'>  
                                    { question.optionOne.votes.includes(authedUser) &&
                                        <span> YOU VOTED THIS </span>
                                    }
                                </div>
                                <h4>Would you Rather</h4>   
                                <p>{question.optionOne.text}</p>
                                <div id="myProgress" >
                                    <div style={optionOneBar}>{optionOnePercentage}%</div>
                                </div>
                            </div>
                            <div class='question-result'>
                                <div className='container'>  
                                    {   
                                        question.optionTwo.votes.includes(authedUser) &&
                                        <span> YOU VOTED THIS </span>
                                    }
                                </div>
                                <h4>Would you Rather</h4>
                                <p>{question.optionTwo.text}</p>
                                <div id="myProgress">
                                    <div style={optionTwoBar}>{optionTwoPercentage}%</div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps({users, questions, authedUser}, props) {
    const { id } = props.match.params;
    let questionsArray = Object.keys(questions).map( key => questions[key])
    let usersArray= Object.keys(users).map( key => users[key])
    let question  = questionsArray.find( question => question.id === id)
    let usersTotal = usersArray.length;
    let optionOnePercentage = Math.round((question.optionOne.votes.length / usersTotal) * 100)
    let optionTwoPercentage = Math.round((question.optionTwo.votes.length / usersTotal) * 100)

    return {
        authedUser,
        user: question && usersArray.find((user) => user.id === question.author),
        question,
        optionOnePercentage,
        optionTwoPercentage,
        usersTotal, 
    }
}

export default connect(mapStateToProps)(AnsweredQuestion);