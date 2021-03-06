"use strict";
const Parser = require("../src/index");

describe("methodCall", () => {
  it("empty parameters", () => {
    expect(Parser.parse("a()", parser => parser.methodCall())).toEqual({
      type: "METHOD_CALL",
      name: {
        type: "IDENTIFIER",
        value: "a"
      },
      parameters: undefined
    });
  });

  it("with parameters", () => {
    expect(Parser.parse("a(this)", parser => parser.methodCall())).toEqual({
      type: "METHOD_CALL",
      name: {
        type: "IDENTIFIER",
        value: "a"
      },
      parameters: {
        type: "EXPRESSION_LIST",
        list: [
          {
            type: "THIS"
          }
        ]
      }
    });
  });
});
