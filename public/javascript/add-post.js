async function newFormHandler(event) {
    event.preventDefault();
    
    const titleField = document.querySelector('input[name="post-title"]');
    const post_textField = document.querySelector('textarea[name="post-text"]');

    const inputTitle = titleField.value;
    const inputPost_text = post_textField.value;
  
    if (inputTitle && inputPost_text) { // user needs to enter both fields
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

    } else if (!inputTitle && inputPost_text) { // these logics will display messages if user misses a field
      alert("Please input a title for the post");
    } else if (inputTitle && !inputPost_text) {
      alert("Please write a post for submission");
    } else {
      alert("Please submit post text with title");
    }
  }
  
  document.querySelector('.new-post').addEventListener('submit', newFormHandler);