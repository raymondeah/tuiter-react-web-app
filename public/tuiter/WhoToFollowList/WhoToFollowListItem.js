const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
            <div class="d-flex flex-row">
                <img src="../../images/${who.avatarIcon}" class="wd-pfp me-2 rounded-circle">
                <div>
                    <b>${who.userName}</b> 
                    <i class="fas fa-check-circle"></i>
                    <p class="mt-0 mb-0">@${who.handle}</p>
                </div>
            </div>
            <button type="button" class="btn btn-primary rounded-pill h-75">Follow</button>
        </li>
    `);
   }
export default WhoToFollowListItem;