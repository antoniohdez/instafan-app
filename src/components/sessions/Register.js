import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from '../../js/util/request';
import Notification from '../notification/Notification';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    onSubmit(event) {
        event.preventDefault();

        if ( this.state.password !== this.state.passwordConfirmation ) {
            this.setState({ 
                showErrors: true,
                password: '',
                passwordConfirmation: '',
                error: {
                    type: 'error',
                    title: 'Error',
                    detail: 'La confirmación de contraseña es incorrecta.'    
                }
            });

            return ;
        }

        const registerBtn = document.querySelector('#register-btn');
        registerBtn.disabled = true;
        registerBtn.innerText = 'Cargando...'

        request.post('http://localhost:8000/users/', this.state,{})
            .then((response) => {
                console.log(response);
                this.props.history.push('/');
            })
            .catch((error) => {
                // Show error in login...
                console.log(error);
                registerBtn.disabled = false;
                registerBtn.innerText = 'Iniciar Sesión';
                
                this.setState({ error: {
                        type: 'error',
                        title: 'Error',
                        detail: 'Datos inválidos.'
                    } 
                });

            });
    }

    render() {
        let notification;
        if (this.state.error) {
            notification = <Notification options={this.state.error} />;
        }
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
                                        Tipo de cuenta
                                    </label>
                                    <select name="type" onChange={this.onChange} required >
                                        <option value="">- Seleccionar -</option>
                                        <option value="personal">Personal</option>
                                        <option value="marketing">Mercadotecnia</option>
                                        <option value="business">Negocios</option>
                                        <option value="PYME">PYME</option>
                                        
                                    </select>
                                </div>
                                {
                                    (this.state.type === 'personal') ?
                                        (
                                            [<div className="form__element">
                                                <label className="form__label">
                                                    Nombre
                                                </label>
                                                <input name="firstname" type="text" onChange={this.onChange} required />
                                            </div>,
                                            <div className="form__element">
                                                <label className="form__label">
                                                    Apellido
                                                </label>
                                                <input name="lastname" type="text" onChange={this.onChange} required />
                                            </div>]
                                        )
                                            :
                                            (['marketing', 'business', 'PYME'].includes(this.state.type)) ?
                                                (
                                                    <div className="form__element">
                                                        <label className="form__label">
                                                            Nombre de empresa/agencia
                                                        </label>
                                                        <input name="businessName" type="text" onChange={this.onChange} required />
                                                    </div>
                                                )        
                                                    :
                                                null
                                        
                                }
                                <div className="form__element">
                                    <label className="form__label">
                                        Correo electrónico
                                    </label>
                                    <input name="email" type="email" onChange={this.onChange} required />
                                </div>
                                <div className="form__element">
                                    <label className="form__label">
                                        Contraseña
                                    </label>
                                    <input name="password" type="password" onChange={this.onChange} minLength="8" required />
                                </div>
                                <div className="form__element">
                                    <label className="form__label">
                                        Confirmar contraseña
                                    </label>
                                    <input name="passwordConfirmation" type="password" onChange={this.onChange} minLength="8" required />
                                </div>
                                
                                <div className="form__element">
                                    <button id="register-btn" className="button button--primary">Crear cuenta</button>
                                </div>
                            </div>
                        </form>
                    </div>  
                </div>
                { notification }
                <div className="login__register-message">
                    ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
                </div>
                <div className="login__copyright-message">
                    © Copyright 2017 - ILLUTIO, Realidad Aumentada y Geolocalización S de RL de CV
                </div>
            </div>
        );
    }
}

export default Register;