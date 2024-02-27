import React, { Component } from 'react'

export class ContactUs extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        firstNameErr: '',
        lastNameErr: '',
        emailErr: '',
        phoneErr: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        console.log(this.state)
    }

    //validation
    // firstName > 4
    // lastName > 1
    // email include('@')
    // phone 10 digits

    handleSubmit = (e) => {
        e.preventDefault()
        this.handleValidation()
    }

    handleValidation = () => {
        let firstNameErr = '';
        let lastNameErr = '';
        let emailErr = '';
        let phoneErr = '';

        if (this.state.firstName.length <= 4) {
            firstNameErr = "first Name should be atleast 4 chars"
        }

        if (this.state.lastName.length <= 1) {
            lastNameErr = "last name should be atleast 1 char"
        }

        if (!this.state.email.includes('@')) {
            emailErr = 'Enter a valid email'
        }

        if (this.state.phone.length !== 10) {
            phoneErr = "Enter a valid phone number"
        }

        // falsy values - 0, null, undefined, '', nan, false
        if (firstNameErr || lastNameErr || emailErr || phoneErr) {
            this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr })
        } else {
            this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr })
        }

    }


    render() {
        return (
            <>
                <h2>ContactUs</h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'></div>
                        <div className='col-md-4'>
                            <form>
                                <input
                                    type="text"
                                    placeholder='Enter your firstName'
                                    className='form-control mt-1'
                                    name="firstName"
                                    onChange={(e) => { this.handleChange(e) }}
                                    value={this.state.firstName}
                                />
                                <p className='text-danger'>{this.state.firstNameErr}</p>
                                <input
                                    type="text"
                                    placeholder='Enter your lastName'
                                    className='form-control mt-1'
                                    name="lastName"
                                    onChange={(e) => { this.handleChange(e) }}
                                />
                                <p className='text-danger'>{this.state.lastNameErr}</p>
                                <input
                                    type="text"
                                    placeholder='Enter your email'
                                    className='form-control mt-1'
                                    name="email"
                                    onChange={(e) => { this.handleChange(e) }}
                                />
                                <p className='text-danger'>{this.state.emailErr}</p>
                                <input
                                    type="text"
                                    placeholder='Enter your number'
                                    className='form-control mt-1'
                                    name="phone"
                                    onChange={(e) => { this.handleChange(e) }}
                                />
                                <p className='text-danger'>{this.state.phoneErr}</p>

                                <button className='btn btn-primary mt-2'
                                    onClick={(e) => { this.handleSubmit(e) }}
                                >Submit</button>
                            </form>
                        </div>
                        <div className='col-md-4'></div>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactUs