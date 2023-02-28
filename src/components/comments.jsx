import React, { useState } from 'react';




const comments = [
  /* { id: 1, text: 'Este es el primer comentario', title: 'titulo 1', author: 'autor 1', date: 'fecha 1'},
  { id: 2, text: 'Este es el primer comentario', title: 'titulo 2', author: 'autor 2', date: 'fecha 2'}
 */

  {
    "name": "Camilo Gallego",
    "rating": "1 opinión",
    "date": "Hace 6 meses",
    "review_text": "Me ayudo a sacar sentimientos atorados. Sentirme más a gusto conmigo mismo. Una terapia muy sanadora. Recomiendo al 100 pues encuentras tu escencia y te acercas a lo que quieres ser"
  },
  {
    "name": "Yes Cardona",
    "rating": "1 opinión",
    "date": "Hace 6 meses",
    "review_text": "Tuve una terapia maravillosa, la señora Amparo conectó conmigo y todo lo que me aquejaba de una manera muy intuitiva, sentí mucha paz y tranquilidad. Sus manos son mágicas. La recomiendo!"
  },
  {
    "name": "Natalia Sierra",
    "rating": "1 opinión",
    "date": "Hace 6 meses",
    "review_text": "Excelente! Siento que me sirve mucho para mi bienestar, es increíble su trabajo, uno sale liviano.\n\nSiento que es una persona que de verdad trabaja por ayudarle a uno, se dedica en tiempo y alma.\n\nRecomendada de corazón ❣️"
  },
  {
    "name": "I Aa",
    "rating": "1 opinión",
    "date": "Hace 5 meses",
    "review_text": "He estado antes con algunos curanderos en Europa, pero nunca sentí que tuvieran suficiente poder para ayudarme y nunca me dio ningún resultado.  Esta es la primera vez que conozco a alguien que tiene un poder real y estoy obteniendo resultados, ¡muchas gracias!  🙏🏾"
  },
  {
    "name": "OMX FREQUENCE (OMX)",
    "rating": "1 opinión",
    "date": "Hace 7 meses",
    "review_text": "Un excelente lugar, una energía súper bonita y tranquila . Me sentí renovado , Ashira tiene mucho conocimiento , me sentí desconectado en un lugar fuera de este plano."
  },
  {
    "name": "Mantric M",
    "rating": "1 opinión",
    "date": "Hace 9 meses",
    "review_text": "Es una de las experiencias mas increíbles que haya podido experimentar en mi vida en muchos sentidos, una disposición increíble para ayudar a sanar todos los cuerpos y limpiar nuestra energía , así de increíble su atención y sabiduría¡ Muy feliz y agradecido de haber podido encontrar un ser con tanta luz y dones para ayudar¡   Gracias Amparo"
  },
  {
    "name": "Moira Meine",
    "rating": "1 opinión",
    "date": "Hace 7 meses",
    "review_text": "Amparo es súper competente, humilde y sabia y su terapia es hermosa y única. Me voy con el corazón contento y liguera."
  }
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

          <h2 className='tittle-wrapper'>TESTIMONIOS</h2>

          <section className='comment-block'>

              <div className="arrow prev" onClick={nextComment}>
                  &lt;
              </div>

              <section className='comments-wrapper' >
                  <div className='text-wrapper'>
                      <div className='title-wrapper'>
                          <h3>{comments[currentComment].name}</h3>
                          <hr />
                          

                      </div>
                      
                      <p>{comments[currentComment].review_text}</p>
                      <h4>{comments[currentComment].date}</h4>
                  </div>
          
              </section>

              <div className="arrow next" onClick={nextComment}>
                  &gt;
              </div>

          </section>
            
        
    </div>
  );
};

export  {CommentCarousel};
