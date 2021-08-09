import React from 'react';
import { Comments } from './Comments';
import { Header } from './Header';
import { iAuthor, iComment } from './List';

interface iItemProps {
  author: iAuthor;
  date: string;
  content: string;
  comments: iComment[];
}

export const Item: React.FC<iItemProps> = ({ author, date, content, comments }: iItemProps) => {
  return (
    <div className="post">
      <Header author={author} date={date} />
      <p className="post-content">{content}</p>
      <Comments comments={comments} />
    </div>
  )
}
