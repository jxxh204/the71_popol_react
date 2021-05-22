import React, {Component} from 'react';
import Logo from '../../images/Yea-jin.png';
import './Mobile_header.css';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            menu:['Portfolio','About','Contact'],
            display : "close",
        }
        this.setMenu = this.setMenu.bind(this);
        this.onClickHambug = this.onClickHambug.bind(this);
        this.ClickAnimation = this.ClickAnimation.bind(this);
    }

    ClickAnimation(m_menu, m_menus, li) {
        if (this.state.display === 'close') { //첫 클릭
            this.setState({display:'open'})
            m_menu[0].style.backgroundColor = 'white'
            
            li[0].style.transitionDuration = '0.5s'
            li[0].style.transform = 'translate(0px,11px)'

            li[2].style.transitionDuration = '0.5s'
            li[2].style.transform = 'translate(0px,-11px)'

            m_menus[0].style.display = 'block'
            m_menus[0].style.animationName = 'm_downSubMenu'
            setTimeout(() => { // x
                li[1].style.opacity = '0%'

                li[0].style.transform = 'translate(0px,11px) rotate(45deg)'

                li[2].style.transform = 'translate(0px, -11px) rotate(-45deg)'
            }, 500);
            
        } else {                            // 두번째 클릭
            this.setState({display:'close'})
            m_menus[0].style.animationName = 'm_upSubMenu';
            m_menu[0].style.backgroundColor = '#808080'

            li[0].style.transitionDuration = '0.5s'
            li[2].style.transitionDuration = '0.5s'

            li[0].style.transform = 'translate(0px,11px) rotate(0deg)'
            li[2].style.transform = 'translate(0px, -11px) rotate(0deg)'
            setTimeout(() => {
                m_menus[0].style.display = 'none'

                li[0].style.transform = 'translate(0px,0px)'
    
                li[1].style.opacity = '100%'

                li[2].style.transform = 'translate(0px,0px)'
            }, 500);
        }
    }

    onClickHambug (e) {
        const m_menu = document.getElementsByClassName('m_menu') //햄버거 하위div
        const hambug = document.getElementsByClassName('hambug')

        const m_menus = document.getElementsByClassName('m_menus') //서브메뉴

        const li = hambug[0].children;
        e.preventDefault();
        // console.log( e, e.target.classList.value,hambug[0].children,li[0].style )

        this.ClickAnimation(m_menu, m_menus, li)
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
        return <div className={styles.m_header}>
                    <div className={styles.m_subHeader}>
                        <img className={styles.m_logo} src={Logo} />
                    </div>
                    <div className={styles.m_menu} >
                        <ul className={styles.hambug} onClick={(e) => this.onClickHambug(e)}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    
                    <ul className={styles.m_menus} style={{display:'none'}} >
                        {this.setMenu()}
                    </ul>
                </div>
    }
}