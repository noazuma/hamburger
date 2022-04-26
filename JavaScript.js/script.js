$(function() {

$('.c-button--menu').on("click",function () 
{//ボタンがクリックされたら

  $('.l-sideber').toggleClass('open');
    //ボタン自身に openクラスを付与し
   $('.c-cover').toggleClass('active');
    // activeクラスを付与
});

// $('.c-button--menu').click(function () 
// {//ナビゲーションのリンクがクリックされたら
//     $('.c-button--menu').removeClass('open');
//     //ボタンの activeクラスを除去し
//     $('.c-cover').removeClass('active');
//     //オーバーレイのactiveクラスも除去
// });

});