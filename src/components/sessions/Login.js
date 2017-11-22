import React, { Component } from 'react';
import customFetch from '../../js/util/fetch';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.onBlur = this.onBlur.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onBlur(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    onSubmit(event) {
        event.preventDefault();

        const body = {
            email: this.state.email,
            password: this.state.password
        };

        const req = customFetch.post('http://localhost:8000/auth/login', body);
        req.then((result) => {
            console.log(result);
            if (result.token) {
                window.location.assign("/");
            }
            
        });
        req.catch((error) => {
            console.log(error);
            console.log("Error");
        });
    }

    render() {
        return (
            <div className="login__container">
                <div className="panel">
                    <div className="panel__header">
                        <header className="login__header">
                    
                        </header>
                    </div>
                    <div className="panel__content">
                        <form className="form form--login" onSubmit={this.onSubmit}>
                            <div className="form__column form__column--1">
                                <div className="form__element">
                                    <label className="form__label">
                                        Correo electrónico
                                    </label>
                                    <input name="email" type="text" onBlur={this.onBlur} />
                                </div>
                                <div className="form__element">
                                    <label className="form__label">
                                        Contraseña
                                    </label>
                                    <input name="password" type="password" onBlur={this.onBlur} />
                                </div>
                                <div className="form__element">
                                    <button className="button button--primary">Iniciar Sesión</button>
                                </div>
                                <div className="form__element text-align--center">
                                    <a href="/recover-password">Olvidé mi contraseña</a>
                                </div>
                            </div>
                        </form>
                    </div>  
                </div>
                <div className="login__register-message">
                    ¿No tienes una cuenta? <a href="register">Regístrate</a>
                </div>
                <div className="login__copyright-message">
                    © Copyright 2017 - ILLUTIO, Realidad Aumentada y Geolocalización S de RL de CV
                </div>
            </div>
        );
    }
}

export default Login;