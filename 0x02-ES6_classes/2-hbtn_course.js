export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }
  set name(studentName) {
    if (typeof studentName !== "string") {
      throw new Error("Name must be a string");
    }
    this._name = studentName;
  }
  get length() {
    return this._length;
  }
  set length(studentLength) {
    if (typeof studentLength !== "number" || studentLength <= 0) {
      throw new Error("Length must be a number");
    }

    this._length = studentLength;
  }
  get students() {
    return this._students;
  }
  set students(studentArray) {
    if (!Array.isArray(studentArray)) {
      throw new Error("Students must be a array");
    }
    this._students = studentArray;
  }
}
