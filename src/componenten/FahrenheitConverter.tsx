import { useState } from "react";

interface Props {
  temperature: number;
  onSave: (naam: number) => void;
}

function FahrenheitConverter({ temperature, onSave }: Props) {
  const [toFahrenheit, setToFahrenheit] = useState(
    ((temperature - 32) * 5) / 9
  );
  return (
    <>
      <input
        type="text"
        key={toFahrenheit} // normaal moet er bij de onchange iets gebeuren waardoor ik de e.target.value terug stuur naar de app maar dat weet ik niet meer
        onChange={(e) => setToFahrenheit(parseInt(e.target.value))}
      />
      {console.log(toFahrenheit)}
    </>
  );
}

export default FahrenheitConverter;
