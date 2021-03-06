class Artist {
    constructor(artistName) {
        this.artistName = artistName;
        this.list = [];
        this.profit = 0;
        this.price = 0;
    }

    intro() {
        console.log(`Hi, my name is ${this.artistName} and I am a musician!`);
    }

    songPrice(price) {
        this.price = price;
        console.log(`${this.artistName}'s price per song is ${price / 100} EUR`);

    }


    addSong(songName) {
        let song = {
            songName,
            repeat: 0,              //sukuriame nauja parametra, kad galetume suskaiciuoti grotu dainu skaiciu (1)
        };
        this.list.push(song);

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
        let songName = this.list[index].songName;
        for (let i = 0; i < this.list.length; i++) {
            const song = this.list[i];
            if (i === index) {
                song.repeat++;                                           //kai dainos [i] reiksme nurodoma metode, naujas parametras prideda pakartojima ir suskaiciuoja suma (2)
            }
        }
        this.profit += this.price;
        console.log(`Playing song: ${songName} .`);
    }

    fortune() {
        console.log(` Total lifetime wealth of ${this.vardas} is ${(this.profit / 100).toFixed(2)} EUR right now!`);
    }
}

module.exports = Artist;