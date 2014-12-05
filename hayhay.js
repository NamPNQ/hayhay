console.log("%c FAP FAP Hayhaytv","background: #333; color: white;");
if(typeof addPlayer == "undefined"){
    console.log('Chua dang nhap');
}else{
    $(".banner_player_img").hide();
    addPlayer(initVideoUrl, imageSrc, null, null, videoSubs);
    $(".info_film-div").hide();
    setTimeout(function(){
    $('body').html($('#new_player_wrapper').html());
    $('body').css({width: '100%',height: '100%',position: 'absolute'});
    $('object').css('position','relative');
    },500);       
}
