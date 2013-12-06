var PageTransitions = (function() {

	var $main = $('.pages'),
		$pages = $main.children('section'),

		$toButton = $('.switchPageTo')
		$header = $('header'),
		animcursor = 1,
		pagesCount = $pages.length,
		current = 0,
		isAnimating = false,
		endCurrPage = false,
		endNextPage = false,
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed('animation') ],
		// support css animations
		support = Modernizr.cssanimations;
	function init() {
		

		$pages.each( function() {
			var $page = $( this );
			$page.data('originalClassList', $page.attr('class') );
		} );

		$pages.eq( current ).addClass('page-current');
		$toButton.on('click', function() {
			if( isAnimating ) {
				return false;
			}
			animation =$(this).data( 'animation' );
			href =$(this).data( 'href' );

			toPage( animation,href );
			return false;
		} );

	}
	function toPage( animation,href ) {

		if( isAnimating ) {
			return false;
		}

		isAnimating = true;
		var $currPage = $('section.page-current');
		var $desPage = $('section.'+href)
		$desPage.addClass('page-current'),
			outClass = '', inClass = '';

		switch( animation ) {

			case 1:
				outClass = 'moveToLeft';
				inClass = 'moveFromRight';
				break;
			case 2:
				outClass = 'moveToRight';
				inClass = 'moveFromLeft';
				break;
			case 3:
				outClass = 'moveToTop scaleDownCenter';
				inClass = 'moveFromBottom';
				break;
			case 4:
				outClass = 'moveToBottom';
				inClass = 'moveFromTop scaleUp';
				break;
			case 5:
				outClass = 'fade';
				inClass = 'moveFromRight ontop';
				break;
			case 6:
				outClass = 'fade';
				inClass = 'moveFromLeft ontop';
				break;
			case 7:
				outClass = 'fade';
				inClass = 'moveFromBottom ontop';
				break;
			case 8:
				outClass = 'fade';
				inClass = 'moveFromTop ontop';
				break;
			case 9:
				outClass = 'moveToLeftFade';
				inClass = 'moveFromRightFade';
				break;
			case 10:
				outClass = 'moveToRightFade';
				inClass = 'moveFromLeftFade';
				break;
			case 11:
				outClass = 'moveToTopFade';
				inClass = 'moveFromBottomFade';
				break;
			case 12:
				outClass = 'moveToBottomFade';
				inClass = 'moveFromTopFade';
				break;
			case 13:
				outClass = 'moveToLeftEasing ontop';
				inClass = 'moveFromRight';
				break;
			case 14:
				outClass = 'moveToRightEasing ontop';
				inClass = 'moveFromLeft';
				break;
			case 15:
				outClass = 'moveToTopEasing ontop';
				inClass = 'moveFromBottom';
				break;
			case 16:
				outClass = 'moveToBottomEasing ontop';
				inClass = 'moveFromTop';
				break;
			case 17:
				outClass = 'scaleDown';
				inClass = 'moveFromRight ontop';
				break;
			case 18:
				outClass = 'scaleDown';
				inClass = 'moveFromLeft ontop';
				break;
			case 19:
				outClass = 'scaleDown';
				inClass = 'moveFromBottom ontop';
				break;
			case 20:
				outClass = 'scaleDown';
				inClass = 'moveFromTop ontop';
				break;
			case 21:
				outClass = 'scaleDown';
				inClass = 'scaleUpDown delay300';
				break;
			case 22:
				outClass = 'scaleDownUp';
				inClass = 'scaleUp delay300';
				break;
			case 23:
				outClass = 'moveToLeft ontop';
				inClass = 'scaleUp';
				break;
			case 24:
				outClass = 'moveToRight ontop';
				inClass = 'scaleUp';
				break;
			case 25:
				outClass = 'moveToTop ontop';
				inClass = 'scaleUp';
				break;
			case 26:
				outClass = 'moveToBottom ontop';
				inClass = 'scaleUp';
				break;
			case 27:
				outClass = 'scaleDownCenter';
				inClass = 'scaleUpCenter delay400';
				break;
			case 28:
				outClass = 'rotateRightSideFirst';
				inClass = 'moveFromRight delay200 ontop';
				break;
			case 29:
				outClass = 'rotateLeftSideFirst';
				inClass = 'moveFromLeft delay200 ontop';
				break;
			case 30:
				outClass = 'rotateTopSideFirst';
				inClass = 'moveFromTop delay200 ontop';
				break;
			case 31:
				outClass = 'rotateBottomSideFirst';
				inClass = 'moveFromBottom delay200 ontop';
				break;
			case 32:
				outClass = 'flipOutRight';
				inClass = 'flipInLeft delay500';
				break;
			case 33:
				outClass = 'flipOutLeft';
				inClass = 'flipInRight delay500';
				break;
			case 34:
				outClass = 'flipOutTop';
				inClass = 'flipInBottom delay500';
				break;
			case 35:
				outClass = 'flipOutBottom';
				inClass = 'flipInTop delay500';
				break;
			case 36:
				outClass = 'rotateFall ontop';
				inClass = 'scaleUp';
				break;
			case 37:
				outClass = 'rotateOutNewspaper';
				inClass = 'rotateInNewspaper delay500';
				break;
			case 38:
				outClass = 'rotatePushLeft';
				inClass = 'moveFromRight';
				break;
			case 39:
				outClass = 'rotatePushRight';
				inClass = 'moveFromLeft';
				break;
			case 40:
				outClass = 'rotatePushTop';
				inClass = 'moveFromBottom';
				break;
			case 41:
				outClass = 'rotatePushBottom';
				inClass = 'moveFromTop';
				break;
			case 42:
				outClass = 'rotatePushLeft';
				inClass = 'rotatePullRight delay180';
				break;
			case 43:
				outClass = 'rotatePushRight';
				inClass = 'rotatePullLeft delay180';
				break;
			case 44:
				outClass = 'rotatePushTop';
				inClass = 'rotatePullBottom delay180';
				break;
			case 45:
				outClass = 'rotatePushBottom';
				inClass = 'rotatePullTop delay180';
				break;
			case 46:
				outClass = 'rotateFoldLeft';
				inClass = 'moveFromRightFade';
				break;
			case 47:
				outClass = 'rotateFoldRight';
				inClass = 'moveFromLeftFade';
				break;
			case 48:
				outClass = 'rotateFoldTop';
				inClass = 'moveFromBottomFade';
				break;
			case 49:
				outClass = 'rotateFoldBottom';
				inClass = 'moveFromTopFade';
				break;
			case 50:
				outClass = 'moveToRightFade';
				inClass = 'rotateUnfoldLeft';
				break;
			case 51:
				outClass = 'moveToLeftFade';
				inClass = 'rotateUnfoldRight';
				break;
			case 52:
				outClass = 'moveToBottomFade';
				inClass = 'rotateUnfoldTop';
				break;
			case 53:
				outClass = 'moveToTopFade';
				inClass = 'rotateUnfoldBottom';
				break;
			case 54:
				outClass = 'rotateRoomLeftOut ontop';
				inClass = 'rotateRoomLeftIn';
				break;
			case 55:
				outClass = 'rotateRoomRightOut ontop';
				inClass = 'rotateRoomRightIn';
				break;
			case 56:
				outClass = 'rotateRoomTopOut ontop';
				inClass = 'rotateRoomTopIn';
				break;
			case 57:
				outClass = 'rotateRoomBottomOut ontop';
				inClass = 'rotateRoomBottomIn';
				break;
			case 58:
				outClass = 'rotateCubeLeftOut ontop';
				inClass = 'rotateCubeLeftIn';
				break;
			case 59:
				outClass = 'rotateCubeRightOut ontop';
				inClass = 'rotateCubeRightIn';
				break;
			case 60:
				outClass = 'rotateCubeTopOut ontop';
				inClass = 'rotateCubeTopIn';
				break;
			case 61:
				outClass = 'rotateCubeBottomOut ontop';
				inClass = 'rotateCubeBottomIn';
				break;
			case 62:
				outClass = 'rotateCarouselLeftOut ontop';
				inClass = 'rotateCarouselLeftIn';
				break;
			case 63:
				outClass = 'rotateCarouselRightOut ontop';
				inClass = 'rotateCarouselRightIn';
				break;
			case 64:
				outClass = 'rotateCarouselTopOut ontop';
				inClass = 'rotateCarouselTopIn';
				break;
			case 65:
				outClass = 'rotateCarouselBottomOut ontop';
				inClass = 'rotateCarouselBottomIn';
				break;
			case 66:
				outClass = 'rotateSidesOut';
				inClass = 'rotateSidesIn delay200';
				break;
			case 67:
				outClass = 'rotateSlideOut';
				inClass = 'rotateSlideIn';
				break;

		}

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endToPage ) {
				onEndAnimation( $currPage, $desPage );
			}
		} );

		$desPage.addClass( inClass ).on( animEndEventName, function() {
			$desPage.off( animEndEventName );
			endToPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $desPage );
			}
		} );

		if( !support ) {
			onEndAnimation( $currPage, $desPage );
		}

	}

	function onEndAnimation( $outpage, $inpage ) {
		endCurrPage = false;
		endNextPage = false;
		endPrevPage = false;
		resetPage( $outpage, $inpage );
		isAnimating = false;

	}

	function resetPage( $outpage, $inpage ) {
		$outpage.attr('class', $outpage.data('originalClassList') );
		$inpage.attr('class', $inpage.data('originalClassList') + ' page-current');
	}

	init();

	return { init : init };

})();