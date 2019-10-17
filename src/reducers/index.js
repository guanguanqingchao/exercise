import {
    ADD_ARTICLE,
    FOUND_BAD_WORD,
    DATA_LOADED

} from 'actions/constant';

const initialState = {
    articles: [],
    remoteArticles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        // state.articles.push(action.payload);
        // 保证不改变不改变原state
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });

    }
    if (action.type === FOUND_BAD_WORD) {

        return Object.assign({}, state, {
            articles: state.articles.concat({
                title: '这是无效的单词',
                id: '789789759843769'
            })
        });

    }
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;