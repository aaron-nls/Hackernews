import News from './News.js';

document.addEventListener("DOMContentLoaded",function(){
    let topStories = News.load('https://hacker-news.firebaseio.com/v0/topstories.json');
    /* Wait for stories to load */
    topStories.then(feed => {
        /* TODO: feed.stories as an array of story objects and function move into render method */
        /* Wait for all story promises to resolves */
        Promise.all(feed.stories).then(function(stories){ let html ='<ol class="list">';
            for (let i in stories) {
                let date = new Date(stories[i].time * 1000);
                html += '<li itemscope itemtype="http://schema.org/Article"><h2 itemprop="name"><a href="'+stories[i].url+'" target="_blank">'+stories[i].title+'</a></h2><div><span itemprop="author">By: '+stories[i].by+'</span><span datetime="'+ date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() +'"  itemprop="datePublished">Posted: '+ date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() +'</span></div></li>';
            }
            document.getElementById('newsfeed').innerHTML = html + '</ol>';
        });
    });
});
