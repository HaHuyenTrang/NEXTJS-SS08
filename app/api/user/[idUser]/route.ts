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
export async function GET(req:any,res:any) {
    let findItem=user.find((item)=>{
        return item.id==+res.params.idUser
    })
  return NextResponse.json({
    message:"lấy danh sách 1 user thành công!",
    data: findItem,
  })
}
