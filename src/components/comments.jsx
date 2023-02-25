import React from "react";


const Commments = () => {

    const commentsWrapper = document.querySelector('.comments');
    const comments = document.querySelectorAll('.comment');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let commentIndex = 0;
    let translateX = 0;

    const moveComments = () => {
    commentsWrapper.style.transform = `translateX(-${translateX}px)`;
    };

    const prevComment = () => {
    if (commentIndex > 0) {
        commentIndex--;
        translateX = comments[commentIndex].offsetLeft;
        moveComments();
    }
    };

    const nextComment = () => {
    if (commentIndex < comments.length - 1) {
        commentIndex++;
        translateX = comments[commentIndex].offsetLeft;
        moveComments();
    }
    };

    prevBtn.addEventListener('click', prevComment);
    nextBtn.addEventListener('click', nextComment); 


    return(

        <div class="carousel">
            <div class="comments">
            <div class="comment">

                <div class="comment-card">
                    <div class="comment-header">
                        <h3 class="comment-title">Título del Comentario</h3>
                        <p class="comment-date">Fecha del comentario</p>
                    </div>
                        <div class="comment-body">
                        <p class="comment-text">Texto del comentario Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                        <div class="comment-footer">
                            <p class="comment-author">Autor del comentario</p>
                    </div>
                </div>

            </div>
            <div class="comment">

                <div class="comment-card">
                    <div class="comment-header">
                    <h3 class="comment-title">Título del Comentario</h3>
                    <p class="comment-date">Fecha del comentario</p>
                    </div>
                    <div class="comment-body">
                    <p class="comment-text">Texto del comentario Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="comment-footer">
                    <p class="comment-author">Autor del comentario</p>
                    </div>
                </div>
                
            </div>
            <div class="comment">

                <div class="comment-card">
                    <div class="comment-header">
                        <h3 class="comment-title">Título del Comentario</h3>
                        <p class="comment-date">Fecha del comentario</p>
                    </div>
                    <div class="comment-body">
                        <p class="comment-text">Texto del comentario Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="comment-footer">
                        <p class="comment-author">Autor del comentario</p>
                    </div>  
                </div>
                
            </div>
        </div>
        <div class="arrows">
          <div class="arrow prev">&lt;</div>
          <div class="arrow next">&gt;</div>
        </div>
      </div>
    )
}

export  {Commments}