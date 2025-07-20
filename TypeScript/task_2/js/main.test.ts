import { Director, Teacher, createEmployee, isDirector, executeWork, teachClass } from './main';

// Test pour la fonction createEmployee
test('createEmployee should return a Teacher or Director based on salary', () => {
  expect(createEmployee(200)).toBeInstanceOf(Teacher);
  expect(createEmployee(1000)).toBeInstanceOf(Director);
  expect(createEmployee('$500')).toBeInstanceOf(Director);
});

// Test pour la fonction isDirector et executeWork
test('isDirector and executeWork should function correctly', () => {
  const teacher = createEmployee(200);
  const director = createEmployee(1000);

  expect(isDirector(teacher)).toBe(false);
  expect(isDirector(director)).toBe(true);

  expect(executeWork(teacher)).toBe('Getting to work');
  expect(executeWork(director)).toBe('Getting to director tasks');
});

// Test pour la fonction teachClass
test('teachClass should return correct teaching message', () => {
  expect(teachClass('Math')).toBe('Teaching Math');
  expect(teachClass('History')).toBe('Teaching History');
});
