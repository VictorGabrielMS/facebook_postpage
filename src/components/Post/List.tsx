import React, { useState } from 'react';
import { Item } from './Item';

export interface iAuthor {
  name: string;
  avatar: string;
}

export interface iComment {
  id: number;
  author: iAuthor;
  date: string;
  content: string;
}


export const List: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: "Victor Um",
        avatar: "https://i.pravatar.cc/150?img=1"
      },
      date: "04 Jun 2019",
      content: "Eiusmod magna ipsum in consequat Lorem dolore deserunt occaecat dolore esse. Dolore anim non adipisicing aute commodo id pariatur sint. Laborum pariatur labore ut enim. Aliqua magna consequat nostrud enim minim ex consequat ipsum eu enim. Irure ut Lorem eu duis.",
      comments: [
        {
          id: 2,
          author: {
            name: "Victor Três",
            avatar: "https://i.pravatar.cc/150?img=1"
          },
          date: "04 Jun 2019",
          content: "Eiusmod magna ipsum in consequat Lorem dolore deserunt occaecat dolore esse. Dolore anim non adipisicing aute commodo id pariatur sint. Laborum pariatur labore ut enim. Aliqua magna consequat nostrud enim minim ex consequat ipsum eu enim. Irure ut Lorem eu duis.",
        }
      ]
    },
    {
      id: 3,
      author: {
        name: "Victor Dois",
        avatar: "https://i.pravatar.cc/150?img=1"
      },
      date: "04 Jun 2019",
      content: "Eiusmod magna ipsum in consequat Lorem dolore deserunt occaecat dolore esse. Dolore anim non adipisicing aute commodo id pariatur sint. Laborum pariatur labore ut enim. Aliqua magna consequat nostrud enim minim ex consequat ipsum eu enim. Irure ut Lorem eu duis.",
      comments: [
        {
          id: 4,
          author: {
            name: "Victor Um",
            avatar: "https://i.pravatar.cc/150?img=1"
          },
          date: "04 Jun 2019",
          content: "Eiusmod magna ipsum in consequat Lorem dolore deserunt occaecat dolore esse. Dolore anim non adipisicing aute commodo id pariatur sint. Laborum pariatur labore ut enim. Aliqua magna consequat nostrud enim minim ex consequat ipsum eu enim. Irure ut Lorem eu duis.",
        },
        {
          id: 5,
          author: {
            name: "Victor Três",
            avatar: "https://i.pravatar.cc/150?img=1"
          },
          date: "04 Jun 2019",
          content: "Eiusmod magna ipsum in consequat Lorem dolore deserunt occaecat dolore esse. Dolore anim non adipisicing aute commodo id pariatur sint. Laborum pariatur labore ut enim. Aliqua magna consequat nostrud enim minim ex consequat ipsum eu enim. Irure ut Lorem eu duis.",
        }
      ]
    },
    {
      id: 6,
      author: {
        name: "Victor Quatro",
        avatar: "https://i.pravatar.cc/150?img=1"
      },
      date: "04 Jun 2019",
      content: "Eiusmod magna ipsum in consequat Lorem dolore deserunt occaecat dolore esse. Dolore anim non adipisicing aute commodo id pariatur sint. Laborum pariatur labore ut enim. Aliqua magna consequat nostrud enim minim ex consequat ipsum eu enim. Irure ut Lorem eu duis.",
      comments: [
        {
          id: 4,
          author: {
            name: "Victor Um",
            avatar: "https://i.pravatar.cc/150?img=1"
          },
          date: "04 Jun 2019",
          content: "Eiusmod magna ipsum in consequat Lorem dolore deserunt occaecat dolore esse. Dolore anim non adipisicing aute commodo id pariatur sint. Laborum pariatur labore ut enim. Aliqua magna consequat nostrud enim minim ex consequat ipsum eu enim. Irure ut Lorem eu duis.",
        },
        {
          id: 5,
          author: {
            name: "Victor Dois",
            avatar: "https://i.pravatar.cc/150?img=1"
          },
          date: "04 Jun 2019",
          content: "Eiusmod magna ipsum in consequat Lorem dolore deserunt occaecat dolore esse. Dolore anim non adipisicing aute commodo id pariatur sint. Laborum pariatur labore ut enim. Aliqua magna consequat nostrud enim minim ex consequat ipsum eu enim. Irure ut Lorem eu duis.",
        }
      ]
    }
  ]);

  return (
    <div className="postlist">
      {posts.map(post => (
        <Item key={post.id} {...post} />
      ))}
    </div>
  )
}


