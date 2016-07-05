# Xi Weekend GIF Generator

This app uses JQuerys ajax function to get a random GIF from Giphy. When the page loads, a random
GIF is appended to the DOM. There is a button above the GIF that refreshes the page, loading a new
random image. Below the GIF, a user can (optionally) input one or more terms to use as tags to
search for GIF's that have those tags, and display one at random. Each time the submit button is clicked, the current GIF will be removed using the .empty method, and the new one will be added in its place.
