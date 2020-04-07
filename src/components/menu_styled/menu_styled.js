import React from "react"
import styled, { keyframes } from "styled-components"
import { TweenMax, Power3, TimelineMax } from "gsap/all"
import { Link } from "react-scroll";
import { Link as LinkReact } from 'react-router-dom'


const HamburgerBtn = styled.div`
  position: absolute;
  z-index: 2;
  top: 15px;
  right: 35px;
  width: 48px;
  height: 48px;
  /* background-color: #e01f3d; */
  border-radius: 50%;
  transition: transform 1s;
  cursor: pointer;

  @media (min-width: 1360px) {
    top: 40px;
    right: 102px;
  
    &:hover {
    transform: scale(1.5);
  }
  }

  @media (min-width: 1920px) {
    top: 45px;
    right: 130px;
  
    &:hover {
    transform: scale(1.5);
  }
}
`;

const MenuLinks = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;

  top: 0px;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-gap: 11px;
  padding: 70px 60px 49px 60px;
  background-color: #0E1626;

  clip-path: circle(60px at 94% 73px);
  -webkit-clip-path: circle(
    ${props => (props.isSmall ? `0px` : `2010px`)} at 94.2% 73px
  );
  transition: all 1s ease-out;

  @media (min-width: 1360px) {
    padding: 60px 160px 49px 200px;
  }

  @media (min-width: 1920px) {
    padding: 120px 160px 49px 400px;
  }

`

const LinkWrapper = styled.div`
  grid-column: 1 / 13;
  grid-row: 2 / 13;
  /* background-color: pink; */
`

const LinkMenu = styled.h1`
  width: 100%;
  height: 70px;

  font-family: 'Open Sans', sans-serif;
  font-size: 21px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 31px;
  margin-top: -6px;
  margin-left: 0px;
  cursor: pointer;
  color: white;

  /* background-color: red; */

  @media (min-width: 1360px) {
    height: 88px;
    font-size: 31px;
  }
`

const HamburgerLineOne = styled.div`
  /* width: 28px; */
  width: 40px;
  height: 3px;
  position: absolute;
  background-color: #F2490C;
  top: 16px;
  left: 10px;
  @media (min-width: 1360px) {
    width: 46px;
  }
`

const HamburgerLineTwo = styled.div`
  /* width: 28px; */
  width: 40px;
  height: 3px;
  position: absolute;
  background-color: #F2490C;
  /* top: 28px; */
  top: 36px;
  left: 10px;
  @media (min-width: 1360px) {
    width: 46px;
  }
`

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
        this.firstLine.to(this.myElement, 1, { rotation: 135, y: 10 })

        this.secondLine.to(this.secondElement, 1, { rotation: 45, y: -10 })
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
                <MenuLinks isSmall={this.state.isSmall}>
                    <LinkWrapper>

                        <Link
                            activeClass="active"
                            to="wykonuje"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            <LinkMenu onClick={this.allFunctions} >Wykonuję</LinkMenu>
                        </Link>

                        <Link
                            activeClass="active"
                            to="pomagam"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            <LinkMenu onClick={this.allFunctions}>Pomagam</LinkMenu>
                        </Link>

                        <Link
                            activeClass="active"
                            to="proces"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            <LinkMenu onClick={this.allFunctions}>Proces projektowy</LinkMenu>
                        </Link>

                        <Link
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            <LinkMenu onClick={this.allFunctions}>Portfolio</LinkMenu>
                        </Link>

                        <Link
                            activeClass="active"
                            to="kontakt"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            <LinkMenu onClick={this.allFunctions}>Kontakt</LinkMenu>
                        </Link>

                        <LinkReact to="/blog">
                            <LinkMenu >Blog</LinkMenu>
                        </LinkReact>
                    </LinkWrapper>
                </MenuLinks >

                <HamburgerBtn onClick={this.allFunctions}>
                    <HamburgerLineOne
                        ref={div => (this.myElement = div)}
                    ></HamburgerLineOne>

                    <HamburgerLineTwo
                        ref={div => (this.secondElement = div)}
                    ></HamburgerLineTwo>
                </HamburgerBtn>

                {/* <Pudlo></Pudlo> */}
            </div >
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

{/* <LinkMenu onClick={this.allFunctions}>Wykonuję</LinkMenu>
<LinkMenu>Pomagam</LinkMenu>
<LinkMenu>Proces projektowy</LinkMenu>
<LinkMenu>Portfolio</LinkMenu>
<LinkMenu>Kontakt</LinkMenu> */}



export default Menu
