import React, { Component } from "react";
/**
 * author:Hema
 * description:shows middle three blocks of the page
 */
export default class Post extends Component {
  render() {
    let post = [
      {
        title: "Premier Niche Markets",
        data: 'Phosfluorescently engage worldwide methodologies withweb-enabled technology. Interactively coordinate proactivee-commerce via process-centric "outside the box" thinking.Completely pursue scalable customer service throughsustainable potentialities.',
        date: "Today",
        comments: "2",
        shares: "3",
      },
      {
        title: "Proactively Envisioned",
        data: 'Phosfluorescently engage worldwide methodologies withweb-enabled technology. Interactively coordinate proactivee-commerce via process-centric "outside the box" thinking.Completely pursue scalable customer service throughsustainable potentialities.',
        date: "yestaday",
        comments: "2",
        shares: "3",
      },
      {
        title: "Completely Synergize",
        data: 'Phosfluorescently engage worldwide methodologies withweb-enabled technology. Interactively coordinate proactivee-commerce via process-centric "outside the box" thinking.Completely pursue scalable customer service throughsustainable potentialities.',
        date: "2 days ago",
        comments: "2",
        shares: "3",
      },
    ];
    return (
      <>
        {post.map((postData) => (
          <div className="row">
            <article className="col-xs-12">
              <h2>{postData.title}</h2>
              <p>{postData.data}</p>
              <p>
                <button className="btn btn-default">Read More</button>
              </p>
              <p className="pull-right">
                <span className="label label-default">keyword</span>{" "}
                <span className="label label-default">tag</span>{" "}
                <span className="label label-default">post</span>
              </p>
              <ul className="list-inline">
                <li>
                  <a href="/something">{postData.date}</a>
                </li>
                <li>
                  <a href="http://www.google.com">
                    <span className="glyphicon glyphicon-comment"></span>{" "}
                    {postData.comments}
                    Comments
                  </a>
                </li>
                <li>
                  <a href="/something">
                    <span className="glyphicon glyphicon-share"></span>{" "}
                    {postData.shares}
                    Shares
                  </a>
                </li>
              </ul>
            </article>
          </div>
        ))}
      </>
    );
  }
}
