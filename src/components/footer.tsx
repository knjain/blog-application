import React from "react";

function Footer() {
  return (
    <div className=" px-10 pt-10 pb-20 bg-blue-100 justify-between flex ">
      <div className="flex">
        <h1 className=" text-2xl font-medium">Follow us on :</h1>
        <h4 className="animate-bounce mx-4 border rounded-lg px-4 bg-blue-700 text-white border-black py-2">
          LinkedIn
        </h4>
        <h4 className="animate-bounce border rounded-xl border-black bg-purple-700 text-white px-4 py-2">
          Instagram
        </h4>
      </div>
      <h3 className="text-gray-600">For any help : help@blogworld.com</h3>
    </div>
  );
}

export default Footer;
