import React from 'react';
import { email } from '../data';

import Fade from 'react-reveal/Fade';

export default function Articles() {
    return (
        <div className="contact container-fluid section" name="contact">
            <Fade bottom>
                <h2 className="section-header">Contato</h2>
            </Fade>
            <Fade bottom>
                <p>Entre em contato comigo no <a href={"mailto:" + email} className="card-link">{email}</a> para saber sobre uma colaboração.</p> 
            </Fade>
        </div>
    )
}
