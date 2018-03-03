      // Initial array of Gif descriptions that will be the beginning buttons
    var gifs = ["Cat", "Dog", "Universe", "Bird"];

    var searchTerm = $("#searchTerm").val();

   // query URL and the ajax method to get the info, parameters that i can use to search 
    var queryURL = "https://api.giphy.com/v1/gifs/random";
        queryURL += '?' + $.param({
    'api_key': "qsjqhAslbPftk1tRJhKtB9gUiTgx46BD",
    'q': searchTerm,
    'limit': 10,
    'offset': 0,
    'rating': '',
    'lang': 'eng'
    });

      $.ajax({
     url: queryURL,
     method: 'GET',
   }).done(function(result) {
   
       console.log(result);

      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#gifs-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < gifs.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("movie");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", gifs[i]);
          // Providing the button's text with a value of the movie at index i
          a.text(gifs[i]);
          // Adding the button to the HTML
          $("#gifs-view").append(a);
        }
      }
   
      // This function handles events where one button is clicked
      $("#searchButton").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var searchInput = $("#searchTerm").val();
        // The input from the textbox is then added to our array
        gifs.push(searchInput);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });
    

      // Calling the renderButtons function at least once to display the initial list of movies
      renderButtons();

    });