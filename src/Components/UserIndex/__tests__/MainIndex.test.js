import React from "react";
import { shallow } from "enzyme";
import MainIndex from "../MainIndex";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  shallow(<MainIndex />);
});

it("Snapshot testing", () => {
  const IndexTest = shallow(
    <MemoryRouter>
      <MainIndex />
    </MemoryRouter>
  );
  expect(IndexTest).toMatchInlineSnapshot(`ShallowWrapper {}`);
});
