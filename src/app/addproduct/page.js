"use client";
import { useState } from "react";
import "../style.css";
export default function Page() {
    const [name ,setName] = useState("");
    const [price ,setPrice] = useState("");
    const [color ,setColor] = useState("");
    const [company ,setCompany] = useState("");
    const [category ,setCategory] = useState("");

    const addProduct=async()=>{
        console.log(name,price,color,category,company);
        let result = await fetch(process.env.NEXT_PUBLIC_URL +"/api/products",{
            method:"POST",
            body:JSON.stringify({name,price,color,category,company})
        });
        result = await result.json()
        if(result.success){
            alert("new product added")
        }
    }
  return (
    
    <div>
      <h1>Add products</h1>
      <input className="input" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Product Name" />
      <input className="input" value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="Enter Product Price" />
      <input className="input" value={color} onChange={(e)=>setColor(e.target.value)} type="text" placeholder="Enter Product Color" />
      <input className="input" value={company} onChange={(e)=>setCompany(e.target.value)} type="text" placeholder="Enter Product Company"/>
      <input className="input" value={category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder="Enter Product Category" />
      <button className="btn" onClick={addProduct}>Add Product</button>
    </div>
  );
}
