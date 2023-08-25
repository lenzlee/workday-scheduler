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

 setTimeout(function () {
    $('.statusMessage').removeClass('show');
  }, 5000);

});

// load data from localStorage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

// function for color coding past, present, and future events
$(function updateTimeOfDay() {

  var hourOfDay = dayjs().hour();

  $('.time-block').each(function () {

    var hourRow = parseInt($(this).attr('id').split('-')[1]);

    if (hourRow < hourOfDay) {
      $(this).addClass('past');
    } 
    else if (hourRow === hourOfDay) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } 
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  
  }); 

});

});