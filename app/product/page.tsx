"use client"
import axios from 'axios'
// import { log } from 'console'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [product,setProduct]=useState<any>();
    useEffect(()=>{
        axios.get("http://localhost:3001/api/product")
        .then((respon)=>{
            console.log(respon);
            setProduct(respon.data.data)

        })
        .catch((err)=>{

        })
    },[])
    const handleClick=(id:number)=>{
        axios.get(`http://localhost:3001/api/product/${id}`)
        .then((respon)=>{
            console.log(respon.data.data);
            
        })
        .catch((err)=>{

        })
    }
  return (
    <div>danh sách sản phẩm
        {product?.map((item:any)=>{
            return(
                <div key={item.id}>
                    <p>tên:{item.name}</p>
                    <p>giá:{item.price}</p>
                    <button onClick={()=>handleClick(item.id)}>chi tiết sản phẩm</button>
                    <p>________________</p>
                </div>
            )
        })}
    </div>
  )
}
