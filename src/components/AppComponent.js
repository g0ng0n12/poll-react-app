import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavComponent from '.NavComponent';

class AppComponent extends Component {


    render() {
        return(
            <Router>
                <Fragment>
                    <div className='container'>
                        <NavComponent />
                        <div>
                            {/* To-Do Add Routes */}
                        </div>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps(){

}

export default connect(mapStateToProps)(AppComponent)