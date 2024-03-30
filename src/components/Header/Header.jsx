import {NavLink} from "react-router-dom";

import sprite from '../../img/symbol-defs.svg';
import css from "./header.module.css";
import  AuthNav from "../AuthNav/AuthNav";
import { useDispatch } from "react-redux";
import {LogOutBtn} from "../LogOutBtn/LogOutBtn";
import {useAuth} from "../../hooks/useAuth";
import {logoutUser} from "../../redux/auth/auth-slice";

const Header = ()=>{
const{isAuth}=useAuth();

const dispatch=useDispatch();
const handlerLogout=()=>{
dispatch(logoutUser())
}
    return(
        <header className={css.headerSection}>
            <div className={css.logoWrap}>
            <svg className={css.logoIcon} >
                <use href={`${sprite}#icon-logo`}></use>
            </svg>
            <p className={css.logoText}>LearnLingo</p>
            </div>
            <nav>
                <ul className={css.navList}>
                    <li><NavLink to="/" className={css.link}>Home</NavLink></li>
                    <li><NavLink to="/teachers" className={css.link}>Teachers</NavLink></li>
            {isAuth &&<li><NavLink to="/favorites" className={css.link}>Favorites</NavLink></li>}    
                </ul>
                </nav>
           {isAuth ? <LogOutBtn onClick={handlerLogout}/>:< AuthNav/>}  
        

        </header>
    )
}
export default Header;