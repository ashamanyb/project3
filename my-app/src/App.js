import facebookPic from "./images/facebook.svg";
import linkedinPic from "./images/linkedin.svg";
import heart from "./images/heart.svg";
import comment from "./images/comment.svg";
import twitter from "./images/twitter.svg";
import avatar from "./images/ava.svg";
import mainPic from "./images/mainpic.svg";
import Ccomponent from "./Ccomponent";
import Articles from "./Articles";

let titleArray = [
  {
    title: "In Texas’ Gobbler Country, an Overlooked Mascot Gets Its Due",
    abstract:
      "The country is full of bird-themed mascots. But only a proud few have embraced the turkey.",
  },
];

function App() {
  return (
    <body onload="loadArticles()">
      <div>
        <h1 className="headerTitle" style={{ margin: "70px 80px 70px 80px" }}>
          {" "}
          Hello World
        </h1>
      </div>

      <Articles />
      <script src="index.js" async></script>
    </body>
  );
}

export default App;
