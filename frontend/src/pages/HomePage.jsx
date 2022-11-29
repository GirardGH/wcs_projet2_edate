import Nav from "../components/NavbarBurger/Nav";
import Background from "../components/Background/Background";
import CarrouselPa from "../components/CarrouselPa/carrouselPa";
import Footer from "../components/Footer/Footer";
import ButtonCreateAccount from "../components/ButtonCreateAccount/ButtonCreateAccount";

export default function HomePage() {
  return (
    <div>
      <div className="relative z-10">
        <Nav />
      </div>
      <div>
        <Background />
      </div>

      <ButtonCreateAccount />

      <div className="max-[681px]:w-[100%]">
        <div>
          <CarrouselPa />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
