import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavComponent from './NavComponent';
import HomeComponent from './HomeComponent';
import AnsweredQuestion from './AnsweredQuestion';
import UnAnsweredQuestion from './UnAnsweredQuestion';
import CreateQuestionComponent from './CreateQuestionComponent';
import { handleInitialData } from '../actions/shared';

class AppComponent extends Component {


    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return(
            <Router>
                <Fragment>
                    <div className='container'>
                        <NavComponent />
                        <div>
                            {/* To-Do Add Routes */}
                            <Route exact path="/" component={HomeComponent} />
                            <Route exact path="/question/:id/submit" component={UnAnsweredQuestion}/>
                            <Route exact path="/question/:id" component={AnsweredQuestion}/>
                            <Route exact path="/new" component={CreateQuestionComponent} />
                        </div>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({authedUser}){
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(AppComponent)