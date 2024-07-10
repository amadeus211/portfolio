import React from "react";
import DialogModal from "./DialogModal";
import { useState } from "react";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);


  const onClose = () =>{
    setOpenModal(false)
  }

  return (
    <div className="bg-gray h-auto w-full ">
      <div className="flex flex-col items-center justify-center py-10 bg-midnight h-[500px]">
        <div className=" text-beige flex items-center justify-center flex-col sm:space-y-5 ">
          <p className="sm:text-[55px] text-[44px] text-center">
            My name is <span className="text-red">Oleksandr Maliuk</span>
          </p>
          <p className="sm:text-[45px]  text-[30px] pb-2 sm:pb-0	">
            a frontend developer
          </p>
          <p className="sm:text-[35px] text-[20px] mb-10	">
            with inspiration and creativity
          </p>

          <button
            className="w-[35%] h-[55px] bg-red text-white rounded-2xl hover:bg-hoverRed text-[15px] hover:text-[18px] transition-all duration-150 ease-in-out transform  "
            onClick={(e) => {
              // e.preventDefault();
              // window.open(
              //   "https://www.google.com/search?q=cv&oq=cv&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDINCAEQLhjHARjRAxiABDIGCAIQIxgnMgcIAxAAGIAEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEHMjc5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
              //   "_blank"
              // );
              setOpenModal(true);
            }}
          >
            Open CV
          </button>
          <DialogModal open={openModal} close={onClose}></DialogModal>
        </div>
      </div>
      <div className="text-beige flex items-center justify-center flex-col space-y-5 py-[50px] px-5 text-center  ">
        <p className="text-[40px] font-bold text-red">Technologies</p>
        <div>
          <p className="sm:text-[25px] text-[18px] text-black tracking-wider">
            JavaSript, CSS, HTML5, TailwindCSS, RestAPI ,
          </p>
          <p className="sm:text-[25px] text-[18px] text-black tracking-wider">
            React.JS, Responsive Web Design, NPM, Node.JS
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
