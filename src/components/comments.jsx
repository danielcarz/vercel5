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

  const  [pos_one, setPos_one] = useState(0);
  const [pos_two, setPos_two] = useState(1);

  const retroceder = () => {
    let nueva_pos_one = pos_one - 1;
    let nueva_pos_two = pos_two - 1;

    console.log('nueva_pos_one', nueva_pos_one)
    console.log('nueva_pos_two',nueva_pos_two)

    if(nueva_pos_one < 0 || nueva_pos_one > comments.length - 1 ){
      nueva_pos_one = comments.length - 2;
    }

    if(nueva_pos_two < 0 || nueva_pos_two > comments.length - 1 ){
      nueva_pos_two = comments.length - 1;
    }

    setPos_one(nueva_pos_one);
    setPos_two(nueva_pos_two);
  }

  const adelantar = () => {
    let nueva_pos_one = pos_one + 1;
    let nueva_pos_two = pos_two + 1;

    console.log('nueva_pos_one', nueva_pos_one)
    console.log('nueva_pos_two',nueva_pos_two)

    if(nueva_pos_one < 0 || nueva_pos_one > comments.length - 1 ){
      nueva_pos_one = 0;
    }

    if(nueva_pos_two < 0 || nueva_pos_two > comments.length - 1 ){
      nueva_pos_two = 0;
    }

    setPos_one(nueva_pos_one);
    setPos_two(nueva_pos_two);
  }



  return (
    <div className="comment-carousel">

          <h2 className='tittle-wrapper'>TESTIMONIOS</h2>

          <section className='comment-block'>

              <div className="arrow prev" onClick={retroceder}>
                  &lt;
              </div>

              <section className='comments-wrapper' >
                  <div className='text-wrapper'>
                      <div className='title-wrapper'>
                          <h3>{comments[pos_one].name}</h3>
                          <hr />
                          

                      </div>
                      
                      <p>{comments[pos_one].review_text}</p>
                      <h4>{comments[pos_one].date}</h4>
                  </div>

                  <div className='text-wrapper text_wrapper-two'>
                      <div className='title-wrapper'>
                          <h3>{comments[pos_two].name }</h3>
                          <hr />
                          

                      </div>
                      
                      <p>{comments[pos_two].review_text}</p>
                      <h4>{console.log('js')}</h4>
                  </div>

                  
          
              </section>

              <div className="arrow next" onClick={adelantar} >
                  &gt;
              </div>

          </section>
            
        
    </div>
  );
};

export  {CommentCarousel};
