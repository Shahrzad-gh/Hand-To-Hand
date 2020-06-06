import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-extended grey darken-3">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo font-family-DancingScript">
                Hand To Hand
                <i className="fas fa-praying-hands"></i>
              </a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul
                className="right nav mr-auto ml-5 hide-on-med-and-down right"
                id="nav-mobile"
              >
                <li>
                  <div className="center row">
                    <div className="col s12 ">
                      {/* <div class="row" id="topbarsearch">
                        <div class="input-field col s6 s12 red-text">
                          <i class="red-text material-icons prefix">search</i>
                          <input
                            type="text"
                            placeholder="search"
                            id="autocomplete-input"
                            class="autocomplete red-text h-25"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-home mr-2 fa-sm"></i>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-stream mr-2 fa-sm"></i>
                    Timeline
                  </a>
                </li>
                <li>
                  <Link to="Message">
                    <i className="fas fa-envelope mr-2 fa-sm"></i>
                    Message
                  </Link>
                </li>
                <li className="right">
                  <a href="/">
                    <i className="fas fa-exclamation mr-2 fa-sm"></i>
                  </a>
                </li>
                <li className="right">
                  <button
                    className="btn btn-floating bg-floating"
                    type="button"
                  >
                    SG
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
