import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function reveiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    };
}

export function handleAddQuestion (optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const {authedUser } = getState()

        dispatch(showLoading());

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()));
    };
}

function answerQuestion(questions) {
    return {
        type: ANSWER_QUESTION,
        questions
    };
}

export function handleAnswerQuestion(qid, answer) {

    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
        .then((questions) => {
            dispatch( answerQuestion(questions))
        })
        
            
        .then(() => dispatch(hideLoading()));
    };
}