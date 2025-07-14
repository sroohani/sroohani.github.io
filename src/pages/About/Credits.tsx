import Credit from "./Credit";
import classes from "./Credits.module.css";
import solas from "@/assets/images/solas.png";
import noImage from "@/assets/images/no-image.jpg";
import logo from "@/assets/images/logo.jpeg";
import loader from "@/assets/images/loader.png";

const Credits = () => {
  return (
    <div className={classes.frame}>
      <Credit img={solas} title="Solas" href="https://chatgpt.com/" />
      <Credit
        img={noImage}
        title="Photo by Markus Spiske from Pexels"
        href="https://www.pexels.com/photo/codes-on-tilt-shift-lens-2004161/"
      />
      <Credit
        img={loader}
        title="Loader by CSS Loaders"
        href="https://css-loaders.com/"
      />
      <Credit
        img="https://avatars.githubusercontent.com/u/66879934?s=200&v=4"
        title="Lucide Icons"
        href="https://lucide.dev/icons/"
      />
      <Credit
        img="https://avatars.githubusercontent.com/u/29872746?s=200&v=4"
        title="Simple Icons"
        href="https://simpleicons.org/"
      />
      <Credit
        img="https://avatars.githubusercontent.com/u/39895671?s=200&v=4"
        title="React Icons"
        href="https://react-icons.github.io/react-icons/"
      />
      <Credit
        img={logo}
        title="Logo by Microsoft Designer AI"
        href="https://create.microsoft.com/en-us/features/ai-image-generator"
      />
    </div>
  );
};

export default Credits;
