import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { create } from "react-test-renderer";
import { configure, shallow } from "enzyme";
import "jest-enzyme";
import "@testing-library/jest-dom/extend-expect";
import Pagination from "../Pagination";

Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() });

describe("Recent Activity Test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Pagination />);
  });


  it("Snapshot testing", () => {
    const PaginationTest = shallow(<Pagination />);
    expect(PaginationTest).toMatchInlineSnapshot(`
      <div
        className="container"
      >
        <div
          className="row"
        >
          <ul
            className="pagination"
          />
        </div>
      </div>
    `);
  });

  describe("Pagination component", () => {
    test("Matches the snapshot", () => {
      const PaginationCheck = create(<Pagination />);
      expect(PaginationCheck.toJSON()).toMatchSnapshot();
    });
  });
});
