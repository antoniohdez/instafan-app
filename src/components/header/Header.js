import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from '../../js/util/request';

class Header extends Component {
        constructor(props) {
        super(props);
        this.state = { 
            name: []
        };
        const userID = localStorage.getItem('userID');
        request.get(`users/${userID}`)
            .then((response) => {
                const name = response.firstname || response.businessName;

                this.setState({ name: name });
            }).catch((error) => {
                console.log(error);
            });

    }

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
                            {/*
                                <img src="https://pbs.twimg.com/profile_images/721920865189781504/AlUaeaVh_normal.jpg" alt="profile thumbnail" />
                            */}
                            <span> {this.state.name}</span>
                            <i className="fa fa-fw fa-caret-down"></i>
                            <ul className="sub-menu sub-menu--left-of-parent">
                                <li className="sub-menu__item">
                                    <Link to="/profile" className="sub-menu__item-link">
                                        <i className="fa fa-user"></i>
                                        <span>&nbsp;Perfil</span>
                                    </Link>
                                </li>
                                <li className="sub-menu__item">
                                    <Link to="/help" className="sub-menu__item-link">
                                        <i className="fa fa-question-circle"></i>
                                        <span>&nbsp;Ayuda</span>
                                    </Link>
                                </li>
                                <div className="sub-menu__divider"></div>
                                <li className="sub-menu__item">
                                    <Link to="/logout" className="sub-menu__item-link">
                                        <i className="fa fa-sign-out"></i>
                                        <span>&nbsp;Cerrar Sesión</span>
                                    </Link>
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