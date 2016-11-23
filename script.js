var commentInput = $("#comment-input")
var commentDisplay = $(".comment-display")

commentInput.keydown(function(e) {
  if (e.which == 13) {
    addListItem("comments", commentInput.val());
    console.log(commentInput.val());
  }
})



onNewListItem(commentInput.val(), function(commentInput) {
  commentDisplay.append("<span>" + commentInput + "</span>")
  console.log("hi");
}

)