var saveButton = $('.saveBtn');
var timeBlocks = $('.time-block');
var currentDay = $('#currentDay');
var currentHour = parseInt(dayjs().format('H'));

$(function () {

currentDay.text(dayjs().format('dddd, MMMM D'))

timeBlocks.each(function() {

  timeBlock = $(this);
  console.log(timeBlock);

  var blockID = timeBlock.attr('id');
  var textArea = timeBlock.find('textarea');
  
  textArea.val(localStorage.getItem(blockID));

  saveButton.click(function() {
    var textAreaContent = textArea.val();
    localStorage.setItem(blockID, textAreaContent);
  })

  var blockHour = parseInt(blockID.slice(5, blockID.length))

  if (blockHour < currentHour) {
    timeBlock.addClass('past');
  } else if (blockHour === currentHour) {
    timeBlock.addClass('present');
  } else if (blockHour > currentHour) {
    timeBlock.addClass('future');
  }
})
});