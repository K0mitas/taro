import "./StarsShop.css"
import tgstar from "./../../Img/tgstar.svg"
import ava from "./../../Img/faviconuser.jpg"
import { NavLink } from "react-router-dom";


export default function StarsShop() {
  return (
    <div className="starshop-count">

        <div className="star-header">
            <NavLink to="/profile">
            <div className="profile-user-div">
                <img className="star-ava" src={ava} alt="ava" />
                <p className="star-user-name">UserName</p>
                <p className="star-arrow-user-name"><span>{">"}</span></p>
            </div>

            <div className="check-star">
                <p className="num-check">12</p>
                <img className="check-star-img" src={tgstar} alt="star" />
            </div>
            </NavLink>
        </div>
        

        <h1 className="starshop-h1">Купить звезды</h1>

        <div className="buy-star-list">
            <div className="buy-star-div">
                <div className="first-block-buy">
                    <img className="check-star-img" src={tgstar} alt="star" />
                    <p className="num-check">20</p>
                </div>
                <p className="buy-p">$ 0.99</p>
            </div>

            <div className="buy-star-div">
                <div className="first-block-buy">
                    <img className="check-star-img" src={tgstar} alt="star" />
                    <p className="num-check">50</p>
                </div>
                <p className="buy-p">$ 1.99</p>
            </div>

            <div className="buy-star-div">
                <div className="first-block-buy">
                    <img className="check-star-img" src={tgstar} alt="star" />
                    <p className="num-check">100</p>
                </div>
                <p className="buy-p">$ 3.99</p>
            </div>

            <div className="buy-star-div">
                <div className="first-block-buy">
                    <img className="check-star-img" src={tgstar} alt="star" />
                    <p className="num-check">200</p>
                </div>
                <p className="buy-p">$ 5.99</p>
            </div>

        </div>

        <div className="btn-welcome-div">
            <button className="btn-welcome">Купить</button>
        </div>

        <div className="btn-welcome-div">
            <button className="btn-welcome-tips">Как это работает</button>
        </div>

    </div>
  )
}
