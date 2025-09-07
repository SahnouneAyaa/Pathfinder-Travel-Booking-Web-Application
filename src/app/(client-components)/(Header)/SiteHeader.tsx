"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  ShoppingBagIcon as ShoppingCartIcon,
  Cog8ToothIcon as CogIcon,
} from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { PathName } from "@/routers/types";
import Link from "next/link";
import Header from "./Header";
import Header3 from "./Header3";
import { usePathname } from "next/navigation";
import { useThemeMode } from "@/utils/useThemeMode";


const SiteHeader = () => {
  const renderHeader = () => {
    
        return <Header navType="MainNav1" />;
  };

  return (
    <>
      {renderHeader()}
    </>
  );
};

export default SiteHeader;
