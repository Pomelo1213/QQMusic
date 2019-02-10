class Slider {
  constructor({el, sliders, interval}){
    this.el = el
    this.sliders = sliders
    this.interval = interval | 1500
    this.currentIndex = 0
    // console.log(this.el)
    this.render()
    this.start()
  }
  render(){
    this.el.innerHTML = `<ul class="slider-wrap"></ul>`
    this.wrapEle = this.el.firstElementChild
    this.wrapEle.style.width = `${this.sliders.length * 100}%`
    this.wrapEle.innerHTML = this.sliders.map(slider => {
      return `
        <li class="slider-item">
          <a href="${slider.link}">
            <img src="${slider.image}">
          </a>
        </li>
      `
    }).join('')
  }

  start(){
    setInterval(this.next.bind(this), this.interval)
  }

  next(){
    if(this.currentIndex === this.sliders.length){
      this.wrapEle.style.transform = 'translate(0%)'
      this.currentIndex = 1
      return
    }
    this.wrapEle.style.transform = `translate(-${(this.currentIndex * 100) / this.sliders.length}%)`
    this.currentIndex += 1
  }
}