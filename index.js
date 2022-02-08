let fullImg = document.getElementById('fullImg');
function openImg(pic){
   fullImg.src = pic.src;
};

var singleImg = document.getElementById('singleImg');
var single = document.getElementById('single');
function openSingle(photo){
   singleImg.style.display = 'flex';
   single.src = photo.src;
};

function closeBtn(){
   singleImg.style.display = 'none';
};