var yo = require('yo-yo');
var translate = require('../translate');
var empty = require('empty-element');

var el = yo`<nav class="header">
      <div class="nav-wrapper">
        <div class="container">
          <div class="row">
            <div class="col s12 m6">
              <a href="/" class="brand-logo emagram">Emagram</a>
            </div>
            <div class="col s2 offset-s9 m6 offset-m6 right-align hide-on-large-only">
              <a href="#" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </a>
              <ul id="drop-user" class="dropdown-content">
                <li><a href="#">${translate.message('home')}</a></li>
                <li><a href="#">${translate.message('my-profile')}</a></li>
                <li><a href="#">${translate.message('logout')}</a></li>
              </ul>
            </div>
            <div class="col l5 offset-l9 hide-on-med-and-down">
              <ul>
                <li><a href="#">${translate.message('home')}</a></li>
                <li><a href="#">${translate.message('my-profile')}</a></li>
                <li><a href="#">${translate.message('logout')}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>`;

module.exports = function header (ctx, next) {
  var container = document.getElementById('header-container')
  empty(container).appendChild(el);
  $('.dropdown-button').dropdown();
  next();
}
