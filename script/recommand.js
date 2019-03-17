function renderRecommandContent(){
  fetch('../json/recommand.json')
  .then(response => response.json())
  .then(render)
  // .then(renderRadio)
  // .then(renderHotSongs)
  function render(json){
    renderRadio(json)
    renderHotSongs(json)
  }
  function renderRadio(json){
    let radioData = json.data.radioList
    let radioEle = document.querySelector('.radio-wrap')
    radioEle.innerHTML = radioData.map(radio =>
      `
        <li class="radio-item">
          <div class="item-media">
            <img src="${radio.picUrl}">
            <span class="icon icon-play"></span>
          </div>
          <div class="item-info">
            <h3>${radio.Ftitle}</h3>
          </div>
        </li>
      `
    ).join('')
  }

  function renderHotSongs(json){
    let hotSongsData = json.data.songList
    let hotSongEle = document.querySelector('.hot-songs-wrap')
    hotSongEle.innerHTML = hotSongsData.map(hotSong =>
      `
        <li class="hot-song-item">
          <div class="item-media">
            <img src="${hotSong.picUrl}">
            <span class="icon icon-play"></span>
          </div>
          <div class="item-info">
            <h3>${hotSong.songListDesc}</h3>
          </div>
        </li>
      `
    ).join('')
  }

}


