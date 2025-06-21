import "./FreeRasklad.css"
import gypsy from "./../../Img/pizda.png"
import blockstart from "./../../Img/newstarblock.png"
import avatar from "./../../Img/avatarwoman.svg";
import sphinx from "./../../Img/sphinx.svg"
import adameva from "./../../Img/adameva.svg"
import cricle from "./../../Img/cricle.svg"
import cardBack from "./../../Img/card.svg";

import { useEffect, useState } from "react";

export default function FreeRasklad() {

    const [numClickCard, setNumClickCard] = useState(false)
    const [plusClickCard, setPlusClickCard] = useState(0)

    const [womanVisible, setWomanVisible] = useState(false)
    const [dialogVisible, setDialogVisible] = useState(false)
    const [topText, setTopText] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setWomanVisible(true)
        }, 6000)

        setTimeout(() => {
            setDialogVisible(true)
        }, 6000)

        setTimeout(() => {
            setTopText(true)
        }, 6000)
    }, [])

    const [selectedCards, setSelectedCards] = useState<{ originalIndex: number; revealSrc: string }[]>([]);
    const [allCardsSelected, setAllCardsSelected] = useState(false);
    
  
    const cards = Array(3).fill(cardBack);
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

    <div className="free-count">

    <div className={topText ? `free-nav-main-block` : `free-nav-main-block-none`}> 
        <div className="free-nav-block">
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

    <div className={"free-woman-div"}>
        <div className="free-woman-wrapper">
            <img className="free-stars" src={blockstart} alt="" />
            <img className={womanVisible ? `free-woman-img-none` : "free-woman-img"} src={gypsy} alt="" />
        </div>
    </div>

    <div className={dialogVisible ? `free-dialog-div-none` : "free-dialog-div"}>
         <div className="free-dialog-block">
            <p className="free-text-welcom">
              Перед гаданием задумайся о своем вопросе. Создай тишину, расслабься и открой сердце мудрости  Таро!
            </p>
        </div>
    </div>

    <div className="free-container">
      <div className="free-cards-grid">
        {cards.map((_, index) => {
          const selected = selectedCards.find((c) => c.originalIndex === index);
          
          return (
            <div 
              key={index}
              className={`free-card-wrapper ${selected ? "free-card-selected" : ""}`}
              onClick={() => !selected && handleCardClick(index)}
            >
              <div className="free-card-inner">
                <div className="free-card-front">
                  <img src={cardBack} alt="Рубашка карты" />
                </div>
                <div className="free-card-back">
                  {selected && <img src={selected.revealSrc} alt="Открытая карта" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

  </div>
  )
}
