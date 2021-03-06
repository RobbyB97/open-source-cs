/* Packages */
import React from 'react';
import {connect} from 'react-redux';


/* Actions */
import {page_ID__Set} from '../../redux/actions/page';


/* Components */
import CourseSection from '../sections/CourseSection';


/* Data */
import UnixCourses from '../../data/UnixCourses';


/* Component */
export class Unix extends React.Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        this.page_ID__Set('Unix');
    }


    page_ID__Set = (id) => {
        this.props.page_ID__Set(id);
    }


    render() {
        return (
            <div id="Unix" className="page">
                <CourseSection 
                    name="Unix"
                    courses={UnixCourses}
                />
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


export default connect(undefined, mapDispatchToProps)(Unix);