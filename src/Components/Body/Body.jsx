import React, {Component} from 'react';
import "./Body.css";

export default class Body extends Component {
    constructor(props){
        super(props)
    }




    render() {
        return <div className="body">
                    <div className="grid">
                        <div className="container">
                            <div className="item">11</div>
                            <div className="item">2</div>
                            <div className="item">3</div>
                            <div className="item">4</div>
                        </div>
                    </div>
                </div>
    }
}