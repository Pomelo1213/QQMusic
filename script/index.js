(function(){
  // console.log('this si run function')
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
})()