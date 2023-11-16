import { useState } from 'react';
import './App.css'

interface Item {
  title: string;
  description: string;
  image: string;
}

function App() {
  const [items, setItems] = useState<Item[]>([{ 
    title: "Image 1", 
    description: "1 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quibusdam tempora ut quaerat incidunt mollitia, esse nostrum libero. Rerum vel blanditiis laborum esse ex excepturi aspernatur eaque quisquam omnis voluptatibus.",
    image: "https://picsum.photos/400"
  }, {
    title: "Image 2",
    description: "2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quibusdam tempora ut quaerat incidunt mollitia, esse nostrum libero. Rerum vel blanditiis laborum esse ex excepturi aspernatur eaque quisquam omnis voluptatibus.", 
    image: "https://picsum.photos/600"
  }, {
    title: "Image 3",
    description: "3 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quibusdam tempora ut quaerat incidunt mollitia, esse nostrum libero. Rerum vel blanditiis laborum esse ex excepturi aspernatur eaque quisquam omnis voluptatibus.",
    image: "https://picsum.photos/800"
  }, {
    title: "Image 4",
    description: "4 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quibusdam tempora ut quaerat incidunt mollitia, esse nostrum libero. Rerum vel blanditiis laborum esse ex excepturi aspernatur eaque quisquam omnis voluptatibus.",
    image: "https://picsum.photos/1000"
  }, {
    title: "Image 5",
    description: "5 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quibusdam tempora ut quaerat incidunt mollitia, esse nostrum libero. Rerum vel blanditiis laborum esse ex excepturi aspernatur eaque quisquam omnis voluptatibus.",
    image: "https://picsum.photos/1200"
  }, {
    title: "Image 6",
    description: "6 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quibusdam tempora ut quaerat incidunt mollitia, esse nostrum libero. Rerum vel blanditiis laborum esse ex excepturi aspernatur eaque quisquam omnis voluptatibus.",
    image: "https://picsum.photos/1400"
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
    <>
      <ul className='slider'>
        {
          items.map((item) => (
            <li key={item.title} className='item' style={{ backgroundImage: `url(${item.image})` }}>
              <div className='item-content'>
                <h2 className='item-title'>{item.title}</h2>
                <p className='item-description'>{item.description}</p>
                <button className='item-button'>Learn More</button>
              </div>
            </li>
          ))
        }
      </ul>
      <nav className='slider-nav'>
        <button className='slider-nav-prev' onClick={prev}>{'<'}</button>
        <button className='slider-nav-next' onClick={next}>{'>'}</button>
      </nav>
    </>
  )
}

export default App
