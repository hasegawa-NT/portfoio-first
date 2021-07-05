'use strict';
$(function() {
  $('.burger-btn').on('click',function(){//.btn_triggerをクリックすると
    $('.burger-btn').toggleClass('js-clicked');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
    /* $('.gnav').fadeToggle(500); *///.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
    $('.gnav').toggleClass('js-open');
    $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
    });

    if( $(window).width() < 768 ){//デバイスの幅が768以下のとき
    $('.gnav-item>a').on('click',function(){//.nav-item>aをクリックすると
      /* $('.gnav').fadeOut(500); *///.nav-wrapperが0.5秒でフェードアウト(メニューのフェードアウト)
      $('.burger-btn').removeClass('js-clicked');//.btn_triggerのcloseクラスを削除
      $('body').removeClass('noscroll');//bodyのnoscrollクラスを削除
    });
  }
});