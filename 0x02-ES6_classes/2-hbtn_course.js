export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') {
            throw new Error('Name must be a string')
        }
        if (typeof length !== 'number' || length <= 0) {
            throw new Error('Length must be a number')
        }
        if (!Array.isArray(students)) {
            throw new Error('Students must be a array')
        }

        this._name = name;
        this._length = length;
        this._students = students;
    }

    get studentName() {
        return this._name;
    }
    set studentName(studentName) {
        this._name = studentName;
    }
    get studentLength() {
        return this._name;
    }
    set studentLength(studentLength) {
        this._name = studentLength;
    }
    get studentArray() {
        return this._name;
    }
    set studentArray(studentArray) {
        this._name = studentArray;
    }
}