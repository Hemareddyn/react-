import React, { Component } from "react";
import SearchBar from './search'

/**
 * author:Hema
 * description:navigation Bar
 *
 */
export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <nav class="navbar navbar-inverse navbar-static-top" role="navigation">
          <div class="container">
            {/* <!-- Logo and responsive toggle --> */}
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/something">
                <span class="glyphicon glyphicon-globe"></span> Logo
              </a>
            </div>
            {/* <!-- Navbar links --> */}
            <div class="collapse navbar-collapse" id="navbar">
              <ul class="nav navbar-nav">
                <li class="active">
                  <a href="/something">Home</a>
                </li>
                <li>
                  <a href="/something">About</a>
                </li>
                <li>
                  <a href="/something">Products</a>
                </li>
                <li class="dropdown">
                  <a
                    href="/something"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="about-us">
                    <li>
                      <a href="/something">Engage</a>
                    </li>
                    <li>
                      <a href="/something">Pontificate</a>
                    </li>
                    <li>
                      <a href="/something">Synergize</a>
                    </li>
                  </ul>
                </li>
              </ul>

              {/* <!-- Search --> */}
             <SearchBar/>
            </div>
            {/* <!-- /.navbar-collapse --> */}
          </div>
          {/* <!-- /.container --> */}
        </nav>
      </>
    );
  }
}
