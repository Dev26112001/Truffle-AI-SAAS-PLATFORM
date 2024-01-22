"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("af01db4e-4837-48f5-8f01-b42984912fb6");
  }, []);

  return null;
};