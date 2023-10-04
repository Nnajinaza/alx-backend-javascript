import getListStudents from "./0-get_list_students";

export default function getStudentsByLocation( students = getListStudents(), loc) {
    return students.filter(arg => arg.location === loc)
}