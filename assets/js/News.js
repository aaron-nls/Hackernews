class News {
    constructor(feed) {
        this.stories = feed;
    }

    static load(url) {
        return fetch(url)
            .then(response => response.json())
            .then(feed => new this(feed));
    }

    //Setter
    set stories(feed) {  
        this._stories=feed;
    }

    // Getter
    get stories() {  
        return this._stories;
    }
}
  
export default News;