import './App.css'

function App() {
  return (
    <main>
      <ul className='slider' >
        <li className='item' style={{ backgroundImage: "url('https://picsum.photos/400')" }}>
          <div className='item-content'>
            <h2 className='item-title'>Vite + React</h2>
            <p className='item-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quibusdam tempora ut quaerat incidunt mollitia, esse nostrum libero. Rerum vel blanditiis laborum esse ex excepturi aspernatur eaque quisquam omnis voluptatibus.</p>
            <button className='item-button'>Learn More</button>
          </div>
        </li>
      </ul>
      <nav className='slider-nav'>
        <button className='slider-nav-prev'>Prev</button>
        <button className='slider-nav-next'>Next</button>
      </nav>
    </main>
  )
}

export default App
