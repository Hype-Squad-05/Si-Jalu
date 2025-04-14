function Banner() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const bannerData = [
  {
    id: 1,
    title: "Selamat datang di Si Jalu",
    icon: "fas fa-handshake"
  },
  {
    id: 2,
    title: "Aplikasi sedang dalam pengembangan",
    icon: "fas fa-code"
  },
  {
    id: 3,
    title: "Jelajahi fitur Si Jalu",
    icon: "fas fa-compass"
  }];


  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container" data-id="zy682py3q" data-path="components/Banner.js">
      {bannerData.map((slide, index) =>
      <div
        key={slide.id}
        className={`banner-slide ${index === currentSlide ? 'active' : ''}`} data-id="4f9xl49qd" data-path="components/Banner.js">

          <i className={`${slide.icon} banner-icon`} data-id="kc8bt7b8c" data-path="components/Banner.js"></i>
          <h3 className="banner-title" data-id="08hpbnuge" data-path="components/Banner.js">{slide.title}</h3>
        </div>
      )}
      
      <div className="banner-dots" data-id="7770lkp2w" data-path="components/Banner.js">
        {bannerData.map((_, index) =>
        <div
          key={index}
          className={`banner-dot ${index === currentSlide ? 'active' : ''}`}
          onClick={() => setCurrentSlide(index)} data-id="1im0o63zl" data-path="components/Banner.js">
        </div>
        )}
      </div>
    </div>);

}