$(function(){
  $(".nav ul li").on('click',function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  //选择框显示隐藏效果
  $(".select").on('click', function(event) {
    event.preventDefault();
    $(".select-box").toggle();
  });
  $(".select-box li").on('click',function(event) {
    var sectxt = $(this).text()
    $(".select input").attr( 'placeholder',sectxt);
    event.preventDefault();
  });

  $(".new span").on('click', function() {
      var i = $(".new ul")
      i.slideToggle(200);
      $(".new span .icon-link").toggleClass("rote");
    });
  //改变展开和合并左侧展开框时箭头的样式

  $(".list li").on('click',function () {
    var os = $(".os")
    $(this).addClass("items-active").siblings().removeClass("items-active");
    os.removeClass('profiles-active');
    });
  //删除的New user 切换效果

  $(".admin-container").click( function() {
    $(".admin-container .menu").slideToggle(100);
    $(".square").toggleClass('rotate');
    var HeaderUserMenu = $(".admin-container .menu");
    if (HeaderUserMenu.css('display') == 'none') {
      $('.admin-container .teal').popup({on: 'hover', position : 'bottom left'});
       //$('.teal').popup({on: 'hover',position : 'bottom left'});
    }else{
      $('.admin-container .teal').popup({on: 'hover', position : ''});
    };
    $('.admin-container .teal').popup({on: 'hover', position : 'bottom left'});
  });



   $('body').on('click', function(event) {
         event.stopPropagation();

         var target = $(event.target);
         if (target.closest(".admin").length == 0) {
           $(".admin-container .menu").hide();
           if ($(".square").hasClass('rotate')){
            $(".square").removeClass('rotate');
          };
         };
         if (target.closest(".ta_date").length == 0) {
           $('.ta_date .custom_range').hide();
         if (target.closest(".ta_date").length == 0) {
           $('.ta_calendar').hide();
         };
         };
         if (target.closest(".sel-input").length == 0) {
           $('.sel-list').hide();
         };
     });
  // $("body").on('click',function () {
  //   $(".menu").hide();
  // });
  //Administrator展开与收齐

  $(".btn-group .btn").on('click',function () {
    $(this).addClass("actived").siblings().removeClass("actived");
  });

  $(".change-state ul li").on('click',function () {
    $(this).addClass("state-active").siblings().removeClass("state-active");
  });
  //按钮组
  $(".direct .embed").on('click',function () {
    $(this).addClass("list_active").siblings().removeClass("list_active");
  });
  $(".items .os").on('click',function () {
    $(this).addClass('profiles-active');
    $(".list li").removeClass("items-active");
  })
  $(".change-date-type ul li").on('click',function () {
    $(this).addClass('date-active').siblings().removeClass("date-active");
  });
  $(".pagination .pagination-number").on('click',function () {
    $(this).addClass("pagination-actived").siblings().removeClass("pagination-actived");
  });

  $(".pageturn .page-arrow").on('mousedown', function() {
    event.preventDefault();
    $(this).css({'background':'#4896F1','color':'#fff'});
  });
  $(".pageturn .page-arrow").on('mouseup', function() {
    event.preventDefault();
    $(this).css({'background':'#fff','color':'#4896F1'});
  });
//多维分析多选区显示隐藏效果结束

  $(".device-type ul li").off('click').on('click', function() {
    $(this).addClass('device-active').siblings().removeClass('device-active');
  });//头部按钮点击效果

  //单选框点击样式开始
   $(".role-radio span").on('click',function(event) {
        //event.preventDefault();
          $(this).addClass('radio-active').siblings().removeClass('radio-active');
      });
  //单选框点击样式结束
$(".head-sel .sel-input").keyup(function(){
        var contain =  $(this).val();
        if (contain == '') {
          $(this).next().find('li').show();
        }else{
        $(this).next().find('li').hide()
        .filter(":contains('" + $(this).val() + "')").show();
        };
    });
$('.head-sel .sel-input').on('click',function(){
        $(this).next().slideToggle(100);
        $(this).parent().siblings().find('.sel-list').slideUp();
    });
//add 111111111111111111111111111111111111111111111111111111111111111111111111
  $('#save').on('click', function(event) {
    event.preventDefault();
    $('.alert').fadeIn(50)
  });
  $('.alt-cont ul li').on('click',function(event) {
    event.preventDefault();
    $(this).addClass('cont-active').siblings().removeClass('cont-active');
  });
//add 111111111111111111111

$('.ta_date li').on('click', function() {
    $('.ta_date .custom_range').hide();
    $(this).addClass('range-act').siblings().removeClass('range-act');

  });
new pickerDateRange('date1', {
            isTodayValid: true,
            autoSubmit: true,
            theme: 'ta',
            stopToday: false,
            inputTrigger: 'custom_range',
            isToday: 'today',
            success: function(obj) {
                var arr = obj.startDate.split('-');
                var arr1 = obj.endDate.split('-');
                $("#date_con").text(arr[1] + '.' + arr[2] + '-' + arr1[1] + '.' + arr1[2]);
            }
        });
  var date = new Date();
  date = date.toLocaleDateString() + "";
  date = date.split('/');
  $("#date_con").text(date[1] + '.' + date[2] + '-' + date[1] + '.' + (Number(date[2]) + 6));

  $('#div_date1 p').on('click', function(event) {
    event.stopPropagation();
    $('.ta_date .custom_range').slideToggle();
  });
  $('.ta_date li').on('click', function() {
      $('.ta_date .custom_range').slideUp();
  });
  $('body').on('click', function(event) {
    event.stopPropagation();
    $('.ta_date .custom_range').slideUp();

  });
});

function getBeforeDate(n) {
  var n = n;
  var d = new Date();
  var year = d.getFullYear();
  var mon = d.getMonth() + 1;
  var day = d.getDate();
  if (day <= n) {
    if (mon > 1) {
      mon = mon - 1;
    } else {
      year = year - 1;
      mon = 12;
    }
  }
  d.setDate(d.getDate() - n);
  year = d.getFullYear();
  mon = d.getMonth() + 1;
  day = d.getDate();
  s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-"
      + (day < 10 ? ('0' + day) : day);
  return s;
}
// 时间控件
function getTime(cb,num) {
  var MonthEng = [ '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
  new pickerDateRange('date1', {
    isTodayValid : true,
    autoSubmit : true,
    theme : 'ta',
    stopToday : false,
    inputTrigger : 'custom_range',
    isToday : 'today',
    success : function(obj) {
      $('.ta_date .custom_range').hide();
      var arr = obj.startDate.split('-');
      var arr1 = obj.endDate.split('-');
      $("#date_con").text(arr[2] + " " + MonthEng[Number(arr[1])] + ' ~ '
          + arr1[2]
      + ' ' + MonthEng[Number(arr1[1])]);

      if (cb && typeof cb == "function") {
        cb(obj.startDate, obj.endDate);
      }
    }
  });

  var init_end = getBeforeDate(0).split('-');
  var init_start = getBeforeDate(30).split('-');
  if(num && Number(num)>0){
    init_start = getBeforeDate(Number(num)).split('-');
  };
  $("#date_con").text(
      init_start[2] + " " + MonthEng[Number(init_start[1])] + ' ~ '
          + init_end[2]
      + ' ' + MonthEng[Number(init_end[1])]);
  $('#input_trigger1').on('click', function() {
    $('.ta_date .custom_range').slideToggle(100);
    event.stopPropagation();
  });
  $('.date_title').on('click', function() {
    $('.ta_date .custom_range').slideToggle(100);
    event.stopPropagation();
  });
  $('.ta_date li').on('click', function() {
    $('.ta_date .custom_range').hide();
   $(this).addClass('range-act').siblings().removeClass('range-act');
    event.stopPropagation();
  });
};

function dropdownselect(){

  $('.sel-list li').on('click',function(){
        var content = $(this).text();
        $(this).parent().prev().val(content);
        $(this).parent().slideToggle(100);
        return;
    });
}
