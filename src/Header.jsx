const Header = () => {
  const text={
    textAlign:"center"
  }
  return (
    <header className="bg-dark text-light py-3">
      <div className="container">
        <h1 style={text}>Library Management System</h1>
      </div>
    </header>
  );
};
export default Header;
