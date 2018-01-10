/* @flow */

import reducer from "apps/main/reducers/todos";

describe("apps/main/reducers/todos", () => {
  it("returns the initial state", () => {
    const state = {};
    expect(
      reducer({}, {
        type: "_TEST_ACTION"
      })
    ).toEqual(state);
  });
});
