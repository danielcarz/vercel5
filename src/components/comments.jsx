/* function Carousel() {
    return (
      <div className="carousel">
        <div className="comments">
          <div className="comment">
  
            <div className="comment-card">
              <div className="comment-header">
                <h3 className="comment-title">Título del Comentario</h3>
                <p className="comment-date">Fecha del comentario</p>
              </div>
              <div className="comment-body">
                <p className="comment-text">Texto del comentario Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="comment-footer">
                <p className="comment-author">Autor del comentario</p>
              </div>
            </div>
  
          </div>
          <div className="comment">
  
            <div className="comment-card">
              <div className="comment-header">
                <h3 className="comment-title">Título del Comentario</h3>
                <p className="comment-date">Fecha del comentario</p>
              </div>
              <div className="comment-body">
                <p className="comment-text">Texto del comentario Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="comment-footer">
                <p className="comment-author">Autor del comentario</p>
              </div>
            </div>
  
          </div>
          <div className="comment">
  
            <div className="comment-card">
              <div className="comment-header">
                <h3 className="comment-title">Título del Comentario</h3>
                <p className="comment-date">Fecha del comentario</p>
              </div>
              <div className="comment-body">
                <p className="comment-text">Texto del comentario Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="comment-footer">
                <p className="comment-author">Autor del comentario</p>
              </div>
            </div>
  
          </div>
        </div>
        <div className="arrows">
          <div className="arrow prev">&lt;</div>
          <div className="arrow next">&gt;</div>
        </div>
      </div>
    );
  }


export {Carousel} */

import React, { useState } from "react";


const commentsData = [
  {
    id: 1,
    title: "Título del Comentario 1",
    date: "2023-02-27",
    text:
      "Texto del comentario 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Autor del comentario 1",
  },
  {
    id: 2,
    title: "Título del Comentario 2",
    date: "2023-02-26",
    text:
      "Texto del comentario 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Autor del comentario 2",
  },
  {
    id: 3,
    title: "Título del Comentario 3",
    date: "2023-02-25",
    text:
      "Texto del comentario 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Autor del comentario 3",
  },
];

const Carousel = () => {
  const [currentComment, setCurrentComment] = useState(0);

  const handlePrevClick = () => {
    if (currentComment === 0) {
      setCurrentComment(commentsData.length - 1);
    } else {
      setCurrentComment(currentComment - 1);
    }
  };

  const handleNextClick = () => {
    if (currentComment === commentsData.length - 1) {
      setCurrentComment(0);
    } else {
      setCurrentComment(currentComment + 1);
    }
  };

  return (
    <div className="carousel">
      <div className="comments">
        {commentsData.map((comment, index) => (
          <div
            key={comment.id}
            className={`comment ${
              index === currentComment ? "active" : "inactive"
            }`}
          >
            <div className="comment-card">
              <div className="comment-header">
                <h3 className="comment-title">{comment.title}</h3>
                <p className="comment-date">{comment.date}</p>
              </div>
              <div className="comment-body">
                <p className="comment-text">{comment.text}</p>
              </div>
              <div className="comment-footer">
                <p className="comment-author">{comment.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <div className="arrow prev" onClick={handlePrevClick}>
          &lt;
        </div>
        <div className="arrow next" onClick={handleNextClick}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export  {Carousel};
