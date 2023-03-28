function Ranges(props) {
  const onChange = ({ target: t }) => {
    const index = +t.dataset.index;
    const value = +t.value;
    const values = props.values.map((n, i) => (i === index ? value : n));

    if (props.max >= values.reduce((acc, n) => acc + n, 0)) {
      props.onChange(values);
    }
  };

  return (
    <div>
      {props.values.map((n, i) => (
        <div>
          <input
            type="range"
            data-index={i}
            max={props.max}
            value={n}
            onChange={onChange}
          />
          {n}
        </div>
      ))}
    </div>
  );
}
export default Ranges;
