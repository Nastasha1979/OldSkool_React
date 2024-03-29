import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { galleryData } from "./gallery";
import { comments } from "./comments";
import { eventsData } from "./events";
import { watchlist } from "./watchlist";
import { reviews } from "./reviews";
import { contact } from "./contact";
import { users } from "./users";


const config = {
    key: 'root',
    storage,
    debug: true
}

export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config, {
            galleryData,
            comments,
            eventsData,
            watchlist,
            reviews,
            contact,
            users
        }),
        applyMiddleware(thunk, logger)
    );
    const persistor = persistStore(store);
    return { persistor, store };
};