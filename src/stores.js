import {writable} from 'svelte/store';


export const FeedbackStore = writable([

    {
        id: 1,
        rating: 5,
        text: 'This is a test feedback.',

    
    },

    {
        id: 2,
        rating: 10,
        text: 'This is a test feedback.',

    
    },

    {
        id: 3,
        rating: 9,
        text: 'This is a test feedback.',

    
    },



])