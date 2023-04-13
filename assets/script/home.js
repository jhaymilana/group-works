/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Jayvee Milana

Final Assignment
Home Page

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

'use strict';

// Post

let post = document.querySelector('.post');
let storage = document.querySelector('.storage');
let text = document.querySelector('.text');
let image = document.querySelector('.image');

function createPost() {
  let newPost = document.createElement('div');
  let postText = document.createElement('p');
  let imageFile = document.createElement('img');

  newPost.className = `posts`;

  postText.innerHTML = `${text.value}`;
  imageFile.src = `${image.value}`;

  storage.appendChild(newPost);
  newPost.appendChild(postText);
  newPost.appendChild(imageFile);
}

post.addEventListener('click', function() {
  if (text.value.length > 0) {
    createPost();
    text.value = '';
  }
});

// 