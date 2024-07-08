import React from "react";

export default function Contacts() {
  return (
    <div className="sm:h-auto h-full flex flex-col items-center justify-center  sm:py-24 py-20  tracking-wide 	">
      <p className="text-[50px] text-red pb-5">Contacts</p>
      <div className="flex flex-col   justify-center space-y-8 text-center">
        <div>
          <p className="text-[35px] text-bold">Location</p>
          <p className="text-[20px] text-bold ">Ukraine, Cherkasy</p>
        </div>
        <div>
          <p className="text-[35px] text-bold">Telegram/Viber</p>
          <p className="text-[20px] text-bold">+(380) 096 550 77 81</p>
        </div>
        <div>
          <p className="text-[35px] text-bold">Email</p>
          <p className="text-[20px] text-bold">malyuk2004@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
