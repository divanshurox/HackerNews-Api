import React, {Component} from 'react';
import axios from 'axios';
import classes from '../css/Comments.module.css';
import Spinner from './Spinner';
import {Slide} from 'react-reveal';

export default class Comments extends Component{
    state={
        comments: [],
        loading: false
    }
    componentDidMount(){
        this.setState({loading:true});
        axios.get(`http://hn.algolia.com/api/v1/search_by_date?tags=comment,story_${this.props.match.params.id}`)
            .then((res) => {
                console.log(res.data.hits);
                this.setState({comments: res.data.hits, loading: false});
            });
    }
    render(){
        let comments = this.state.comments.map((ele,i) => {
            return (
                <Slide bottom>
                    <div className='card mt-5' style={{width: '65%', backgroundColor: 'grey', color: 'white', textAlign: 'center'}}>
                        <div className='card-body'>
                            <p>{ele.comment_text}</p>
                        </div>
                    </div>
                </Slide>
            );
        });
        if(this.state.loading){
            comments = <Spinner />
        }
        return (
            <div style={{textAlign: 'center'}}>
                <h4 style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '10px auto'}}>{this.props.match.params.title}</h4>
                <div className={classes.Comments}>
                    {comments}
                </div>
            </div>
        );
    }
}