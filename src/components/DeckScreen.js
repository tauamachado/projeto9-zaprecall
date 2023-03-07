import Flascard from "./Flashcard";
import Footer from "./Footer";
import logo from "../assets/logo.png";

export default function DeckScreen() {
    return (
        <div>
            <img src={logo} alt="Raio Amarelo"/>
            <h1>ZapRecall</h1>

            <Flascard />
            <Flascard />
            <Flascard />
            <Flascard />
            <Flascard />

            <Footer />
        </div>
    )
}