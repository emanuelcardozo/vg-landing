import { useState } from 'react';
import './Hero.css'

interface Item {
  title: string;
  description: string;
  image: string;
}

function Hero() {
  const [items, setItems] = useState<Item[]>([{
    title: "Más que solo ejercicios",
    description: "Diseñada para todos los niveles de fitness. Con la magia de la inteligencia artificial, obtén un entrenamiento guiado y corregido en tiempo real, directamente desde la comodidad de tu hogar.",
    image: "/fitness_6.jpg"
  }, {
    title: "Correciones en tiempo real", 
    description: "Transforma tu rutina de ejercicios con nuestro gimnasio virtual. Nuestra avanzada IA garantiza correcciones precisas en tiempo real, asegurando que cada repetición cuente hacia tu mejor versión.",
    image: "/fitness_1.webp"
  }, {
    title: "Descubre una nueva forma de entrenar",
    description: "La tecnología de inteligencia artificial revoluciona la manera en que te ejercitas, proporcionando correcciones personalizadas para maximizar tus resultados.", 
    image: "/fitness_2.jpg"
  }, {
    title: "Entrenador personal en la palma de tu mano",
    description: "Con nuestra app, la IA utiliza la cámara de tu smartphone para perfeccionar tu forma, llevando tus sesiones de entrenamiento a un nivel completamente nuevo.",
    image: "/fitness_3.jpg"
  }, {
    title: "Haz cada movimiento con confianza",
    description: "Nuestra app de gimnasio virtual utiliza inteligencia artificial para analizar y mejorar tu forma, garantizando que te muevas de manera segura y efectiva en cada ejercicio.",
    image: "/fitness_4.jpg"
  }, {
    title: "Experimenta la revolución del fitness en casa",
    description: "Nuestra app de gimnasio virtual con IA se adapta a tu ritmo, proporcionando correcciones instantáneas para un entrenamiento personalizado que se ajusta a tus objetivos.",
    image: "/fitness_5.jpg"
  }]);

  const next = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      newItems.push(firstItem as Item);
      return newItems;
    });
  }

  const prev = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      newItems.unshift(lastItem as Item);
      return newItems;
    });
  }

  return (
    <section id="hero">   
      <div className="hero">
        <ul className='slider'>
          {
            items.map((item) => (
              <li key={item.title} className='item' style={{ backgroundImage: `url(${item.image})`}}>
                <div className='item-content'>
                  <h2 className='item-title'>{item.title}</h2>
                  <p className='item-description'>{item.description}</p>
                </div>
              </li>
            ))
          }
        </ul>
        <nav className='slider-nav'>
          <button className='slider-nav-prev' onClick={prev}>{'<'}</button>
          <button className='slider-nav-next' onClick={next}>{'>'}</button>
        </nav>
      </div>
    </section>
  )
}

export default Hero
