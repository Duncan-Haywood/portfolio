import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("renders shallowly without crashing", () => {
  	shallow(<App />);
});

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
  	ReactDOM.unmountComponentAtNode(div);
});

test.todo('mounts without errors'/* () => {}
	const wrapper = mount(<App />);
  	expect(wrapper.state("error")).toEqual(null);
}*/
)

test.todo("")