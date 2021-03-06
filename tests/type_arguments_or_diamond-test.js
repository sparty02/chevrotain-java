"use strict";
const Parser = require("../src/index");

describe("typeArgumentsOrDiamond", () => {
  it("typeArguments", () => {
    expect(
      Parser.parse("<boolean>", parser => parser.typeArgumentsOrDiamond())
    ).toEqual({
      type: "TYPE_ARGUMENTS",
      arguments: [
        {
          type: "TYPE_ARGUMENT",
          argument: {
            type: "PRIMITIVE_TYPE",
            value: "boolean"
          },
          super: undefined,
          extends: undefined
        }
      ]
    });
  });

  it("emptyDiamond", () => {
    expect(
      Parser.parse("<>", parser => parser.typeArgumentsOrDiamond())
    ).toEqual({
      type: "EMPTY_DIAMOND"
    });
  });
});
