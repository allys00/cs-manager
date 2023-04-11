import { useState } from "react";
import PickCards from "./pickCards/PickCards";
import { Welcome } from "./welcome/Welcome";

function App() {
  const [step, setStep] = useState(0);
  return (
    <main
      data-theme="mytheme"
      className="bg-primary w-screen overflow-auto h-screen text-white font-cs"
    >
      <section className="container mx-auto">
        {step === 0 && <Welcome nextStep={() => setStep(1)} />}
        {step === 1 && <PickCards />}
      </section>
    </main>
  );
}

export default App;
