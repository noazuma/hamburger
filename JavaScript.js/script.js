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
  $('body').css('overflow','hidden');
  // メイン固定
});

$('.c-button__close').on("click",function () 

{//ナビゲーションのリンクがクリックされたら

    $('.l-sideber').removeClass('open');
    //ボタンの activeクラスを除去し
    $('.c-cover').removeClass('active');
    //オーバーレイのactiveクラスも除去
    $('.c-line__menu1').removeClass('open');
    // バツ動き1　除去
    $('.c-line__menu2').removeClass('open');
    // バツ動き2 除去
    $('body').css('overflow','visible');
    // 初期値に戻す
});

$(window).resize(function(){

  
    var width = $(window).width();
   
   
    // 条件を設定する
    if (width <= 1026) {
      $(".l-sideber").css("transition", "none");
    }
    // else {
    //   $("h2").css("background", "");
    // }
   
  

  // $('.l-sideber').removeClass('open');
  //   //ボタンの activeクラスを除去し
  //   $('.c-cover').removeClass('active');
  //   //オーバーレイのactiveクラスも除去
  //   $('.c-line__menu1').removeClass('open');
  //   // バツ動き1　除去
  //   $('.c-line__menu2').removeClass('open');
  //   // バツ動き2 除去
  //   $('body').css('overflow','visible');
  // let width = $(window).width();
  // let height = $(window).height();
 
  // $('l-sideber').removeClass('open');
  // $(".output2").text("縦のサイズ" + height + "px");




  // $('body').css('overflow','visible');
  // 条件を設定する
  // if (width <= 1025) {
  //   $('l-sideber').css('transtion', 'none');
  // }
  // else {
  //   $('l-sideber').css('transtion', '');
  // }
 
});
});
