interface Props {
  temperature: number;
  onSave: (naam: number) => void;
}

function FahrenheitConverter({ temperature, onSave }: Props) {
  const toFahrenheit = ((temperature - 32) * 5) / 9;
  return (
    <>
      <input
        type="text"
        key={toFahrenheit}
        onChange={(e) => onSave(parseInt(e.target.value))}
      />
    </>
  );
}

export default FahrenheitConverter;
