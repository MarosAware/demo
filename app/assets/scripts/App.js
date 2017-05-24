import $ from 'jquery';


import Gallery from './modules/Gallery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';



var gallery = new Gallery();
var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll($(".feature-item"), "85%");
var revealOnScroll = new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();


