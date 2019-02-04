
document.addEventListener('click', function(event){
  let target = event.target
  if(target.dataset.role !== 'tab'){return}
  let itemEle = document.querySelector(`.${target.dataset.item}`)
  let allItemEles = target.parentElement.children
  Array.from(allItemEles).forEach(ele => {
    let currentView = findCurrentView(ele)
    currentView.classList.remove('active')
  })
  itemEle.classList.add('active')
})


function findCurrentView(ele){
  return document.querySelector(`.${ele.dataset.item}`)
}
