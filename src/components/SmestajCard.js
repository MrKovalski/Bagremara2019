import React, { Component } from 'react';
import { Card } from 'primereact/card';

class SmestajCard extends Component {
    render() {
        const header = <img alt="Card" src={this.props.img} />;
        return (
            <div>
                <Card title={this.props.title} header={header} >
                    {this.props.text}
                </Card>
            </div>
        );
    }
}

export default SmestajCard;