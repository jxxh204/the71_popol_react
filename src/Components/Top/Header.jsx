import React, {Component} from 'react';
import Logo from '../../images/Yea-jin.png';
import './Header.css';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state ={
            menu:['Portfolio','About','Contact'],
            subM_Display : 'none',
            subM_Class : 'subMenu'
        }
        this.setMenu = this.setMenu.bind(this);
        this.onClickMenu = this.onClickMenu.bind(this);
    }
    
    onClickMenu (menu,e) {
        if(menu === 'Portfolio') {
            if(this.state.subM_Display === 'none') {
                this.setState({subM_Display:'block',subM_Class: 'subMenu'})
            } else {
                this.setState({subM_Class: 'downSubMenu'})
                setTimeout(() => {
                    this.setState({subM_Display:'none'})
                }, 1000);
            }

        }
    }

    setMenu () {
        let menuArr = [];
        this.state.menu.map((menu,idx) => {
           menuArr.push(
           <li key={`${menu}+${idx}`}>
               <a href="#" id={menu}
               onClick={(e) => this.onClickMenu(menu, e)}>{menu}</a>
            </li>)
        })
        return menuArr
    }

    render() {
        return <div className="header">
                    <div className="subHeader">
                        <img className="logo" src={Logo} />
                        <ul className="menu">
                            {this.setMenu()}
                        </ul>
                        <ul  className={this.state.subM_Class}
                        style={{display:this.state.subM_Display}}>
                            <li>All</li>
                            <li>Character</li>
                            <li>BX Design</li>
                            <li>Illustration</li>
                        </ul>
                    </div>
                </div>
    }
}