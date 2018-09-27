import React from 'react';
import style from './Comment.css';

const Comment = ({text, id, removeComment, editComment, likes, dislikes, thumbUpComment, thumbDownComment}) =>
  <li>
    <h1>{text}</h1>
    <span>likes: {likes}</span>
    <span> dislikes: {dislikes}</span>
    <button type="button" class="btn btn-success" onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button type="button" class="btn btn-warning" onClick={() => thumbDownComment(id)}>Thumb down</button>
    <button type="button" class="btn btn-primary" onClick={() => editComment(id, prompt('Edit comment'))}>Edit</button>
    <button type="button" class="btn btn-danger" onClick={() => removeComment(id)}>Delete</button>
  </li>;

export default Comment;
