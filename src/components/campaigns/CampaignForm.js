import React, { Component } from 'react';
import request from '../../js/util/request';
import swal from 'sweetalert2';

class CampaignForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step: 1,
            target: '',
            name: '', // Controlled input
            hashtag: '', // Controlled input
            stickers: [],
            watermark: '',
            userID: localStorage.getItem('userID')
        };

        this.onTargetChange = this.onTargetChange.bind(this);
        this.onTargetRemove = this.onTargetRemove.bind(this);
        this.onStickerPush = this.onStickerPush.bind(this);
        this.onStickerRemove = this.onStickerRemove.bind(this);
        this.onWatermarkChange = this.onWatermarkChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.backStep = this.backStep.bind(this);
        this.displayImage = this.displayImage.bind(this);
    }

    validateTarget(image) {
        const MAX_FILE_SIZE = 2.25 * 1024 * 1014 // Size in Bytes (Max 2.25MB)
        let valid = true;

        if ( image.size >= MAX_FILE_SIZE ) {
            swal({
                text: 'El tamaño máximo es de 2.25MB',
                type: 'warning'
            });
            
            valid = false;
        }
        if ( ![ "image/png", "image/jpeg" ].includes(image.type) ) {
            swal({
                text: 'Los formatos válidos son .png y .jpg',
                type: 'warning'
            });

            valid = false;
        } 

        return valid;
    }

    displayImage(target, image) {
        const self = this;
        var reader = new FileReader();
        
        reader.onload = (e) => {
            target.src = e.target.result;
            self.setState({ target: e.target.result });
        };

        reader.readAsDataURL( image );
    }

    onTargetChange(event) {
        event.persist();

        const target = event.target;
        const image = ( target.files && target.files[0] ) ? target.files[0] : undefined ;

        if (image && this.validateTarget(image)) {
            this.displayImage(target, image);
        } else {
            target.value = "";
            this.setState({ target: undefined });
        }
    }

    onTargetRemove(event) {
        const target = document.querySelector('#target');
        this.setState({ target: undefined });
    }

    onStickerPush(event) {
        event.persist();
        const self = this;
        const target = event.target;
        if (target.files) {
            const files = Array.from(target.files);
            files.forEach((img) => {
                var reader = new FileReader();
            
                reader.onload = (e) => {
                    const stickers = self.state.stickers;
                    stickers.push(e.target.result);
                    
                    self.setState({ stickers: stickers });
                };

                reader.readAsDataURL( img );
            });
        }
    }

    onStickerRemove(event) {

    }

    onWatermarkChange(event) {
        event.persist();
        const self = this;
        const target = event.target;
        const image = ( target.files && target.files[0] ) ? target.files[0] : undefined ;

        // Check validation for stickers
        if (image) {
            var reader = new FileReader();
            
            reader.onload = (e) => {                
                self.setState({ watermark: e.target.result });
            };

            reader.readAsDataURL( image );
        } else {
            self.setState({ watermark: undefined });
        }
    }

    onInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    onSubmit() {
        if ( this.validateStep() ) {
            const registerBtn = document.querySelector('#submit-btn');
            registerBtn.disabled = true;
            registerBtn.innerText = 'Cargando...'

                
            request.post('campaigns/', this.state, {})
                .then((response) => {
                    console.log(response);
                    this.props.history.push('/campaigns');
                })
                .catch((error) => {
                    // Show error in login...
                    console.log(error);
                    registerBtn.disabled = false;
                    registerBtn.innerText = 'Error!';
                    
                    swal({
                        text: 'Ha ocurrido un error, por favor intentar de nuevo.',
                        type: 'error'
                    });

                });
        }
    }

    onCancel() {
        this.props.history.goBack();
    }

    validateStep() {
        if ( this.state.step === 1 ) {
            let missingFields = [];

            if ( !this.state.target ) {
                missingFields.push('- Target');
            }
            if ( !this.state.name ) {
                missingFields.push('- Nombre de Campaña');
            } 
            if ( !this.state.hashtag ) {
                missingFields.push('- Hashtag');
            } else {
                if ( !/^\w*[a-zA-Z]+\w*$/.test(this.state.hashtag) ) {
                    missingFields.push('El hashtag es inválido.');
                }
            }
            

            if ( missingFields.length > 0 ) {
                let text = 'Completa los campo requeridos:<br>' + missingFields.join('<br>');
                swal({
                    html: text,
                    type: 'warning'
                });
                return false;
            }
        } else if ( this.state.step === 2 ) {
            const length = this.state.stickers.length;

            if ( length < 4 || length > 8 ) {
                swal({
                    html: 'Selecciona al menos 4 stickers.',
                    type: 'warning'
                });
                return false;
            }
        }

        return true;
    }

    nextStep() {
        if ( this.validateStep() ) {
            this.setState({ step: this.state.step + 1 });
        }
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
                            <button id="submit-btn" className="button button--primary" onClick={this.onSubmit}>Publicar</button>
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
                                        <input id="target" type="file" onChange={this.onTargetChange} />
                                        <label htmlFor="target">Selecciona un archivo</label>
                                    </div>
                                </div>
                            :   
                                <div className="form__element">
                                    <div className="form__label">
                                        Target 
                                        <i className="fa fa-asterisk"></i>
                                    </div>
                                    <span onClick={this.onTargetRemove} className="fa fa-times form__image-preview-remove"></span>
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
                        {
                            this.state.stickers.map((sticker, i) => (
                                    <div className="form__column" key={`sticker ${i}`}>
                                        <div className="form__element form__drag-n-drop-element">
                                            <div className="form__label">
                                                { (i === 0) ? 'Stickers (min 4)' : <span>&nbsp;</span> }
                                                { (i === 0) ? <i className="fa fa-asterisk"></i> : null }
                                            </div>
                                            <div className="form__drag-n-drop-input">
                                                <img src={sticker} alt="sticker" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        }
                        {
                            (this.state.stickers.length <= 7) ?
                                <div className="form__column">
                                    <div className="form__element form__drag-n-drop-element">
                                        <div className="form__label">
                                            { (this.state.stickers.length === 0) ? 'Stickers (min 4)' : <span>&nbsp;</span> }
                                            { (this.state.stickers.length === 0) ? <i className="fa fa-asterisk"></i> : null }
                                        </div>
                                        <div className="form__drag-n-drop-input">
                                            <input id="target" type="file" onChange={this.onStickerPush} multiple />
                                            <label htmlFor="target">Selecciona un archivo</label>
                                        </div>
                                    </div>
                                </div>
                            :
                                null
                        }
                        {
                            (this.state.stickers.length <= 6) ?
                                <div className="form__column">
                                    <div className="form__element form__drag-n-drop-element">
                                        <div className="form__drag-n-drop-input form__drag-n-drop-input--placeholder">
                                        </div>
                                    </div>
                                </div>
                            :
                                null
                        }
                    </div>
                    <div className="form__row">
                        <div className="form__column">
                            <div className="form__element form__drag-n-drop-element">
                                <div className="form__label">
                                    Marca de Agua
                                </div>
                                <div className="form__drag-n-drop-input">
                                    {
                                        (this.state.watermark) ? 
                                            <img src={this.state.watermark} alt="watermark" />
                                        :
                                            [
                                                <input id="watermark" type="file" onChange={this.onWatermarkChange} key={1} />,
                                                <label htmlFor="watermark" key={2}>Selecciona un archivo</label>
                                            ]
                                    }
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