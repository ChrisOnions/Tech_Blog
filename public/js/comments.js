const addComment_btn = document.querySelectorAll('#comment-btn');
const submitComment_btn = document.querySelector('.Submit-comment-btn');

const addComment_func = async (post_id, comment_id, event) => {
  const content = event.target.previousElementSibling.value

  if (content) {
    const response = await fetch('/api/comments/', {
      method: 'POST',
      body: JSON.stringify({ content, post_id, comment_id }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
      document.location.replace('/')
    } else {
      alert(response.statusText, 'Please try again');
    }
  } else {
    alert('Please enter somthing')
  }
}

const delete_btn = async (id) => {
  const response = await fetch('/api/posts/' + id, {
    method: 'DELETE',
    body: JSON.stringify({ id }),
    headers: { 'Content-Type': 'application/json' },
  })
  if (response.ok) {
    alert('item deleted')
    document.location.replace('/dashboard')
  } else {
    alert(response.statusText, 'Please try again');
  }
}
