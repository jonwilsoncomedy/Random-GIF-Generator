//  http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC
// http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho

$('document').ready(function() {

var randomGIF = $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC');

randomGIF.then(function(data) {
  var randomURL = data.data.image_url;
  var $randomURLLink = $('<img src="' + randomURL + '"</img>');
  $('#gifContainer').append($randomURLLink);
});

$('#getTagGIF').on('submit', function(event) {
  event.preventDefault();
  $('#gifContainer').empty();
  var tagToAdd = $('#tagInput').val();
  var tagAdder = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC' + '&tag=' + tagToAdd;
  randomGIF = $.get(tagAdder);

  randomGIF.then(function(data) {
    var randomURL = data.data.image_url;
    var $randomURLLink = $('<img src="' + randomURL + '"</img>');
    $('#gifContainer').append($randomURLLink);
    console.log(data);
  });
});

});
