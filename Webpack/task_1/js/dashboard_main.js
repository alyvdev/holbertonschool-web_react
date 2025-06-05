import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
  // Add elements in the specified order
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="start-button">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Bind debounced click event to the button
  const debouncedUpdateCounter = _.debounce(updateCounter, 500);
  $('#start-button').on('click', debouncedUpdateCounter);
});
