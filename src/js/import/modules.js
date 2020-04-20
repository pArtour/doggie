import "%modules%/header/header";
import "%modules%/footer/footer"
import "./slider";
import accordion from "./accordion";
import scroll from "./scroll";
import form from "./form";

accordion('gallery__accordion-btn', 'gallery__accordion-item');
accordion('gallery__tab-btn', 'gallery__accordion-item');

scroll('appointment-btn', 'appointment');
scroll('reviews-link', 'customers');
scroll('about-link', 'about');

form('appointment__form');

document.addEventListener('DOMContentLoaded', document.querySelector('#search').focus())
