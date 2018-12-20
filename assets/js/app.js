// Initial array of giphys
var giphys = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];
    
// Function for dumping the JSON content for each button into the div
function displayGiphyInfo() {

  // YOUR CODE GOES HERE!!! HINT: You will need to create a new div to hold the JSON.

      var giphy = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/trending?q=" + giphy + "&api_key=xSOQRZ0F8H78eA9AQoQwki0O7PAuxiH8";

      // Creates AJAX call for the specific movie button being clicked
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

      // Creates a div to hold the movie
      // Retrieves the Rating Data
      // Creates an element to have the rating displayed
      // Displays the rating
      // Retrieves the release year
      // Creates an element to hold the release year
      // Displays the release year
      // Retrieves the plot
      // Creates an element to hold the plot
      // Appends the plot
      // Creates an element to hold the image
      // Appends the image
      // Puts the entire Movie above the previous movies.
      });

}

// Function for displaying giphy data
function renderButtons() {

  // Deleting the buttons prior to adding new giphys
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of giphys
  for (var i = 0; i < giphys.length; i++) {

    // Then dynamicaly generating buttons for each giphy in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of giphy to our button
    a.addClass("giphy");
    // Adding a data-attribute
    a.attr("data-name", giphys[i]);
    // Providing the initial button text
    a.text(giphys[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where one button is clicked
$("#add-giphy").on("click", function(event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  var giphy = $("#giphy-input").val().trim();

  // The giphy from the textbox is then added to our array
  giphys.push(giphy);

  // Calling renderButtons which handles the processing of our giphy array
  renderButtons();

});

// Generic function for displaying the giphyInfo
$(document).on("click", ".giphy", displayGiphyInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();