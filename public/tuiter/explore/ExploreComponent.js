import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="d-flex flex-row justify-content-between">
            <div class="input-group mb-2 me-2">
                <div class="wd-search-icon d-flex justify-content-center align-items-center position-absolute">
                    <i class="fas fa-search"></i>
                </div>
                <input type="text" class="form-control rounded-pill" placeholder="Search Tuiter" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="wd-gear-icon d-flex justify-content-center align-items-center">
                <i class="fas fa-cog fa-2x text-primary "></i>
            </div>
        </div>

        <ul class="nav nav-tabs mb-2">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-none d-xxl-block d-xl-block d-lg-block d-md-block" href="entertainment.html">Entertainment</a>
            </li>
        </ul>        

        <div class="position-relative">
            <img src="../../images/starship.jpg" class="w-100">
            <h3 class="position-absolute text-white wd-bottom-left">SpaceX's Starship</h3>
        </div>
        ${PostSummaryList()}
    `);
}

export default ExploreComponent;