function Logo() {
  return (
    <div className="logo">
      <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo react" />
      <h3>React Website</h3>
    </div>
  );
}
export default Logo;
