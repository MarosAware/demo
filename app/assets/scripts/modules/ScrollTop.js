import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class ScrollTop {
	constructor() {
		this.scrollBtn = $('.btn__scroll');
		this.gallery = $('.main-gallery__item');
		this.colorTriggerElement = $('.generic-content-container');	
		this.scrollShow();
		this.scrollColor();
		this.event();
	}


	event() {
		this.scrollBtn.click(this.scrollFunction);
	}

	scrollShow() {
		var that = this;
		window.onscroll = function() {
			if(document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
				that.scrollBtn.addClass('btn__scroll--is-visible');
			}
			else {
				that.scrollBtn.removeClass('btn__scroll--is-visible');
			}
		}
	
	}

	scrollColor() {
		var that = this;
			new Waypoint({
			element:that.colorTriggerElement[0],
			handler: function(direction) {
				if(direction == "down") {
					that.scrollBtn.addClass("btn__scroll--color");
				}
				else {
					that.scrollBtn.removeClass("btn__scroll--color");
				}
			},
			offset: "23%"
		});
		
	}

	scrollFunction() {
		$("html, body").animate({scrollTop:0}, "slow");
		document.documentElement.scrollTop = 0;
	}
}

export default ScrollTop;