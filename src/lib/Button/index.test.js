import React from 'react';
import { Button } from './index';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('should render Button Compoennt', () => {
    const component = shallow(<Button />);
    console.log(component.debug());
    expect(component).toBeTruthy();
  });
});
