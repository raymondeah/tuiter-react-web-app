import React from "react";

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
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return(
        <div className="row">
            <div className="col-3">
                <div className="d-flex flex-row">
                    <i class="bi bi-chat me-1"></i>
                    <p>{post.replies}</p>
                </div>
            </div>
            <div className="col-3">
                <div className="d-flex flex-row">
                    <i class="bi bi-arrow-repeat me-1"></i>
                    <p>{post.retuits}</p>
                </div>
            </div>
            <div className="col-3">
            <div className="d-flex flex-row">
                    {post.liked && <i class="bi bi-heart-fill me-1 text-danger"></i>}
                    {!post.liked && <i class="bi bi-heart me-1"></i>}
                    <p>{post.likes}</p>
                </div>
            </div>
            <div className="col-2">
                <i class="bi bi-share"></i>
            </div>
        </div>
    );
};

export default TuitStats;