async function newFormHandler(event) {
    event.preventDefault();
    const inputTitle = document.querySelector('input[name="post-title"]').value;
    const inputPost_url = document.querySelector('input[name="post-url"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: inputTitle,
        post_url: inputPost_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post').addEventListener('submit', newFormHandler);