import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

class SideBar extends Component {
    render() {
        return (
            <section className="side-bar">
                <nav className="side-bar__menu">
	                <ul className="side-menu">
                        <li className="side-menu__item">
                            <NavLink exact to="/" activeClassName="side-menu__item--active">
                                <i className="fa fa-fw fa-home"></i>
                                <span className="side-menu__item-label"> Inicio</span>
                            </NavLink>
                        </li>
                        {/* side-menu__item--active */}
                        <li className="side-menu__item">
                            <NavLink to="/campaigns" activeClassName="side-menu__item--active">
                                <i className="fa fa-fw fa-flag"></i>
                                <span className="side-menu__item-label"> Campañas</span>
                            </NavLink>
                        </li>
                        {/*li className="side-menu__item">
                            <NavLink exact to="/analytics" activeClassName="side-menu__item--active">
                                <i className="fa fa-fw fa-line-chart"></i>
                                <span className="side-menu__item-label"> Estadísticas</span>
                            </NavLink>
                        </li*/}
                    </ul>
                    <div className="side-bar__call-to-action">
                    	<Link to="/campaigns/create" className="button button--primary">
                            <i className="fa fa-fw fa-plus-circle"></i>
                            <span className="side-bar__call-to-action-label">Crear Campaña</span>
                        </Link>
                    </div>
                </nav>
                <footer className="side-bar__footer">{`© Copyright ${(new Date()).getFullYear()} - ILLUTIO, Realidad Aumentada y Geolocalización S de RL de CV`}</footer>
            </section>
        );
    }
}

export default SideBar;