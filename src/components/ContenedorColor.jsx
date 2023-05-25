const ContenedorColor = ({ color }) => {
  return (
    <div
      className="mx-auto mb-3 border border-3 border-dark contenedorColor"
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

export default ContenedorColor;
