/* Packages */
import React from 'react';
import {connect} from 'react-redux';


/* Actions */
import {page_ID__Set} from '../../redux/actions/page';


/* Components */
import CourseSection from '../sections/CourseSection';


/* Data */
import ApplicationsCourses from '../../data/standard-sections/ApplicationsCourses';
import CSBasicsCourses from '../../data/standard-sections/CSBasicsCourses';
import MathCourses from '../../data/standard-sections/MathCourses';
import ProgrammingCourses from '../../data/standard-sections/ProgrammingCourses';
import SystemsCourses from '../../data/standard-sections/SystemsCourses';
import TheoryCourses from '../../data/standard-sections/TheoryCourses';
import UnixCourses from '../../data/standard-sections/UnixCourses';


/* Component */
export class StandardDegree extends React.Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        this.page_ID__Set('StandardDegree');
    }


    page_ID__Set = (id) => {
        this.props.page_ID__Set(id);
    }


    render() {
        return (
            <div id="StandardDegree" className="StandardDegree">
                <header className="StandardDegree__header">
                    <h1>
                        Standard Degree program
                    </h1>
                </header>

                <CourseSection 
                    name="CS Basics"
                    courses={CSBasicsCourses}
                />

                <CourseSection 
                    name="Programming"
                    courses={ProgrammingCourses}
                />

                <CourseSection 
                    name="Math"
                    courses={MathCourses}
                />

                <CourseSection 
                    name="Systems"
                    courses={SystemsCourses}
                />

                <CourseSection 
                    name="Theory"
                    courses={TheoryCourses}
                />

                <CourseSection 
                    name="Applications"
                    courses={ApplicationsCourses}
                />

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


export default connect(undefined, mapDispatchToProps)(StandardDegree);
