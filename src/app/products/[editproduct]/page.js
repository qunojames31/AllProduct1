"use client";
import { useEffect, useState } from "react";
import "../../style.css";
import Link from "next/link";
export default function Page(props) {
    const [name ,setName] = useState("");
    const [price ,setPrice] = useState("");
    const [color ,setColor] = useState("");
    const [company ,setCompany] = useState("");
    const [category ,setCategory] = useState("");

    useEffect(()=>{
      getProductDetail()
        },[])

    const getProductDetail = async()=>{
      let productId = props.params.editproduct
      let productData = await fetch(process.env.NEXT_PUBLIC_URL +"/api/products/"+productId);
      productData =await productData.json();
      if(productData.success){
        let result = productData.result;
        setName(result.name);
        setPrice(result.price);
        setColor(result.color);
        setCompany(result.company);
        setCategory(result.category)
      }
    }

    const updateProduct = async()=>{
      let productId = props.params.editproduct
      let data = await fetch(process.env.NEXT_PUBLIC_URL +"/api/products/"+productId,{
        method:"PUT",
        body:JSON.stringify({name,price,color,category,company})
      });
      data = await data.json();
      if(data.result){
        alert("Product has been updated")
      }
    }

  return (
    
    <div>
      <h1>Update products</h1>
      <input className="input" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Product Name" />
      <input className="input" value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="Enter Product Price" />
      <input className="input" value={color} onChange={(e)=>setColor(e.target.value)} type="text" placeholder="Enter Product Color" />
      <input className="input" value={company} onChange={(e)=>setCompany(e.target.value)} type="text" placeholder="Enter Product Company"/>
      <input className="input" value={category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder="Enter Product Category" />
      <button className="btn" onClick={updateProduct}>Update Product</button>
      <Link href={"/products"}>Go to Product List</Link>
    </div>
  );
}
