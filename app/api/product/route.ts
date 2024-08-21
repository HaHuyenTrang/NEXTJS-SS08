// import React from 'react'
import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server'

let product=[
    {
        id:1,
        name:"maybach1",
        price:"25 tỉ"
    },
    {
        id:2,
        name:"maybach2",
        price:"20 tỉ"
    },
    {
        id:3,
        name:"maybach3",
        price:"23 tỉ"
    }
]
export async function GET() {

    return NextResponse.json({
        message:"lấy danh sách sản phẩm thành công",
        data:product
    })
}
export async function POST() {

    return NextResponse.json({
        message:"thêm sản phẩm thành công",
        data:product
    })
}
// export async function POST(request: any, response: any) {
//     const data = await request.json();
//     return NextResponse.json({ message: "Them thanh cong", user: data });
//   }
//   Bài 5
  
  export async function DELETE(request: any, response: NextApiResponse) {
    const data = await request.json();
    return NextResponse.json({ message: "Xoa thanh cong", user: data });
  }
//   Bài 4
