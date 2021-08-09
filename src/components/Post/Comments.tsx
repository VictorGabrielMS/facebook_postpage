import React from 'react';
import { iComment } from './List';

interface iCommentsProps {
  comments: iComment[];
}

export const Comments: React.FC<iCommentsProps> = ({ comments }: iCommentsProps) => {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} alt="avatar" />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}
