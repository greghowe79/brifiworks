import React from 'react';

import ImmagineContentStrategy from '../../components/ImmagineContentStrategy/ImmagineContentStrategy';
import CitazioneContentStrategy from '../../components/CitazioneContentStrategy/CitazioneContentStrategy';
import TestoContentStrategy from '../../components/TestoContentStrategy/TestoContentStrategy';


    const ContentStrategy = () => (
        <div>
            <ImmagineContentStrategy />
            <CitazioneContentStrategy />
            <TestoContentStrategy />
           
        </div>
    );
           
export default ContentStrategy;