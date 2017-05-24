import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalBtn = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalBtn = $(".modal__close");
		this.events();

	}

	events() {
		// clicking modal btn
		this.openModalBtn.click(this.openModal.bind(this));
		// clickig x modal btn
		this.closeModalBtn.click(this.closeModal.bind(this));
		// pushing esc button 
		$(document).keyup(this.keyPressHandler.bind(this));
		//close outside Modal 
		$(document).click(this.closeOutsideModal.bind(this));

	}

	closeOutsideModal(el) {
		if(el.target == this.modal[0]) {
			this.closeModal();
		}
	}

	keyPressHandler(e) {
		if(e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}

}


export default Modal;