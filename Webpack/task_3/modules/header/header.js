import './header.css';
import $ from 'jquery';
import holbertonLogo from '../../assets/holberton-logo.jpg';

$(() => {
  console.log('Init header');
  
  const $header = $('<header>');
  const $logo = $('<div>').attr('id', 'logo');
  const $h1 = $('<h1>').text('Holberton Dashboard');

  $header.append($logo).append($h1);
  $('body').prepend($header);
});