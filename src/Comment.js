import React from 'react';


const Comment = ({text, id, likes, dislikes, thumbUpComment}) => <li>{text} <span>likes: {likes} dislikes: {dislikes}</span> <button onClick={() => thumbUpComment(id)}>Thumb up</button></li>;

export default Comment;
