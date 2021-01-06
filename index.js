
            const music = document.querySelector("audio");
            const play = document.getElementById("play");
            const img = document.querySelector("img");
            const artist = document.getElementById("artist");
            const title = document.getElementById("title");
            const prev = document.getElementById("prev");
            const next = document.getElementById("next");

            const array = document.querySelectorAll(".selected");

            const progress_div = document.getElementById("progress_div");

            let total_duration = document.getElementById("duration");
            let current_time = document.getElementById("current_time");

            let progress = document.getElementById("progress")

            const songs = [{
                name : "song1", 
                title : "songs", 
                artist : "Arijit Singh"
            }, {
                name : "song2", 
                title : "song2", 
                artist : "LM"
            }, {
                name : "song3", 
                title : "song3", 
                artist : "Ed Sheeran"
            }, {
                name : "song4", 
                title : "song4", 
                artist : "Coldplay"
            }, {
                name : "song5", 
                title : "song5", 
                artist : "KK"
            }, {
                name : "song6", 
                title : "song6", 
                artist : "JB"
            }, {
                name : "song7", 
                title : "song7", 
                artist : "Ed Sheeran"
            }, {
                name : "song8", 
                title : "song8", 
                artist : "KK"
            }, ];

            let isPlaying = false;

            //for playing the music
            const playMusic = () =>  {
                isPlaying = true;
                music.play();
                play.classList.replace("fa-play", "fa-pause");
                img.classList.add("anime");
            };

            //pausing feature
           const pauseMusic = () => {
                isPlaying = false;
                music.pause();
                play.classList.replace("fa-pause", "fa-play");
                img.classList.remove("anime");
            };

            play.addEventListener("click", (event) => {
                isPlaying ? pauseMusic() : playMusic();
                //console.log(event);
            })

            document.querySelectorAll(".selected")[0].style.color = "white";
            document.querySelectorAll(".selected")[0].style.backgroundColor = "black";
            document.querySelectorAll(".selected")[0].style.borderRadius = '4em';

            const loadSong = (songs) => {
                for(var i = 0; i<array.length;i++)
            {
                
                    document.querySelectorAll(".selected")[i].style.color = "#171717";
                    document.querySelectorAll(".selected")[i].style.backgroundColor = "#fff";
                // console.log("yes");
                // document.querySelectorAll(".selected")[i].addEventListener("click", function(){
                //     console.log("hello");
            }

                
            
                title.textContent = songs.title;
                artist.textContent = songs.artist;
                music.src = "music/" + songs.name + ".mp3";
                img.src = "img/" + songs.name + ".jpg";
                const currentPlay = document.getElementById(songs.name);
                currentPlay.style.color = "#fff";
                currentPlay.style.backgroundColor = "black";
                currentPlay.style.borderRadius = '4em';
                //currentPlay.style.classList.add(whenPlaying);
            };


            //loadSong(songs[0]);
            songIndex = 0;

            const nextSong = () => {
                songIndex = (songIndex + 1) % songs.length;
                loadSong(songs[songIndex]);
                playMusic(); 
                //const currentPlay = document.getElementById(songs[songIndex].name);
                //console.log(currentPlay);
                //currentPlay.style.color = "#171717";
                //console.log(currentPlay);
            }

            const prevSong = () => {
                songIndex = (songIndex - 1 + songs.length) % songs.length;
                loadSong(songs[songIndex]);
                playMusic(); 
            }

            // progress js work

            music.addEventListener("timeupdate", (event) => {
                const {currentTime, duration} = event.srcElement;
                //console.log(currentTime + " " + duration);
                let progress_time = currentTime/duration*100;
                progress.style.width = `${progress_time}%`;
                var minute = parseInt(duration/60);
                var seconds = parseInt(duration % 60);
                //console.log(minute + ":" + seconds);
                if(duration)
                {
                    if(seconds > 9)
                    total_duration.textContent = `${minute}:${seconds}`
                else 
                    total_duration.textContent = `${minute}:0${seconds}`
                }
                //total_duration.textContent = `${minute}:${seconds}`;

                //current time duration

                let min_currentTime = parseInt(currentTime / 60);
                let sec_currentTime = parseInt(currentTime % 60);

                if(sec_currentTime > 9)
                current_time.textContent = `${min_currentTime}:${sec_currentTime}`
                else 
                current_time.textContent = `${min_currentTime}:0${sec_currentTime}`

            })

            //when clicked on progress bar

            progress_div.addEventListener('click', (event) => {
                const {duration} = music;
                let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
                music.currentTime = move_progress
            })

            //if music is completed call the next one
            music.addEventListener("ended", nextSong);

            next.addEventListener("click", nextSong);
            prev.addEventListener("click", prevSong);

            //console.log(array);

            for(var i = 0; i<array.length;i++)
            {
                document.querySelectorAll(".selected")[i].addEventListener("click", function(){
                    const name = this.innerHTML;
                    var index = parseInt(name[5]) - 1;
                    loadSong(songs[index])
                    playMusic();
                    //console.log(index + " " + typeof(index));
            }
            );
 }




      

