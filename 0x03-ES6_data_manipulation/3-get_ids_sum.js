export default function get_ids_sum(students = getListStudents()) {
  return students.reduce((currentId, nextId) => currentId + nextId.id, 0);
}
