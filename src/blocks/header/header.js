//fix hover element on mobile
let allEl = document.querySelectorAll('*')
  for(let i = 0; i < allEl.length; i++){
    allEl.ontouchstart = () => this.mouseover()
    allEl.ontouchcancel = () => this.mouseover()
  }

//webp detect
let thisIsWebP = ()=> {
  let def = $.Deferred(), crimg = new Image();
  crimg.onload = ()=>  def.resolve()
  crimg.onerror = ()=> def.reject()
  crimg.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=";
  return def.promise();
}

thisIsWebP().then(function() {
  document.body.classList.add('webp-support-js')
}, function() {
  document.body.classList.add('webp-nosupport-js')
});