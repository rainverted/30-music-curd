class Artist {
    constructor(artistName) {
        this.artistName = artistName;
        this.list = [];
    }

    intro() {
        console.log(`Hi, my name is ${this.artistName} and I am a musician!`);
    }

    songPrice(price) {
        console.log(`${this.artistName}'s price per song is ${price / 100} EUR;`);
    }

    addSong(songName) {
        let song = { songName };
        this.list.push(song);
        // console.log(song);
    }

    playlist() {
        console.log(`${this.artistName}'s playlist:`);
        console.log(`====================`);


        for (let i = 0; i < this.list.length; i++) {
            const song = this.list[i];

            //console.log(songCount);
            console.log(`${i + 1}. ${song.songName} (${song.songCount})`);
        }

    }

    playSong(index) {
        const songName = this.list[index].songName;
        for (let i = 0; i < this.list.length; i++) {
            const song = this.list[i];

            if (song) {
                song.songCount += 1;
            }
        }
        console.log(`Playing song: ${songName} .`);
    }

    fortune() {
        console.log(`Total lifetime wealth of ${this.artistName} is 1.05 EUR right now!`);
    }

}

module.exports = Artist;