import Hero from './Hero/Hero';
import Logo from './assets/Logo.png';
import './App.css'

function App() {
  return (
    <>
      <header className='header'>
        <img src={Logo} alt='React Logo' className='header-logo' />
        <h2 className='header-title'>Virtual Gym</h2>
      </header>
      <main>
        <Hero />
        <Hero />
      </main>
    </>
  )
}

export default App
