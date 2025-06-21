import "./History.css"
import gypsy from "./../../Img/pizda.png";
import blockstart from "./../../Img/newstarblock.png";
import { useSelector } from "react-redux";
import type { RootState } from "./../../Redux/store";
import { useState } from "react";

export default function History() {
    const [historyRas, setHistoryRas] = useState<"hiHist" | "Hist">("hiHist")
    const history = useSelector((state: RootState) => state.history.entries);
    
    function historyCheck() {
      setHistoryRas("Hist")
    }

  return (
  <>
  {historyRas === "hiHist" && (
    <div className="history-count">
      <p className="hitsory-title">Твои раскладки</p>

      <div className="history-woman-div">
         <div className="history-woman-wrapper">
            <img className="history-stars" src={blockstart} alt="stars"/>
            <img className="history-woman-img" src={gypsy}alt="gypsy"/>
         </div>
      </div>

      <div className="history-dialog-div">
        <div className="history-dialog-block">
          <p className="history-first-text-welcom">
            Перед гаданием задумайся о своем вопросе. Создай тишину, расслабься и открой сердце мудрости Таро!
          </p>
        </div>
      </div>

      <div className="history-btn-div">
        <button onClick={historyCheck} className="history-btn">Перейти к раскладкам</button>
      </div>
    </div>
  )}

  {historyRas === "Hist" && (
    <div className="history-count">
      <p className="hitsory-title">Твои раскладки</p>
      <div className="hist-card-div">
        {history.length === 0 && <p>Нет раскладов</p>}

        {history.map(entry => (
        <div key={entry.id} className="history-entry">

          <div className="data-history-div">
            <p className="data-history-p">{entry.date}</p>
          </div>

          <div className="cards-history">
            {entry.cards.map((card, idx) => (
              <img key={idx} src={card.revealSrc} alt={`card-${idx}`} />
            ))}
          </div>

          <div className="answer-ras-dialog-div">
            <div className="answer-ras-dialog-block">
              <p className="ras-first-text-welcom">{entry.interpretation}</p>
            </div>
          </div>

        </div>
        ))}
      </div>
    </div>
  )}
  </>
  )
}
