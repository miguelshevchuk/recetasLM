import "./footerStyle.scss";

    
export const MiFooter = () => {
  return (
    <div className="myMargin">
        <div className='followInsta'>
            KITCHEN COMMUNITY EN INSTAGRAM
        </div>
        <div class="gallery">
            <a class="gallery__link">
                <figure class="gallery__thumb">
                    <img src="./assets/instagram/img1.jpg" class="gallery__image"></img>
                </figure>
            </a>
            <a class="gallery__link">
                <figure class="gallery__thumb">
                    <img src="./assets/instagram/img2.jpg" class="gallery__image"></img>
                </figure>
            </a>
            <a class="gallery__link">
                <figure class="gallery__thumb">
                    <img src="./assets/instagram/img3.jpg" class="gallery__image"></img>
                </figure>
            </a>
            <a class="gallery__link">
                <figure class="gallery__thumb">
                    <img src="./assets/instagram/img4.jpg" class="gallery__image"></img>
                </figure>
            </a>
            <a class="gallery__link">
                <figure class="gallery__thumb">
                    <img src="./assets/instagram/img5.jpg" class="gallery__image"></img>
                </figure>
            </a>
            <a class="gallery__link">
                <figure class="gallery__thumb">
                    <img src="./assets/instagram/img6.jpg" class="gallery__image"></img>
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


