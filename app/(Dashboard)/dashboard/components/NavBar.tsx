function NavBar() {
  return (
    <div className="flex justify-between w-full items-center h-16 px-16 bg-gray-100 ">
      <h1 className="flex uppercase text-black text-3xl font-robotoSlab items-center justify-center ">
        Moviestan
      </h1>
      <div className="">
        <img
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          alt=""
          className="w-10 h-10 rounded-full object-fill"
        />
      </div>
    </div>
  );
}

export default NavBar;
