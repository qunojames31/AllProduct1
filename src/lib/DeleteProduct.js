"use client";

// import { useRouter } from "next/router";
import { useRouter } from 'next/navigation';

export default function DeleteProduct(props) {
  const router = useRouter();
  const deleteRecord = async()=> {
    // console.log(process.env.NEXT_PUBLIC_URL,"888");
    let response = await fetch(process.env.NEXT_PUBLIC_URL +"/api/products/"+props.id,{
        method:"delete"
    });

    response = await response.json();
    if (response.success) {
        alert("Product deleted")
        router.push("/products")
        // router.refresh()
    }
  }
    return <button onClick={deleteRecord}>Delete</button>;
}