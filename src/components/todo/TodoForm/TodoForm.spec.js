import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
    describe('Tags', () => {
        const wrapper = shallow(<TodoForm />);

        it('should have `input` with type `text` tag when mount', () => {
            expect(wrapper.find('input[type="text"]')).to.have.length(1);
        });

        it('should have two buttons with classes `create`', () => {
            expect(wrapper.find('button.create')).to.have.length(1);
        });
    });

    describe('Functions', () => {
        // Tests
    });
});
