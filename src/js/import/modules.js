import "%modules%/header/header";
import "%modules%/footer/footer"
import "./slider";
import accordion from "./accordion";

// const accordionItems = document.querySelectorAll('.gallery__accordion-item');
accordion('gallery__accordion-btn', 'gallery__accordion-item');
accordion('gallery__tab-btn', 'gallery__accordion-item');