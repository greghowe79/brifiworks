import React from 'react';

import ImmagineCompetencies from '../../components/ImmagineCompetencies/ImmagineCompetencies';
import CitazioneCompetencies from '../../components/CitazioneCompetencies/CitazioneCompetencies';
import TestoCompetencies from '../../components/TestoCompetencies/TestoCompetencies';

    const Competencies = () => (
        <div style={{height: '100%'}}>
            <main className="main">
            <h2 className='titolo-pagina'>Our competencies</h2>
            <p>We connect the dots between journalism and marketing to deliver convincing narratives with impactful content</p>
            </main>
            <ImmagineCompetencies />
            <CitazioneCompetencies />
            <TestoCompetencies />
        </div>
    );
           
export default Competencies;