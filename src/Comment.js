import React from 'react';


const Comment = ({text, id, removeComment, editComment, likes, dislikes, thumbUpComment, thumbDownComment}) =>
  <li>{text} <span>likes: {likes} dislikes: {dislikes}</span>
    <button onClick={() => removeComment(id)}>Delete</button>
    <button onClick={() => editComment(id, prompt('Edit comment'))}>Edit</button>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
  </li>;

export default Comment;
