import News from './News.js';

document.addEventListener("DOMContentLoaded",function(){
    let topStories = News.load('https://hacker-news.firebaseio.com/v0/topstories.json');
    /* Wait for stories to load */
    topStories.then(feed => {
        console.log(feed.stories);
        Promise.all(feed.stories).then(function(stories){
            document.getElementById('newsfeed').innerHTML = stories;
        });
    });
});
