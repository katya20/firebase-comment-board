var commentInput = $("#comment-input")
var commentDisplay = $(".comment-display")

commentInput.keydown(function(e) {
  if (e.which == 13) {
    addListItem("comments", commentInput.val());
    console.log("bye");
  }
})

onNewListItem("comment-challenge-2", function(newComment) {
  commentDisplay.append("<span>" + newComment + "</span>")
  console.log("hi");
}
  console.log("hello")