/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {PythonDegree} from '../../../../react/components/pages/PythonDegree';


/* Test Config */
let component, page_ID__Set;
beforeEach(() => {
    page_ID__Set = jest.fn();
    component = shallow(
        <PythonDegree
            page_ID__Set={page_ID__Set}
        />
    );
});


/* Tests */
test('Render PythonDegree page', () => {
    expect(component).toMatchSnapshot();
});


test('Page_ID__Set function', () => {
    setTimeout(() => {
        expect(page_ID__Set).toHaveBeenCalled();
    }, 500);
});

