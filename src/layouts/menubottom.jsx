import React, {Component} from 'react';

export default class Home extends Component {
    render(){
        return (
            <div className="menu-bottom">
                <div className="btn-start-wrap"></div>
                <div className="btn-end-wrap">
                    <button type="button"><ion-icon name="search"></ion-icon></button>
                    <button type="button"><ion-icon name="add"></ion-icon></button>
                </div>
            </div>
        );
    }
}