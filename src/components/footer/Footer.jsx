import Branding from "./footer-component/Branding";
import Linking from "./footer-component/Linking";
import Help from "./footer-component/Help";
import Newsletter from "./footer-component/Newsletter";
import CopyRight from "./footer-component/CopyRight";

export default function Footer() {
  return (
    <footer className="">
      <div className="container my-5 bg-white mx-auto pl-5 grid grid-cols-1 md:grid-cols-5 gap-8 ">
        <Branding />

        <Linking />

        <Help />

        <Newsletter />
      </div>

      <hr />

      <div className="container mx-auto">
        <CopyRight />
      </div>
    </footer>
  );
}
