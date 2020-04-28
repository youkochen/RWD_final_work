$(document).ready(function() {
    // common: mb menu show
    $('.menu_btn').click(function(event){
        event.preventDefault();
        $('.menu_btn i').toggleClass('fa-bars');
        $('.menu_btn i').toggleClass('fa-hamburger');
        $('.header .container').toggleClass('menu_show');
    });
    $('.menu a').click(function(event){
        $('.menu_btn i').toggleClass('fa-bars');
        $('.menu_btn i').toggleClass('fa-hamburger');
        $('.header .container').toggleClass('menu_show');

    }); 

    // smooth show content
	$(window).on('load',function() {
		
		$('.show_smooth').each(function(i) {
		/* Check the location of each desired element */	
		
		  var top_of_object = $(this).offset().top + 200;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
            
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > top_of_object ){
                $(this).animate({opacity:1},1500);
                //動畫時間本來考慮到效能寫在css，結果所有子層級元素有變化都會漸變，
                //因為只想針對單一事件執行，最終決定將動態寫在jq事件裡。
          }
		});
    });
    $(window).scroll(function(){
        $('.show_smooth').each(function(i) {
            
              var top_of_object = $(this).offset().top + 200;
              var bottom_of_window = $(window).scrollTop() + $(window).height();
                
              if( bottom_of_window > top_of_object ){
                    $(this).animate({opacity:1},1500);
              }    
            });
    });


    // index: form submit&clear
    $('.btn_sent').click(function(){
        if($('#name').val() == ""){
            alert("訂位資料不完整喔！");
            eval("document.form['name'].focus()");
        }
        else if($('#tel').val() == ""){
            alert("訂位資料不完整喔！");
            eval("document.form['tel'].focus()");
        }
        else if($('#email').val() == ""){
            alert("訂位資料不完整喔！");
            eval("document.form['email'].focus()");
        }
        else{
            if (confirm("送出訂位資料")){
                document.form.submit();
            }
            else{    
            }           
        }
    });
    $('.btn_clear').click(function(){
        if (confirm("確定要清除訂位資料嗎？")){
            document.form.reset();   
            $('.booking #name').focus();        
        }
        else{
            $('.btn_sent').focus();
        }        
    });

    // login: toggle login&register
    $('.btn_go_register').click(function(){
        $('.login_box').slideUp();
        $('.register_box').slideDown();
    });
    $('.btn_go_login').click(function(event){
        event.preventDefault();
        $('.register_box').slideUp();
        $('.login_box').slideDown();
    });


    // login: login from sent
    $('.btn_sent_login').click(function(){
        if($('.form_login #email').val() == ""){
            alert("請輸入登入資料");
            eval("document.form_login['email'].focus()");
        }
        else if($('.form_login #passw').val() == ""){
            alert("請輸入密碼");
            eval("document.form_login['passw'].focus()");
        }
        else{  
            // document.form_login.submit(); 
            $('.login_box').slideUp();
            $('.welcome_box').slideDown();   
            var user_id = $('.form_login #email').val();  
            $('.welcome_box i').text(user_id); 
        }
    });

    $('.btn_sent_register').click(function(){
        if($('.form_register #email').val() == ""){
            alert("請輸入註冊資料");
            eval("document.form_register['email'].focus()");
        }
        else if($('.form_register #passw').val() == ""){
            alert("請輸入密碼");
            eval("document.form_register['passw'].focus()");
        }
        else if($('.form_register #passw_re').val() == ""){
            alert("請再次輸入密碼");
            eval("document.form_register['passw_re'].focus()");
        }
        else if($('.form_register #passw').val() !== $('.form_register #passw_re').val() ){
            alert("密碼確認有誤");
            eval("document.form_register['passw_re'].focus()");
        }
        else{
            // document.form_register.submit(); 
            $('.register_box').slideUp();
            $('.welcome_box').slideDown(); 
            var user_id = $('.form_register #email').val();  
            $('.welcome_box i').text(user_id); 
        }
    });

    // cart: side cate
    $('.cate_list .cate_00').click(function(event){
        event.preventDefault();
        $('.pd_item').show();
        $(this).parent().addCClass('on');
        $(this).parent().siblings().removeClass('on');
        
    });
    $('.cate_list .cate_01').click(function(event){
        event.preventDefault();
        $('.pd_item').hide();
        $('.c_01').show();
        $(this).parent().addCClass('on');
        $(this).parent().siblings().removeClass('on');
        
    });
    $('.cate_list .cate_02').click(function(event){
        event.preventDefault();
        $('.pd_item').hide();
        $('.c_02').show();
        $(this).parent().addCClass('on');
        $(this).parent().siblings().removeClass('on');
        
    });
    $('.cate_list .cate_03').click(function(event){
        event.preventDefault();
        $('.pd_item').hide();
        $('.c_03').show();
        $(this).parent().addCClass('on');
        $(this).parent().siblings().removeClass('on');
        
    });


    // cart: 收藏
    $('.like').click(function(event){
        event.preventDefault();
        $(this).toggleClass('far');
        $(this).toggleClass('fas');

    });

    // cart: 加入購物車
    $('.add_cart a').click(function(event){
        event.preventDefault();
        $(this).parent().parent().toggleClass('on');
        $(this).removeClass('on');
        $(this).siblings().addClass('on');

    });
    
    
    var k = 0;

    $('body').on('click','.add_p',function(event){
        event.preventDefault();        
           k = k+1;    
           $('.pice').text(k);
           
    });
    $('body').on('click','.clear_p',function(event){
        event.preventDefault();         
           k = k-1;    
           $('.pice').text(k);
    });


    








})