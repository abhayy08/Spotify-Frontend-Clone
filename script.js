document.addEventListener('DOMContentLoaded', () => {

    let imgUrls = [
        "https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/0C0XlULifJtAgn6ZNCW2eu/en-GB/default",
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe17c0aa1714a03d62b5ce4e0/5/en-GB/default",
        "https://i.scdn.co/image/ab67616d00001e02aaeb5c9fb6131977995b7f0e",
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe17c0aa1714a03d62b5ce4e0/5/en-GB/default",
        "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/2uHyAsNq9m_6Q8hkBJ-6P9btnf1-EHo9CSiqETf0XWE4BFo1gZSJ1Jof5Jm6Ss7nW7o_HuNjMAqP-K8yNgVd1achF9Bca_i7rVKhFWmm0j0=/MDM6NjQ6NjBUNjAtMDEtNA==",
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe17c0aa1714a03d62b5ce4e0/5/en-GB/default",
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da/3/en-GB/default"
    ]

    const navDrawerBtn = document.querySelector('.nav_drawer_btn');
    const leftContainer = document.querySelector('.left_container');

    navDrawerBtn.addEventListener('click', () => {
        leftContainer.classList.toggle('active');
    });

    // handle search input
    const searchInput = document.getElementById('search_input');

    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();

        console.log(`Searching for: ${query}`);
    });

    // handle filter buttons
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const clearFilterButton = document.querySelector('.icon_remove_filter');

    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            clearFilterButton.classList.add('active')

            console.log(`Filter applied: ${event.target.innerText}`);
        });
    });

    clearFilterButton.addEventListener('click', () => {
        clearFilterButton.classList.remove('active')
        filterButtons.forEach(btn => btn.classList.remove('active'));
    });

    const rightContainerFilterButtons = document.querySelectorAll('.right_container_filter_buttons button');

    rightContainerFilterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            rightContainerFilterButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            console.log(`Filter applied: ${event.target.id}`);
        })
    });

    // handle profile picture click
    const profilePic = document.querySelector('.profile_pic');

    profilePic.addEventListener('click', () => {
        console.log('Profile picture clicked');
    });

    const playlists = document.querySelectorAll('.playlists')
    playlists.forEach(playlist => {
        imgUrls.forEach(url => {
            const div_playlist_item = document.createElement('div');
            div_playlist_item.classList.add('playlist_item');
            const playlist_item_content = document.createElement('div');
            playlist_item_content.classList.add('playlist_item_content');

            playlist_item_content.innerHTML = `
            <img id="playlist_img"
                src="${url}" />
            <p>
                Your weekly mixtape of fresh
                music. Enjoy new music and ......
            </p>
            `;
            div_playlist_item.append(playlist_item_content);
            playlist.append(div_playlist_item);
        })
    })

    const filterbuttonContainerRight = document.querySelector('.right_container_filter_buttons');
    const rightContainer = document.querySelector('.right_container');

    rightContainer.addEventListener('scroll', () => {
        if (rightContainer.scrollTop > 0) {
            filterbuttonContainerRight.classList.add('scrolled');
        } else {
            filterbuttonContainerRight.classList.remove('scrolled');
        }
    });

    document.querySelector('.resizer_handle').addEventListener('drag', (ev) => {
    })

    const shuffleIndicators = document.querySelectorAll('.indicator');
    function toggleIndicator(target) {
        shuffleIndicators.forEach(indicator => {
            if (indicator.classList.contains(target)) {
                indicator.classList.add('show');
            } else {
                indicator.classList.remove('show');
            }
        });
    }

    const shuffle_btn = document.querySelector('.shuffle');
    shuffle_btn.addEventListener('click', (e) => {
        shuffle_btn.classList.toggle('on');
        document.querySelector('.indicator_shuffle').classList.toggle('show');
    });

    const repeat_btn = document.querySelector('.repeat');
    repeat_btn.addEventListener('click', () => {
        repeat_btn.classList.toggle('on');
        document.querySelector('.indicator_repeat').classList.toggle('show');
        audioPlayer.loop = !audioPlayer.loop;

    });

    const slideshow_btn = document.querySelector('.slideshow');
    slideshow_btn.addEventListener('click', () => {
        slideshow_btn.classList.toggle('on');
        toggleIndicator(slideshow_btn.classList[0]);
    });

    const lyrics_btn = document.querySelector('.lyrics');
    lyrics_btn.addEventListener('click', () => {
        lyrics_btn.classList.toggle('on');
        toggleIndicator(lyrics_btn.classList[0]);
    });

    const queue_btn = document.querySelector('.queue');
    queue_btn.addEventListener('click', () => {
        queue_btn.classList.toggle('on');
        toggleIndicator(queue_btn.classList[0]);
    });

    const devices_btn = document.querySelector('.devices');
    devices_btn.addEventListener('click', () => {
        devices_btn.classList.toggle('on');
        toggleIndicator(devices_btn.classList[0]);
    });

    const play_pause_btn_icon = document.querySelector('.play_pause.material-icons-outlined')
    document.querySelector('.play_pause').addEventListener('click', () => {
        if (audioPlayer.paused) {
            playSong()
        } else {
            pauseSong()
        }
    });

    const audioPlayer = document.getElementById('audioPlayer');
    const progressInput = document.getElementById('progress');
    const durationTime = document.getElementById('duration');
    const currentProgress = document.getElementById('current-progress');
    const progressBar = document.getElementById('song_progress');

    let songs = [

        {
            "title": "Carry On My Wayward Son",
            "artist": "Kansas",
            "songName": "CarryonMyWaywardSon.mp3",
            "image": "https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/0C0XlULifJtAgn6ZNCW2eu/en-GB/default"
        },
        {
            "title": "C418 - Alpha",
            "artist": "C418",
            "songName": "C418Alpha.mp3",
            "image": "https://i.scdn.co/image/ab67616d00001e02aaeb5c9fb6131977995b7f0e"
        }

    ];

    let currIdx = 0;

    audioPlayer.addEventListener('timeupdate', () => {
        progressInput.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        durationTime.textContent = formatTime(audioPlayer.duration);
        currentProgress.textContent = formatTime(audioPlayer.currentTime);

    });

    audioPlayer.addEventListener('ended', () => {
        if (!audioPlayer.loop) {
            pauseSong();
            nextSong();
        }
    });

    const currentSongName = document.getElementById('currentSong');
    const currentSongImg = document.getElementById('currentSongImg');
    const currentSongArtist = document.getElementById('currentSongArtist');

    function updateSongDisplay() {
        currentSongName.innerText = songs[currIdx].title;
        currentSongImg.src = songs[currIdx].image;
        currentSongArtist.innerText = songs[currIdx].artist;
    }

    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    nextButton.addEventListener('click', () => {
        nextSong();
    });

    prevButton.addEventListener('click', () => {
        prevSong();
    });

    function nextSong() {
        currIdx = (currIdx + 1) % songs.length;
        audioPlayer.src = songs[currIdx].songName;
        updateSongDisplay();
        playSong();
    }


    function prevSong() {
        currIdx = (currIdx - 1 + songs.length) % songs.length;
        audioPlayer.src = songs[currIdx].songName;
        updateSongDisplay();
        playSong();
    }

    function playSong() {
        audioPlayer.play();
        play_pause_btn_icon.innerText = "pause";
    }

    function pauseSong() {
        audioPlayer.pause();
        play_pause_btn_icon.innerText = "play_arrow";
    }

    progressInput.addEventListener('input', () => {
        audioPlayer.currentTime = (progressInput.value / 100) * audioPlayer.duration;
        progressBar.value = progressInput.value
    });

    function formatTime(timeInSeconds) {
        const mins = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);

        return `${mins}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    const volumeController = document.getElementById('volume');
    const volumeLevelIndicator = document.getElementById('volume_level');

    volumeController.addEventListener('input', () => {
        audioPlayer.volume = volumeController.value;
        volumeLevelIndicator.value = volumeController.value;
    });

    const playlists_list = document.querySelector('.playlist_list');

    for (let i = 0; i < 10; i++) {
        const playlist_item_li = document.createElement('li');
        playlist_item_li.innerHTML = `
        <div class="list_item">
            <div class="left_playlistItemImg">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5d7e3320-873f-4463-826e-fa7c488ee5cb/d87lxio-8ac0f4ad-2a56-4858-98a8-63cc8d9e4831.jpg/v1/fit/w_600,h_800,q_70,strp/carry_on_my_wayward_son__by_scaredofreality_d87lxio-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvNWQ3ZTMzMjAtODczZi00NDYzLTgyNmUtZmE3YzQ4OGVlNWNiXC9kODdseGlvLThhYzBmNGFkLTJhNTYtNDg1OC05OGE4LTYzY2M4ZDllNDgzMS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.w9C1dqS-2u7jzAKVGUGLW0Qm2KlvVAJnkbrQcWkgmx4" alt="">
                <div class="overlay"></div>
                <svg viewBox="0 0 24 24" class="playlist_item_overlay">
                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                </svg>
            </div>
            <div class="artist_info">
                <p id="artist_name">Kansas</p>
                <p id="artist_tag">Artist</p>
            </div>
        </div>
    `;
        playlists_list.appendChild(playlist_item_li);
    }


})

