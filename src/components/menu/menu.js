import React from "react"
import styles from './menu.module.scss';
// import styled, { keyframes } from "styled-components"
// import { TweenMax, Power3, TimelineMax } from "gsap/TweenMax"
import { TweenMax, Power3, TimelineMax } from "gsap/all"


class Menu extends React.Component {
    state = {
        isSmall: true,
        counter: 0,
    }

    handleClick = event => {
        this.setState(state => ({ isSmall: !state.isSmall }))
    }

    constructor(props) {
        super(props)
        this.myElement = null
        this.firstLine = new TimelineMax({
            paused: true,
        })
        this.secondElement = null
        this.secondLine = new TimelineMax({
            paused: true,
        })
    }

    componentDidMount() {
        this.firstLine.to(this.myElement, 1, { rotation: 135, y: 6 })

        this.secondLine.to(this.secondElement, 1, { rotation: 45, y: -6 })
    }

    animation = () => {
        if (this.state.counter === 0) {
            this.firstLine.play()
            this.secondLine.play()
            this.setState(state => ({ counter: this.state.counter + 1 }))
        } else {
            this.firstLine.reverse()
            this.secondLine.reverse()
            this.setState(state => ({ counter: this.state.counter - 1 }))
        }
    }

    allFunctions = event => {
        this.animation()
        this.handleClick()
    }

    render() {
        return (
            <div>
                <div className={styles.wrapper}
                >
                    <div className={styles.menu_links} isSmall={this.state.isSmall}>
                        <div className={styles.link_wrapper}>
                            <div className={styles.link}>Co robię</div>
                            <div className={styles.link}>Proces projektowy</div>
                            <div className={styles.link}>Moje umiejętności</div>
                            <div className={styles.link}>Portfolio</div>
                            <div className={styles.link}>Kontakt</div>
                        </div>
                    </div>

                    <div className={styles.hamburger_btn} onClick={this.allFunctions}>
                        <div className={styles.hamburger_line_one}
                            ref={div => (this.myElement = div)}
                        ></div>

                        <div className={styles.hamburger_line_two}
                            ref={div => (this.secondElement = div)}
                        ></div>
                    </div>


                    {/* <Pudlo></Pudlo> */}

                </div>
            </div>
        )
    }
}

// const Pudlo = styled.div`
//    width: 90px;
//    height: 900px;
//    right: 0;
//    position: absolute;
//    background-color: blue;
// `

export default Menu
