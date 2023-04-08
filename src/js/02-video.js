import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 'vimeo - player',
  width: 640,
});

const KEY_TIME = 'videoplayer-current-time';
let secondsCurrent = JSON.parse(localStorage.getItem(KEY_TIME)) ?? 0;

player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(seconds => {
      localStorage.setItem(KEY_TIME, JSON.stringify(seconds));
    });
  }, 1000)
);
player.setCurrentTime(secondsCurrent).then(seconds => {
  localStorage.removeItem(KEY_TIME);
});

