import React, {Component} from 'react';
import Logo from '../../images/Yea-jin.png';
import './Mobile_header.css';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            menu:['Portfolio','About','Contact'],
            display : "none"
        }
        this.setMenu = this.setMenu.bind(this);
        this.onClickHambug = this.onClickHambug.bind(this);
    }
    
    onClickHambug (menu,e) {
        if (this.state.display === 'none') {
            this.setState({display:'block'})        
        } else {
            this.setState({display:'none'})        
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

    // setMenu () {
    // }

    render() {
        return <div className="m_header">
                    <div className="m_subHeader">
                        <img className="m_logo" src={Logo} />
                    </div>
                    <div className="m_menu" >
                        <ul className="hambug" onClick={(e) => this.onClickHambug(e)}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <ul className="m_menus" style={{display:this.state.display}}>
                        {this.setMenu()}
                    </ul>
                </div>
    }
}