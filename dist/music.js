/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 21:21:43
 * @LastEditTime: 2019-08-31 16:49:05
 * @LastEditors: Please set LastEditors
 */
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    loop: 'none',
    preload: 'metadate',
    mutex: 'true',
    audio: [
      {
        name: "bgmusic",
        url: 'images/llss.mp3',
        cover: 'images/cover.png',
        lrc: '',
      },
    ]
});