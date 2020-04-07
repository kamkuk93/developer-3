import React from 'react';
import axios from 'axios';

import styles from './single_post.module.scss';

import styled, { keyframes } from "styled-components"

const MainImage = styled.div`

    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: 100% auto;
    display: inline-block;
    width: 310px;
    height: 200px;
    border-radius: 30px;
    background-color: blue;


    @media (min-width: 1360px) {
        width: 100%;
    height: 553px;


}

`


class Post extends React.Component {
    state = {
        imgUrl: '',

    }



    componentDidMount() {
        const { featured_media } = this.props;
        const getImageUrl = axios.get(`/wordpress/wp-json/wp/v2/media/${featured_media}`);

        Promise.all([getImageUrl]).then(res => {
            this.setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,

            })
        });
    }

    render() {
        const { imgUrl } = this.state;
        return (
            <>

                <div className={styles.wrapper}>




                    {/* <img className={styles.img} src={imgUrl} alt="view" /> */}

                    <MainImage src={imgUrl}>


                    </MainImage>


                    <div className={styles.title}>
                        <p className={styles.nameSurname}>{this.props.title.rendered}</p>
                    </div>
                    <div className={styles.paragraph}>

                        <div dangerouslySetInnerHTML={{ __html: this.props.content.rendered }} />

                    </div>


                </div>

            </>
        )
    }


}

export default Post;