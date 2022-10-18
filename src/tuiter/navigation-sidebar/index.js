import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a href="/tuiter" className="list-group-item">
                <i class="bi bi-twitter"></i>
            </a>

            <a href="/tuiter" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'home'?'active':''}`}>
                <i class="bi bi-house-fill"></i>
                Home
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'home'?'active':''}`}>
                <i class="bi bi-house-fill"></i>
            </a>

            <a href="/tuiter" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'explore'?'active':''}`}>
                <i class="bi bi-hash"></i>
                Explore
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'explore'?'active':''}`}>
                <i class="bi bi-hash"></i>
            </a>

            <a href="/tuiter" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'notifications'?'active':''}`}>
                <i class="bi bi-bell-fill"></i>
                Notifications
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'notifications'?'active':''}`}>
                <i class="bi bi-bell-fill"></i>
            </a>

            <a href="/tuiter" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'messages'?'active':''}`}>
                <i class="bi bi-envelope-fill"></i>
                Messages
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'messages'?'active':''}`}>
                <i class="bi bi-envelope-fill"></i>
            </a>

            <a href="/tuiter" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'bookmarks'?'active':''}`}>
                <i class="bi bi-bookmark-fill"></i>
                Bookmarks
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'bookmarks'?'active':''}`}>
                <i class="bi bi-bookmark-fill"></i>
            </a>

            <a href="/tuiter" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'lists'?'active':''}`}>
                <i class="bi bi-list-ul"></i>
                Lists
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'lists'?'active':''}`}>
                <i class="bi bi-list-ul"></i>
            </a>

            <a href="/tuiter" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'profile'?'active':''}`}>
                <i class="bi bi-person-fill"></i>
                Profile
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'profile'?'active':''}`}>
                <i class="bi bi-person-fill"></i>
            </a>
            
            <a href="/tuiter" className={`list-group-item list-group-item-action d-none d-xl-block d-xxl-block ${active === 'more'?'active':''}`}>
                <i class="bi bi-circle-fill"></i>
                More
            </a>
            <a href="/tuiter" className={`list-group-item list-group-item-action d-block d-xl-none d-xxl-none ${active === 'more'?'active':''}`}>
                <i class="bi bi-circle-fill"></i>
            </a>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                class="btn btn-primary btn-block rounded-pill">
                Tuit</a>
            </div>
        </div>
        
    );
};
export default NavigationSidebar;