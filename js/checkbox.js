(function ($){

  $.fn.extend({
    dataList: function (options){
   //各种属性参数

   var defaults = {
  	width: '200',//下拉列表宽
  	maxheight: '150',//下拉列表最大高度
    data: ['item1','item2','item3','item4','item5','item6'],//下拉列表中的数据
  	selectallTxt: '&nbsp;&nbsp;All&nbsp;&nbsp;&nbsp;&nbsp;',//全选文本
  	selectokTxt: 'Done',//确认文本
   };
   var options = $.extend(defaults, options);

   return this.each(function (){

   //插件实现代码
  	//创建 input输入框
  	//readonly:锁住键盘，不能向文本框输入内容

    var $ipt = $('<input type="text" id="input" value="" readonly placeholder="添加对比">');
    //$ipt.width(options.width);//设定文本框宽度

    var $this = $(this);


  	//创建 下拉选项

    //1.下拉选项包裹
    var $container = $('<div class="data-list"></div>');//定义外层容器 container
    $container.width(options.width);
    var $wrapper = $('<div class="wrapper"></div>');
    $ipt.appendTo($container);//把input插入到container里面


    //2.创建 全选和确认按钮  bottom层
    var this_index = $(this).index();//防止ID重复，定义当前容器的index

    var $bottom = $('<div class="bottom"></div>');//底部的全选按钮和确定按钮
    var $all = $('<input type="checkbox" id=select_all' + this_index + ' style="display: block; float: left; margin-top: 8px;"><label for=select_all' + this_index + '>'+options.selectallTxt+'</label>');//全选
    var $all_container = $('<span></span>');
    var $btn = $('<a class="done" href="#">'+options.selectokTxt+'</a>');
    $all.appendTo($all_container);
    $all_container.appendTo($bottom);
    $btn.appendTo($bottom);

    //3.下拉中的内容 content层
    var $content = $('<div class="content"></div>');//用来放置复选的内容
    var $content_ul = $('<ul></ul>');
    var count = options.data.length;
    var h = ( (count * 30) >= parseInt(options.maxheight) ) ? options.maxheight : "'" + count * 30 + "'";//每行高30，计算最大行高
    $content.height(h);


    for(var i = count-1; i >= 0; i--){
       var check_id = "check_" + this_index + '_' + i ;
       var $list = $('<li><input class="options-check" type="checkbox" value=' +options.data[i]+ ' id=' + check_id +  ' /><label for=' + check_id +'>' + options.data[i]+ '</label></li>' );
       $list.prependTo($content_ul);
    }
    $content_ul.appendTo($content);

    //4把bottom层和content层加到$container下
    $content.appendTo($wrapper);
    $bottom.appendTo($wrapper);
    $wrapper.appendTo($container);//把bottom和content一起加入container


    //把$container加到$(this)下
    $container.appendTo($this);


          //js Effect
  	var $dropList = $content.find('.options-check');

  	$all.change(function (){//点击all
  		  var opt_arr = [];
  		  if($all.is(':checked')){
  		  	$dropList.each(function (){
  		  		$(this).eq(0).prop("checked",true);
  				opt_arr.push($(this).val());
  		  	});
  		  }else {
  		  	$dropList.each(function (){
  		  		$(this).eq(0).prop("checked",false);
  				  opt_arr=[];
  		  	});
  		  }
  		  $ipt.val(opt_arr.join(';'));
  	});

  	$wrapper.addClass('hidden');//开始隐藏

  	$ipt.focus(function (){//文本框处于编辑
  		event.stopPropagation();
      $(".wrapper").addClass('hidden');
  		$wrapper.removeClass('hidden');
  	});

  	$btn.click(function (){//点击 ok按钮
  		event.stopPropagation();
  	    $wrapper.addClass('hidden');
  	});

  	$('body').on('click', function(event) {
  		event.stopPropagation();
  		var target = $(event.target);
  		if(target.closest(".compare-contain").length == 0){
  			$wrapper.addClass('hidden');
  		}
  	});

  	$dropList.change(function (){//勾选选项
  		 var opt_arr = [];
  		 $dropList.each(function (){
  		   if ($(this).is(':checked'))  opt_arr.push($(this).val());
  		 });
  		 var $dropList_selected = $content.children().children('input:checked');
  		 $ipt.val(opt_arr.join(';'));
  		 var o = $all[0];
  		 var n1 = $dropList_selected.length;
  		 var n2 = $dropList.length;
  		 o.checked = (n1 === n2) ? 'checked' : '';
  	});
   });//end return
  },//end dataList
  });//end extend
})(jQuery);
