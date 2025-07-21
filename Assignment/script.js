function addPost() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  const postsContainer = document.getElementById("postsContainer");

  if (title === "" || content === "") {
    alert("Please fill in both the title and content.");
    return;
  }

  const post = document.createElement("div");
  post.className = "post";

  const postTitle = document.createElement("h3");
  postTitle.textContent = title;

  const postContent = document.createElement("p");
  postContent.textContent = content;

  post.appendChild(postTitle);
  post.appendChild(postContent);

  postsContainer.prepend(post);

  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}
