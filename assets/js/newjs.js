$(document).ready(function(){

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    onDragged : function () {


    	Playingauto()
    	


    		$('.patient1').removeAttr('style')
			$('.patient2').removeAttr('style')
			$('.patient3').removeAttr('style')
			$('.patient4').removeAttr('style')
			$('.patient5').removeAttr('style')
			$('.patient6').removeAttr('style')

		callAnim();

		// patiend end


		// play videoes

	$('.img1').removeAttr('style');
	$('.img2').removeAttr('style');
	$('.img3').removeAttr('style');
	$('.img4').removeAttr('style');
	$('.words_img_div').removeAttr('style');
	$('.img6').removeAttr('style');
	$('.img7').removeAttr('style');
	$('.img8').removeAttr('style');
	$('.img9').removeAttr('style');

	callImg();


		// implant end




	$('.item5_in1').removeAttr('style');
	$('.item5_in2').removeAttr('style');
	$('.item5_in3').removeAttr('style');
	$('.item5_in4').removeAttr('style');
	$('.item5_in5').removeAttr('style');
	$('.item5_in6').removeAttr('style');
	$('.item5_in7').removeAttr('style');
	$('.item5_in8').removeAttr('style');
	$('.item5_in9').removeAttr('style');



	item5();

	// item5




	$('.item2_in1').removeAttr("style");
	$('.item2_in2').removeAttr("style");
	$('.item2_in3').removeAttr("style");

	setInterval(item2,900);


		// item2

    }




});

function callAnim(){
	setInterval(run1,900);

		setInterval(run2,800);

		setInterval(run3,200);

		setInterval(run4,1100);

		setInterval(run5,1500);

		setInterval(run6,1700);
}


function clearAnim(){
	
		clearInterval(run1,900);
		clearInterval(run2,800);

		clearInterval(run3,200);

		clearInterval(run4,1100);

		clearInterval(run5,1500);

		clearInterval(run6,1700);
}





 var acc_owl = $('.owl-carousel');
      
      $('.next_btn').click(function() {
        acc_owl.trigger('next.owl.carousel');
      });
      $('.prev_btn').click(function() {
        acc_owl.trigger('prev.owl.carousel');
      });






// submenu start

    
	$('.submenu_ul > li > a').removeClass('active_ul_menu');
      
  $('.submenu_ul > li').click(function(event){
    
	$('.submenu_ul > li > a').removeClass('active_ul_menu');
    	
        $(this).children('a').addClass('active_ul_menu');

        // end

        $('.submenu_ul3 > li').children('a').addClass('active_ul_menu');

      $('.submenu_ul3').not(this).hide();
      $('.submenu_ul li').not(this).removeClass('opened');
      
      if($(this).hasClass('opened') ) {
          
            $(this).children('.submenu_ul3').hide(1000)

              $(this).removeClass('opened')
	$('.submenu_ul > li > a').removeClass('active_ul_menu');


      }else{
          $(this).addClass('opened')
         $(this).children('.submenu_ul3').slideDown();   
      }

      
      $('.submenu_ul3').click(function(e){

         e.stopPropagation();
      })

  })

// submenu end



// open div strat

	$('.open_div > button').click(function(){


		$('.open_div_in').fadeIn();

		$('.close_div').fadeIn();

		$('.open_div > button').css({

			transform:"rotate(180deg)",
			transition:'all 0.2s'

		})


	})

	$('.close_div').click(function(){

			$('.open_div_in').fadeOut();


		$('.close_div').fadeOut(100)

			$('.open_div > button').css({

			transform:"rotate(0deg)",
			transition:'all 0.2s'

		})

	})


// open div start end



// patient start


$('body').click(function(){
	console.log('ok')
})



var run1=function(){

			$('.patient1').css({
				transform:"translateX(0)",
				transition:'all 2s'
			})
		}

var run2=function(){

			$('.patient2').css({
				transform:"translateX(0)",
				transition:'all 2s'
			})
		}


var run3=function(){

			$('.patient3').css({
				transform:"translateX(0)",
				transition:'all 2s'
			})
		}


var run4=function(){

			$('.patient4').css({
				transform:"translateX(0)",
				transition:'all 2s'
			})
		}


var run5=function(){

			$('.patient5').css({
				transform:"translateX(0)",
				transition:'all 2s'
			})
		}


var run6=function(){

			$('.patient6').css({
				transform:"translateX(0)",
				transition:'all 2s'
			})
		}



// patiend end


// qr code 

var qr=1

	$('.qr_div').click(function(){

		if(qr==1)
		{
			$('.show_qr').stop().fadeIn();
			$('.show_qr').css('zIndex', '120');

			qr=0
		}else{
			$('.show_qr').stop().fadeOut();
			qr=1

		}

	})

// qr code end


// animation start
$('.slider_owl_left_btn > .prev_btn').click(function(){


			$('.patient1').removeAttr('style')
			$('.patient2').removeAttr('style')
			$('.patient3').removeAttr('style')
			$('.patient4').removeAttr('style')
			$('.patient5').removeAttr('style')
			$('.patient6').removeAttr('style')

			callAnim();



	// patiend end


	$('.img1').removeAttr('style');
	$('.img2').removeAttr('style');
	$('.img3').removeAttr('style');
	$('.img4').removeAttr('style');
	$('.words_img_div').removeAttr('style');
	$('.img6').removeAttr('style');
	$('.img7').removeAttr('style');
	$('.img8').removeAttr('style');
	$('.img9').removeAttr('style');

	callImg();

	// animation implant


	Playingauto();

	// autoplay


	$('.item5_in1').removeAttr('style');
	$('.item5_in2').removeAttr('style');
	$('.item5_in3').removeAttr('style');
	$('.item5_in4').removeAttr('style');
	$('.item5_in5').removeAttr('style');
	$('.item5_in6').removeAttr('style');
	$('.item5_in7').removeAttr('style');
	$('.item5_in8').removeAttr('style');
	$('.item5_in9').removeAttr('style');


	item5();

	// item5 end



	$('.item2_in1').removeAttr("style");
	$('.item2_in2').removeAttr("style");
	$('.item2_in3').removeAttr("style");

	setInterval(item2(),900);

	// item2


	$('.item3_in1').removeAttr("style");
	$('.item3_in2').removeAttr("style");
	$('.item3_in3').removeAttr("style");


setInterval(item3,900);

//item3


	$('.item4').removeAttr("style");
	$('.item4_n1').removeAttr("style");
	$('.item4_n2').removeAttr("style");
	$('.item4_n3').removeAttr("style");

setInterval(item4(),20);


// item4

	$('.span_l1').removeAttr("style");
	$('.span_l2').removeAttr("style");
	$('.span_l3').removeAttr("style");
	$('.span_l4').removeAttr("style");
	$('.span_l5').removeAttr("style");
	$('.span_l6').removeAttr("style");


item9()

// item9
	
})





$('.slider_owl_right_btn > .next_btn').click(function(){

			$('.patient1').removeAttr('style')
			$('.patient2').removeAttr('style')
			$('.patient3').removeAttr('style')
			$('.patient4').removeAttr('style')
			$('.patient5').removeAttr('style')
			$('.patient6').removeAttr('style')

		callAnim();


	// patiend end
	
	$('.words_img_div').removeAttr('style');
	$('.img1').removeAttr('style');
	$('.img2').removeAttr('style');
	$('.img3').removeAttr('style');
	$('.img4').removeAttr('style');
	$('.img5').removeAttr('style');
	$('.img6').removeAttr('style');
	$('.img7').removeAttr('style');
	$('.img8').removeAttr('style');
	$('.img9').removeAttr('style');

	callImg();

	// animation implant end



	Playingauto();

	// autoplay

	$('.item5_in1').removeAttr('style');
	$('.item5_in2').removeAttr('style');
	$('.item5_in3').removeAttr('style');
	$('.item5_in4').removeAttr('style');
	$('.item5_in5').removeAttr('style');
	$('.item5_in6').removeAttr('style');
	$('.item5_in7').removeAttr('style');
	$('.item5_in8').removeAttr('style');
	$('.item5_in9').removeAttr('style');



	item5();

	// item5


	$('.item2_in1').removeAttr("style");
	$('.item2_in2').removeAttr("style");
	$('.item2_in3').removeAttr("style");
	

	setInterval(item2,900);

	// item2


	$('.item3_in1').removeAttr("style");
	$('.item3_in2').removeAttr("style");
	$('.item3_in3').removeAttr("style");


	setInterval(item3,900);

//item3
	
	$('.item4').removeAttr("style");
	$('.item4_n1').removeAttr("style");
	$('.item4_n2').removeAttr("style");
	$('.item4_n3').removeAttr("style");

setInterval(item4(),20);

// item4







	$('.span_l1').removeAttr("style");
	$('.span_l2').removeAttr("style");
	$('.span_l3').removeAttr("style");
	$('.span_l4').removeAttr("style");
	$('.span_l5').removeAttr("style");
	$('.span_l6').removeAttr("style");


item9();

// item9
	
})



function callImg(){
	$('.words_img_div').fadeIn(1000);
	$('.img1').fadeIn(2100);
	$('.img2').fadeIn(1500);
	$('.img3').fadeIn(2000);
	$('.img4').fadeIn(1400);
	$('.img5').fadeIn(1000);
	$('.img6').fadeIn(2100);
	$('.img7').fadeIn(2000);
	$('.img8').fadeIn(2000);
	$('.img9').fadeIn(1900);
}



// animation implant end

$('.item   video').removeAttr('autoplay id');

function Playingauto()
{		$('.item   video').removeAttr('autoplay id');


			$('.item > video').attr({'autoplay' : 'autoplay', 'id' : 'my_video'});

			if($('.owl-item.active .item').find('video').length >0){
				$('.owl-item.active .item video:not(.item3_v)').attr('id','my_video').trigger('play');
			}
		}	



function item5()
{

	$('.item5_in1').fadeIn(1200);
	$('.item5_in2').fadeIn(1300);
	$('.item5_in3').fadeIn(1400);
	$('.item5_in4').fadeIn(1500);
	$('.item5_in5').fadeIn(2200);
	$('.item5_in6').fadeIn(1600);
	$('.item5_in7').fadeIn(1700);
	$('.item5_in8').fadeIn(1800);
	$('.item5_in9').fadeIn(1900);
}



function item2()
{
	$('.item2_in1').css({

		transform:'translateY(0)',
		transition:'all 2s'
	})


	$('.item2_in2').css({
		display:'block',
		transform:'translateY(0)',
		transition:'all 4s'
	})


	$('.item2_in3').css({
		display:'block',
		transform:'translateY(0)',
		transition:'all 3s'
	})


}



function item3()
{
	$('.item3_in1').fadeIn(1300)


	$('.item3_in2').css({

		transform:'translateY(0)',
		transition:'all 2s'
	})


	$('.item3_in3').fadeIn(1300)


}



function item4(e)
{	

	$('.item4').fadeIn(800);


	$('.item4_n1').css({
		transform:'scale(1)',
		transition:'1s'
	})


	$('.item4_n2').fadeIn(800)


	$('.item4_n3').css({
		transform:'scale(1)',
		transition:'1s'
	})

}




function item9(e)
{	

	$('.span_l1').fadeIn(800);


	$('.span_l2').fadeIn(900);


	$('.span_l3').fadeIn(1000);


	$('.span_l4').fadeIn(1200);


	$('.span_l5').fadeIn(1100);


	$('.span_l6').fadeIn(1500);


}



// fancybox

$('.card-deck a').fancybox({
  caption : function( instance, item ) {
    return $(this).parent().find('.card-text').html();
  }
});




// --- end jq
})
// ---















