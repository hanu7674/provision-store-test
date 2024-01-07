import { createBrowserHistory } from '@remix-run/router';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import TopButton from '../components/TopButton/TopButton';
import RouterComponent from '../components/RouterComponent';
// import { withAuthentication, withAuthorization } from '../Session'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundery';
import withAuthentication from '../session/withAuthentication';

const Main = () => {
    const browserHistory = createBrowserHistory();
    return (
        <React.Fragment>
            <Router history={browserHistory}>
                <div style={{minHeight: '100vh'}}>
                        <React.StrictMode>
                            <ErrorBoundary>
                                <RouterComponent />
                            </ErrorBoundary>
                        </React.StrictMode>
                </div>
            </Router>
            <TopButton />
        </React.Fragment>
    )
}

export default Main;