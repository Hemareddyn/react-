// import logo from './logo.svg';
import TopBar from "./components/topBar";
import Main from "./components/main";
import Bottom from "./components/bottom";
import Sidebar from "./components/sideItems";
import React, { Component } from "react";

class App extends Component {
  render() {
    let footerData = [
      {
        title: "Dynamic",
        para: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
      },
      {
        title: "Efficient",
        para: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
      },
      {
        title: "Complete",
        para: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
      },
    ];

    let side_section = [
      {
        title: "Completely Synergize",
        btn_list: [
          "Resource Taxing",
          "Premier Niche Markets",
          "Dynamically Innovate",
          "Objectively Innovate",
          "Proactively Envisioned",
        ],
        icon: "glyphicon-random",
      },
      {
        title: "Dramatically Engage",
        data: "Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.",
        btn_list: ["Resource"],
        icon: "glyphicon-cog",
      },
      {
        title: "Active Predomination",
        data: "Proactively envisioned multimedia based expertise and cross-media growth strategies.",
        btn_list: ["Resource", "Envision", "Niche"],
        icon: "glyphicon-bullhorn",
      },
    ];

    let progress_bar_data=["100","80","50","10","40"]

    return (
      <>
        <TopBar />
        <div className="container-fluid">
          <div className="col-sm-3">
            <Sidebar sideProps={side_section} />
          </div>
          <Main progress_bar={progress_bar_data} />
        </div>

        <Bottom footerInfo={footerData} />
      </>
    );
  }
}

export default App;
