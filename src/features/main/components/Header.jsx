import React from "react";
import aamdhaneLogo from "../../../assets/images/aamdhaneLogo.svg";
import { CommentOutlined } from "@ant-design/icons";
import { colors } from "../../../theme/index";

export const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-md z-50 fixed top-0 w-full bg-white">
      <div className="container mx-auto flex flex-wrap px-2 py-1 flex-row items-center justify-between">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="www.aamdhane.com"
        >
          <img src={aamdhaneLogo} alt="Logo Of AamDhane" className="w-60" />
        </a>
        <button className="inline-flex items-center border-2 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-md text-md mt-4 md:mt-0 text-mainText2 border-mainText2 font-semibold">
          <CommentOutlined
            style={{ paddingRight: 10, color: colors.mainText2 }}
          />
          Support
        </button>
      </div>
    </header>
  );
};
