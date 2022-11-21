import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a href="/tuiter" className="list-group-item">
                <i className="bi bi-twitter"></i>
            </a>

            <Link to="/tuiter/" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill"></i>
                Home
            </Link>
            <Link to="/tuiter/" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill"></i>
            </Link>

            <Link to="/tuiter/explore" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i>
                Explore
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i>
            </Link>

            <a href="/tuiter" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"></i>
                Notifications
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"></i>
            </a>

            <a href="/tuiter" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill"></i>
                Messages
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill"></i>
            </a>

            <a href="/tuiter" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill"></i>
                Bookmarks
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill"></i>
            </a>

            <a href="/tuiter" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul"></i>
                Lists
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul"></i>
            </a>

            <a href="/tuiter" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"></i>
                Profile
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"></i>
            </a>
            
            <a href="/tuiter" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'more'?'active':''}`}>
                <i className="bi bi-circle-fill"></i>
                More
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'more'?'active':''}`}>
                <i className="bi bi-circle-fill"></i>
            </a>
            <div className="d-grid mt-2">
                <a href="../tuit.html"
                className="btn btn-primary btn-block rounded-pill">
                Tuit</a>
            </div>
        </div>
        
    );
};
export default NavigationSidebar;