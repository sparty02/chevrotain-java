"use strict";
const Parser = require("../src/index");

describe("formalParameter", () => {
  it("simple", () => {
    expect(
      Parser.parse("boolean a", parser => parser.formalParameter())
    ).toEqual({
      type: "FORMAL_PARAMETER",
      modifiers: [],
      typeType: {
        type: "PRIMITIVE_TYPE",
        value: "boolean"
      },
      dotDotDot: false,
      id: {
        type: "VARIABLE_DECLARATOR_ID",
        id: {
          type: "IDENTIFIER",
          value: "a"
        },
        cntSquares: 0
      }
    });
  });

  it("one annotation", () => {
    expect(
      Parser.parse("final boolean a", parser => parser.formalParameter())
    ).toEqual({
      type: "FORMAL_PARAMETER",
      modifiers: [{ type: "MODIFIER", value: "final" }],
      typeType: {
        type: "PRIMITIVE_TYPE",
        value: "boolean"
      },
      dotDotDot: false,
      id: {
        type: "VARIABLE_DECLARATOR_ID",
        id: {
          type: "IDENTIFIER",
          value: "a"
        },
        cntSquares: 0
      }
    });
  });

  it("two annotation", () => {
    expect(
      Parser.parse("@Bean final boolean a", parser => parser.formalParameter())
    ).toEqual({
      type: "FORMAL_PARAMETER",
      modifiers: [
        {
          type: "ANNOTATION",
          name: {
            type: "QUALIFIED_NAME",
            name: [
              {
                type: "IDENTIFIER",
                value: "Bean"
              }
            ]
          },
          hasBraces: false,
          value: undefined
        },
        { type: "MODIFIER", value: "final" }
      ],
      typeType: {
        type: "PRIMITIVE_TYPE",
        value: "boolean"
      },
      dotDotDot: false,
      id: {
        type: "VARIABLE_DECLARATOR_ID",
        id: {
          type: "IDENTIFIER",
          value: "a"
        },
        cntSquares: 0
      }
    });
  });

  it("dotDotDot", () => {
    expect(
      Parser.parse("boolean... a", parser => parser.formalParameter())
    ).toEqual({
      type: "FORMAL_PARAMETER",
      modifiers: [],
      typeType: {
        type: "PRIMITIVE_TYPE",
        value: "boolean"
      },
      dotDotDot: true,
      id: {
        type: "VARIABLE_DECLARATOR_ID",
        id: {
          type: "IDENTIFIER",
          value: "a"
        },
        cntSquares: 0
      }
    });
  });
});
