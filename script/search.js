function renderSearchContent(){
  fetch('../json/search.json')
  .then(response => response.json())
  .then(render)

  function render(json){
    let hotSearchEle = document.querySelector('#hotWord')
    let specialKey = json.data.special_key
    let data = json.data.hotkey
    let length = data.length
    let temp = Array(4).fill().map(i => {
      return `
        <div class="hot-search-item">${data[getRandom(length)].k}</div>
      `
    })
    temp.push(`<div class="hot-search-item special">${specialKey}</div>`)
    hotSearchEle.innerHTML = temp.reverse().join('')
  }
  function getRandom(length){
    return Math.floor(Math.random()* length)
  }
}
