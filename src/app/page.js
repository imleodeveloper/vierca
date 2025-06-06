import { Header } from "@/components/header/index.js";
import { HomePage } from "./components/Home/section1";
import { PlansPage } from "./components/Home/section2";
import { BenefitsPage } from "./components/Home/section3";
import { SupportHome } from "./components/Home/section4";
import { Footer } from "@/components/footer";


export default function Home() {
  return (
    <div className="page-home">
      <main>
        <HomePage />
        <PlansPage />
        <BenefitsPage />
        <SupportHome />
      </main>
    </div>
  );
}
