import "./footerStyle.scss";

    
export const MiFooter = () => {
  return (
    <div className="myMargin">
        <div className='followInsta'>
            KITCHEN COMMUNITY EN INSTAGRAM
        </div>
        <div className="gallery">
            <a className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./assets/instagram/img1.jpg" className="gallery__image"></img>
                </figure>
            </a>
            <a className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./assets/instagram/img2.jpg" className="gallery__image"></img>
                </figure>
            </a>
            <a className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./assets/instagram/img3.jpg" className="gallery__image"></img>
                </figure>
            </a>
            <a className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./assets/instagram/img4.jpg" className="gallery__image"></img>
                </figure>
            </a>
            <a className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./assets/instagram/img5.jpg" className="gallery__image"></img>
                </figure>
            </a>
            <a className="gallery__link">
                <figure className="gallery__thumb">
                    <img src="./assets/instagram/img6.jpg" className="gallery__image"></img>
                </figure>
            </a>
        </div>
        <div className="copyRight">
            <p>Copyright © 2022 KITCHEN COMMUNITY</p>
            <p>
                <a>Terminos de uso</a>
                ' . '
                <a>Politica de privacidad</a>
                ' . '
                <a>Contacto</a>
            </p>
        </div>
    </div>
  );
}


