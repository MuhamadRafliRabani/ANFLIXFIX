const Nav = ({ icon, text }) => {
  return (
    <div className="w-full flex gap-1 items-center justify-center my-0 py-4 ">
      <i className="">{icon}</i>
      <h2 className="">{text}</h2>
    </div>
  );
};

export default Nav;
