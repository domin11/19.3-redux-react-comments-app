import {connect} from 'react-redux';
import Comment from './Comment';
import {removeComment, editComment, thumbUpComment, thumbDownComment} from './actions';

const mapDispatchToProps = dispatch => ({
  removeComment: (id) => dispatch(removeComment(id)),
  editComment: (id, text) => dispatch(editComment(id, text)),
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);
