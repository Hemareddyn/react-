import React, { Component } from "react";
/**
 * author:Hema
 * description:this is the footer of the page,fpr this footer used props..
 */
class Bottom extends Component {
  render() {
    let footer_sections = this.props.footerInfo;

    return (
      <>
        <footer>
          <div class="footer-blurb">
            <div class="container">
              <div class="row">
                {footer_sections.map((footer_section_data) => (
                  <div class="col-sm-3 footer-blurb-item">
                    <h3>
                      <span class="glyphicon glyphicon-wrench"></span>{" "}
                      {footer_section_data.title}
                    </h3>
                    <p>{footer_section_data.para}</p>
                    <p>
                      <a class="btn btn-default" href="/something">
                        Unleash
                      </a>
                    </p>
                  </div>
                ))}
                <div class="col-sm-3 footer-blurb-item">
                  <h3>
                    <span class="glyphicon glyphicon-camera"></span>{" "}
                    Phosfluorescent
                  </h3>
                  <div class="row">
                    {[...Array(4)].map((photo) => (
                      <div class="col-xs-6">
                        <a href="/something" class="thumbnail">
                          <img src="holder.js/110x80" alt="" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="small-print">
            <div class="container">
              <p>
                <a href="/something">Terms &amp; Conditions</a> |{" "}
                <a href="/something">Privacy Policy</a> | <a href="/something">Contact</a>
              </p>
              <p>Copyright &copy; Example.com 2015 </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
export default Bottom;
