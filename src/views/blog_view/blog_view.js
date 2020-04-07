import React from 'react';
import axios from 'axios'
import styles from './blog_view.module.scss';
import SinglePost from '../../components/single_post/single_post'
import { Link } from 'react-router-dom'


class BlogView extends React.Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('/wordpress/wp-json/wp/v2/notatka')
            .then(res => this.setState({
                posts: res.data,

            }))
            .catch(err => console.log(err));
    }



    render() {
        const { posts } = this.state;

        return (
            <div className={styles.wrapper}>

                <div className={styles.box_1}>

                    <p className={styles.subtitle}>Blog</p>
                    <Link to="/" >
                        <div className={styles.close}></div>
                    </Link>
                </div>

                <div className={styles.posts}>
                    {posts.map(item => (
                        <SinglePost key={item.content.rendered} {...item} />
                    ))}
                </div>
            </div>

        )
    }


}

export default BlogView;






// const BlogView = () => (
//     <div className={styles.wrapper}>
//         <p className={styles.title}>Blog</p>

//         <SinglePost />




//     </div>
// )

// export default BlogView;