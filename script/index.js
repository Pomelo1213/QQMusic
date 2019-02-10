(function(){

  let options = {
    el: document.querySelector('#slider'),
    sliders: [
      {
        link: '#',
        image: '../images/go-2019.jpg'
      },{
        link: '#',
        image: '../images/spring-night.jpg'
      },{
        link: '#',
        image: '../images/time-place.jpeg'
      },{
        link: '#',
        image: '../images/traditional.jpg'
      }
    ]
  }
  let slider = new Slider(options)
  window.slider = slider

  fetch('../json/recommand.json')
  .then(response => response.json())
  .then(renderRadio)
  function renderRadio(json){
    console.log('this is radio',json)
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
  }
})()