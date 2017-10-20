import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <section className="side-bar">
                <header className="side-bar__header">
                    
                </header>
                <nav className="side-bar__menu">
	                <ul className="side-menu">
                        <li className="side-menu__item">
                            <i className="fa fa-fw fa-home"></i>
                            <span> Inicio</span>
                        </li>
                        <li className="side-menu__item side-menu__item--active">
                            <i className="fa fa-fw fa-flag"></i>
                            <span> Campañas</span>
                        </li>
                        <li className="side-menu__item">
                            <i className="fa fa-fw fa-line-chart"></i>
                            <span> Estadísticas</span>
                        </li>
                    </ul>
                    <div className="side-bar__call-to-action">
                    	<a href="#" className="button button--primary">
                            <i className="fa fa-fw fa-plus-circle"></i> Crear Campaña    
                        </a>
                    </div>
                </nav>
                <footer className="side-bar__footer">{`© Copyright ${(new Date()).getFullYear()} - ILLUTIO, Realidad Aumentada y Geolocalización S de RL de CV`}</footer>
            </section>
        );
    }
}

export default SideBar;