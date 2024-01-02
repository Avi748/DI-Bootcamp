class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch(){
        return `${this.uploader} watched all ${this.time} of ${this.title}`
    }
}

const movie1 = new Video("Movie1", "Movie1Uploader", 160)
console.log(movie1.watch())

const movie2 = new Video("Movie2", "Movie2Uploader", 120)
console.log(movie2.watch())

const movies = [
    {
        title: 'movie1',
        uploader: 'movie1Uploader',
        time: 100
    },
    {
        title: 'movie2',
        uploader: 'movie2Uploader',
        time: 110
    },
    {
        title: 'movie3',
        uploader: 'movie3Uploader',
        time: 120
    },
    {
        title: 'movie4',
        uploader: 'movie4Uploader',
        time: 130
    },
    {
        title: 'movie5',
        uploader: 'movie5Uploader',
        time: 140
    },
];

const moviesToWatch = movies.map(({title, uploader, time}) => new Video(title, uploader, time))
console.log(moviesToWatch);