const logoutButton = async (event) => {
  event.preventDefault();
  const response = await fetch('/api/users/logout', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })

  if (response.ok) {
    document.location.replace('/')
  } else {
    alert(response.statusText)
  }
}
document.querySelector('.submit').addEventListener('click', logoutButton)
