// import React from 'react'
import { NextResponse } from 'next/server'

let user=[
  {
      id:1,
      user_name:"David",
      age:20
  },
  {
      id:2,
      user_name:"Linda",
      age:22
  },
 
]
export async function GET() {

    return NextResponse.json({
        message:"lấy danh sách user thành công",
        data:user
    })
}
// export async function POST() {

//     return NextResponse.json({
//         message:"thêm sản phẩm thành công",
//         data:user
//     })
// }
