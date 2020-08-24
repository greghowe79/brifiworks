import React from 'react';

import ImmagineClientsWeLove from '../../components/ImmagineClientsWeLove/ImmagineClientsWeLove';
import CitazioneClientsWeLove from '../../components/CitazioneClientsWeLove/CitazioneClientsWeLove';


    const ClientsWeLove = () => (
        <div style={{height: '100%'}}>
            <main className="main">
                <h2 className='titolo-pagina'>Clients</h2>
                <p>A genuine bond to clients from all walks of business</p>
            </main>
            <ImmagineClientsWeLove />
            <CitazioneClientsWeLove />
        </div>
    );
           
export default ClientsWeLove;