import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '../App';
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });


describe("App rendering", () => {
	test("renders shallowly without crashing", () => {
	  shallow(<App />);
	});

	test('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	  ReactDOM.unmountComponentAtNode(div);

	})

});
describe("App helper functions", () => {
	test.todo("getAppRoutes")
	test.todo("ComponentWithRegex")
})
