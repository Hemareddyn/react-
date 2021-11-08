import React, { Component } from "react";
import Post from "./post";
import Alert from "./alert";
import Login from "./login";
import logo from '../favicon.ico'
/**
 * author:hema
 * description:contains 6 blocks of data,gives directly as bodytag
 */
class BodyTag extends Component {
  render() {
    return (
      <>
        <div className="col-sm-6">
          <Alert />
          <Post />
        </div>

        <div className="col-sm-3">
          <Login />
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                <span className="glyphicon glyphicon-scale"></span>
                Dramatically Engage
              </h3>
            </div>
            <div className="panel-body">
              {this.props.progress_bar.map(barVal=>(
                <div className="progress">
                <div
                  className="progress-bar progress-bar-success"
                  role="progressbar"
                  aria-valuenow={barVal}
                  aria-valuemin="0"
                  aria-valuemax={barVal}
                  style={{width:`${barVal}%`}}
                >
                  {barVal}% Proactively Envisioned
                </div>
              </div>
              ))}
              
            </div>
          </div>

          <h3>
            <span className="glyphicon glyphicon-modal-window"></span>{" "}
            Synergization
          </h3>
          <div
            id="side-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#side-carousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#side-carousel" data-slide-to="1"></li>
              <li data-target="#side-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <a href="/something">
                  <img className="img-responsive" alt="" src={logo} />
                </a>
                <div className="carousel-caption">
                  <h3>Dramatically Engage</h3>
                  <p>
                    Objectively
                  </p>
                </div>
              </div>
              
            </div>
            <a
              className="left carousel-control"
              href="#side-carousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="glyphicon glyphicon-chevron-left"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#side-carousel"
              role="button"
              data-slide="next"
            >
              <span
                className="glyphicon glyphicon-chevron-right"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default BodyTag;
