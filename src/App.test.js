import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { MemoryRouter } from "react-router-dom";


it('renders without crashing', () => {
  shallow(<App />);
});


it("Snapshot testing", () => {
  const AppTest = shallow(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(AppTest).toMatchInlineSnapshot(`ShallowWrapper {}`);
});