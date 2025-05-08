import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceArea,
    ResponsiveContainer,
  } from 'recharts';
  
  type Props = {
    values: number[];
    min: number;
    max: number;
  };
  
  function ValuesChart({ values, min, max }: Props) {
    const chartData = values.map((val, idx) => ({
      x: idx + 1,
      y: val,
      outOfSpec: val < min || val > max,
    }));
  
    const CustomDot = (props: any) => {
      const { cx, cy, payload } = props;
      const color = payload.outOfSpec ? '#ff6b6b' : '#4caf50';
      return <circle cx={cx} cy={cy} r={5} fill={color} />;
    };
  
    return (
      <div style={{ height: 300, marginTop: 20 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid />
            <XAxis dataKey="x" name="Índice" />
            <YAxis dataKey="y" name="Valor" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <ReferenceArea y1={min} y2={max} fill="#b6fcd5" fillOpacity={0.3} />
            <Scatter
              name="Valores"
              data={chartData}
              shape={<CustomDot />}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  export default ValuesChart;
  