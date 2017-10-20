import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="campaign-list">
                <div className="campaign-item campaign-item--add">
                    <i className="fa fa-plus-circle fa-5x"></i>
                    <div>Crear Campaña</div>
                </div>
                <div className="campaign-item">
                    <div className="campaign-item__status-bar">
                        <span className="campaign-item__status-bar-item">Activo</span>
                        <span className="campaign-item__status-bar-item campaign-header-menu">
                            <i className="fa fa-fw fa-ellipsis-h"></i>
                            <ul className="sub-menu sub-menu--left-of-parent">
                                <li className="sub-menu__item">
                                    <i className="fa fa-fw fa-info"></i>
                                    <span> Ver detalle</span>
                                </li>
                                <li className="sub-menu__item">
                                    <i className="fa fa-fw fa-pencil"></i>
                                    <span> Editar</span>
                                </li>
                                <div className="sub-menu__divider"></div>
                                <li className="sub-menu__item">
                                    <i className="fa fa-fw fa-times"></i>
                                    <span> Eliminar</span>
                                </li>
                            </ul>
                        </span>
                    </div>
                    <div className="campaign-item__image">
                        <img src="test.png" alt="campaign image" />
                    </div>
                    <div className="campaign-item__details">
                        <div className="campaign-item__details-title">Campaña Kia Rio 2018</div>
                        <div className="campaign-item__details-hashtag">#rio2018</div>
                    </div>
                </div>
                <div className="campaign-item">
                    <div className="campaign-item__status-bar">
                        <span className="campaign-item__status-bar-item">Activo</span>
                        <span className="campaign-item__status-bar-item campaign-header-menu">
                            <i className="fa fa-fw fa-ellipsis-h"></i>
                            <ul className="sub-menu sub-menu--left-of-parent">
                                <li className="sub-menu__item">
                                    <i className="fa fa-fw fa-info"></i>
                                    <span> Ver detalle</span>
                                </li>
                                <li className="sub-menu__item">
                                    <i className="fa fa-fw fa-pencil"></i>
                                    <span> Editar</span>
                                </li>
                                <div className="sub-menu__divider"></div>
                                <li className="sub-menu__item">
                                    <i className="fa fa-fw fa-times"></i>
                                    <span> Eliminar</span>
                                </li>
                            </ul>
                        </span>
                    </div>
                    <div className="campaign-item__image">
                        <img src="test2.png" alt="campaign image" />
                    </div>
                    <div className="campaign-item__details">
                        <div className="campaign-item__details-title">Reporte Ciudadano</div>
                        <div className="campaign-item__details-hashtag">#aguas</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;