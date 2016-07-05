//  examples of random get request and random with a tag
//  http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC
// http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho

$('document').ready(function() {

// on load, gets random gif, appends it to DOM
var randomGIF = $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC');

randomGIF.then(function(data) {
  var randomURL = data.data.image_url;
  var $randomURLLink = $('<img src="' + randomURL + '"</img>');
  $('#gifContainer').append($randomURLLink);
});

// when submit button is clicked, empties contents of gifContainer, gets value
// of current submission, replaces spaces with "+", adds tag to random request url
// appends to DOM
$('#getTagGIF').on('submit', function(event) {
  event.preventDefault();
  $('#gifContainer').empty();
  var tagToAdd = $('#tagInput').val();
  var tagNoSpaces = tagToAdd.replace(/[ ]/g, "+");

  var tagAdder = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC' + '&tag=' + tagNoSpaces;
  randomGIF = $.get(tagAdder);

  randomGIF.then(function(data) {
    var randomURL = data.data.image_url;
    var $randomURLLink = $('<img src="' + randomURL + '"</img>');
    $('#gifContainer').append($randomURLLink);
  });
});

});
