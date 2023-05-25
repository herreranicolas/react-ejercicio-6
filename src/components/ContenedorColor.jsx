const ContenedorColor = ({ color }) => {
  return (
    <div
      className="mx-auto mb-3 border border-3 border-dark"
      style={{
        backgroundColor: color,
        padding: "5rem",
        width: "25%",
        height: "25%",
      }}
    ></div>
  );
};

export default ContenedorColor;
