jQuery(document).ready(function ($) {

	var tags = $("#flashcard").data("tags");
	if("autosize" in $("#flashcard").data()) {
  
		var parent = $("#flashcard").parent();
		if (parent.width() <50 || parent.height <50){
			$("#flashcard").width($("#flashcard").parent().parent().width());	
			$("#flashcard").height($("#flashcard").parent().parent().height());
		}else {
			$("#flashcard").width($("#flashcard").parent().width());	
			$("#flashcard").height(500);
		}
	}
	
	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
	
	$.ajax({
	    type: 'POST',
		url: 'http://dev.turforlag.dk/drupal/api/v1/flashcards/getall',
	    data: '{"tag":"'+tags+'"}',
	    success: doneLoading,
	    error: function (xhr, ajaxOptions, thrownError) {
        alert(thrownError);
		},
	    contentType: "application/json",
	    dataType: 'json'
	});


	function doneLoading(data) {

		if (data.data_count == 0 ) {
			alert("NO DATA");
			return;
		}
		
		console.log("DONE LOADING");
				
		//TTS Setup
		vFact_AllowHighLight = false;
		vFact_HighLightColor = '';
		vFact_SentenceColor = '';
		vFact_HighlightMode = null;
		var isPlaying = false; // Is TTS audio playing
		
		var flipped = false;
		var animationInProgress = false;
		
	
		setTimeout(function() {
			if (typeof vFact_HTML5Player !== 'undefined'){
				vFact_HTML5Player.setEventHandler_OnChangePlaylistStatus(test); 
			function test(newPlaylistStatus) {
			 if (newPlaylistStatus == 1){
				$(".speaker").attr("src","http://dev.turforlag.dk/flashcards/img/speaker.png");
				isPlaying = true;
			 } else if (newPlaylistStatus == 0){
				$(".speaker").attr("src","http://dev.turforlag.dk/flashcards/img/speaker_blank.png");
				isPlaying = false;
			 }
		 }
			}
		
		}, 2800);

		var i = 0;
		$(".flashcards").append('<ul id="flashcards" class="">');
		data.results.forEach(function(element) {
				
				var newElement = '<li><div id="card" class="card"><figure class="front">';

				if (element.frontImage != null && element.frontText == null) {
					newElement += '<img class="card-img-top img-fluid" src="' + element.frontImage + '" />';
				} else if (element.frontImage != null && element.frontText != null) {
					newElement += '<img class="card-img-top70 img-fluid" src="' + element.frontImage + '" />';
				}

				if (element.frontText != null) {
					newElement += '<div class="card-block center"><p class="card-text">' + element.frontText + '</p></div>';
				}

				newElement += '</figure>'; // End of front side
				newElement += '<figure class="back">'; // Start of back side of card

				if (element.backImage != null && element.backText == null) {
					newElement += '<img class="card-img-top" src="' + element.backImage + '" >';
				} else if (element.backImage != null && element.backText != null) {
					newElement += '<img class="card-img-top70" src="' + element.backImage + '" >';
				}

				newElement += '<div id="'+i+'" class="card-block">';
				if (element.backHeader != null){
						newElement += '<p class="card-text backHeader">' + element.backHeader + '<img class="speaker" src="http://dev.turforlag.dk/flashcards/img/speaker_blank.png" width="30px" height="30px" /></p>';
				}
				if (element.backText != null) {
					newElement += '<p id="textContent' + i + '" class="card-text">' + element.backText + '</p>';
				}
					newElement += '</div>'

				newElement += '<div class="center "><button id="btnKnow" type="button" class="knowButton">Jeg kender dette kort</button></div></figure></div></li>'; // End of front side and card
				i++;
    		$("#flashcards").append(newElement);
		});
		$(".flashcards").append('</ul>');

		var cardslider2 = $('.flashcards').cardslider().data('cardslider');
		
		if (isMobile == false){
			var newWidth = $("#flashcard").width() / 2.4;
			$("ul#flashcards.cardslider__cards").width(newWidth);
			$("ul#flashcards.cardslider__cards").height(newWidth);
		}

		var size = $(".card-text").css('font-size');
		//$(".card-text").css("line-height", (size+1)); 
		$(".knowButton").css("font-size", size);
		
		

			$(".knowButton").on("click", function(e) {
				animationInProgress = true;
			    cardslider2.currentCard.addClass("perspective");
				$(this).toggleClass('flipped');
				
				if (typeof vFact_HTML5Player !== 'undefined'){
					vFact_dostop();	
					isPlaying = false;
					$(".speaker").attr("src","http://dev.turforlag.dk/flashcards/img/speaker_blank.png");
				}

				cardslider2.knowCard();
				cardslider2.currentCard = null;
				flipped = false;
			 	return false;
			});
			
			$("li.cardslider__card").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
				animationInProgress = false;
				if (flipped && cardslider2.currentCard != null){
					cardslider2.currentCard.removeClass("perspective");
				}
			});
			
			// Play TTS on text back
			$(".speaker").on("click", function(e){
				e.stopPropagation();
				if (isPlaying){
					if (typeof vFact_HTML5Player !== 'undefined'){
						vFact_dostop();	
						isPlaying = false;
						$(".speaker").attr("src","http://dev.turforlag.dk/flashcards/img/speaker_blank.png");
					}

				} else {
					var textContainer =$(this).closest( ".card-block" );
					vFact_playsectionEXT(textContainer[0].id);
				}
			});
			
			$( window ).on( "orientationchange", function(event){
				flipped = false;
			});

			$(".card").on("click", function(e) {
				if(animationInProgress){
					return true;
				}
				if (typeof vFact_HTML5Player !== 'undefined'){
					console.log("STOP");
					vFact_dostop();
					isPlaying = false;					
				}

				if ($(this).parent().hasClass("RIGHT")){
					return true;
				} else if (cardslider2.currentCard == null || $(this).parent().hasClass(cardslider2._scaleClass)) {
					animationInProgress = true;
					cardslider2.currentCard = $(this).parent();
					if ($(this).parent().hasClass(cardslider2._scaleClass)) { // Focused and active
						$(this).parent().addClass("perspective");
						if (flipped){
							cardslider2.dontKnowCard();
							cardslider2.currentCard = null;
							flipped = false;
						}else {
							$(this).toggleClass('flipped');
							flipped = true;		
						}
					} else {
						animationInProgress = true;
						cardslider2.currentCard.addClass(cardslider2._scaleClass);
						cardslider2.currentCard.removeClass('cardslider--sortback-left');
						cardslider2.currentCard.removeClass('cardslider--sortback-up');
						cardslider2.currentCard.removeClass('perspective');
					}}
			});
	};

	function errorLoading (){
		alert("ERROR LOADING");
	};

	/*$.postJSON( "http://localhost/drupal/api/v1/flashcards/getall",{'tag': 'sign'}, function( data ) {
		console.log(data);

		var frontSideText = data.body.und["0"].value;
		var frontSideImage = 'http://localhost/drupal/sites/default/files/' + data.field_front_side_image.und["0"].filename;

		//var obj = jQuery.parseJSON(data);
		//alert(data.body.und["0"].value);

		$("img.card-img-top").attr("src", frontSideImage);

		$(".card-text").html(data.body.und["0"].value);


	});*/
});
