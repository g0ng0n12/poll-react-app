import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from "../actions/questions";


class CreateQuestionComponent extends Component {

    constructor() {
        super();
        this.state = {
            optionOne: '',
            optionTwo: '',
            toHome: false,
        };
    }

    handleChangeOptionOne = (e) => {
        let optionOne = e.target.value

        this.setState(() => ({
            optionOne
        }))
    };

    handleChangeOptionTwo = (e) => {
        const optionTwo = e.target.value

        this.setState(() => ({
            optionTwo
        }))
    };

    handleSubmit = (e )=> {
        e.preventDefault()

        const { optionOne, optionTwo  } = this.state;
        const { dispatch, id } = this.props;

        dispatch(handleAddQuestion(optionOne, optionTwo));

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: id ? false: true,
        }))
    };

    render(){
        const { optionOne, optionTwo, toHome} = this.state;

        if (toHome === true){
            return <Redirect to='/' />
        }

        return(
            <div className='container center'>
                <div className='title-new-question'>
                    <h2> Create New Question</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className='details-new-question'>
                        <h3> Complete the Question</h3>
                        <div className='would-you-rather-new-q'>
                            <h3>Would you Rather ...</h3>
                            <input value={this.state.optionOne} type="text" name="optionOne" onChange={this.handleChangeOptionOne} />
                            <h3>Or</h3>
                            <input value={this.state.optionTwo} type="text" name="optionTwo" onChange={this.handleChangeOptionTwo} />
                        </div>
                    </div>
                    <button className='btn' type='submit'
                    disabled={optionOne ==='' || optionTwo === ''}>
                        Submit
                    </button>
                </form>                
            </div>
        );
    }

}

export default connect()(CreateQuestionComponent);