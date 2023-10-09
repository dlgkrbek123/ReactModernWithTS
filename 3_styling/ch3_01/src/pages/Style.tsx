const Style = () => {
  return (
    <div>
      <h3>style</h3>
      <span
        className="material-icons"
        style={{
          color: 'blue',
        }}
      >
        home
      </span>
      <span
        className="material-icons"
        style={{
          fontSize: 50,
          color: 'red',
        }}
      >
        check_circle_outline
      </span>
    </div>
  );
};

export default Style;
