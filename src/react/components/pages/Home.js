/* Packages */
import React from 'react';
import {connect} from 'react-redux';


/* Actions */
import {page_ID__Set} from '../../redux/actions/page';


/* Components */
import Description from '../sections/Description';


/* Component */
export class Home extends React.Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        this.page_ID__Set('Home');
    }


    page_ID__Set = (id) => {
        this.props.page_ID__Set(id);
    }


    render() {
        return (
            <div id="Home" className="Home">
                <header className="Home__header">
                    <h1 className="Home__title">
                        The Open Source Computer Science degree
                    </h1>
                </header>
                <Description />
            </div>
        );
    }
}


/* Connect to store */
const mapDispatchToProps = (dispatch) => ({
    page_ID__Set: (id) => {
        dispatch(page_ID__Set(id));
    }
});


export default connect(undefined, mapDispatchToProps)(Home);