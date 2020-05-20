import React from 'react';
import { shallow } from 'enzyme';
import TopCover from '../TopCover';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  shallow(<TopCover />);
});

it("Snapshot testing", () => {
    const CoverTest = shallow(
      <MemoryRouter>
        <TopCover />
      </MemoryRouter>
    );
    expect(CoverTest).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });