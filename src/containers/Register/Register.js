import React, { useState } from 'react';

import './Register.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RegisterForm from '../../components/Form/RegisterForm';

const Register = () => {
    return (
        <div>
            <Header />
            <div className="register-page">
                <div className="register-session">
                    <div>
                        <h3 className="title-form">Get moving with Uber</h3>
                    </div>
                    <RegisterForm />
                </div> 
            </div>
            <Footer />
        </div>
    )
}

export default Register;