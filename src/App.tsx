import Hero from './Hero/Hero';
import Logo from './assets/Logo.png';
import VideoSection from './VideoSection/VideoSection';
import DownloadSection from './DownloadSection/DownloadSection';
import './App.css'

function App() {
  return (
    <>
      <header className='header'>
        <img src={Logo} alt='React Logo' className='header-logo' />
        <h2 className='header-title'>Virtual Gym</h2>
      </header>
      <main>
        <VideoSection />
        <Hero />
        <DownloadSection />
      </main>
    </>
  )
}

export default App
