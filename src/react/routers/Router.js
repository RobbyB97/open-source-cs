/* Packages */
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


/* Components */
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';


/* Pages/Routes */
import Home from '../components/pages/Home';
import StandardDegree from '../components/pages/StandardDegree';
import PythonDegree from '../components/pages/PythonDegree';
import Wildcard from '../components/pages/Wildcard';


/* Router */
export class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            loading: false
        };
    };


    componentWillMount() {
        const $pageLoader = document.querySelector('.page-loader');

        // Disable loader
        if ($pageLoader) {
            $pageLoader.setAttribute('data-loading', true);
            this.setState({
                loading: true
            });
        };

        // Fade in React app
        setTimeout(() => {
            $pageLoader.setAttribute('data-loaded', true);
            this.setState({
                loaded: true
            });
        }, 300);
    };


    render() {
        return (
            <BrowserRouter>
                <div 
                    id="Router"
                    data-page_ID={this.props.page_ID}
                    data-loading={this.state.loading}
                    data-loaded={this.state.loaded}
                >
                    <Header />

                    <Switch>
                        <Route 
                            path="/"
                            component={Home}
                            exact
                        />

                        <Route 
                            path="/standard-degree"
                            component={StandardDegree}
                            exact
                        />

                        <Route 
                            path="/python-degree"
                            component={PythonDegree}
                            exact
                        />

                        <Route 
                            path="/*"
                            component={Wildcard}
                        />
                    </Switch>

                    <Footer />
                </div>
            </BrowserRouter>
        );
    };
};


/* Connect to store */
const mapStateToProps = (state) => {
    return {
        page_ID: state.page.id
    };
};


export default connect(mapStateToProps, undefined)(Router);