import CelsiusConverter from "./componenten/CelsiusConverter";
import FahrenheitConverter from "./componenten/FahrenheitConverter";
import { useState } from "react";

// hier in moet ik de waardes die terug gestuurd worden van de converters beschikbaar maken voor gebruik
interface Props {}

function App({}: Props) {
  const [Celsius, setCelsius] = useState<number>(0);
  const [Fahrenheit, setFahrenheit] = useState<number>(0);
  return (
    <>
      <CelsiusConverter
        temperature={Fahrenheit}
        onSave={(naam) => setFahrenheit(naam)}
      />
      <FahrenheitConverter
        temperature={Celsius}
        onSave={(naam) => setCelsius(naam)}
      />
    </>
  );
}

export default App;
