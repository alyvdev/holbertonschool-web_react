import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

let count = 0;

function updateCounter() {
  count += 1;
  return count;
}

$(function () {
  $('body').append('<div id="logo"></div>');
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let debouncedFunc = _.debounce(() => {
    $('#count').text(`${updateCounter()} clicks on the button`);
  }, 500);
  $('button').on('click', debouncedFunc);
});