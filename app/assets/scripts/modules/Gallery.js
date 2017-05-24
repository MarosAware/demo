import cycle from 'script-loader!jquery-cycle-2';


class Gallery {
	constructor() {
		this.item = $('.main-gallery');
		this.bar = $('.main-gallery__progress');
		this.next = $('.main-gallery__next');
		this.prev = $('.main-gallery__prev');
		this.pager = $('.main-gallery__pager');
		this.description = $('.main-gallery__text-content p a');
		this.startShow();
	}




	startShow() {

		this.item.cycle({
			slides: ".main-gallery__item",
			loader: "wait",
			updateView:-1,
			fx: 'fadeout',
			speed: 1000,
			timeout: 6000,
			next:this.next,
			prev:this.prev,
			pager: this.pager,
			pauseOnHover:this.description,
			pagerEvent:'click.cycle',
			pagerActiveClass: 'main-gallery__pager--active',
			log:false
			
		});	

		var that = this;

		var slideshow = that.item;
		var progress = that.bar;


		slideshow.on( 'cycle-initialized cycle-before', function( e, opts ) {
			progress.stop(true).css( 'width', 0 );
		});

		slideshow.on( 'cycle-initialized cycle-after', function( e, opts ) {
			if ( ! slideshow.is('.cycle-paused') )
				progress.animate({ width: '100%' }, opts.timeout, 'linear' );
		});

		slideshow.on( 'cycle-paused', function( e, opts ) {
			progress.stop(); 
		});

		slideshow.on( 'cycle-resumed', function( e, opts, timeoutRemaining ) {
			progress.animate({ width: '100%' }, timeoutRemaining, 'linear' );
		});

		this.item.cycle('pause');
		this.item.cycle('resume');
	
	}

}


export default Gallery; 