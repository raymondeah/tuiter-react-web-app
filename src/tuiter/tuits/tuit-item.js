import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";

const TuitItem  = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="d-flex flex-row">
                <div className="col-1 me-3">
                    <img alt="post img" width={50} className="float-end rounded-circle" src={`/images/${post.image}`}/>
                </div>
                <div className="col-11">
                    <i className="bi bi-x-lg float-end me-2" onClick={() => deleteTuitHandler(post._id)}></i>
                    <div>{post.userName} <i class="bi bi-patch-check-fill text-primary"></i> {post.handle} <i class="bi bi-dot"></i> {post.time}</div>
                    <div className="mb-2">{post.tuit}</div>
                    <TuitStats post={post}/>
                </div>
            </div>
            
        </li>
    );
};
export default TuitItem;