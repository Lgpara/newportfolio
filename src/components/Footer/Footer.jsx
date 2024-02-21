import "./footer.css";
import data from "../../appdata/data.json";

export default function Footer() {
  const icons = data.images.icons;

  return (
    <footer>
      <div className="footerElementsContainer">
        <div className="iconsContainer">
          <img className="icons" src={icons.github} alt="" />
          <img className="icons" src={icons.linkedin} alt="" />
        </div>
        <div className="emailBloc">
            <div className="copyBloc">
                <div className="textCopy">COPY</div>
            </div>
          <img className="icons" src={icons.mail} alt="" />
          <div className="textMail">louisgerber004@gmail.com</div>
        </div>
      </div>
    </footer>
  );
}
