import { useState, useEffect, useRef } from "react";
import "./Rasklad.css";
import gypsy from "./../../Img/pizda.png";
import blockstart from "./../../Img/newstarblock.png";
import card from "./../../Img/card.svg";
import avatar from "./../../Img/avatarwoman.svg";
import sphinx from "./../../Img/sphinx.svg"
import adameva from "./../../Img/adameva.svg"
import cricle from "./../../Img/cricle.svg"
import { addRasklad } from "../../Redux/historySlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Rasklad() {
  const [showWoman, setShowWoman] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [moveUp, setMoveUp] = useState(false);
  const [showSecondDialog, setShowSecondDialog] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [navtext, setNavText] = useState(false);
  const [lenghtCard, setLenghtCard] = useState(false)
  const [manyClick, setManyClick] = useState(0)
  const [howClick, setHowClick] = useState<"num" | "text">("text")
  const [showButton, setShowButton] = useState(false);
  const [finalWoman, setFinalWoman] = useState(false)
  const [finalWomanText, setFinalWomanText] = useState(false)
  const [fadeOutCards, setFadeOutCards] = useState(false);
  const [finalText, setFinalText] = useState(false);

  const [selectedCards, setSelectedCards] = useState<{ originalIndex: number; revealSrc: string }[]>([]);
  const revealedCards = [sphinx, adameva, cricle];
  const [allCardsSelected, setAllCardsSelected] = useState(false);

  const cards = Array(7).fill(card);

  const [wrapper, setWrapper] = useState<"card" | "result" | "secondResult" | "info" | "exit" | "farewell">("card")

  const dispatch = useDispatch();
  const interpretationRef = useRef<HTMLDivElement>(null)

  const handleWrapper = () => {
    setWrapper("result");
  };

  useEffect(() => {
    if (wrapper === "result") {
      const text = interpretationRef.current?.innerText || "";
      dispatch(addRasklad({
        cards: selectedCards,
        interpretation: text
      }));
    }
  }, [wrapper]);

  useEffect(() => {
    if (wrapper === "secondResult") {
      const text = interpretationRef.current?.innerText || "";
      dispatch(addRasklad({
        cards: selectedCards,
        interpretation: text
      }));
    }
  }, [wrapper]);

  const nextFate = () => {
    setWrapper("info")
  }

  const handleExit = () => {
    setWrapper("exit")
  }

  const handleFarewell = () => {
    setWrapper("farewell")
  }

  const handleSecondResult = () => {
    setWrapper("secondResult")
  }

  const handleCardClick = (index: number) => {
    if (selectedCards.length >= 3 || allCardsSelected) return;
  
    if (selectedCards.find((card) => card.originalIndex === index)) return;
  
    const availableReveals = revealedCards.filter(
      (img) => !selectedCards.find((card) => card.revealSrc === img)
    );
  
    const randomReveal =
      availableReveals[Math.floor(Math.random() * availableReveals.length)];
  
    const newSelectedCards = [
      ...selectedCards,
      { originalIndex: index, revealSrc: randomReveal },
    ];
  
    setSelectedCards(newSelectedCards);
    setHowClick("num");
    setManyClick(newSelectedCards.length);
  
    
    if (newSelectedCards.length === 3) {
      setTimeout(() => setAllCardsSelected(true), 1000);
      setTimeout(() => setShowButton(true), 6000);

      setTimeout(() => setNavText(false), 2000)
      setTimeout(() => setFinalWoman(true), 2900)
      setTimeout(() => setFinalWomanText(true), 3500)

      setTimeout(() => {
      setFadeOutCards(true);
      setFinalText(true);
    }, 5100);

    }

  };

  useEffect(() => {

    const timer1 = setTimeout(() => {
      setShowWoman(true), setTimeout(() => {setHidden(true);}, 13000);}, 500);

    const timer2 = setTimeout(() => setShowDialog(true), 2500);
    const timer3 = setTimeout(() => {
      setShowDialog(false);
      setMoveUp(true);
    }, 7500);
    const timer4 = setTimeout(() => setShowSecondDialog(true), 7910);
    const timer5 = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setHidden(true);
      }, 900);
    }, 11000);
    const timer6 = setTimeout(() => setNavText(true), 12000);
    const timer7 = setTimeout(() => setLenghtCard(true), 7910)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, []);

  return ( 
    <>

    <div className="rasklad-count">
    {wrapper === "card" && (<div> 

      <div className={`ras-woman-div ${showWoman ? "visible" : ""} ${moveUp ? "move-up" : ""}`}>
        <div className="ras-woman-wrapper">
          <img
            className={`ras-stars ${showWoman ? "visible" : ""} ${moveUp ? "move-up" : ""}`}
            src={blockstart}
            alt="stars"
          />
          <img
            className={`ras-woman-img ${showWoman ? "visible" : ""} ${moveUp ? "move-up" : ""} ${fadeOut ? "fade-out" : ""} ${hidden ? "hidden" : ""}`}
            src={gypsy}
            alt="gypsy"
          />
        </div>
      </div>

      {finalWoman ?
        (<>
        <div className="ras-woman-div-final">
          <div className="ras-woman-wrapper-final">
            <img className="ras-woman-img-final" src={gypsy} alt="gypsy"/>
          </div>
        </div>
        </>)
        :
        (<></>)}

        {finalWomanText ? 
        (<>
          <div className={`ras-second-dialog-div-final ${finalWomanText ? "show" : ""}`}>
            <div className="ras-second-dialog-block">
              {finalText ? 
              (
              <p className="ras-second-text-welcom">
                Звезды шепчут... Карты готовы говорить.
                Готова раскрыть карты судьбы? Выбери, как ты хочешь узнать ответ
              </p>
              ) 
              : 
              (
              <p className="ras-second-text-welcom">
                Гадаю для тебя... Скоро ты заглянешь в свою судьбу!
              </p>
              )}
            </div>
          </div>
        </>) 
        :
        (<></>)}

      <div className="nav-main-block">
        <div className={`nav-block ${navtext ? "visible" : ""}`}>
          <img className="ras-dialog-ava-img" src={avatar} alt="" />

          {howClick === "text" && (
            <p className="ras-first-text-welcom">
              Нажми на карту, чтобы выбрать!
            </p>
          )}
          
          {howClick === "num" && (
            <p className="ras-first-text-welcom">
             Выбрано {manyClick}/3
            </p>
          )}

        </div>
      </div>

      <div className={`ras-second-dialog-div 
        ${showSecondDialog ? "visible" : ""} 
        ${fadeOut ? "fade-out" : ""} 
        ${hidden ? "hidden" : ""}
      `}>
        <div className="ras-second-dialog-block">
          <p className="ras-second-text-welcom">
            Нажми на карту, чтобы выбрать!
          </p>
        </div>
      </div>

      <div className={`ras-dialog-div ${showDialog ? "visible" : ""} 
        ${fadeOut ? "fade-out" : ""} 
        ${hidden ? "hidden" : ""}
      `}>
        <div className="ras-dialog-block">
          <p className="ras-first-text-welcom">
            Перед гаданием задумайся о своем вопросе. Создай тишину, расслабься и открой сердце мудрости Таро!
          </p>
        </div>
      </div>

    <div className="card-main-block">
      <div className={`card-block ${lenghtCard ? "visible" : ""}`}>
      <div className="card-div">
        {cards.map((_, index) => {
          const selected = selectedCards.find((c) => c.originalIndex === index);
          const selectedPosition = selectedCards.findIndex((c) => c.originalIndex === index);

          if (allCardsSelected && !selected) {
            return null;
          }

          return (
            <img
            key={index}
            className={`card-img card-${index} ${
              selected ? `selected-card pos-${selectedPosition}` : ""
            } ${allCardsSelected ? "final-position" : ""}
            ${fadeOutCards ? "fade-out-cards" : ""}`}
            src={selected ? selected.revealSrc : card}
            alt={`card-${index}`}
            onClick={() => handleCardClick(index)}
          />
          );
        })}

        {showButton ? 
          (<>
          <div className="btn-ras-div">
            <button onClick={handleWrapper} className="btn-ras">Подробный анализ</button>
            <button onClick={handleSecondResult} className="btn-ras-second">Быстрые подсказки</button>
          </div>
          </>)
          :
          (<>
          </>)
        }
      </div>
      </div>
    </div>
    
    </div>)} 
    
    {wrapper === "result" && (<>
      
      <NavLink to="/history">
        <div className="answer-main-nav-text-block">
          <div className="answer-nav-text-div">          
            <img className="ras-dialog-ava-img" src={avatar} alt="" />
              <p className="ras-second-text-welcom">
                  Я сохранила твой расклад! Загляни к нему в профиле — он ждет тебя 3 дня.
              </p>
          </div>
        </div>
      </NavLink>

        <div className="anser-card-div">
          {selectedCards.map((card, index) => (
            <img
              key={index}
              src={card.revealSrc}
              alt={`selected-card-${index}`}
              className="final-selected-card"
            />
          ))}
        </div>

        <div className="answer-ras-dialog-div" ref={interpretationRef}>
        <div className="answer-ras-dialog-block">
          <p className="ras-first-text-welcom">
            Карты раскрывают суть текущей ситуации как тонко переплетённую нить прошлого, настоящего и будущего. 
            Всё, что происходит сейчас, — не случайность. 
            Это результат внутренних выборов и внешних сигналов, на которые ты, возможно, пока не обратила внимания.<br></br>

            <br></br>Прошлое оставило отпечаток, но именно настоящая точка требует осознанности. 
            Карты подсказывают: важно не спешить с выводами, а прислушаться к себе — истина уже рядом.<br></br>

            <br></br>Будущее не высечено в камне. 
            Оно меняется с каждым твоим шагом. 
            Этот расклад — не приговор, а подсказка. 
            Используй её, чтобы идти вперёд увереннее и мягче.
          </p>
        </div>
      </div>

      
      <div className="answer-btn-ras-div">
        <button onClick={nextFate} className="answer-btn-ras">Продолжить судьбу</button>
      </div>

      <div className="btn-welcome-div">
          <button onClick={handleFarewell} className="btn-welcome-tips">Выйти</button>
      </div>
      
    </>)}

    {wrapper === "secondResult" && (<>
      
      <NavLink to="/history">
        <div className="answer-main-nav-text-block">
          <div className="answer-nav-text-div">          
            <img className="ras-dialog-ava-img" src={avatar} alt="" />
            <p className="ras-second-text-welcom">
                Я сохранила твой расклад! Загляни к нему в профиле — он ждет тебя 3 дня.
            </p>
          </div>
        </div>
      </NavLink>

      <div className="anser-card-div">
        {selectedCards.map((card, index) => (
          <img
            key={index}
            src={card.revealSrc}
            alt={`selected-card-${index}`}
            className="final-selected-card"
          />
        ))}
      </div>

      <div className="answer-ras-dialog-div" ref={interpretationRef}>
      <div className="answer-ras-dialog-block">
        <p className="ras-first-text-welcom">
          Это потрясающе! Действуй прямо сейчас!
        </p>
      </div>
    </div>

    
    <div className="answer-btn-ras-div-second">
      <button onClick={nextFate} className="answer-btn-ras">Продолжить судьбу</button>
    </div>

    <div className="btn-welcome-div">
        <button onClick={handleFarewell} className="btn-welcome-tips">Выйти</button>
    </div>
    
    </>)}
    
    {wrapper === "info" && (<>
      <div className="info-woman-div-final">
          <div className="info-woman-wrapper-final">
            <img className="info-ras-stars" src={blockstart} alt="stars"/>
            <img className="info-woman-img-final" src={gypsy} alt="gypsy"/>
          </div>
      </div>

      <div className="info-ras-second-dialog-div-final">
          <div className="ras-second-dialog-block">
            <p className="ras-second-text-welcom">
              Готовы  раскрыть больше тайн? Полный отчет за звезды ждет тебя!
            </p>
          </div>
      </div>

      <div className="btn-welcome-div">
        <NavLink to="/payrasklad">
          <button onClick={handleExit} className="btn-welcome">Хочу задать уточняющий вопрос</button>
        </NavLink>
      </div>

      <div className="btn-welcome-div">
          <button onClick={handleExit} className="btn-welcome-tips">Не хочу</button>
      </div>

    </>)}

    {wrapper === "exit" && (<>
      <div className="info-woman-div-final">
          <div className="info-woman-wrapper-final">
            <img className="info-ras-stars" src={blockstart} alt="stars"/>
            <img className="info-woman-img-final" src={gypsy} alt="gypsy"/>
          </div>
      </div>

      <div className="info-ras-second-dialog-div-final">
          <div className="ras-second-dialog-block">
            <p className="ras-second-text-welcom">
              Ты исчерпала 2 бесплатных расклада! Хочешь глубже заглянуть в тайны судьбы? 
            </p>
          </div>
      </div>

      <div className="btn-welcome-div">
        <NavLink to="/starsshop">
          <button className="btn-welcome">Купи звезды!</button>
        </NavLink>
      </div>

      <div className="btn-welcome-div">
          <button onClick={handleFarewell} className="btn-welcome-tips">Выйти</button>
      </div>
    
    </>)}

    {wrapper === "farewell" && (<>
      <div className="info-woman-div-final">
          <div className="info-woman-wrapper-final">
            <img className="info-ras-stars" src={blockstart} alt="stars"/>
            <img className="info-woman-img-final" src={gypsy} alt="gypsy"/>
          </div>
      </div>

      <div className="info-ras-second-dialog-div-final">
          <div className="ras-second-dialog-block">
            <p className="ras-second-text-welcom">
              Возвращайся, когда захочешь найти ответы и погрузиться в магию Таро.
            </p>
          </div>
      </div>

      <div className="info-ras-second-dialog-div-final">
          <div className="ras-second-dialog-block">
            <p className="ras-second-text-welcom">
              До скорого – желаю чудесного дня и лёгкости во всём!
            </p>
          </div>
      </div>
    </>)}

  </div>
    
    </>
  );
}
