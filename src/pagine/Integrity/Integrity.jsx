import React from 'react';

import ImmagineIntegrity from '../../components/ImmagineIntegrity/ImmagineIntegrity';
import CitazioneIntegrity from '../../components/CitazioneIntegrity/CitazioneIntegrity';

    const Integrity = () => (
        <div style={{height: '100%'}}>
            <main className="main">
                <h2 className='titolo-pagina'>Integrity</h2>
                <p>An act of honesty and accuracy in what we do</p>
            </main>
            <ImmagineIntegrity />
            <CitazioneIntegrity />
        </div>
    );
           
export default Integrity;