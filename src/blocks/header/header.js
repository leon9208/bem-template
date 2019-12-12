//fix hover element on mobile
document
  .querySelectorAll('*')
  .forEach((el) =>{
    el.addEventListener('touchstart', () => this.mouseover())
    el.addEventListener('touchcancel', () => this.mouseover())
  })