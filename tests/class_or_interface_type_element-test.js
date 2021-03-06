"use strict";
const Parser = require("../src/index");

describe("classOrInterfaceTypeElement", () => {
  it("identifier", () => {
    expect(
      Parser.parse("A", parser => parser.classOrInterfaceTypeElement())
    ).toEqual({
      type: "IDENTIFIER",
      value: "A"
    });
  });

  it("typeArguments", () => {
    expect(
      Parser.parse("A<boolean>", parser => parser.classOrInterfaceTypeElement())
    ).toEqual({
      type: "CLASS_OR_INTERFACE_TYPE_ELEMENT",
      name: {
        type: "IDENTIFIER",
        value: "A"
      },
      typeArguments: {
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
      }
    });
  });
});
