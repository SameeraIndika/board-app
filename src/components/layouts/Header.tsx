"use client";

import React from "react";

import { Plus } from "lucide-react";

import { DefaultButton } from "../buttons/DefaultButton";

import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-10 flex w-full h-20 justify-between items-center gap-4 px-4 md:px-6 lg:px-8 py-2 bg-tc_background_light border-b border-tc_border shadow-sm">
        <div className="flex items-center w-full gap-x-24">
          <div className="flex items-center w-fit gap-x-4">
            <div className="flex items-center w-44">
              <Logo />
            </div>
          </div>
          <div className="flex justify-end items-center w-full">
            <DefaultButton
              icon={Plus}
              iconPosition="right"
              label="Create new board"
              buttonWidthClass="w-[170px]"
              onClick={() => {}}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
