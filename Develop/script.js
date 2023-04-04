var rootEl = $('#root');
var saveButton = $('.saveBtn');
var timeBlocks = $('.time-block');
var currentDay = $('#currentDay');
var currentHourMilitary = parseInt(dayjs().format('H'));

$(function () {

currentDay.text(dayjs().format('dddd, MMMM D'))

timeBlocks.each(function() {

  timeBlock = $(this);

  var blockID = timeBlock.attr('id');
  var textArea = timeBlock.find('textarea');

  textArea.val(localStorage.getItem(blockID));

  saveButton.click(function() {
    var textAreaContent = textArea.val();
    localStorage.setItem(blockID, textAreaContent);
  })
  var blockInt = parseInt(blockID.slice(5, blockID.length))
  if (blockInt < currentHourMilitary) {
    timeBlock.addClass('past');
  } else if (blockInt === currentHourMilitary) {
    timeBlock.addClass('present');
  } else if (blockInt > currentHourMilitary) {
    timeBlock.addClass('future');
  }
})
});