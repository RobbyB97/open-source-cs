/* Packages */
import React from 'react';
import Course from '../Course';


/* Component */
export class CourseSection extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            /* id = name prop without spaces */
            <article id={this.props.name.replace(/\s/g, "")} className="CourseSection">
                <header className="CourseSection__header">
                    <h2>{this.props.name}</h2>
                </header>

                <section className="CourseSection__courses">
                    {this.props.courses &&
                        this.props.courses.map((course) => (
                            <Course key={course.name.text} {...course} />
                        ))
                    }
                </section>
            </article>
        );
    }
}


export default CourseSection;