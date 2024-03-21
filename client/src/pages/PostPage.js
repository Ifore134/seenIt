import axios from 'axios';
import React,{ useState, useEffect } from 'react';
export default function PostPage(props){
    const generateComment=(e) =>{
            if (e.key ==="Enter"){
                e.preventDefault();
                const com = e.target.value
                const postId = props.post._id
                const commentData={
                    content: com
                }

                axios.post(`http://localhost:8000/comments/${postId}`, commentData)
                .then(response => {
                    console.log('Comment created:', response.data);
                    // You can update the UI to show the new comment
                    props.setComments([...props.comments, response.data]);
                    props.post.comments.push(response.data._id)
                    // props.setPosts(props.posts)
                })
                .catch(error => {
                    console.error('Error creating comment:', error);
                });

                
                   
                  
                
            }
    }
    
    return(
        <div id="postpage">
            <div id='pstpg-header'>
            <h1>{props.post.title}</h1>
            <p  id='pstpg-author'>Posted by: <p id='pstpg-author-inner'>{props.post.posted_by}</p> on {props.post.post_date_time.slice(5,10)} </p>
            <p className='pstpg-cont'>{props.post.content}</p>
            
            
            </div>

            <div className="comments">
                <input type="text" onKeyDown={generateComment} placeholder="Comment..."/>
                <div className="post-comments">
                    {console.log(props.post.comments)}
                    {console.log("here")}
                    <ul>
                        {props.comments.filter(c => props.post.comments.includes(c._id)
                        ).map(c => (
                            <li>
                            <div className="post-div">
                                {console.log(c)}
                                <p>{c.content}</p>
                            <hr className="post-breaks"/>
                            </div>
                            </li>
                        ))}
                    </ul>
                </div> 
            </div>

            {/* <div className="post-comments">
                <ul>
                    {props.post.comments.map(post => (
                        <div className="post-div">
                            g Insert method to search using comment ID
                        <hr className="post-breaks"/>
                        </div>
                    ))}
                </ul>
            </div>  */}

        </div>
    )
    
}