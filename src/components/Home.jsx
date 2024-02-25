import "../styles/Home.css"
// why you doing this
import { substituteImage, pythonIcon, htmlIcon, cssIcon, javascriptIcon, reactIcon, nodejsIconDark, nodejsIconLight, expressjsIcon, mongodbIcon } from "../images"
import { TechCard } from "./index"

function Home() {

  const techUsed = [
    {
      image: pythonIcon,
      altText: "python icon",
      techName: "Python"
    },
    {
      image: htmlIcon,
      altText: "html icon",
      techName: "HTML"
    },
    {
      image: cssIcon,
      altText: "css icon",
      techName: "CSS"
    },
    {
      image: javascriptIcon,
      altText: "javascript icon",
      techName: "JavaScript"
    },
    {
      image: reactIcon,
      altText: "react icon",
      techName: "React"
    },
    {
      image: nodejsIconDark,
      altText: "nodejs icon",
      techName: "Node.JS"
    },
    {
      image: expressjsIcon,
      altText: "expressjs icon",
      techName: "Express.js"
    },
    {
      image: mongodbIcon,
      altText: "mongodb icon",
      techName: "MongoDB"
    },
  ]
  
  return (
    <div className="home-container">
      <div className="introduction">
        <div className="about-me">
          <p className="line-zero">
            Hello, I am <span id="name">Arbab Ansari</span>
          </p>
          <p className="line-one">
            A creative Web Developer who loves the idea of
            turning pieces of code into
            fascinating and functional websites. I am a life long learner and tries to be a better version of
            myself every day.
          </p>
          <p className="line-two">
            Other than developing websites I enjoy reading books and explore the never ending world of
            echnologies.
          </p>
        </div>
          <div className="image-container">
            <img src={substituteImage} alt="substitute profile picture" />
          </div>
      </div>
      <hr />
      <h1 className="tech-heading">Technologies I Use</h1>
      <div className="tech-container">
        {techUsed.map( (tech) => (<TechCard image={tech.image} techName={tech.techName} altText={tech.altText} key={tech.techName} />) )}
      </div>
    </div>
   );
}

export default Home;