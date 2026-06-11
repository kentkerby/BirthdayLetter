import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>Happy Birthday Ma'am Jame!</p>
                    <p>
                        I hope your special day is filled with happiness, love, and wonderful moments. You deserve all the good things life has to offer because of your kindness and the positive impact you bring to others.

                    </p>
                    <p>
                        I hope your special day is filled with happiness, love, and wonderful moments. You deserve all the good things life has to offer because of your kindness and the positive impact you bring to others.
                    </p>
                    <p style={{ textAlign: "right" }}>with love,</p>
                    <p style={{ textAlign: "right" }}>kerby</p>
                </div>
            </div>

            <div className="title">
                <p>needs more?</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/pic1.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text"></span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/pic2.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text"></span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/pic3.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text"></span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/pic4.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text"></span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                That's It!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
