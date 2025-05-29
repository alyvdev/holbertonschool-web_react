interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "San Francisco",
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Render table when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Create table and table header
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  // Create header cells
  const firstNameHeader = document.createElement("th");
  firstNameHeader.textContent = "First Name";

  const locationHeader = document.createElement("th");
  locationHeader.textContent = "Location";

  // Append headers to header row
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  tableHead.appendChild(headerRow);

  // Create table body
  const tableBody = document.createElement("tbody");

  // Add a row for each student
  studentsList.forEach((student: Student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });

  // Assemble the table
  table.appendChild(tableHead);
  table.appendChild(tableBody);

  // Add table to the document body
  document.body.appendChild(table);
});
