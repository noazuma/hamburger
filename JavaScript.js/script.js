

$(".c-button--menu").click(function () 
{//ボタンがクリックされたら
  $(this).toggleClass('open');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () 
{//ナビゲーションのリンクがクリックされたら
    $(".c-button--menu").removeClass('open');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});