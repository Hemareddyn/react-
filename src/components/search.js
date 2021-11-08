import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <form class="navbar-form navbar-right" role="search">
        <div class="form-group">
          <input type="text" class="form-control" />
        </div>
        <button type="submit" class="btn btn-default">
          <span class="glyphicon glyphicon-search"></span> Search
        </button>
      </form>
    );
  }
}
