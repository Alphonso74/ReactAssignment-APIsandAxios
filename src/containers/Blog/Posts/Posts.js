import React, {Component} from 'react';
import Post from "../../../components/Post/Post";
import axios from "axios";
import './Posts.css'
import {Route, Switch} from "react-router";
import FullPost from "../FullPost/FullPost";
// import {Link} from 'react-router-dom';

class Posts extends Component {

    state = {
        posts: [],
        // selectedPostId: null,
        // error: false
    };

    componentDidMount() {
        // console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log(response);
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true });
            })
    }

    postSelectedHandler = (id) => {

        // this.setState({selectedPostId: id})
        // console.log(id);
        //this.props.history.push({pathname: '/posts/' + id})
        this.props.history.push({pathname: '/posts/' + id});
    };

    render() {

        let posts = <p style={{textAlign: 'center'}}>Something Went Wrong </p>;
        if(!this.state.error){

            posts = this.state.posts.map((post => {
                    return(
               // <Link to={'/posts/' + post.id} key={post.id}>
                        <Post
                        clicked={() =>  this.postSelectedHandler(post.id)}
                        key={post.id}
                        title={post.title}
                        author={post.author}/>
                //</Link>
                    );
                })


            );
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />

            </div>

        );
    }
}

export default Posts;
