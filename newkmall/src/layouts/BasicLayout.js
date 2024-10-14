import { Children } from "react";
import BasicMenu from "../components/BasicMenu";

const BasicLayout = ({ Children }) => {
  return (
    <>
      <header className="bg-teal-400 p-5">
        <BasicMenu />
      </header>
      <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-4">
        <main className="bg-sky-500">{Children}</main>
        <aside>Sidebar</aside>
      </div>
    </>
  );
};

export default BasicLayout;
