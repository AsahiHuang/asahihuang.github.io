/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 21:21:43
 * @LastEditTime: 2019-08-30 22:02:36
 * @LastEditors: Please set LastEditors
 */
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    loop: 'none',
    preload: 'auto',
    mutex: 'true',
    audio: [
      {
        name: "bgmusic",
        artist: 'other',
        url: 'images/llss.mp3',
        cover: '',
        lrc: '',
      },
    ]
});