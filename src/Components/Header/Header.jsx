const Header = ({ title = "React Playground" }) => {
  return (
    <header>
      <nav>
        <h2>{title}</h2>
      </nav>
    </header>
  );
};

export default Header;
