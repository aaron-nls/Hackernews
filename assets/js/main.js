import News from './News.js';

document.addEventListener("DOMContentLoaded",function(){
    let topStories = News.load('https://hacker-news.firebaseio.com/v0/topstories.json');
    /* Wait for stories to load */
    topStories.then(feed => {
        console.log(feed.stories);
        Promise.all(feed.stories).then(function(stories){ let html ='<ol class="list">';
            for (let i in stories) {
                html += '<li><h2 class="story__title">'+stories[i].title+'</h2></li>';
            }
            document.getElementById('newsfeed').innerHTML = html + '</ol>';
        });
    });
});
