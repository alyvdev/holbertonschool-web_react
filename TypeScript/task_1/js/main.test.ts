import { Teacher, Directors, printTeacher, StudentClass } from './main'; // Importer les interfaces et la fonction printTeacher

// Test pour l'interface Teacher
test('should create a valid Teacher object', () => {
  // Enlever le type explicite `: Teacher` ici car TypeScript peut l'inférer directement.
  const teacher3 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
  } as Teacher; // Utilisation de `as Teacher` pour caster l'objet

  // Vérification des propriétés de l'objet teacher3
  expect(teacher3.firstName).toBe('John');
  expect(teacher3.lastName).toBe('Doe');
  expect(teacher3.fullTimeEmployee).toBe(false);
  expect(teacher3.location).toBe('London');
  expect(teacher3.contract).toBe(false);
});

// Test pour l'interface Directors
test('should create a valid Director object', () => {
  const director1: Directors = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    location: 'New York',
    numberOfReports: 10, // Propriété spécifique à Directors
  };

  // Vérification des propriétés de l'objet director1
  expect(director1.firstName).toBe('Jane');
  expect(director1.lastName).toBe('Smith');
  expect(director1.fullTimeEmployee).toBe(true);
  expect(director1.location).toBe('New York');
  expect(director1.numberOfReports).toBe(10);
});

// Test de la fonction printTeacher
test('should print the teacher name correctly', () => {
  const result = printTeacher('John', 'Doe');
  expect(result).toBe('J. Doe'); // Vérifier que le résultat est "J. Doe"
});

// Test pour la classe StudentClass
test('should create a valid StudentClass object', () => {
	const student = new StudentClass('John', 'Doe');

	expect(student.displayName()).toBe('John'); // Vérifier que displayName retourne "John"
	expect(student.workOnHomework()).toBe('Currently working'); // Vérifier que workOnHomework retourne "Currently working"
  });
