import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../icon-toggle.js';

class ConteinerElement extends PolymerElement {
  static get template() {
      return html`
      <style>
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
	  h2{
	  color:white;
	  font-size:1.3rem;
	  }
	  
      figcaption {
        display: block;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
      }
   	  .container{
	       border-spacing: 10px 5px;
	       text-align:center;
	       padding-left:15%;
	     }
	      table {
	       width: 80%;
	      }
	      td {
	       width: 25%;
	      }
    </style>
    <div class="btnContact" align="center">Productos</div>
	  <div class="container">
  	<table>
    	<tr>
      	<th>
          <h2>Combo mouse y teclado</h2>
          <img src="https://www.tecnosmart.com.ec/wp-content/uploads/2021/09/TEC0006.jpg">
        </th>
	      <th>
          <h2>Laptop Gamer</h2>
          <img src="https://blog.soltekonline.com/content/images/size/w2000/2019/11/0-2.jpg">
        </th>
	    </tr>
	    <tr>
	      <th>
          <h2>Ventilador RGB</h2>
          <img src="https://i.blogs.es/58de84/fan-01/1366_2000.jpeg">
        </th>
	      <th>
          <h2>Audio Gamer RGB</h2>
          <img src="https://m.media-amazon.com/images/I/319UcQ9TFLL._SL500_.jpg">
	      </th>
	    </tr>
	    </table>
	  </div>
    `;
  }
  
}
customElements.define('container-element', ConteinerElement);
