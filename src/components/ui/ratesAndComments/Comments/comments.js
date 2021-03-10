import React from 'react';
import Comment from "./comment/comment"

const comments = props => {
  const {comments} = props;
  return (
    <div>
      {
      comments?.map(com => (
        <Comment key={com.createdDate }comment={com}></Comment>
      ))
    }
    </div>
  );
};

export default comments;
