import React, {Component} from 'react';
import axios from 'axios';
import classes from '../css/LatestPosts.module.css';
import {FaCommentAlt,FaFistRaised,FaBook} from 'react-icons/fa';
import {BsBoxArrowInUp} from 'react-icons/bs';
import Spinner from './Spinner';
import {Fade} from 'react-reveal';

export default class TopPost extends Component{
    state={
        posts: [],
        loading: false
    }
    componentDidMount(){
        const url = 'http://hn.algolia.com/api/v1/search_by_date?tags=front_page';
        this.setState({loading: true});
        axios.get(url)
            .then((res) => {
                console.log(res.data.hits);
                console.log(this.props);
                this.setState({posts: res.data.hits});
                this.setState({loading: false});
            })
            .catch((err) => {
                console.log(err);
            });
    }
    commentHandler = (title,id) => {
        this.props.history.push(`./comments/${title}/${id}`);
    }
    render(){
        let posts = this.state.posts.map((ele) => {
            return (
                <Fade left>
                    <div className='card mt-5' style={{width: '65%', backgroundColor: 'grey', color: 'white', textAlign: 'left'}}>
                        <div className='card-body'>
                            <h4 className='card-title'>{ele.title!==null?ele.title:ele.story_title}</h4>
                            <p><FaFistRaised /> {ele.points!==null?ele.points:0} by {ele.author}  <FaCommentAlt /> {ele.num_comments!==null?ele.num_comments:0}</p>
                            <hr style={{color: 'white'}}/>
                            <div>
                                <button className='btn btn-lg btn-light mr-4'><BsBoxArrowInUp /> Upvote</button>
                                <button onClick={() => this.commentHandler(ele.story_title,ele.story_id)} className='btn btn-lg btn-dark'><FaCommentAlt /> Comment</button>
                                <button onClick={() => window.open(ele.story_url)} className='btn btn-lg btn-secondary float-right'><FaBook /> Read More</button>
                            </div>
                        </div>
                    </div>
                </Fade>
            );
        });
        if(this.state.loading){
            posts = <Spinner />
        }
        return (
            <div className={classes.Posts}>
                <h3 style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '10px auto'}}>Top Posts</h3>
                {posts}
            </div>
        );
    }
} 