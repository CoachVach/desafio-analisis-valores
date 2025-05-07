type Props = {
    values: number[];
    setValues: (values: number[]) => void;
  };
  
  function ValuesList({ values, setValues }: Props) {
    const removeValue = (index: number) => {
      const updated = values.filter((_, i) => i !== index);
      setValues(updated);
    };
  
    return (
      <ul>
        {values.length === 0 && <li>No hay valores ingresados.</li>}
        {values.map((val, index) => (
          <li key={index}>
            <span>{val}</span>
            <button onClick={() => removeValue(index)} className="remove-value">-</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ValuesList;
  