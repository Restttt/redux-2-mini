import axios from 'axios';

const initialState = {
    loading: false,
    articles: []
};

// ACTION TYPES //
const REQUEST_ARTICLES = "REQUEST_ARTICLES";

// ACTION CREATORS //
export function requestArticles() {
    let articles = axios.get('/api/medium').then(res => {
        return res.data;
    })
    return {
        type: REQUEST_ARTICLES,
        payload: articles
    };
};


// REDUCER FUNCTION //
export default function reducer(state = initialState, action) {
    switch(action.type) {
        // ARTICLE CASES //
        case REQUEST_ARTICLES + '_PENDING': {
            return {...state, loading: true}
        }
        case REQUEST_ARTICLES + '_FULFILLED': {
            return {loading: false, articles: action.payload}
        }
        case REQUEST_ARTICLES + '_REJECTED': {
            return {...state, loading: false}
        }
        default: {
            return state;
        }
    }
};