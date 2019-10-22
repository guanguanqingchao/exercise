import {
    ADD_ARTICLE,
    FOUND_BAD_WORD,
    DATA_LOADED,
    TEST_REDUX_ACTION

} from 'actions/constant';

const initialState = {
    articles: [],
    remoteArticles: [],
    test: [{
        title: 'testetetttet',
        id: 2
    }]
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        // Array.isArray(state.articles) && state.articles.push(action.payload);
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

    if (action.type === TEST_REDUX_ACTION) {
        return Object.assign({}, state, {
            test: state.test.concat(action.payload)
        })
    }

    return state;
}

export default rootReducer;