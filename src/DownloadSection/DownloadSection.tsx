import './DownloadSection.css'
import QRImage from '../assets/QR.png'
import Footer from '../Footer/Footer'

function DownloadSection() {
  return (
    <section id="download">
      <div className="download-container">
        <div className="details-container">
          <h1>Descarga la app!</h1>
          <p>Disponible sólo para Android</p>
        </div>
        <div className="qr-container">
          <img src={QRImage} alt="qr" />
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default DownloadSection
