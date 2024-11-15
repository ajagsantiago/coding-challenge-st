import jsonSchema  from './schema.json';
import jsonUiSchema from './uischema.json';

export const schema = jsonSchema;
export const uischema = jsonUiSchema;

//  export const schema = {
//     properties: {
//       forename: {
//         type: "string"
//       },
//       surname: {
//         type: "string",
//       },
//       birthDate: {
//         "type": "string",
//         "format": "date"
//       },
//       emailAddress: {
//         "type": "object",
//         "properties": {
//           "oneOfEnum": {
//             "type": "string",
//             "title": "Email Address",
//             "oneOf": [
//               {
//                 "const": "rey@ypmail.com",
//                 "title": "Rey Monrey"
//               },
//               {
//                 "const": "glenl@ypmail.com",
//                 "title": "Glen Josh"
//               },
//             ]
//           }
//         },
//       },
//     },
//     required: ["forename", "surname", "birthDate"]
//   };

  // export const uischema = {
  //   type: "VerticalLayout",
  //   elements: [
  //     {
  //       type: "Group",
  //       elements: [
  //         {
  //           type: "Control",
  //           scope: "#/properties/forename",
  //           label: "Forename(s)",
  //           placeholder: "John Smith"
  //         },
  //         {
  //           type: "Control",
  //           scope: "#/properties/surname",
  //           label: "Surname"
  //         },
  //         {
  //           type: "Control",
  //           scope: "#/properties/birthDate",
  //           label: "Date of Birth"
  //         },
  //         {
  //           type: "Control",
  //           scope: "#/properties/emailAddress/properties/oneOfEnum",
  //           title: "Email Address",
  //           "ui:widget": "kendo-textbox",
  //           "ui:options": {
  //             "label": "Email Address",
  //             "className": "no-floating-label"
  //           },
  //           rule: {
  //             "effect": "DISABLE",
  //             "condition": {
  //               "scope": "#/properties/birthDate",
  //               "schema": {  const: "" }
  //             }
  //           },

  //         },
  //       ],
  //     },
  //     {
  //       type: "VerticalLayout",
  //       elements: [
  //         {
  //           type: "Control",
  //           scope: "#/properties/birthDate",
  //           label: "Date of Birth"
  //         },
  //         {
  //           type: "Control",
  //           scope: "#/properties/emailAddress/properties/oneOfEnum",
  //           title: "Email Address",
  //           "ui:widget": "kendo-textbox",
  //           "ui:options": {
  //             "label": "Email Address",
  //             "className": "no-floating-label"
  //           },
  //           rule: {
  //             "effect": "DISABLE",
  //             "condition": {
  //               "scope": "#/properties/birthDate",
  //               "schema": {  const: "" }
  //             }
  //           },

  //         },
  //       ],
  //     },
  //   ],
  // };
