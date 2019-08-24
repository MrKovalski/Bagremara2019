import React from 'react';
import MainLayout from '../components/MainLayout.js';
import KalendarDesavanja from '../components/KalendarDesavanja.js';

export default () => (
    <div>
        <MainLayout>
            <div className="rasporedLayout">
                <h1 className="rasporedTitle">RASPORED DEŠAVANJA</h1>
                <div className="kalendar">
                    <KalendarDesavanja />
                </div>
            </div>
        </MainLayout>
    </div>
)