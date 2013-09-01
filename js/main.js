$('.intro-screenshots .button').click(function(evt) {
  var screenshot;
  var curScreenshot = $('.intro-screenshots img.current').attr(
    'src').substr(14, 1);

  if ($(evt.target).hasClass('screenshot1')) {
    screenshot = '1';
  }
  else if ($(evt.target).hasClass('screenshot2')) {
    screenshot = '2';
  }
  else if ($(evt.target).hasClass('screenshot3')) {
    screenshot = '3';
  }

  if (!screenshot || screenshot === curScreenshot) {
    return;
  }

  $('.intro-screenshots .button.current').removeClass('current');
  $('.intro-screenshots .button.screenshot' + screenshot).addClass('current');

  $('.intro-screenshots img.current').removeClass('current');
  $('.intro-screenshots img.screenshot' + screenshot).addClass('current');
});
