import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  count += 1;
  return count;
}

$(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let debouncedFunc = _.debounce(() => {
    // updateCounter() increments the global count and returns the new value
    $('#count').text(`${updateCounter()} clicks on the button`);
  }, 500);
  $('button').on('click', debouncedFunc);
});
