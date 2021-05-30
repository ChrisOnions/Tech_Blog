document.getElementById('button-submit');

const creatPost = async (event) => {
  event.preventDefault();
  console.log("Button Clicked");

  const postTitle = document.getElementById('#post-title');
  const postContent = document.getElementById('#post-comment');
  if (postTitle && postContent) {
    const response = await fetch('/api/posts/', {
      method: 'POST',
      body: JSON.stringify({ postTitle, postContent }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    }
  } else {
    alert(response.statusText)
  }
}

document.addEventListener("click", creatPost)
