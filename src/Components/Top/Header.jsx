import React, {Component} from 'react';
import Logo from '../../images/Yea-jin.png';
import './Header.css';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state ={
            menu:['Portfolio','About','Contact'],
            subMenuDisplay : 'none'
        }
        this.setMenu = this.setMenu.bind(this);
        this.onClickMenu = this.onClickMenu.bind(this);
    }
    
    onClickMenu (menu,e) {
        console.log("click",menu,this.state.subMenuDisplay);
        if(menu === 'Portfolio') {
            if(this.state.subMenuDisplay === 'none') {
                this.setState({subMenuDisplay:'block'})
            } else {
                this.setState({subMenuDisplay:'none'})
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
                    <img className="logo" src={Logo} />
                    <ul className="menu">
                        {this.setMenu()}
                    </ul>
                    <ul className="subMenu" style={{display:this.state.subMenuDisplay}}>
                        <li>All</li>
                        <li>Character</li>
                        <li>BX Design</li>
                        <li>Illustration</li>
                    </ul>
                </div>
    }
}