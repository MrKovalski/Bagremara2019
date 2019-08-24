import React, { Component } from 'react';
import Header from './Header';

class MainLayout extends Component {
    render() {
        return (
            <div>
            <Header />
                <div className="container mainContainer">
                    <div className="justify-content-md-center text-center">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainLayout;