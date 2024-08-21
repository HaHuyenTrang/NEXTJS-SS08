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
export async function GET(req:any,res:any) {
    let findItem=product.find((item)=>{
        return item.id==+res.params.idProduct
    })
  return NextResponse.json({
    message:"lấy danh sách 1 sản phẩm thành công!",
    data: findItem,
  })
}
