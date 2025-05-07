import { useState } from 'react';

type Props = {
  values: number[];
  setValues: (values: number[]) => void;
};

function ValueInput({ values, setValues }: Props) {
  const [input, setInput] = useState<string>('');

  const handleAdd = () => {
    const num = Number(input);
    if (!isNaN(num)) {
      setValues([...values, num]);
      setInput('');
    }
  };

  return (
    <div className="input-group">
      <input
        type="number"
        placeholder="Ingrese un valor"
        value={input}
        onChange={e => setInput(e.target.value)}
        className="value-input"
      />
      <button className="add-value" onClick={handleAdd}>Agregar</button>
    </div>
  );
}

export default ValueInput;
