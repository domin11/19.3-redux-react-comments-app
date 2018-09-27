import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// Dodawanie komentarza
export function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text,
    likes: 0,
    dislikes: 0
  }
}

// Usuwanie komentarza
export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  }
}

// Edytowanie komentarza
export function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    id: id,
    text: text
  }
}

// Łapka w górę
export function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id: id
  }
}

// Łapka w dół
export function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: id
  }
}
