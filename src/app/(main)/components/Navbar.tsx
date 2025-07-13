import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[80px] flex flex-row items-center justify-center mr-4 bg-white sticky top-0">
      <Image src="/logo.png" width={80} height={80} alt="logo of me" />
      <p className="text-2xl font-bold ">Interactive English Reader</p>
    </div>
  );
};
export default Navbar;
