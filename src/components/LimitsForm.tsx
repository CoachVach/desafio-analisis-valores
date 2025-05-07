type Props = {
    limits: { min: number | ''; max: number | '' };
    setLimits: (limits: { min: number | ''; max: number | '' }) => void;
  };
  
  function LimitsForm({ limits, setLimits }: Props) {
    return (
      <div className="input-group">
        <div>
          <label>Límite Inferior: </label>
          <input
            type="number"
            value={limits.min}
            onChange={e => setLimits({ ...limits, min: Number(e.target.value) })}
          />
        </div>
        <div>
          <label>Límite Superior: </label>
          <input
            type="number"
            value={limits.max}
            onChange={e => setLimits({ ...limits, max: Number(e.target.value) })}
          />
        </div>
      </div>
    );
  }
  
  export default LimitsForm;
  