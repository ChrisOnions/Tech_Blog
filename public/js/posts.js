const button = document.getElementById('button-submit');

const creatPost = async (event) => {
  event.preventDefault();


  const title = document.getElementById('post-title').value
  const content = document.getElementById('post-comment').value;

  if (title && content) {
    const response = await fetch('/api/posts/', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');

    }
  } else {

  }
}

button.addEventListener("click", creatPost)