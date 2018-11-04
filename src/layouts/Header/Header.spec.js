import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
    describe('Tags', () => {
        const wrapper = shallow(<Header />);

        it('should have `nav` tag when mount', () => {
            expect(wrapper.find('nav')).to.have.length(1);
        });

        it('should have two links', () => {
            expect(wrapper.find('ul li')).to.have.length(2);
        });
    });

    describe('Functions', () => {
        const wrapper = shallow(<Header />);
        const instance = wrapper.instance();

        it('should exists a method `getItemSelected`', () => {
            expect(typeof instance.getItemSelected).equals('function');
        });

        it('should return class `selected` when actual page is equal to `path.location`', () => {
            expect(instance.getItemSelected('/')).equals('selected');
        });
    });
});
