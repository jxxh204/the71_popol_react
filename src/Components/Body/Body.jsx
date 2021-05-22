import React, {Component} from 'react';
import styles from "./Body.css";

const data = [
    ['출동! 하트레인저스','도시의 안전을 지키는 하트레인저스의 활약을 담았습니다.','이미지'],
    ['출동!1 하트레인저스','도시의 안전을 지키는 하트레인저스의 활약을 담았습니다.','이미지'],
    ['출동!2 하트레인저스','도시의 안전을 지키는 하트레인저스의 활약을 담았습니다.','이미지'],
    ['출동!3 하트레인저스','도시의 안전을 지키는 하트레인저스의 활약을 담았습니다.','이미지'],
    ['출동!4 하트레인저스','도시의 안전을 지키는 하트레인저스의 활약을 담았습니다.','이미지']
]
export default class Body extends Component {
    constructor(props){
        super(props)
        this.setGrid = this.setGrid.bind(this);
    }
    setGrid() {
        let gridArr = [];
        for(let i in data){
            gridArr.push(<div key={`${data,i}`} className={styles.item} onClick={this.handleClickGrid}>{data[i][0]}</div>)
        }
        return gridArr;
    }
    handleClickGrid(e) {
        
    }



    render() {
        return <div className={styles.body}>
                    <div className={styles.popupScreen} >
                        <div className={styles.popupin}></div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.container}>
                            {this.setGrid()}
                        </div>
                    </div>
                </div>
    }
}