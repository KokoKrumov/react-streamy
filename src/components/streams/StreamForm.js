import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
// reduxForm  e много подобен на connect - action creator и взема form data от нашия компонент (това става автоматично)

//правим го class-base component, защото ще имаме много помощни методи
//за да си организираме по-добре кода

class StreamForm extends Component {

    // renderInput({formProps}) {
    //     return (
    //         <input onChange={formProps.input.onChange}
    //                value={formProps.input.value}/>
    //     )
    // }

    renderError({error, touched}) {
        if (error && touched) {
            return (
                <div className='ui negative mini message'>
                    {error}
                </div>
            )
        }

    }

    renderInput = ({input, label, meta}) => {
        const classNameField = `field ${meta.touched && meta.error ? 'error' : ''}`
        return (
            <div className={classNameField}>
                <label htmlFor={input.name}>{label}</label>
                <input id={input.name} {...input}/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (submitValue) => {
        this.props.onSubmit(submitValue);
    }

    render() {
        return (
            <div className="New">
                <form
                    className='ui form error'
                    onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name='title' component={this.renderInput} label='Enter Title'/>
                    <Field name='description' component={this.renderInput} label='Enter Description'/>
                    <button className='ui primary button '>Submit</button>
                </form>
            </div>
        );
    }
}


//при всяка интеракця с полетата redux извиква validate ф-ята си
// ние трябва да я handle-нем
const validate = (formValues) => {
    const error = {};

    if (!formValues.title) {
        error.title = 'You must enter title'
    }
    if (!formValues.description) {
        error.description = 'You must enter description'
    }

    return error;
}

export default reduxForm({
    // validate: validate,
    validate,
    form: 'streamForm'
})(StreamForm)
