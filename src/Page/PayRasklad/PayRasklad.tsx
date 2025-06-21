import { useRef, useState, useCallback } from "react";
import "./PayRasklad.css";
import gypsy from "./../../Img/pizda.png";
import blockstart from "./../../Img/newstarblock.png";
import cardBack from "./../../Img/card.svg";
import avatar from "./../../Img/avatarwoman.svg";
import sphinx from "./../../Img/sphinx.svg";
import adameva from "./../../Img/adameva.svg";
import cricle from "./../../Img/cricle.svg";

export default function PayRasklad() {
  const [WomanVisible, setWomanVisible] = useState(true)
  const [btnVisible, setBtnVisible] = useState(false)
  const [cardVisible, setCardVisible] = useState(false)

  const [newDialog, setNewDialog] = useState(true)
  const [finalDialog, setFinalDialog] = useState(true)

  const [topText, setTopText] = useState(true)
  const [numClickCard, setNumClickCard] = useState(false)
  const [plusClickCard, setPlusClickCard] = useState(0)

  const handleContinue = () => {
    setTimeout(() => {
      setBtnVisible(true);
    }, 1000); 

    setTimeout(() => {
      setCardVisible(true)
    }, 1000)

    setTimeout(() => {
      setNewDialog(!newDialog)
    }, 1000)

    setTimeout(() => {
      setWomanVisible(!WomanVisible)
    }, 6000)

    setTimeout(() => {
      setFinalDialog(!finalDialog)
    }, 6000)

    setTimeout(() => {
      setTopText(!topText)
    }, 6000)
  }



  const [formData, setFormData] = useState({timeBirth: "", placeBirth: "", family: "",});

  const inputRefs = {
    timeBirth: useRef<HTMLInputElement>(null),
    placeBirth: useRef<HTMLInputElement>(null),
    family: useRef<HTMLInputElement>(null),
  };

  const handleClearField = useCallback((fieldName: keyof typeof formData) => {
    setFormData((prev) => ({ ...prev, [fieldName]: "" }));
    inputRefs[fieldName].current?.focus();
  }, []);




  const [selectedCards, setSelectedCards] = useState<{ originalIndex: number; revealSrc: string }[]>([]);
  const [allCardsSelected, setAllCardsSelected] = useState(false);
  
  const cards = Array(5).fill(cardBack);
    // Карты для открытия
    const revealedCards = [adameva, cricle, sphinx];
  
  
    const handleCardClick = (index: number) => {
      if (selectedCards.length >= 3 || allCardsSelected) return;
      if (selectedCards.some((card) => card.originalIndex === index)) return;
  
      const availableReveals = revealedCards.filter(
        (img) => !selectedCards.some((card) => card.revealSrc === img)
      );
  
      const randomReveal = availableReveals[Math.floor(Math.random() * availableReveals.length)];
      setSelectedCards((prev) => [...prev, { originalIndex: index, revealSrc: randomReveal }]);
  
      if (selectedCards.length + 1 === 3) {
        setAllCardsSelected(true);
      }

      setNumClickCard(true)
      setPlusClickCard(plusClickCard + 1)
    };

  return (
    <div className="pay-count">

    <div className={topText ? "pay-nav-main-block" : "topTextVisible"}>
        <div className="pay-nav-block">
          <img className="ras-dialog-ava-img" src={avatar} alt="" />
            {numClickCard ? 
            (<>
            <p className="ras-first-text-welcom">
              Выбрано: {plusClickCard}/3
            </p>
            </>)
            : 
            (<>
            <p className="ras-first-text-welcom">
              Нажми на карту, чтобы выбрать!
            </p>
            </>)}
        </div>
    </div>


      <div className="pay-woman-div">
          <div className="pay-woman-wrapper">
            <img className="pay-stars" src={blockstart} alt="Звёздный фон" />
            {WomanVisible ? 
            (<img className="pay-woman-img" src={gypsy} alt="Гадалка" />)
             : 
             (<></>)}
          </div>
      </div>


      {newDialog ? 
        (<>
        <div className="pay-dialog-div">
            <div className="pay-dialog-block">
              <p className="pay-first-text-welcom">
                Расскажи о себе. Чем больше ты расскажешь о себе, тем точнее
                расклад откроет твою судьбу!
              </p>
            </div>
        </div>
        </>) 
        : 
        (<>

        {finalDialog ? 
        (<>
        <div className="pay-dialog-div-second">
          <div className="pay-dialog-block">
            <p className="pay-first-text-welcom">
              Перед гаданием задумайся о своем вопросе. Создай тишину, расслабься и открой сердце мудрости  Таро!
            </p>
          </div>
        </div>
        </>)
        : 
        (<></>)}
        </>)}


      {!btnVisible && (
        <>
          <div className="input-div-pay">
            <div className="input-container">

              <input className="input-pay" ref={inputRefs.timeBirth} value={formData.timeBirth}
               onChange={(e) => setFormData((prev) => ({ ...prev, timeBirth: e.target.value }))}
               placeholder="Время рождения"
               type="text"/>

              <button onClick={() => handleClearField("timeBirth")} className="pay-clear-btn" aria-label="Очистить время рождения"/>
            </div>

            <div className="input-container">
              <input className="input-pay" ref={inputRefs.placeBirth} value={formData.placeBirth}
               onChange={(e) => setFormData((prev) => ({ ...prev, placeBirth: e.target.value }))}
               placeholder="Место рождения"
               type="text"/>

              <button onClick={() => handleClearField("placeBirth")} className="pay-clear-btn" aria-label="Очистить место рождения"/>
            </div>

            <div className="input-container">
              <input className="input-pay" ref={inputRefs.family} value={formData.family}
              onChange={(e) => setFormData((prev) => ({ ...prev, family: e.target.value }))}
              placeholder="Семейное положение"
              type="text"/>

              <button onClick={() => handleClearField("family")} className="pay-clear-btn" aria-label="Очистить семейное положение"/>
            </div>
          </div>

          <div className="pay-btn-ras-div">
            <button className="pay-btn-ras" onClick={handleContinue} disabled={
              !formData.timeBirth && !formData.placeBirth && !formData.family}>
                Продолжить
            </button>
          </div>

          <div className="btn-welcome-div">
            <button className="btn-welcome-tips">Не хочу</button>
          </div>
        </>
      )}


      {cardVisible && (
        <div className="pay-container">
        <div className="pay-cards-grid">
          {cards.map((_, index) => {
            const selected = selectedCards.find((c) => c.originalIndex === index);
            
            return (
              <div 
                key={index}
                className={`pay-card-wrapper ${selected ? "pay-card-selected" : ""}`}
                onClick={() => !selected && handleCardClick(index)}
              >
                <div className="pay-card-inner">
                  <div className="pay-card-front">
                    <img src={cardBack} alt="Рубашка карты" />
                  </div>
                  <div className="pay-card-back">
                    {selected && <img src={selected.revealSrc} alt="Открытая карта" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      )}

    </div>
  );
}
