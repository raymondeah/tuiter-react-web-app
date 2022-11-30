import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats  = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "disliked": false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 0,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    console.log(post);
    return(
        <div className="row">
            <div className="col-2">
                <div className="d-flex flex-row">
                    <i className="bi bi-chat me-1"></i>
                    <p>{post.replies}</p>
                </div>
            </div>

            <div className="col-2">
                <div className="d-flex flex-row">
                    <i className="bi bi-arrow-repeat me-1"></i>
                    <p>{post.retuits}</p>
                </div>
            </div>

            <div className="col-2">
                <div className="d-flex flex-row">
                    {post.liked && <i onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        likes: post.likes + 1
                    }))} className="bi bi-heart-fill me-1 text-danger"></i>}
                    {!post.liked && <i onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        likes: post.likes + 1,
                        liked: true
                    }))} className="bi bi-heart me-1"></i>}
                    <p>{post.liked && post.likes}</p>
                </div>
            </div>

            <div className="col-2">
                <div className="d-flex flex-row">
                    {post.disliked && <i onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        dislikes: post.dislikes + 1
                    }))} className="bi bi-hand-thumbs-down-fill me-1 text-primary"></i>}
                    {!post.disliked && <i onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        dislikes: post.dislikes + 1,
                        disliked: true
                    }))} className="bi bi-hand-thumbs-down me-1"></i>}
                    <p>{post.disliked && post.dislikes}</p>
                </div>
            </div>
            
            <div className="col-2">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};

export default TuitStats;