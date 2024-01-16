console.log("Thank you for using convert.js by NiqueWrld");

//1. JSON to Object Conversion: Converting JSON (JavaScript Object Notation) data to a JavaScript object.

class jsonToObject {
  constructor() {}
  convertToObject(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error("Error parsing JSON: ", error);
      return null;
    }
  }
}
