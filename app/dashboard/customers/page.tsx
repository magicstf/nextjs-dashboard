/*
 * @Author: sutengfei
 * @Date: 2024-11-24 19:38:16
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-12-03 18:21:37
 */
"use client";
// import { Metadata } from "next";
import { useState } from "react";
// export const metadata: Metadata = {
//   title: "Customers",
// };

export default function Page() {
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <>
      <button onClick={handleClick}>Likes ({likes})</button>
    </>
  );
}
