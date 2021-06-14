const addComment_btn = document.querySelectorAll('#comment-btn');
const submitComment_btn = document.querySelector('.Submit-comment-btn');

const addComment_func = async (post_id, comment_id) => {
  const content = document.querySelector('.comment_box').value.trim()
  console.log(post_id, comment_id);
  if (content) {
    const response = await fetch('/api/comments/', {
      method: 'POST',
      body: JSON.stringify({ content, post_id, comment_id }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
      document.location.replace('/')
    } else {
      console.log(response);
      alert(response.statusText, 'Please try again');
    }
  } else {
    alert('Please enter somthing')
  }
}
const delete_btn = async (id) => {
  console.log(id);
  const response = await fetch('/api/comments/' + id, {
    method: 'DELETE',
    body: JSON.stringify({ id }),
    headers: { 'Content-Type': 'application/json' },
  })
  console.log(response);
  if (response.ok) {
    alert('item deleted')
    document.location.replace('/dashboard')
  } else {
    console.log(response);
    alert(response.statusText, 'Please try again');
  }
}
