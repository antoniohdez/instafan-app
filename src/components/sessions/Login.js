import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../js/util/auth';

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

        auth.signIn(this.state.email, this.state.password)
            .then((response) => {
                this.props.history.push('/');
            })
            .catch((error) => {
                // Show error in login...
                console.log(error);
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
                                    <Link to="/recover-password">Olvidé mi contraseña</Link>
                                </div>
                            </div>
                        </form>
                    </div>  
                </div>
                <div className="login__register-message">
                    ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
                </div>
                <div className="login__copyright-message">
                    © Copyright 2017 - ILLUTIO, Realidad Aumentada y Geolocalización S de RL de CV
                </div>
            </div>
        );
    }
}

export default Login;