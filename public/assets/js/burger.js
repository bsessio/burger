// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
    event.preventDefault();
      let id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(
        function() {
          console.log("Devouring burger of ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
        let name = $("#bn").val().trim()
        console.log(name);
      // Send the POST request.
      $.ajax("/api/burgers/" + name, {
        type: "POST"
      }).then(
        function() {
          console.log("created new burger named", name);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
  