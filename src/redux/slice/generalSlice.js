import { createSlice } from '@reduxjs/toolkit';

const languageList = [
    {
        currentLanguage: 'en_us',
        languageName: 'Eng'
    },{
        currentLanguage: 'zh_cn',
        languageName: '中文'
    }
];

const initialState = {
    language: languageList[0],
    languageList
};

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setLanguage(state, action) {
            state.language = action.payload;
        }
    }
});

export const { setLanguage } = generalSlice.actions;

export default generalSlice.reducer;