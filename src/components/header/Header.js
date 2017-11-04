import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <section className="header">
                <div className="header__logo">
                    
                </div>
                <nav className="header__left-menu"></nav>
                <div className="header__title"></div>
                <nav className="header__right-menu">
                    <ul className="header-menu">
                        <li className="header-menu__item header-menu__item--thumbnail">
                            <img src="https://pbs.twimg.com/profile_images/721920865189781504/AlUaeaVh_normal.jpg" alt="profile picture thumbnail" />
                            <span> Antonio</span>
                            <i className="fa fa-fw fa-caret-down"></i>
                            <ul className="sub-menu sub-menu--left-of-parent">
                                <li className="sub-menu__item">
                                    <a href="#" className="sub-menu__item-link">
                                        <i className="fa fa-user"></i>
                                        <span>&nbsp;Perfil</span>
                                    </a>
                                </li>
                                <li className="sub-menu__item">
                                    <a href="#" className="sub-menu__item-link">
                                        <i className="fa fa-question-circle"></i>
                                        <span>&nbsp;Ayuda</span>
                                    </a>
                                </li>
                                <div className="sub-menu__divider"></div>
                                <li className="sub-menu__item">
                                    <a href="/login" className="sub-menu__item-link">
                                        <i className="fa fa-sign-out"></i>
                                        <span>&nbsp;Cerrar Sesión</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </section>
        );
    }
}

export default Header;