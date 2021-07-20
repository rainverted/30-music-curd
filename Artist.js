class Artist {
    constructor(artistName) {
        this.artistName = artistName;
        this.list = [];
    }

    intro() {
        console.log(`Hi, my name is ${this.artistName} and I am a musician!`);
    }

    songPrice(songPrice) {
        console.log(`${this.artistName}'s price per song is ${songPrice / 100} EUR`);
    }


    addSong(songName) {
        let song = {
            songName,
            repeat: 0,              //sukuriame nauja parametra, kad galetume suskaiciuoti grotu dainu skaiciu (1)
            profit: 0
        };
        this.list.push(song);
        console.log(song);
    }

    playlist() {
        console.log(`${this.artistName}'s playlist:`);
        console.log(`====================`);

        for (let i = 0; i < this.list.length; i++) {
            const song = this.list[i];
            console.log(`${i + 1}. ${song.songName} (${song.repeat})`);             //gauta suma pagal parametra repeat isspausdiname(3)
        }
    }

    playSong(index) {
        const song = this.list[index];
        const songName = this.list[index].songName;
        song.repeat += 1;                                           //kai dainos [i] reiksme nurodoma metode, naujas parametras prideda pakartojima ir suskaiciuoja suma (2)
        for (let i = 0; i < this.list.length; i++) {
            if (i === index) {
                song.profit += this.list.songPrice;
            }
        }

        console.log(`Playing song: ${songName} .`);
    }

    fortune() {
        let profit = 0;
        for (let i = 0; i < this.list.length; i++) {
            profit += this.list[i].profit;
        }
        console.log(`Total lifetime wealth of ${this.artistName} is ${profit} EUR right now!`);
    }


}

module.exports = Artist;