import "./Welcome.css"
import pizda from "./../../Img/pizda.png"
import blockstart from "./../../Img/newstarblock.png"
import { useRef, useState } from "react"
import { Select } from 'antd';
import { NavLink } from "react-router-dom"

export default function Welcome() {
    const [startBtn, setStartBtn] = useState(true)
    const [name, setName] = useState("")
    const [zodiac, setZodiac] = useState("")
    const [gender, setGender] = useState("") // Добавлено состояние для пола
    const [analysis, setAnalysis] = useState(true)
    const [cardMod, setCardMod] = useState<`option` | `detailed` | "short">(`option`)
    const inputRef = useRef<HTMLInputElement>(null);
    const inputzod = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        setName('');
        inputRef.current?.focus();
      };

      const handleClearZod = () => {
        setZodiac(``)
        inputRef.current?.focus();
      }


      
      function start () {
         setStartBtn(!startBtn)
      }

      function analis () {
        setAnalysis(!analysis)
      }

      function handleCardDetalied () {
        setCardMod(`detailed`)
      }

      function handleCardShort () {
        setCardMod("short")
      }

      const isFormValid = name.trim() !== "" && zodiac.trim() !== "" && gender !== ""

  return (
    <div className="welcome-count">

        <div className="woman-div">
          <div className="woman-wrapper">
            <img className="stars" src={blockstart} alt="" />
            <img className="woman-img" src={pizda} alt="" />
          </div>
        </div>

        {startBtn ? (<>
            <div className="dialog-div">
                <div className="dialog-block">
                <p className="first-text-welcom">
                    Привет! Я твоя Таро-подружка, 
                    готова раскрыть тайны твоей судьбы! 
                    Хочешь магический расклад только для тебя?
                </p>

                <p className="second-text-welcom">Расскажи о себе</p>
                <p className="second-text-welcom">и</p>
                </div>
            </div>

            <div className="btn-welcome-div">
                <button onClick={start} className="btn-welcome">Начнём</button>
            </div>
        </>
        ):(
        <>

        {analysis ? 
        (
        <>
            <div className="dialog-div">
                <div className="dialog-block">
                    <p className="first-text-welcom">
                        Расскажи о себе. Чем больше ты расскажешь о себе, тем точнее расклад откроет твою судьбу!
                    </p>
                </div>
            </div>
    
            <div className="input-div-welcome">
                <div className="input-container">
                    <input className="input-welcome"
                        ref={inputRef}
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Твое имя" 
                        type="text" 
                    />
                    <button onClick={handleClear} className="clear-btn"></button>
                </div>

                <div className="input-container">
                    <input className="input-welcome"
                        ref={inputzod}
                        value={zodiac} 
                        onChange={(e) => setZodiac(e.target.value)} 
                        placeholder="Знак зодиака" 
                        type="text" 
                    />
                    <button onClick={handleClearZod} className="clear-btn"></button>
                </div>

                <div className="input-container">
                <Select
                    showSearch
                    className="my-custom-select"
                    classNames={{popup: {root: 'my-custom-dropdown',},}}
                    style={{ maxHeight: 200}}
                    getPopupContainer={() => document.body}
                    dropdownAlign={{ points: ['tl', 'bl'] }}
                    placeholder="Пол"
                    optionFilterProp="label"
                    value={gender || undefined} // Управляемое значение
                    onChange={(value) => setGender(value)} // Сохраняем выбранное значение
                    filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={[
                    {
                        value: '1',
                        label: 'Мужчина',
                    },
                    {
                        value: '2',
                        label: 'Женщина',
                    },
                    ]}
                    onSearch={() => {}} // пустая функция — ввод игнорируется
                    onInputKeyDown={(e) => e.preventDefault()} // блокирует печать
                />
                </div>

            </div>

            <div className="btn-welcome-div">
                <button disabled={!isFormValid} onClick={analis} className="btn-welcome">Продолжить</button>
            </div>
        </>
        ):(
        <>
          {cardMod === `option` && (
        <>
            <div className="dialog-div">
                <div className="dialog-block">
                    <p className="first-text-welcom">
                        Хочешь глубокую магию или яркие подсказки?  
                        Я подготовлю расклад, который вдохновит тебя и приведет к успеху!
                    </p>
                </div>
            </div>

            <div className="btn-welcome-div">
                <button onClick={handleCardDetalied} className="btn-welcome">Подробный анализ</button>
            </div>

            <div className="btn-welcome-div">
                <button onClick={handleCardShort} className="btn-welcome-tips">Быстрые подсказки</button>
            </div>
        </>
        )}

        {cardMod === `detailed` && (
            <>
            <div className="dialog-div">
                <div className="dialog-block">
                    <p className="first-text-welcom">
                        Твой путь к истине начинается здесь... 
                    </p>
                </div>
            </div>

            <div className="btn-welcome-div">
              <NavLink to="/shop">
                <button className="btn-welcome final-btn-welcom">Открой свою первую карту</button>
              </NavLink>
            </div>
            </>
        )}

        {cardMod === "short" && (
            <>
            <div className="dialog-div">
                <div className="dialog-block">
                    <p className="first-text-welcom">
                        Это потрясающе! Действуй прямо сейчас!
                    </p>
                </div>
            </div>

            <div className="btn-welcome-div">
             <NavLink to="/shop">
                <button className="btn-welcome final-btn-welcom">Открой свою первую карту</button>
             </NavLink>
            </div>
            </>
        )}

        </>
        )}
        </>
        )}
    </div>
  )
}
