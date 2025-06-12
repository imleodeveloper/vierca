import { StartPrice } from "../components/Preços/section1";
import { PlansPrice } from "../components/Preços/section2";

export default function Precos() {
  return (
    <div className="page-prices">
      <main>
        <StartPrice />
        <PlansPrice />
      </main>
    </div>
  );
}
