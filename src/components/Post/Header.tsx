import React from 'react';
import { iAuthor } from './List';

interface iHeaderProps {
  author: iAuthor;
  date: string;
}

export const Header: React.FC<iHeaderProps> = ({ author, date }: iHeaderProps) => {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}
