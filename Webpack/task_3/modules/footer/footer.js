import './footer.css';
import $ from 'jquery';

$(() => {
  const $footer = $('<footer>');
  const $p = $('<p>').text('Copyright - Holberton School');

  $footer.append($p);
  $('body').append($footer);
});