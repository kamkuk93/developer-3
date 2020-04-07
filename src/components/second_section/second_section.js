import React from 'react';
import styles from './second_section.module.scss';
import { Link } from 'react-router-dom'

// import firstIcon from './../../assets/img/ikona_01.png'
// import secondIcon from './../../assets/img/ikona_02.png'
// import thirdIcon from './../../assets/img/ikona_03.png'
// import fourthIcon from './../../assets/img/ikona_04.png'




const MainBackground = () => (
    <div className={styles.wrapper}>

        <p className={styles.title} id={'wykonuje'}>Wykonuję</p>


        <Link to="/webdesign" className={styles.item}>

            {/* <img src={firstIcon} className={styles.icon} alt="Web Design" /> */}
            <div className={styles.icon_1}></div>
            <p className={styles.subtitle}>Projektowanie <br /> stron internetowych</p>

        </Link>



        <Link to="/development" className={styles.item}>
            {/* <img src={secondIcon} className={styles.icon} alt="Web Design" /> */}
            <div className={styles.icon_2}></div>
            <p className={styles.subtitle}>Wdrażanie <br /> stron internetowych</p>
        </Link>




        <Link to="/shop" className={styles.item}>
            {/* <img src={thirdIcon} className={styles.icon} alt="Web Design" /> */}
            <div className={styles.icon_3}></div>
            <p className={styles.subtitle}>Budowanie sklepów internetowych</p>
        </Link>


        <Link to="/graphicdesign" className={styles.item}>
            {/* <img src={fourthIcon} className={styles.icon} alt="Web Design" /> */}
            <div className={styles.icon_4}></div>
            <p className={styles.subtitle}>Projektowanie graficzne</p>
        </Link>

    </div >
)

export default MainBackground;










// class Root extends React.Component {
    //     state = {
    //         isModalOpen: true,
    //     }


    //     openModal = () => {
    //         this.setState({
    //             isModalOpen: true,
    //         })
    //     }

    //     closeModal = () => {
    //         this.setState({
    //             isModalOpen: false,
    //         })
    //     }


    //     render() {

    //         // destrukturyzacja - poniżej nie trzeba pisać this.state
    //         const { isModalOpen } = this.state;

    //         return (
    //             <div>

    //                 <div className={styles.wrapper}>

    //                     <p className={styles.title}>Wykonuję</p>


    //                     <div className={styles.item} onClick={this.openModal}>

    //                         <img src={firstIcon} className={styles.icon} alt="Web Design" />
    //                         <p className={styles.subtitle}>Projektowanie stron internetowych</p>
    //                     </div>
    //                     <div className={styles.item}>
    //                         <img src={secondIcon} className={styles.icon} alt="Web Design" />
    //                         <p className={styles.subtitle}>Wdrażanie stron internetowych</p>
    //                     </div>
    //                     <div className={styles.item}>
    //                         <img src={thirdIcon} className={styles.icon} alt="Web Design" />
    //                         <p className={styles.subtitle}>Projektowanie graficzne</p>
    //                     </div>
    //                     <div className={styles.item}>
    //                         <img src={fourthIcon} className={styles.icon} alt="Web Design" />
    //                         <p className={styles.subtitle}>Projektowanie identyfikacji wizualnej</p>
    //                     </div>


    //                 </div>

    //                 {isModalOpen && <ModalOne closeModalFn={this.closeModal} />}

    //                 {/* <ModalOne closeModalFn={this.closeModal} /> */}

    //                 {/* <ModalOne /> */}



    //             </div>

    //         )
    //     }


    // }

    // export default Root;