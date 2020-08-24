import React from 'react';

import ImmagineTogetherness from '../../components/ImmagineTogetherness/ImmagineTogetherness';
import CitazioneTogetherness from '../../components/CitazioneTogetherness/CitazioneTogetherness';

    const Togetherness = () => (
        <div style={{height: '100%'}}>
            <main className="main">
                <h2 className='titolo-pagina'>Togetherness</h2>
                <p>We embrace inclusivity, cohesion and diversity</p>
            </main>
            <ImmagineTogetherness />
            <CitazioneTogetherness />
            
        </div>
    );
           
export default Togetherness;