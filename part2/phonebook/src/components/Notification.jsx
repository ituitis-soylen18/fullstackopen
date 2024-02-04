const Notification = ({ message }) => {
  const footerStyle = {
    color: message[1] ?  "red": "green",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };

  if (message[0] === "") {
    return null;
  }
  
  return <div style={footerStyle}>{message[0]}</div>;
};

export default Notification;
