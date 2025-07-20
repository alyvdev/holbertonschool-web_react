import { Student } from './main';

test('should create a valid students array', () => {
    const student1: Student = { firstName: "John", lastName: "Doe", age: 20, location: "New York" };
    const student2: Student = { firstName: "Jane", lastName: "Smith", age: 22, location: "London" };
    const studentsList: Student[] = [student1, student2];

    expect(studentsList.length).toBe(2);
    expect(studentsList[0].firstName).toBe("John");
    expect(studentsList[1].location).toBe("London");
});
