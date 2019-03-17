function renderRankiContent(){
  fetch('../json/rank.json')
  .then(response => response.json())
  .then(render)

  function render(json){
    let dataList = json.data.topList
    dataList.map(data => {

      item.songList.map(song => {
        return
      })
      return `
>
            <p>1 <span class="song-name">${songname}</span></span> - ${singername}</p>
            <p>2 <span class="song-name">hello</span> - jfds</p>
            <p>3 <span class="song-name">test</span> - fjds</p>
          </div>
        </li>
      `
    })
  }
}