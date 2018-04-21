function createPost(){
  var pageTemplate = document.getElementById('page-template').innerHTML;
  var pageTemplateFn = _.template(pageTemplate);
  var postTemplate = document.getElementById('post-template').innerHTML;
  var postTemplateFn = _.template(postTemplate);
  var commentsTemplate = document.getElementById('comments-template').innerHTML;
  var commentsTemplateFn = _.template(commentsTemplate);

  var author = document.getElementById('postAuthor').value
  var title = document.getElementById('postTitle').value
  var body = document.getElementById('postBody').value

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();
  var postTemplateHTML = postTemplateFn({'body': body, 'author': author, 'title': title})
  var postElement = document.getElementById("post");
  postElement.innerHTML = postTemplateHTML;

  var commentsSection = commentsTemplateFn();
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment(){
  var commentTemplate = document.getElementById('comment-template').innerHTML;
  var commentTemplateFn = _.template(commentTemplate);

  var commenter = document.getElementById('commenter').value;
  var comment = document.getElementById('commentText').value;

  var commentsDiv = document.getElementById("comments");
  var commentTemplateHTML = commentTemplateFn({'comment': comment, 'commenter': commenter})
  commentsDiv.innerHTML += commentTemplateHTML;
}
