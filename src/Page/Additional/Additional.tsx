import "./Additional.css"
import gypsy from "./../../Img/pizda.png"
import blockstart from "./../../Img/newstarblock.png"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export default function Additional() {
    const [firstDialog, setFirstDialog] = useState(false)
    const [secondDialog, setSecondDialog] = useState(false)
    const [thriDialog, setThriDialog] = useState(false)
    const [btnBlock, setBtnBlock] = useState(false)


    useEffect(() => {
        setTimeout(() => {
          setFirstDialog(true)
        }, 2000)

        setTimeout(() => {
            setSecondDialog(true)
          }, 3500)

          setTimeout(() => {
            setThriDialog(true)
          }, 4500)

          setTimeout(() => {
            setBtnBlock(true)
          }, 5500)
    }, [])

  return (
    <div className="addit-count">

        <div className={"free-woman-div"}>
            <div className="free-woman-wrapper">
                <img className="free-stars" src={blockstart} alt="" />
                <img className={`free-woman-img`} src={gypsy} alt="" />
            </div>
        </div>

        <div className={firstDialog ? `dialog-div-addit` : "dialog-div-none"}>
            <div className="dialog-block">
                <p className="first-text-welcom">
                (Имя), Таро подружка приветствует тебя! Погружаю тебя в таинство Таро!
                Ты со мной?
                </p>
            </div>
        </div>

        <div className={secondDialog ? `dialog-div-addit` : "dialog-div-none"}>
            <div className="dialog-block">
                <p className="first-text-welcom-addit">
                    Для тебя  2 бесплатных расклада ежедневно. Используй их
                </p>
            </div>
        </div>

        <div className={thriDialog ? `dialog-div-addit` : "dialog-div-none"}>
            <div className="dialog-block">
                <p className="first-text-welcom">
                    Каждый день тебя ждет новая карта дня!
                </p>
            </div>
        </div>

       <NavLink to="/rasklad">
        <div className={btnBlock ? `btn-welcome-div`: "btn-welcome-div-none"}>
            <button className="btn-welcome">Подробный анализ</button>
        </div>
        </NavLink>

    </div>
  )
}
