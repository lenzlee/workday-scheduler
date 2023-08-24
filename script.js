// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {

  // display current date and time
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  $('#currentTime').text(dayjs().format('hh:mm a'));

  // function for when the saveBtn is clicked
  $('.saveBtn').on('click', function () {

  //get user input event, time of day, and save in localStorage

  var userInput = $(this).siblings('textarea').val();
  var currentTime = $(this).parent().attr('id');

  localStorage.setItem(currentTime, userInput);

  //display status Message when event and time data is saved to localStorage

  $('.statusMessage').addClass('show');

  /* setTimeout(function () {
    $('.statusMessage').removeClass('show');
  }, 5000); */

});

// load data from localStorage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-noon .description').val(localStorage.getItem('hour-noon'));
$('#hour-1pm .description').val(localStorage.getItem('hour-1pm'));
$('#hour-2pm .description').val(localStorage.getItem('hour-2pm'));
$('#hour-3pm .description').val(localStorage.getItem('hour-3pm'));
$('#hour-4pm .description').val(localStorage.getItem('hour-4pm'));
$('#hour-5pm .description').val(localStorage.getItem('hour-5pm'));

});

// function for color coding past, present, and future events
$(function () {

});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //