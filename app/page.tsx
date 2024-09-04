import React from 'react'
import fs from "fs"
import path from "path"
export default function page() {
  const filePath = path.join(process.cwd(), "app/product/product.txt")
  const data = fs.writeFileSync(filePath, "hello1111!!!", "utf-8")
  // console.log("đọc file: ", data);

  return (
    <div>page</div>
  )
}
