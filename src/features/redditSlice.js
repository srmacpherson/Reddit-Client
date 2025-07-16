import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Logic to fetch articles from Reddit
export const fetchArticles = createAsyncThunk(
    'reddit/fetchArticles',
    async (subreddit) => {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return {
            subreddit,
            articles: data.data.children.map(article => article.data),
        } 
    }
)

// Logic to handle the state of Reddit articles
const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        articles: [],
        subreddit: 'webdev',
        isLoading: false,
        error: null
    },
    reducers: {
        setSubreddit: (state, action) => {
            state.subreddit = action.payload;
        }
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.articles = action.payload.articles;
                state.subreddit = action.payload.subreddit;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
})

export default redditSlice.reducer;
export const { setSubreddit } = redditSlice.actions;