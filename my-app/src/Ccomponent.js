// import React, { Component } from "react";
import facebookPic from "./images/facebook.svg";
import linkedinPic from "./images/linkedin.svg";
import heart from "./images/heart.svg";
import comment from "./images/comment.svg";
import twitter from "./images/twitter.svg";
import avatar from "./images/ava.svg";
import mainPic from "./images/mainpic.svg";
import Titlecomponent from "./Titlecomponent";
import ArticlesData from "./ArticlesData.js";

export default function Component({ article }) {
  console.log(article);
  return (
    <div
      className="wrapper"
      style={{ marginLeft: "80px", marginRight: "80px", marginTop: "80px" }}
    >
      <div class="row" style={{ margin: "0" }}>
        <div class="col-12" style={{ padding: "0px" }}>
          <div class="row" style={{ margin: "0px" }}>
            <div class="col-8" style={{ padding: 0 }}>
              <div class="h-25 row" style={{ margin: "0px" }}>
                <div
                  class="col-1"
                  style={{ padding: "0", maxWidth: "24px", height: "29px" }}
                >
                  <img src={avatar} alt="..." style={{ width: "24px" }} />
                </div>
                <div class="col" style={{ paddingLeft: "4px" }}>
                  <p>
                    <b
                      className="authorName"
                      style={{
                        paddingLeft: "4px",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "18px",
                      }}
                    >
                      {article.author}
                    </b>
                    {""}
                    <small
                      class="text-muted"
                      style={{
                        paddingLeft: "4px",
                        paddingRight: "4px",
                      }}
                    >
                      #
                    </small>
                    <b
                      className="topicsName"
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "18px",
                      }}
                    >
                      {article.topic}
                    </b>{" "}
                    <small class="text-muted">{article.date}</small>
                  </p>
                </div>
              </div>
              <div class="h-40 row" style={{ margin: "0px" }}>
                <p class="h3 title" id="title">
                  {article.title}
                </p>
              </div>
              <div class="h-15 row" style={{ margin: "0px" }}>
                <p id="description">{article.abstract}</p>
              </div>

              <div class="h-20 row">
                <div class="col-3">
                  <span>JavaScript</span>
                </div>
                <div class="col-3">
                  <p>
                    <small class="text-muted">12 min read</small>
                  </p>
                </div>
                <div class="col-3">
                  <p>
                    <small class="text-muted">Selected for you</small>
                  </p>
                </div>
                <div class="col-3">
                  <img src={linkedinPic} alt="..." />
                  <img src={facebookPic} alt="..." />
                  <img src={twitter} alt="..." />
                </div>
              </div>
            </div>

            <div class="col-4">
              <img
                src={article.img}
                className="news-image"
                class="img-fluid"
                alt="..."
              />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
