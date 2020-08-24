import React from 'react';

import ImmagineContentStrategy from '../../components/ImmagineContentStrategy/ImmagineContentStrategy';
import CitazioneContentStrategy from '../../components/CitazioneContentStrategy/CitazioneContentStrategy';
import TestoContentStrategy from '../../components/TestoContentStrategy/TestoContentStrategy';


    const ContentStrategy = () => (
        <div style={{height: '100%'}}>
            <main className="main">
                <h2 className='titolo-pagina'>Content strategy</h2>
                <p>Not just content, but an inclusive approach to support our customers' goals</p>
            </main>
            <ImmagineContentStrategy />
            <CitazioneContentStrategy />
            <TestoContentStrategy />
           
        </div>
    );
           
export default ContentStrategy;