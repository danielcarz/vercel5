import React, { useRef } from "react";

const CommentCarousel = () => {

  const commentsWrapperRef = useRef(null);
  const commentsRef = useRef([]);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  let commentIndex = 0;
  let translateX = 0;

  const moveComments = () => {
    commentsWrapperRef.current.style.transform = `translateX(-${translateX}px)`;
  };

  const prevComment = () => {
    if (commentIndex > 0) {
      commentIndex--;
      translateX = commentsRef.current[commentIndex].offsetLeft;
      moveComments();
    }
  };

  const nextComment = () => {
    if (commentIndex < commentsRef.current.length - 1) {
      commentIndex++;
      translateX = commentsRef.current[commentIndex].offsetLeft;
      moveComments();
    }
  };

  const handleRefs = (element, index) => {
    commentsRef.current[index] = element;
  };


return (
<div className="carousel">

    <div className="comments" ref={commentsWrapperRef}>

        <div className="comment" ref={(el) => handleRefs(el, 0)}>

            <div className="comment-card">
                <div className="comment-header">
                    <h3 className="comment-title">Título del Comentario</h3>
                    <p className="comment-date">Fecha del comentario</p>
                </div>

                <div className="comment-body">
                    <p className="comment-text">
                        Texto del comentario Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="comment-footer">
                    <p className="comment-author">Autor del comentario</p>
                </div>
            </div>

        </div>

        <div className="comment" ref={(el) => handleRefs(el, 1)}>
            <div className="comment-card">
                <div className="comment-header">
                    <h3 className="comment-title">Título del Comentario</h3>
                    <p className="comment-date">Fecha del comentario</p>
                </div>
                <div className="comment-body">
                    <p className="comment-text">
                        Texto del comentario Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="comment-footer">
                    <p className="comment-author">Autor del comentario</p>
                </div>
            </div>
        </div>
        <div className="comment" ref={(el) => handleRefs(el, 2)}>
            <div className="comment-card">
                <div className="comment-header">
                    <h3 className="comment-title">Título del Comentario</h3>
                    <p className="comment-date">Fecha del comentario</p>
                </div>
            <div className="comment-body">
                <p className="comment-text">
                    Texto del comentario Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="comment-footer">
                <p className="comment-author">Autor</p>
            </div>
            
        </div>
    </div> 
</div>
</div>

)

export {CommentCarousel};
