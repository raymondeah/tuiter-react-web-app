const NavigationSidebar = () => {
    return(`
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action d-flex flex-row ">
                <i class="fab fa-twitter"></i>
            </a>

            <a href="#" class="list-group-item list-group-item-action d-none d-xl-block d-xxl-block">
                <i class="fas fa-home"></i>
                Home
            </a>
            <a href="#" class="list-group-item list-group-item-action d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-non">
                <i class="fas fa-home"></i>
            </a>

            <a href="#" class="list-group-item list-group-item-action active d-none d-xl-block d-xxl-block">
                <i class="fas fa-hashtag"></i>
                Explore
            </a>
            <a href="#" class="list-group-item list-group-item-action active d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <i class="fas fa-hashtag"></i>
            </a>

            <a href="#" class="list-group-item list-group-item-action d-none d-xl-block d-xxl-block">
                <i class="fas fa-bell"></i>
                Notifications
            </a>
            <a href="#" class="list-group-item list-group-item-action d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <i class="fas fa-bell"></i>
            </a>

            <a href="#" class="list-group-item list-group-item-action d-none d-xl-block d-xxl-block">
                <i class="fas fa-envelope"></i>
                Messages
            </a>
            <a href="#" class="list-group-item list-group-item-action d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <i class="fas fa-envelope"></i>
            </a>

            <a href="#" class="list-group-item list-group-item-action d-none d-xl-block d-xxl-block">
                <i class="fas fa-bookmark"></i>
                Bookmarks
            </a>
            <a href="#" class="list-group-item list-group-item-action d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <i class="fas fa-bookmark"></i>
            </a>

            <a href="#" class="list-group-item list-group-item-action d-none d-xl-block d-xxl-block">
                <i class="fas fa-list"></i>
                Lists
            </a>
            <a href="#" class="list-group-item list-group-item-action d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <i class="fas fa-list"></i>
            </a>

            <a href="#" class="list-group-item list-group-item-action d-none d-xl-block d-xxl-block">
                <i class="fas fa-user"></i>
                Profile
            </a>
            <a href="#" class="list-group-item list-group-item-action d-blcok d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <i class="fas fa-user"></i>
            </a>

            <a href="#" class="list-group-item list-group-item-action d-none d-xl-block d-xxl-block">
                <span class="fa-stack wd-more-icon">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                </span>
                More
            </a>
            <a href="#" class="list-group-item list-group-item-action d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <span class="fa-stack wd-more-icon">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                </span>
            </a>
        </div>
        <div class="d-grid mt-2">
            <a href="tuit.html"
            class="btn btn-primary btn-block rounded-pill">
            Tuit</a>
        </div>
    `);
   }
   export default NavigationSidebar;