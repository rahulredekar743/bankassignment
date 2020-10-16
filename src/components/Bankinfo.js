import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Bankinfo extends Component {

    handleSubmit(formProps) {
        this.props.signupUser(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className={`alert alert-danger`}>
                    <strong>Opps!</strong> {this.props.errorMessage}
                </div>
            )
        }
    }

    render() {
        const {handleSubmit, fields: {acc, accConfirm}} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <fieldset className={`form-group`}>
                        <label>Account Number:</label>
                        <input className={`form-control`} {...acc} />
                        {
                            acc.touched && acc.error &&
                            <div className={`error`}>
                                {acc.error}
                            </div>
                        }
                    </fieldset>
                    <fieldset className={`form-group`}>
                        <label>Confirm Account Number:</label>
                        <input className={`form-control`} {...accConfirm} />
                        {
                            accConfirm.touched && accConfirm.error &&
                            <div className={`error`}>
                                {accConfirm.error}
                            </div>
                        }
                    </fieldset>
                    {this.renderAlert()}
                    <button type={`submit`} className={`btn btn-primary`}>Submit</button>
                </form>
            </div>
        )
    }
}

function validate(formProps) {
    // console.log(formProps);

    const errors = {};

    if (!formProps.email) {
        errors.email = 'Please enter an email';
    }

    if (!formProps.acc) {
        errors.acc = 'Please enter a account number';
    }

    if (!formProps.accConfirm) {
        errors.accConfirm = 'Please enter a confirm account number';
    }

    if (formProps.acc !== formProps.accConfirm) {
        errors.acc = 'account number must match';
    }
    return errors;
}


export default reduxForm({
    form: 'signup',
    fields: ['email', 'acc', 'accConfirm'],
    validate: validate
}, null, actions)(Bankinfo);