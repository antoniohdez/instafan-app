import React, { Component } from 'react';
//import { Link } from 'react-router-dom'

class SideBar extends Component {
    render() {
        return (
            <section className="side-bar">
                <nav className="side-bar__menu">
	                <ul className="side-menu">
                        <li className="side-menu__item side-menu__item--active">
                            <a href="/">
                                <i className="fa fa-fw fa-home"></i>
                                <span className="side-menu__item-label"> Inicio</span>
                            </a>
                        </li>
                        <li className="side-menu__item">
                            <a href="/campaigns">
                                <i className="fa fa-fw fa-flag"></i>
                                <span className="side-menu__item-label"> Campañas</span>
                            </a>
                        </li>
                        <li className="side-menu__item">
                            <a href="/analytics">
                                <i className="fa fa-fw fa-line-chart"></i>
                                <span className="side-menu__item-label"> Estadísticas</span>
                            </a>
                        </li>
                    </ul>
                    <div className="side-bar__call-to-action">
                    	<a href="/campaigns/create" className="button button--primary">
                            <i className="fa fa-fw fa-plus-circle"></i>
                            <span className="side-bar__call-to-action-label">Crear Campaña</span>
                        </a>
                    </div>
                </nav>
                <footer className="side-bar__footer">{`© Copyright ${(new Date()).getFullYear()} - ILLUTIO, Realidad Aumentada y Geolocalización S de RL de CV`}</footer>
            </section>
        );
    }
}

export default SideBar;