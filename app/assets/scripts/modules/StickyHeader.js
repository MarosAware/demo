import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader {
	constructor() {
		this.siteHeader = $('.site-header');
		this.headerTriggerElement = $('.page-section--gray');
		this.pager = $('.main-gallery__prev');
		this.createHeaderWaypoint();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element:this.headerTriggerElement[0],
			handler:function(direction) {
				if(direction == 'down') {
					that.siteHeader.addClass("site-header--white");
				}
				else {
					that.siteHeader.removeClass("site-header--white");
				}
			}
		});

		new Waypoint({
			element:this.pager[0],
			handler:function(direction) {
				if(direction == 'down') {
					that.siteHeader.addClass("site-header--scale-logo");
				}
				else {
					that.siteHeader.removeClass("site-header--scale-logo");
				}
			}
		});
	}

}


export default StickyHeader;