//fix hover element on mobile
let allEl = document.querySelectorAll('*')
  for(let i = 0; i < allEl.length; i++){
    allEl.ontouchstart = () => this.mouseover()
    allEl.ontouchcancel = () => this.mouseover()
  }

//Проверка поддержки WEBP
function check_webp_feature(feature, callback) {
  let kTestImages = {
      lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
      lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
      alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
      animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
  };
  let img = new Image();
  img.onload = function () {
      let result = (img.width > 0) && (img.height > 0);
      callback(feature, result);
  };
  img.onerror = () => callback(feature, false);
  img.src = "data:image/webp;base64," + kTestImages[feature];
}
//Если браузер поддерживает WEBP, то добавляем класс тегу body
check_webp_feature('lossy', function (feature, isSupported) {
  isSupported ? document.body.classList.add('webp-support-js') : document.body.classList.add('webp-nosupport-js')
});