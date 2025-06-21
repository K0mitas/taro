import "./Profile.css";
import ava from "./../../Img/faviconuser.jpg";
import pername from "./../../Img/pername.svg";
import AnimatedToggle from "./AnimatedToggle";
import { useState, useRef, useEffect } from "react";

export default function Profile() {
    const [userName, setUserName] = useState("User");
    const [isEditing, setIsEditing] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);
    const measureRef = useRef<HTMLSpanElement>(null);
  
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setUserName(newValue);
        
        // Немедленное обновление ширины при изменении
        if (measureRef.current && inputRef.current) {
          measureRef.current.textContent = newValue || ' ';
          const newWidth = Math.max(measureRef.current.offsetWidth + 10, 40);
          inputRef.current.style.width = `${newWidth}px`;
        }
      };
  
      useEffect(() => {
        if (isEditing && inputRef.current && measureRef.current) {
            // Инициализация ширины при начале редактирования
            measureRef.current.textContent = userName || ' ';
            const newWidth = Math.max(measureRef.current.offsetWidth + 10, 40);
            inputRef.current.style.width = `${newWidth}px`;
            
            // Фокусируем и выделяем текст при редактировании
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    const handleSaveName = () => {
      setIsEditing(false);
    };
  
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSaveName();
      }
    };

    return (
        <div className="profile-count">
            <div className="profile-ava-block">
                <div className="profile-ava-div">
                    <img className="profile-ava-img" src={ava} alt="" />
                </div>
            </div>

            <div className="profile-name-block" style={{ position: 'relative' }}>
                {isEditing ? (
                    <input
                        ref={inputRef}
                        className="profile-name-input"
                        type="text"
                        value={userName}
                        onChange={handleNameChange}
                        onBlur={handleSaveName}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        style={{color: 'white'}}
                    />
                ) : (
                    <p className="profile-name-p">{userName}</p>
                )}

                {/* Скрытый элемент для измерения текста */}
                <span
                    ref={measureRef}
                    style={{
                        position: 'absolute',
                        visibility: 'hidden',
                        whiteSpace: 'nowrap',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        fontFamily: 'inherit',
                        padding: '0 2px',
                        color: 'white'
                    }}
                />

                {!isEditing && (
                    <img
                        className="profile-name-per-img"
                        src={pername}
                        alt="Edit"
                        onClick={() => setIsEditing(true)}
                        style={{ cursor: "pointer" }}
                    />
                )}
            </div>

            <div className="profile-block">
                <div className="notice-block">
                    <p className="notice-block-p">Уведомление</p>
                    <AnimatedToggle />
                </div>

                <div className="notice-block">
                    <p className="notice-block-p">История расклад</p>
                    <p className="history"><span>{">"}</span></p>
                </div>
            </div>

            <div className="profile-block">
                <div className="notice-block">
                    <input className="notice-input" placeholder="Знак зодиака" type="text" />
                </div>

                <div className="notice-block">
                    <input className="notice-input" placeholder="Семейное положение" type="text" />
                </div>
            </div>

            <div className="profile-block">
                <div className="notice-block">
                    <input className="notice-input" placeholder="Время рождения" type="text" />
                </div>

                <div className="notice-block">
                    <input className="notice-input" placeholder="Место рождения" type="text" />
                </div>
            </div>
        </div>
    );
}