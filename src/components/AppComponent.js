import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import NavComponent from './NavComponent';
import HomeComponent from './HomeComponent';

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