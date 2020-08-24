import React from 'react';

import ImmagineAuthenticity from '../../components/ImmagineAuthenticity/ImmagineAuthenticity';
import CitazioneAuthenticity from '../../components/CitazioneAuthenticity/CitazioneAuthenticity';


    const Authenticity = () => (
        <div style={{height: '100%'}}>
            <main className="main">
                <h2 className='titolo-pagina'>Authenticity</h2>
                <p>A credible, trustworthy and transparent proposition to success</p>
            </main>
            <ImmagineAuthenticity />
            <CitazioneAuthenticity />
        </div>
    );
           
export default Authenticity;