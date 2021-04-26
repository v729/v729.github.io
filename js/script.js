
        $(function() {

            //첫 화면 로딩시 intro 이벤트
            $('.show-up').addClass('active');
            $('.intro').addClass('on');
            
            //contact 이벤트
            showContact();
            
            //scroll top 클릭 이벤트
            $('.btn-top').click(function(){
               $( 'html, body' ).animate( { scrollTop : 0 },600 );
                return false;
            })
        });
        
        //scroll시 title animation 추가 이벤트
        $(window).scroll(function(){
            let scroll = $(window).scrollTop();

              for(let i = 0; i < $(".section").length; i++) {
                  
                let sectionTop = $(".section").eq(i).offset().top;
                  
                let sectionBottom = sectionTop + $(".section").eq(i).outerHeight();
               
                if(scroll > sectionTop - 200 && scroll < sectionBottom) {
                  $(".section").removeClass("on");
                  $(".section").eq(i).addClass("on");
                } 
                  else if(scroll == 0){
                  $(".section").removeClass("on");
                  }
              }
        });
        
        //Contact box 클릭 이벤트
        function showContact() {
            var el = $('#yunsoomin, .btn-contact');

            if (el.length <= 0 || el.find('.contact-wrap').length <= 0) {
                return
            }

            // btn-contact 클릭시
            el.find('.contact, span').on('click', function(e) {
                e.preventDefault();
                $('body').css('overflow', 'hidden');
                el.find('#contact-box').addClass('on');
                el.find('.dimm').fadeIn('slow');

                TweenMax.to(el.find('#contact-box'), 0.8, {
                    y: '0%',
                    onComplete: function() {
                        $('html').addClass('closeWrapAll');
                    }
                });

                // Contact box 닫기
                $('#contact-box').next('.dimm').on('click touchmove touchend', function(e) {
                    e.preventDefault();
                    closeAllmenu();
                })

            });

            // Contact box 닫기
            el.find('.btn-close').on('click', function(e) {
                e.preventDefault();
                closeAllmenu();
            });

            function closeAllmenu() {
                el.find('#contact-box').removeClass('on');
                TweenMax.to(el.find('#contact-box'), 0.8, {
                    y: '100%'
                });
                el.find('.dimm').hide();
                $('body').css('overflow', 'auto');
            }
        };


        //이메일 주소 복사하기
        function CopyToUrl() {
            var url = "tnals729@naver.com";
            var isIE = true;
            var agent = navigator.userAgent.toLowerCase();
            if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
                isIE = true;
            } else {
                isIE = false;
            }
            if (isIE) {
                if (confirm("이메일 주소를 클립보드에 복사하시겠습니까?"))
                    window.clipboardData.setData("Text", url);
            } else {
                temp = prompt("이메일 주소를 Ctrl+C 하여 클립보드로 복사하세요", url);
            }
        };