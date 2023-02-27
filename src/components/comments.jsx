import React, { useState } from 'react';




const comments = [
  { id: 1, text: 'Este es el primer comentario', title: 'titulo 1', author: 'autor 1', date: 'fecha 1'},
  { id: 2, text: 'Este es el primer comentario', title: 'titulo 2', author: 'autor 2', date: 'fecha 2'}
]; 

const CommentCarousel = () => {
  const [currentComment, setCurrentComment] = useState(0);

  const prevComment = () => {
    setCurrentComment(currentComment === 0 ? comments.length - 1 : currentComment - 1);
  };

  const nextComment = () => {
    setCurrentComment(currentComment === comments.length - 1 ? 0 : currentComment + 1);
  };

  return (
    <div className="comment-carousel">

        
            <div className="arrow prev" onClick={nextComment}>
                &lt;
            </div>

            <section className='comments-wrapper' >
                <div className='text-wrapper'>
                    <div className='title-wrapper'>
                        <h3>{comments[currentComment].author}</h3>
                        <hr />
                        

                    </div>
                    
                    <p>{comments[currentComment].text}</p>
                    <h4>{comments[currentComment].date}</h4>
                </div>
        
            </section>

            <div className="arrow next" onClick={nextComment}>
                &gt;
            </div>

        
     
        
        
    </div>
  );
};

export  {CommentCarousel};
