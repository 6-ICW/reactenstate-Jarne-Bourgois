import { useState } from "react";

interface Props {
  temperature: number;
  onSave: (naam: number) => void;
}

function CelsiusConverter({ temperature, onSave }: Props) {
  const [toCelsius, setToCelsius] = useState(((temperature - 32) * 5) / 9);
  return (
    <>
      <input
        type="text"
        id="Converter"
        key={toCelsius}
        onChange={(e) => setToCelsius(parseInt(e.target.value))}
      />
      {console.log(toCelsius)}
    </>
  );
}

export default CelsiusConverter;
