import React from 'react';

import ImmagineStoryTelling from '../../components/ImmagineStoryTelling/ImmagineStoryTelling';
import CitazioneStoryTelling from '../../components/CitazioneStoryTelling/CitazioneStoryTelling';

    const StoryTelling = () => (
        <div style={{height: '100%'}}>
            <main className="main">
                <h2 className='titolo-pagina'>Storytelling</h2>
                <p>A coherent narrative that wins the heart of the audience</p>
            </main>
            <ImmagineStoryTelling />
            <CitazioneStoryTelling />
            
        </div>
    );
           
export default StoryTelling;