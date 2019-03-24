function renderRankContent(){
  fetch(`${localUrl}/rank`)
  .then(response => response.json())
  .then(render)

  function render(json){
    console.log('this is rank', json)
    let rankViewListEle = document.querySelector('#rankViewList')
    let dataList = json.data.topList
    rankViewListEle.innerHTML = dataList.map(data => {
      let inner = data.songList.map((song, index) => {
        return `
          <p>${index + 1} <span class="song-name">${song.songname}</span></span> - ${song.singername}</p>
        `
      }).join('')
      return `
        <li class="rank-view">
          <img src="${data.picUrl}">
          <div class="rank-view-wrap">
            <h3>${data.topTitle}</h3>
            ${inner}
          </div>
          <span class="listen-number">${(data.listenCount / 10000).toFixed(1)}万</span>
        </li>
      `
    }).join('')
  }
}