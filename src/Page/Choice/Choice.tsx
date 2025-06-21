import { useState } from "react";
import "./Choice.css";
import avatar from "./../../Img/avatarwoman.svg";
import payment from "./../../Img/payment.svg";
import telegram from "./../../Img/telegram.svg";

type PaymentOption = 'payment' | 'telegram' | null;

export default function Choice() {
  const [selectedOption, setSelectedOption] = useState<PaymentOption>(null);

  const handleOptionSelect = (option: 'payment' | 'telegram') => {
    setSelectedOption(option);
  };

  return (
    <div className="choice-count">
      <div className="cho-main-block">
        <div className="cho-block">
          <img className="cho-dialog-ava-img" src={avatar} alt="" />
          <p className="cho-first-text-welcom">
            Выберите способ оплаты
          </p>
        </div>
      </div>

      <div className="cho-star-list">
        <div 
          className="cho-star-div" 
          onClick={() => handleOptionSelect('payment')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleOptionSelect('payment')}
        >
          <div className={`cho-block-buy ${selectedOption === 'payment' ? 'selected' : ''}`}>
            <img className="cho-img" src={payment} alt="Payment" />
          </div>
        </div>

        <div 
          className="cho-star-div" 
          onClick={() => handleOptionSelect('telegram')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleOptionSelect('telegram')}
        >
          <div className={`cho-block-buy ${selectedOption === 'telegram' ? 'selected' : ''}`}>
            <img className="cho-tg-img" src={telegram} alt="Telegram wallet" />
            <p className="tg-p">Telegram wallet</p>
          </div>
        </div>
      </div>

      <div className="btn-cho-div">
        <button 
          className="btn-cho" 
          disabled={!selectedOption}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
}