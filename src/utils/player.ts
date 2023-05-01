import Plyr from 'plyr';

export const player = () => {
  // Elements
  const workPlayersEl = [...document.querySelectorAll('.work_item')];
  const workPlayersData = [...document.querySelectorAll('.work_data')];
  const modal = document.querySelector('.player_modal');
  const modalContainer = document.querySelector('.player_container');
  const audioCover = document
    .querySelector('.player_wrapper')
    ?.querySelector('.player_audio-only-bg');
  const iconClose = document.querySelector('.player_icon-close');

  // modalContainer?.addEventListener('click', (e) => {
  //   if (e.currentTarget !== modalContainer) {
  //     modal?.classList.toggle('is-active');
  //   }
  // });

  const audioPlyr = new Plyr('audio', {});

  const modalPlyr = Plyr.setup('#player-modal', {
    controls: [
      'play-large', // The large play button in the center
      // 'restart', // Restart playback
      // 'rewind', // Rewind by the seek time (default 10 seconds)
      'play', // Play/pause playback
      // "fast-forward", // Fast forward by the seek time (default 10 seconds)
      'progress', // The progress bar and scrubber for playback and buffering
      'current-time', // The current time of playback
      'duration', // The full duration of the media
      'mute', // Toggle mute
      'volume', // Volume control
      // "captions", // Toggle captions
      // "settings", // Settings menu
      // "pip", // Picture-in-picture (currently Safari only)
      'airplay', // Airplay (currently Safari only)
      // "download", // Show a download button with a link to either the current source or a custom URL you specify in your options
      'fullscreen', // Toggle fullscreen
    ],
    muted: true,
    fullscreen: {
      iosNative: true,
    },
    hideControls: false,
  });

  const workPlayers = Plyr.setup('#player-work-gallery', {
    controls: [
      // 'play-large', // The large play button in the center
      // // 'restart', // Restart playback
      // // 'rewind', // Rewind by the seek time (default 10 seconds)
      // 'play', // Play/pause playback
      // // "fast-forward", // Fast forward by the seek time (default 10 seconds)
      // 'progress', // The progress bar and scrubber for playback and buffering
      // 'current-time', // The current time of playback
      // 'duration', // The full duration of the media
      //'mute', // Toggle mute
      // 'volume', // Volume control
      // // "captions", // Toggle captions
      // // "settings", // Settings menu
      // // "pip", // Picture-in-picture (currently Safari only)
      // 'airplay', // Airplay (currently Safari only)
      // // "download", // Show a download button with a link to either the current source or a custom URL you specify in your options
      // 'fullscreen', // Toggle fullscreen
    ],
    muted: true,
    clickToPlay: false,
    fullscreen: {
      enabled: false,
    },
  });

  // Play videos on hover
  workPlayersEl.forEach((player, i) => {
    if (workPlayersData[i].dataset.category !== 'Voices') {
      player.addEventListener('mouseover', () => {
        workPlayers[i].play();
        workPlayers[i].muted = true;
      });

      player.addEventListener('mouseleave', () => {
        workPlayers[i].stop();
        workPlayers[i].muted = true;
      });
    }
  });

  // Open modal on click
  workPlayersEl.forEach((player, i) => {
    player.addEventListener('click', () => {
      const modalTitle = document.querySelector('#player-title');
      const modalCategory = document.querySelector('#player-category');
      const modalClient = document.querySelector('#player-client');
      const modalBrand = document.querySelector('#player-brand');
      const modalName = document.querySelector('#player-name');
      const itemTitle = workPlayersData[i].getAttribute('data-title');
      const itemCategory = workPlayersData[i].getAttribute('data-category');
      const itemClient = workPlayersData[i].getAttribute('data-client');
      const itemBrand = workPlayersData[i].getAttribute('data-brand');
      const itemSrc = workPlayersData[i].getAttribute('data-src');
      const itemPosterSrc = workPlayersData[i].getAttribute('data-poster');
      const itemSoundDesigner = workPlayersData[i].getAttribute('data-sounddesigner');

      modalTitle.textContent = itemTitle;
      modalCategory.textContent = itemCategory;
      modalClient.textContent = itemClient;
      modalBrand.textContent = itemBrand;
      modalName.textContent = itemSoundDesigner;

      if (itemSoundDesigner === '') {
        modalName?.parentElement?.classList.add('is-hidden');
      }

      modalPlyr[0].source = {
        type: 'video',
        title: itemTitle,
        sources: [
          {
            src: itemSrc,
            type: 'video/mp4',
          },
        ],
        poster: itemPosterSrc,
      };

      modalPlyr[0].elements.controls.classList.add('plyr__audio-only');
      modal.classList.add('is-active');
      modalPlyr[0].play();
      modalPlyr[0].volume = 0.5;

      if (itemCategory === 'Voices') {
        audioCover?.classList.add('is-active');
      }
    });

    iconClose.addEventListener('click', function (e) {
      modal.classList.remove('is-active');
      audioCover.classList.remove('is-active');
      modalPlyr[0].stop();
    });
  });
};
