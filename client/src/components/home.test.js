import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import enzyme from "enzyme";
import Home from './Home';


enzyme.configure({adapter: new Adapter()});

describe('<Home />',() => {

  describe('Estructure', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Home />);
    })
    it('Renderiza un <Link>', () => {
      expect(wrapper.find('Link')).toHaveLength(1)
    })

    it('Renderiza una imagen', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find('div')).toHaveLength(1)
    })
    it('Renderiza una imagen', () => {
        // El orden en el que se encuentran los Labels es importante.
        expect(wrapper.find('h1')).toHaveLength(1)
      })
})
});