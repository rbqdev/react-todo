import React, {Component} from 'react';

class Todo extends Component {
    render(){
        return (
            <div className="todo">
                <div className="todo--bottom">
                    <div className="btn-start-wrap">
                        <button type="button"><ion-icon name="search"></ion-icon></button>
                    </div>
                    <div className="btn-end-wrap">
                        <button type="button"><ion-icon name="add"></ion-icon></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;