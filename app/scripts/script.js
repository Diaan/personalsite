
var images = [
    'https://c1.staticflickr.com/5/4426/36594618811_207165724c_k.jpg'
]
$(function(){
    setBackground('images/bg1.jpg');
    $('#img').on('load',function(){
        var img = $('#img')
        var colorThief = new ColorThief();
        var color = colorThief.getColor(img[0]);
        $('body').css('background-image','url('+img.prop('src')+')');
        //img.hide(); 
        $('.main-container').css('background-color','rgb('+color[0]+','+color[1]+','+color[2]+')'); 

    });
});

function setBackground(url){
    var img = $('#img')
    img.prop('src',url);
    
    
}
