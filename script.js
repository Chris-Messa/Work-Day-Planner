const saveButton = $('.saveBtn');
const timeBlocks = $('.time-block');
const currentDay = $('#currentDay');

// Sets current hour in 24 hour time
const currentHour = parseInt(dayjs().hour(12).format('H'));

$(function () {

currentDay.text(dayjs().format('dddd, MMMM D'))

timeBlocks.each(function() {

  /*
   Here, 'this' refers to the current object in the array of objects contained 
   within the timeBlocks variable.
   */
  const timeBlock = $(this);

  const blockID = timeBlock.attr('id');
  const textArea = timeBlock.find('textarea');
  
  textArea.val(localStorage.getItem(blockID));

  saveButton.click( ()=> {
    const textAreaContent = textArea.val();
    localStorage.setItem(blockID, textAreaContent);
  })

  const blockHour = parseInt(blockID.slice(5, blockID.length))

  if (blockHour < currentHour) {
    timeBlock.addClass('past');
  } else if (blockHour === currentHour) {
    timeBlock.addClass('present');
  } else {
    timeBlock.addClass('future');
  }
})
});