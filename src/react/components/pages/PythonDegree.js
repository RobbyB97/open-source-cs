/* Packages */
import React from 'react';
import {connect} from 'react-redux';


/* Actions */
import {page_ID__Set} from '../../redux/actions/page';


/* Components */
import CourseSection from '../sections/CourseSection';


/* Data */
import CSBasicsCourses from '../../data/python-sections/CSBasicsCourses';
import ProgrammingCourses from '../../data/python-sections/ProgrammingCourses';
import ProgrammingAlternateCourses from '../../data/python-sections/ProgrammingAlternateCourses';
import MathCourses from '../../data/python-sections/MathCourses';
import DataScienceCourses from '../../data/python-sections/DataScienceCourses';
import SystemsCourses from '../../data/python-sections/SystemsCourses';
import TheoryCourses from '../../data/python-sections/TheoryCourses';
import ApplicationsCourses from '../../data/python-sections/ApplicationsCourses';
import UnixCourses from '../../data/python-sections/UnixCourses';


/* Component */
export class PythonDegree extends React.Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        this.page_ID__Set('PythonDegree');
    }


    page_ID__Set = (id) => {
        this.props.page_ID__Set(id);
    }


    render() {
        return (
            <div id="PythonDegree" className="PythonDegree">
                <header className="PythonDegree__header">
                    <h1>
                        Python Degree program
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
                    name="Programming (alternative)"
                    courses={ProgrammingAlternateCourses}
                />

                <CourseSection 
                    name="Math"
                    courses={MathCourses}
                />

                <CourseSection 
                    name="Data Science"
                    courses={DataScienceCourses}
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


export default connect(undefined, mapDispatchToProps)(PythonDegree);
