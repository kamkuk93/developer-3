import React from 'react';
import axios from 'axios';

import styles from './single_post.module.scss';




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


                    {/* <div className={styles.profilImage}>
                        <img src={this.props.image} alt="profil" className={styles.profilPhoto} />
                    </div> */}

                    <img className={styles.img} src={imgUrl} alt="view" />

                    <div className={styles.name}>
                        <p className={styles.nameSurname}>{this.props.title.rendered}</p>
                    </div>
                    <div className={styles.line}>
                        {/* <p className={styles.field}>{this.props.content.rendered}</p> */}

                        <div dangerouslySetInnerHTML={{ __html: this.props.content.rendered }} />

                    </div>


                </div>

            </>
        )
    }


}

export default Post;