import $ from 'jquery';
import cycle from 'jquery-cycle-2';

class Gallery {
	constructor() {
		this.item = $(".slideshow");
		this.events();
	}

	events() {
		console.log(this.item);
		this.item.cycle();
	}
}


export default Gallery;