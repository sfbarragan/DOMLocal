import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../icon-toggle.js';

class GaleriaElement extends PolymerElement {
  static get template() {
    return html`
      <style>
      .gallery_conteiner {
        width: 1000px;
        height: 450px;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin: 100px auto;
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);
        -webkit-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);
        -moz-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);
      }

      .gallery_conteiner ul {
        width: 2000px;
      }

      .gallery_conteiner li {
        position: relative;
        display: block;
        width: 160px;
        float: left;
        border-left: 1px solid #888;
        box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);
        -webkit-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
      }

      .gallery_conteiner ul:hover li {
        width: 40px;
      }

      .gallery_conteiner ul li:hover {
        width: 1040px;
      }

      .gallery_conteiner li img {
        display: block;
      }

      .image_title {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
          sans-serif;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 0;
        bottom: 0;
        width: 1040px;
        margin-left: -40px;
      }

      .image_title a {
        display: block;
        color: #fff;
        text-decoration: none;
        padding: 20px;
        font-size: 20px;
      }

      .item {
        height: 450px;
        width: 1000px;
        object-fit: fill;
        margin-left: -40px;
      }
      </style>
      
      <section>
        <div class="gallery_conteiner">
          <ul>
            <li>
              <div class="image_title">
                <a href="#">Construye tu lugar Especial</a>
              </div>
              <a href="#">
                <img
                  src="../img/gaming-setup-4.jpg"
                  alt="gaming-setup-4"
                  class="item"
                />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a href="#">Nvidia RTX 3090 Founders Edition</a>
              </div>
              <a href="#">
                <img src="../img/rtx3090.jpg" alt="rtx3090" class="item" />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a href="#">Laptop Asus Zenbook</a>
              </div>
              <a href="#">
                <img
                  src="../img/asus-zenbook.webp"
                  alt="asus-zenbook"
                  class="item"
                />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a href="#">Laptop Alienware M15</a>
              </div>
              <a href="#">
                <img
                  src="../img/alienwarem15.jpg"
                  alt="alienwarem15"
                  class="item"
                />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a href="#">Laptop Lenovo Legion Y530</a>
              </div>
              <a href="#">
                <img
                  src="../img/y530teaser.jpg"
                  alt="lenovo-legion-y530"
                  class="item"
                />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a href="#">Laptop Asus G531</a>
              </div>
              <a href="#">
                <img
                  src="../img/G531-1-780x405.webp"
                  alt="asus g531"
                  class="item"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    `;
  }
  
}
customElements.define('galeria-element', GaleriaElement);
