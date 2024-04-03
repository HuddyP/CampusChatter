import React from "react";
import "./Widgets.css";

function RightWidgets() {
  return (
    <div className="widgets">
      <div className="widgets_widgetContainer">
        <h2>People and Clubs to follow: </h2>
        <div className="widgets_widgetSubContainer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGHO6BDXOLrSnMcEaYexOv9msgZvePzD4-VVt6TcoWA&s"
            alt="SAB"
          />
          <h2>Student Activities</h2>
          <p>@SAB</p>
        </div>
        <div className="widgets_widgetSubContainer">
          <img
            src="https://www.wsc.edu/images/Directory_Marysz_Rames_2022.jpg"
            alt="Rames"
          />
          <h2>Marysz Rames</h2>
          <p>@WSCPrez</p>
        </div>
        <div className="widgets_widgetSubContainer">
          <img
            src="https://fastly.4sqi.net/img/general/600x600/545692_o36Q345KaUdUHPeXqlKaxNmyq7pXXfqGtdxezP945J8.jpg"
            alt="Kanter"
          />
          <h2>Kanter Student Center</h2>
          <p>@StudentCenter</p>
        </div>
        <div className="widgets_widgetSubContainer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfeMl3QISZslqQRMc6iu_jrM90R0nQjVm0IzmjZkBrEw&s"
            alt="Student 14"
          />
          <h2>Student 14</h2>
          <p>@Student14</p>
        </div>
        <div className="widgets_widgetSubContainer">
          <img
            src="https://wsc.hosting2.acm.org/wp-content/uploads/2020/09/acm_wsc_ribbon.png"
            alt="WSC ACM"
          />
          <h2>Wayne State ACM</h2>
          <p>@WSCACM</p>
        </div>
      </div>
    </div>
  );
}

export default RightWidgets;
