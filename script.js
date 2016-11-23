var commentInput = $("#comment-input")
var commentDisplay = $(".comment-display")

commentInput.keydown(function(e) {
  if (e.which == 13) {
    addListItem("comments", commentInput.val());
    console.log(commentInput.val());
  }
})



onNewListItem("comment-challenge-2", function(newComment) {
  console.log("hello");
  commentDisplay.append("<span>" + newComment + "</span>") 
}
)

