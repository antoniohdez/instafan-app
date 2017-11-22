import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="login__container">
                <div className="panel">
                    <div className="panel__header">
                        <header className="login__header">
                        </header>
                    </div>
                    <div className="panel__content">
                        <form className="form form--login">
                            <div className="form__column form__column--1">
                                <div className="form__element">
                                    <label className="form__label">
                                        Nombre
                                    </label>
                                    <input type="text" />
                                </div>
                                <div className="form__element">
                                    <label className="form__label">
                                        Correo electrónico
                                    </label>
                                    <input type="text" />
                                </div>
                                <div className="form__element">
                                    <label className="form__label">
                                        Sitio Web
                                    </label>
                                    <input type="text" />
                                </div>
                                <div className="form__element">
                                    <label className="form__label">
                                        Contraseña
                                    </label>
                                    <input type="password" />
                                </div>
                                <div className="form__element">
                                    <label className="form__label">
                                        Confirmar contraseña
                                    </label>
                                    <input type="password" />
                                </div>
                                
                                <div className="form__element">
                                    <button className="button button--primary">Crear cuenta</button>
                                </div>
                            </div>
                        </form>
                    </div>  
                </div>
                <div className="login__register-message">
                    ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
                </div>
                <div className="login__copyright-message">
                    © Copyright 2017 - ILLUTIO, Realidad Aumentada y Geolocalización S de RL de CV
                </div>
            </div>
        );
    }
}

export default Register;