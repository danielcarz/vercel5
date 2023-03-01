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

  const [firstComment, setFirstComment] = useState(0);
  const [secondComent, setSecondComment] = useState(firstComment + 1);

  console.log(secondComent)

  

  const prevComment = () => {
    setFirstComment(firstComment === 0 ? comments.length - 1 : firstComment - 1);
  };
  //console.log('currentcomment es:', currentComment)
  //console.log('current comment ahora es', currentComment + 1)



  const nextComment = () => {
    setFirstComment(firstComment === comments.length - 1 ? 0 : firstComment + 1);
    
    
  };

  

  const desbordamiento = () => {

   
   
    const indice = comments.length - 2
    const adicion = firstComment + 1
    

    console.log('el tamaño del objeto es:', indice)
    console.log('firstcomment es:', firstComment)
    console.log('second  ahora es:', firstComment + 1)

    setSecondComment(adicion + 1)
    console.log('second comment', secondComent)
    

    if(indice === adicion){
      console.log('fin de los comentarios')
      
      console.log('valor first comment dentro del if', firstComment)
      return setSecondComment
     
    }
  
    nextComment() 
    
   
  }

  


  

  return (
    <div className="comment-carousel">

          <h2 className='tittle-wrapper'>TESTIMONIOS</h2>

          <section className='comment-block'>

              <div className="arrow prev" onClick={prevComment}>
                  &lt;
              </div>

              <section className='comments-wrapper' >
                  <div className='text-wrapper'>
                      <div className='title-wrapper'>
                          <h3>{comments[firstComment].name}</h3>
                          <hr />
                          

                      </div>
                      
                      <p>{comments[firstComment].review_text}</p>
                      <h4>{comments[firstComment].date}</h4>
                  </div>

                  <div className='text-wrapper'>
                      <div className='title-wrapper'>
                          <h3>{comments[secondComent].name }</h3>
                          <hr />
                          

                      </div>
                      
                      <p>{comments[secondComent].review_text}</p>
                      <h4>{console.log('js')}</h4>
                  </div>

                  
          
              </section>

              <div className="arrow next" onClick={desbordamiento} >
                  &gt;
              </div>

          </section>
            
        
    </div>
  );
};

export  {CommentCarousel};
