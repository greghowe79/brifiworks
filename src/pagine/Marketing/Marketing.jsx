import React from 'react';

import ImmagineMarketing from '../../components/ImmagineMarketing/ImmagineMarketing';
import CitazioneMarketing from '../../components/CitazioneMarketing/CitazioneMarketing';


    const Marketing = () => (
        <div style={{height: '100%'}}>
            <main className="main">
                <h2 className='titolo-pagina'>Marketing</h2>
                <p>From Strategy through Tactics to Go-to-Market implementation </p>
            </main>
            <ImmagineMarketing />
            <CitazioneMarketing />
        </div>
    );
           
export default Marketing;