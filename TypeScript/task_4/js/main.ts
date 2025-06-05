/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

// Test the implementation
const teacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 5,
  experienceTeachingReact: 3,
  // No experienceTeachingJava
};

// Test Cpp
const cpp = new Subjects.Cpp();
cpp.setTeacher(teacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Test React
const react = new Subjects.React();
react.setTeacher(teacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

// Test Java
const java = new Subjects.Java();
java.setTeacher(teacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
