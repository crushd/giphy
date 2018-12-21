
// Initial array of topics
var topics = ["Blue Whale", "Skunk", "Koala", "Lion"];
var imageLimit = 10;

// displayGiphyInfo function re-renders the HTML to display the appropriate content
function displayGiphyInfo() {

  $("#giphy-json").empty();

  var giphy = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/trending?q=" + giphy + "&limit=" +imageLimit+ "&api_key=xSOQRZ0F8H78eA9AQoQwki0O7PAuxiH8";

  // Creates AJAX call for the specific giphy button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    for (i=0;i<imageLimit;i++) {
      var giphyImage = $("<img>");
      giphyImage.attr = ("src", response.data[i].images.fixed_height.url);
      $("#giphy-images").append(giphyImage);
      console.log(i+ ": " +response.data[i].images.fixed_height.url);
    }

    $("#giphy-json").text(JSON.stringify(response));

  });

}

// Function for displaying giphy data
function renderButtons() {

  // Deletes the topics prior to adding new topics
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Loops through the array of topics
  for (var i = 0; i < topics.length; i++) {

    // Then dynamicaly generates buttons for each giphy in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adds a class of giphy to our button
    a.addClass("giphy");
    // Added a data-attribute
    a.attr("data-name", topics[i]);
    // Provided the initial button text
    a.text(topics[i]);
    // Added the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where the add giphy button is clicked
$("#add-giphy").on("click", function(event) {
  
  event.preventDefault();

  // This line of code will grab the input from the textbox
  var giphy = $("#giphy-input").val().trim();

  // The giphy from the textbox is then added to our array
  topics.push(giphy);

  // Calling renderButtons which handles the processing of our giphy array
  renderButtons();

});

// Adding click event listeners to all elements with a class of "giphy"
$(document).on("click", ".giphy", displayGiphyInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();