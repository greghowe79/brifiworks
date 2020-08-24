import React from 'react';


import ImmagineHomepage from '../../components/ImmagineHomepage/ImmagineHomepage';
import CitazioneHomePage from '../../components/CitazioneHomePage/CitazioneHomePage';
import TestoHomepage from '../../components/TestoHomepage/TestoHomepage';

    const HomePage = () => (
        <div style={{height: '100%'}}>
            <main className="main">
                <h2 className='titolo-pagina'>Crafting content that matters</h2>
                <p>Consulting services focusing on content strategy, storytelling and marketing</p>
            </main>
            <ImmagineHomepage />
            <CitazioneHomePage />
            <TestoHomepage />
        </div>
    );
           
export default HomePage;