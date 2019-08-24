import React, { Component } from 'react';
import MainLayout from '../components/MainLayout';

class govornici extends Component {
    render() {
        return (
            <div>
                <MainLayout>
                    <div className="govorniciLayout">
                        <h1 className="govorniciTitle">GOVORNICI</h1>
                        <div className="govorniciWindow">
                            
                        </div>
                    </div>
                </MainLayout>
            </div>
        );
    }
}

export default govornici;