/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {StandardDegree} from '../../../../react/components/pages/StandardDegree';


/* Test Config */
let component, page_ID__Set;
beforeEach(() => {
    page_ID__Set = jest.fn();
    component = shallow(
        <StandardDegree
            page_ID__Set={page_ID__Set}
        />
    );
});


/* Tests */
test('Render StandardDegree page', () => {
    expect(component).toMatchSnapshot();
});


test('Page_ID__Set function', () => {
    setTimeout(() => {
        expect(page_ID__Set).toHaveBeenCalled();
    }, 500);
});

