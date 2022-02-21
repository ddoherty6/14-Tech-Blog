async function editFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const postTitle = document.querySelector('input[name="post-title"]').value.trim();
    const postText = document.querySelector('textarea[name="post-text"]').value.trim();
    
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: postTitle,
            post_text: postText
        })
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }

  
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);