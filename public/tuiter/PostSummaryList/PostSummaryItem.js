const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="d-flex flex-row justify-content-between">
                <div class="me-2">
                    <p class="text-secondary m-0">${post.topic}</p>
                    <div class="d-flex flex-row m-0 align-items-center">
                        <p class="m-0 me-1"><b>${post.userName}</b></p>
                        <i class="fas fa-check-circle me-1"></i>
                        <p class="text-secondary m-0"> - ${post.time}</p>
                    </div>
                    <p class="m-0"><b>${post.title}</b></p>
                    <p class="m-0 text-secondary">${post.tweets === undefined ? '' : post.tweets}</p>
                </div>
                <img src=${post.image} class="wd-tuit-img rounded">
            </div>
        </li>
    `);
   }
export default PostSummaryItem