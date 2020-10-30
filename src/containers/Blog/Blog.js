import React, { Component } from 'react';
// import axios from 'axios';
// import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from "./Posts/Posts";
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import NewPost from "./NewPost/NewPost";


class Blog extends Component {


    state = {
        auth: false
    }
    // state = {
    //
    //     posts: [],
    //     selectedPostId: null,
    //     error: false
    // };

    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => {
    //             const posts = response.data.slice(0,4);
    //             const updatedPosts = posts.map(post => {
    //                 return {
    //                     ...post,
    //                     author: 'Max'
    //                 }
    //             });
    //             this.setState({posts: updatedPosts});
    //             // console.log(response);
    //         })
    //         .catch(error => {
    //             // console.log(error);
    //             this.setState({error: true });
    //         })
    // }

    // postSelectedHandler = (id) => {
    //
    //     this.setState({selectedPostId: id})
    //     // console.log(id);
    // };

    render () {

        // let posts = <p style={{textAlign: 'center'}}>Something Went Wrong </p>
        // if(!this.state.error){
        //
        //     posts = this.state.posts.map((post => {
        //             return <Post
        //                 clicked={() =>  this.postSelectedHandler(post.id)}
        //                 key={post.id}
        //                 title={post.title}
        //                 author={post.author}/>
        //         })
        //
        //
        //     );
        // }



        return (
            <div className="Blog">

                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact
                                         activeClassName="my-active"
                                         activeStyle={{color: '#fa923f', textDecoration: 'underline'}}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                // hash: '#submit',
                                // search: '?quick-submit=true'
                            }}>New Post</NavLink></li>

                        </ul>
                    </nav>
                </header>

                <Switch>
                        {this.state.auth ? <Route path="/new-post"  component={NewPost} /> : null }
                    <Route path="/posts"  component={Posts} />
                    <Route render={() => <h1>Not Found</h1>}/>
                    {/*<Redirect from="/" to="/posts"/>*/}

                {/*<Route path="/:id" exact component={FullPost} />*/}
                </Switch>

                {/*<Posts/>*/}

                {/*<section className="Posts">*/}
                {/*    {posts}*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <FullPost id={this.state.selectedPostId} />*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <NewPost />*/}
                {/*</section>*/}
            </div>
        );
    }
}

export default Blog;
