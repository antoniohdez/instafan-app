import React, { Component } from 'react';

class CampaignForm extends Component {
    constructor(props) {
        super(props);
        this.state = { step: 2 };

        this.nextStep = this.nextStep.bind(this);
        this.backStep = this.backStep.bind(this);
    }

    nextStep() {
        this.setState({ step: this.state.step + 1 });
    }

    backStep() {
        this.setState({ step: this.state.step - 1 });
    }

    getStepMarkup() {
        let element = null;

        if ( this.state.step === 1 ) {
            element = (
                <div className="form__row">
                    <div className="form__column form__column--1">
                        <div className="form__element form__drag-n-drop-element form__drag-n-drop-element--full-width">
                            <div className="form__label">
                                Target 
                                <i className="fa fa-asterisk"></i>
                            </div>
                            <div className="form__drag-n-drop-input">
                                <input id="target" type="file" />
                                <label for="target">Selecciona o arrastra un archivo</label>
                            </div>
                        </div>
                    </div>
                    <div className="form__column--divider"></div>
                    <div className="form__column form__column--1">
                        <div className="form__element">
                            <label className="form__label">
                                Nombre de Campaña
                                <i className="fa fa-asterisk"></i>
                            </label>
                            <input type="text" />
                        </div>
                        <div className="form__element">
                            <label className="form__label">
                                Hashtag
                                <i className="fa fa-asterisk"></i>
                            </label>
                            <div className="form__icon-input">
                                <span className="fa fa-fw fa-hashtag"></span>
                                <input type="text" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            );
        } else if ( this.state.step === 2 ) {
            element = (
                <div>
                    <div className="form__row">
                        <div className="form__column">
                            <div className="form__element form__drag-n-drop-element">
                                <div className="form__label">
                                    Stickers
                                    <i className="fa fa-asterisk"></i>
                                </div>
                                <div className="form__drag-n-drop-input">
                                    <input id="target" type="file" />
                                    <label for="target">Selecciona o arrastra un archivo</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__column">
                            <div className="form__element form__drag-n-drop-element">
                                <div className="form__label">
                                    Marca de Agua
                                </div>
                                <div className="form__drag-n-drop-input">
                                    <input id="target" type="file" />
                                    <label for="target">Selecciona o arrastra un archivo</label>
                                </div>
                            </div>
                        </div>
                        <div className="form__column--divider"></div>
                        <div className="form__column form__column--1">
                            <div className="form__element form__drag-n-drop-element">
                                <div className="form__label">
                                    Marcos
                                </div>
                                <div className="form__drag-n-drop-input">
                                    <input id="target" type="file" />
                                    <label for="target">Selecciona o arrastra un archivo</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            );
        }

        return element;
    }

    render() {
        let stepMarkup = this.getStepMarkup();
        return (
            <div className="panel panel--full-width">
                <div className="panel__header">Crear Campaña</div>

                <div className="panel__content panel__content--large-padding">
                    <form className="form">
                        {stepMarkup}
                    </form>
                </div>

                <div className="panel__footer">
                    <span className="panel__footer-left-buttons">
                        <button className="button">
                            Cancelar
                        </button>    
                    </span>
                    <span className="panel__footer-right-buttons">
                        <button className="button">
                            Guardar Borrador
                        </button>
                        <button className="button" onClick={this.backStep}>
                            Anterior
                        </button>
                        {
                            this.state.step !== 3 ?
                                (<button className="button button--primary" onClick={this.nextStep}>Siguiente</button>)
                            :
                                (<button className="button button--primary">Publicar</button>)
                        }
                        
                        
                    </span>

                </div>
            </div>
        );
    }
}

export default CampaignForm;