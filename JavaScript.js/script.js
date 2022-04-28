$(function() {

$('.p-head__menu').on("click",function () 

{//ボタンがクリックされたら

  $('.l-sideber').toggleClass('open');
    //ボタン自身に openクラスを付与し
  $('.c-cover').toggleClass('active');
    // activeクラスを付与
  $('.c-line__menu1').toggleClass('open');
  // バツ動き1
  $('.c-line__menu2').toggleClass('open');
  // バツ動き2
});

$('.c-button__close').on("click",function () 

{//ナビゲーションのリンクがクリックされたら

    $('.l-sideber').removeClass('open');
    //ボタンの activeクラスを除去し
    $('.c-cover').removeClass('active');
    //オーバーレイのactiveクラスも除去
});

});