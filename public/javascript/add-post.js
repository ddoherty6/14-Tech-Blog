async function newFormHandler(event) {
    event.preventDefault();
    const inputTitle = document.querySelector('input[name="post-title"]').value;
    const inputPost_text = document.querySelector('textarea[name="post-text"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: inputTitle,
        post_text: inputPost_text
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