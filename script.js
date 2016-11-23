var commentInput = $("#comment-input")
var commentDisplay = $(".comment-display")

commentInput.keydown(function(e) {
  if (e.which == 13) {
    addListItem("comments", commentInput.val());
  }
})

onNewListItem(comment, function(newComment) {
  commentDisplay.append("<span>" + newComment + "</span>")
})