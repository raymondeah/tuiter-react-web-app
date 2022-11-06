import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import { Routes, Route } from 'react-router-dom'
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}}
);

function Tuiter() {
    return(
        <Provider store={store}>
            <div class="row mt-2">
                <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                    <Routes>
                        <Route path="/explore" element={<NavigationSidebar active="explore"/>} />
                        <Route path="/" index element={<NavigationSidebar active="home"/>}/>
                    </Routes>
                </div>
                <div class="col-10 col-lg-7 col-xl-6">
                    <Routes>
                        <Route path="/explore" element={<ExploreComponent/>} />
                        <Route path="/" index element={<HomeComponent/>}/>
                    </Routes>
                </div>
                <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter