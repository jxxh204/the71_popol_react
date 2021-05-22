import React, {Component} from 'react';
import Logo from '../../images/Yea-jin.png';
import styles from './Header.css';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state ={
            menu:['Portfolio','About','Contact'],
            subM_Display : 'block',
            subM_Class : styles.subMenu
        }
        this.isMenuClick = false;
        this.setMenu = this.setMenu.bind(this);
        this.onClickMenu = this.onClickMenu.bind(this);
    }
    
    onClickMenu (menu,e) {
        if(menu === 'Portfolio' && !this.isMenuClick ) {
            if(this.state.subM_Display === 'none') {
                this.setState({subM_Display:'block',subM_Class: 'subMenu'})
                this.isMenuClick = true;
                setTimeout(() => {
                    this.isMenuClick = false;
                }, 1000);
            } else {
                this.isMenuClick = true;
                this.setState({subM_Class: 'downSubMenu'})
                setTimeout(() => {
                    this.setState({subM_Display:'none'})
                    this.isMenuClick = false;
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
        return <div className={styles.header}>
                    <div className={styles.subHeader}>
                        <img className={styles.logo} src={Logo} />
                        <ul className={styles.menu}>
                            {this.setMenu()}
                        </ul>

                        {/* submenu */}
                        <ul  className={this.state.subM_Class}
                        style={{display:this.state.subM_Display}}>
                            <li>All</li>
                            <li>Character</li>
                            <li>BX Design</li>
                            <li>Illustration</li>
                        </ul>
                        {/* submenu */}


                    </div>
                </div>
    }
}