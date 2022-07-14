import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../icon-toggle.js';

class ConteinerElement extends PolymerElement {
  static get template() {
      return html`
      <style>
      figure {
        display: inline-block;
        background-color: var(--dark-color);
        color: white;
        text-align: center;
        margin-left: 15rem;
        
      }
      img {
        width: 23rem;
        height: 18rem;
        box-shadow: rgba(255, 255, 255, 0.25) 0px 25px 50px -12px;
        border-radius: 20px;
      }

      figcaption {
        display: block;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
      }
    </style>

    <title>Combo mouse y teclado</title>
    <img: src="https://www.tecnosmart.com.ec/wp-content/uploads/2021/09/TEC0006.jpg">
      
    <title>Laptop Gamer</title>
    <img: src="https://blog.soltekonline.com/content/images/size/w2000/2019/11/0-2.jpg">
    
    <title>Ventilador RGB</title>
    <img: src="https://i.blogs.es/58de84/fan-01/1366_2000.jpeg">
    
    <title>Audio Gamer RGB</title>
    <img: src="https://m.media-amazon.com/images/I/319UcQ9TFLL._SL500_.jpg">
    `;
  }
  
}
customElements.define('container-element', ConteinerElement);