import videojs from 'video.js';

export const player2 = () => {
  // ELEMENTS //
  const portfolioList = document.querySelector('.work_list');
  const isPlaying = true;
  const modal = document.querySelector('.player_modal');
  modal?.classList.remove('is-active');

  const modalPlayer = videojs('#my-video-2', {
    fluid: true,
  });

  // FUNCTIONS //
  const playVid = (video) => {
    videojs(video).play();
    videojs(video).hasStarted(true);
  };

  const stopVids = () => {
    const players = document.querySelectorAll('#my-video');
    players?.forEach((video) => {
      videojs(video).pause();
      videojs(video).currentTime(0);
      videojs(video).hasStarted(false);
    });
  };

  // EVENT HANDLERS //
  portfolioList?.addEventListener('mouseover', (e) => {
    const hovVid = e.target.closest('#my-video');
    if (!hovVid) return;
    playVid(hovVid);
  });

  portfolioList?.addEventListener('mouseout', () => {
    stopVids();
  });

  portfolioList?.addEventListener('click', (e) => {
    const clickedVid = e.target.closest('#my-video');
    if (!clickedVid) return;

    modal?.classList.add('is-active');
    playModal(clickedVid);
  });
};
