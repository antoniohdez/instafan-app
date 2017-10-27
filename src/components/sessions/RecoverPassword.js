import React, { Component } from 'react';

class RecoverPassword extends Component {
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
		                                Correo electrónico
		                            </label>
		                            <input type="text" />
		                        </div>
		                        <div className="form__element">
		                    		<button className="button button--primary">Recuperar contraseña</button>
		                    	</div>
		                    </div>
	            		</form>
	            	</div>	
            	</div>
            </div>
        );
    }
}

export default RecoverPassword;