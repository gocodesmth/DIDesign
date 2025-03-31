import React, {useState} from 'react';
import s from './Header.module.css'
import Scrollspy from "react-scrollspy";
import {useWindowSize} from "../../helpers/useWindowsSize";
import menu from "../../img/burger-menu/menu.svg"
import close from "../../img/burger-menu/close.svg"
import logo from  "../../img/icons/DID-03.png"
import {NavLink} from "react-router-dom";

export const Header = () => {

    const [open, setOpen] = useState(false)
    const hookResize = useWindowSize()

    return (
        <nav className={s.nav}>
            <div className={s.container}>
                {hookResize > 600

                    ? <div className={s.nav_row}>
                        <div className={s.logo}>
                            <NavLink to="/">
                                <img className={s.logo_logo} src={logo} alt="logo"/>
                            </NavLink>
                        </div>
                        <Scrollspy className={s.scroll} items={['about', 'services', 'careers']}
                                   currentClassName={s.is_active} offset={-200}>
                            <li className={s.scroll_item}><NavLink to="/about" className={s.scroll_item_link}>О
                                нас</NavLink>
                            </li>
                            <li className={s.scroll_item}><NavLink to="/services"
                                                                   className={s.scroll_item_link}>Услуги</NavLink></li>
                            <li className={s.scroll_item}><NavLink to="/careers"
                                                                   className={s.scroll_item_link}>Вакансии</NavLink>
                            </li>
                        </Scrollspy>
                    </div>
                    : <div>
                        {!open ? <div>
                                <div className={s.logo}>
                                    <NavLink to="/">
                                        <img className={s.logo_logo} src={logo} alt="logo"/>
                                    </NavLink>
                                </div>
                                <img className={s.icon} src={menu} alt="menu" onClick={() => setOpen(true)}/>
                            </div>
                            : <div>
                                <img className={s.icon} onClick={() => setOpen(false)} src={close} alt="close"/>

                                <Scrollspy className={s.scroll} items={['about', 'services', 'carers']}
                                           currentClassName={s.is_active} offset={-200}>
                                    <li className={s.scroll_item}><NavLink to={"/about"}
                                                                           onClick={() => setOpen(false)}
                                                                           className={s.scroll_item_link}>О
                                        нас</NavLink>
                                    </li>
                                    <li className={s.scroll_item}><NavLink to={"/services"}
                                                                           onClick={() => setOpen(false)}
                                                                           className={s.scroll_item_link}>Услуги</NavLink>
                                    </li>
                                    <li className={s.scroll_item}><NavLink to={"/carers"}
                                                                           onClick={() => setOpen(false)}
                                                                           className={s.scroll_item_link}>Вакансии</NavLink>
                                    </li>
                                </Scrollspy>
                            </div>
                        }
                    </div>
                }
            </div>
        </nav>
    );
};

