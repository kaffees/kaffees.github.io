if (!((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0)) {
  alert("PCは非対応なのでPCからアクセスは想定されていません＞＜");
}

var start;
function main() {
  start = new Date();
  document.getElementById("logos").style.display = "none";
  document.getElementById("menus").style.display = "block";
  document.getElementById("button").style.backgroundColor = "#2b3e2a";
  document.getElementById("button").value = "注文画面へ";
  document.getElementById("button").onclick = new Function("order();");
}
function order(){
  var stop = new Date();
  var ms = stop.getTime() - start.getTime();
  var s = ms / 1000;
  if(s > 1){
  location.href = "https://kaffees.github.io/order.html";
  }
}

welcomeShow = function() {
  document.getElementById("welcome").style.visibility ="visible";
}

setTimeout(welcomeShow, 100);