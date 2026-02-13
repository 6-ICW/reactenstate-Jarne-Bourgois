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
        key={toFahrenheit}
        onChange={(e) => setToFahrenheit(parseInt(e.target.value))}
      />
      {console.log(toFahrenheit)}
    </>
  );
}

export default FahrenheitConverter;
