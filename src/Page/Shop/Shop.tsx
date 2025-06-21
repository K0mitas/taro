import "./Shop.css"
import tgstar from "./../../Img/tgstar.svg"
import ava from "./../../Img/faviconuser.jpg"
import shopcard from "./../../Img/shopcard.svg"
import shopball from "./../../Img/shopball.svg"
import shopbook from "./../../Img/shopbook.svg"
import shoplove from "./../../Img/shoplove.svg"
import { NavLink } from "react-router-dom"

export default function Shop() {
  return (
    <div className="shop-count">
        
        <div className="star-header">
            <NavLink to="/profile">
            <div className="profile-user-div">
                <img className="star-ava" src={ava} alt="ava" />
                <p className="star-user-name">UserName</p>
                <p className="star-arrow-user-name"><span>{">"}</span></p>
            </div>
            </NavLink>

            <NavLink to="/starsshop">
            <div className="check-star">
                <p className="num-check">12</p>
                <img className="check-star-img" src={tgstar} alt="star" />
            </div>
            </NavLink>
        </div>

        <div className="block-shop-list">
            <div className="block-shop">
                <p className="block-shop-p">Карта дня</p>
                <img className="block-shop-img" src={shopcard} alt="" />

                <div className="block-shop-frame">
                    <p className="block-shop-frame-p">Бесплатно</p>
                </div>
            </div>

            <NavLink to="/freerasklad">
                <div className="block-shop">
                    <p className="block-shop-p ball-p">Да или нет</p>
                    <img className="block-shop-img ball-img" src={shopball} alt="" />

                    <div className="block-shop-frame">
                        <p className="block-shop-frame-p">Бесплатно</p>
                    </div>
                </div>
            </NavLink>

            <div className="block-shop">
                <p className="block-shop-p">Общий совет</p>
                <img className="block-shop-img" src={shopbook} alt="" />

                <div className="block-shop-frame">
                    <p className="block-shop-frame-p">Бесплатно</p>
                </div>
            </div>

            <div className="block-shop">
                <p className="block-shop-p love-p">Любовь и отношения</p>
                <img className="block-shop-img" src={shoplove} alt="" />

                <div className="block-shop-frame-pay">
                    <img className="block-shop-img-frame" src={tgstar} alt="star" />
                    <p className="block-shop-frame-p-pay">0.99</p>
                </div>
            </div>

            <NavLink to="/choice">
                <div className="block-shop-bg-img">
                    <p className="block-shop-p block-shop-top-p">Карьера и деньги</p>

                    <div className="block-shop-frame-pay">
                        <img className="block-shop-img-frame" src={tgstar} alt="star" />
                        <p className="block-shop-frame-p-pay">1.49</p>
                    </div>
                </div>
            </NavLink>

           <NavLink to="/additional">
                <div className="block-shop-second-bg-img">
                    <p className="block-shop-p block-shop-top-p">Поездки и путишествия</p>

                    <div className="block-shop-frame-pay">
                        <img className="block-shop-img-frame" src={tgstar} alt="star" />
                        <p className="block-shop-frame-p-pay">1.49</p>
                    </div>
                </div>
            </NavLink>

        </div>
    </div>
  )
}
