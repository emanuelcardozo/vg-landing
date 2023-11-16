import './VideoSection.css'

function VideoSection() {
  return (
    <section className="video-container">
      <video autoPlay muted loop playsInline preload="yes">
        <source src="/VirtualGym.webm" type="video/webm" />
        Tu navegador no soporta el elemento de video.
      </video>
    </section>
  );
}

export default VideoSection