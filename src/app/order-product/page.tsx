"use client";

import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.push("/");
  };

  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>place order</button>
    </div>
  );
};

export default page;
