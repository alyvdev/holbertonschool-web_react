import './body.css';
import $ from 'jquery';
import _ from 'lodash';

$(() => {
  const $button = $('<button>').text('Click here to get started');
  const $count = $('<p>').attr('id', 'count');

  $('body').append($button).append($count);

  let count = 0;
  function updateCounter() {
    count++;
    $count.text(`${count} clicks on the button`);
  }

  $button.on('click', _.debounce(updateCounter, 500));
});