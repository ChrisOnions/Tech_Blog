

const logoutButton = async (event) => {
  event.preventDefault();
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })

  if (response.ok) {
    document.location.replace('/')
  } else {
    console.log(response.text);
    alert(response.statusText)
  }
}
document.getElementsByClassName('submit')
document.addEventListener('click', logoutButton)