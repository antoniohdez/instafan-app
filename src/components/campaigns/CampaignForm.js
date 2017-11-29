import React, { Component } from 'react';

class CampaignForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step: 1,
            name: '', // Controlled input
            hashtag: '', // Controlled input

        };

        this.onImageChange = this.onImageChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.backStep = this.backStep.bind(this);
    }

    onImageChange(event) {
        const self = this;
        event.persist();

        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (e) => {
                event.target.src = e.target.result;
                self.setState({ target: e.target.result });
            };

            reader.readAsDataURL(event.target.files[0]);
        } else {
            this.setState({ target: undefined });
        }
    }

    onInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    onSubmit() {
        console.log("Submit!");
        /*if ( !(this.state.stickers.length >= 4 && this.state.stickers.length <= 8) ) {
            return;
        }*/
    }

    onCancel() {
        this.props.history.goBack();
    }

    nextStep() {
        if ( this.state.step === 1 ) {
            if ( !(this.state.target && this.state.name && this.state.hashtag) ) {
                alert('Completa los campo requeridos.');
                return;
            }
        }/* else if ( this.state.step === 2 ) {
            if ( !(this.state.stickers.length >= 4 && this.state.stickers.length <= 8) ) {
                return;
            }
        }*/
        
        this.setState({ step: this.state.step + 1 });        
    }

    backStep() {
        this.setState({ step: this.state.step - 1 });
    }

    getButtonsMarkup() {
        return (
            <div>
                <span className="panel__footer-left-buttons">
                    <button className="button" onClick={this.onCancel}>
                        Cancelar
                    </button>
                </span>
                <span className="panel__footer-right-buttons">
                    {/*<button className="button">
                        Guardar Borrador
                    </button>*/}
                    {
                        this.state.step !== 1 ? (
                            <button className="button" onClick={this.backStep}>
                                Anterior
                            </button>
                        ) : ( null )
                    }
                    {
                        this.state.step !== 2 ? (
                            <button className="button button--primary" onClick={this.nextStep}>Siguiente</button>
                        ) : (
                            <button className="button button--primary" onClick={this.onSubmit}>Publicar</button>
                        )
                    }
                </span>
            </div>
        );
    }

    getStepMarkup() {
        let element = null;

        if ( this.state.step === 1 ) {
            element = (
                <div className="form__row">
                    <div className="form__column form__column--1">
                        {
                            ( !this.state.target ) ?
                                <div className="form__element form__drag-n-drop-element form__drag-n-drop-element--target">
                                    <div className="form__label">
                                        Target 
                                        <i className="fa fa-asterisk"></i>
                                    </div>
                                    <div className="form__drag-n-drop-input">
                                        <input id="target" type="file" onChange={this.onImageChange} />
                                        <label htmlFor="target">Selecciona un archivo</label>
                                    </div>
                                </div>
                            :   
                                <div className="form__element">
                                    <div className="form__label">
                                        Target 
                                        <i className="fa fa-asterisk"></i>
                                    </div>
                                    <img src={this.state.target} className="form__image-preview" alt="target" />
                                </div>
                        }
                    </div>
                    <div className="form__column--divider"></div>
                    <div className="form__column form__column--1">
                        <div className="form__element">
                            <label className="form__label">
                                Nombre de Campaña
                                <i className="fa fa-asterisk"></i>
                            </label>
                            <input name="name" type="text" value={this.state.name} onChange={this.onInputChange} />
                        </div>
                        <div className="form__element">
                            <label className="form__label">
                                Hashtag
                                <i className="fa fa-asterisk"></i>
                            </label>
                            <div className="form__icon-input">
                                <span className="fa fa-fw fa-hashtag"></span>
                                <input name="hashtag" type="text" value={this.state.hashtag} onChange={this.onInputChange} />
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
                                    <label htmlFor="target">Selecciona un archivo</label>
                                </div>
                            </div>
                        </div>
                        <div className="form__column">
                            <div className="form__element form__drag-n-drop-element">
                                <div className="form__drag-n-drop-input form__drag-n-drop-input--placeholder">
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
                                    <label htmlFor="target">Selecciona un archivo</label>
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
        let buttons = this.getButtonsMarkup();
        return (
            <div className="panel panel--full-width">
                <div className="panel__header">Crear Campaña</div>

                <div className="panel__content panel__content--large-padding">
                    <form className="form">
                        {stepMarkup}
                    </form>
                </div>

                <div className="panel__footer">
                    {buttons}
                </div>
            </div>
        );
    }
}

export default CampaignForm;