"use client";

import { useRouter } from 'next/navigation';

export default function DeleteProduct(props) {
  const router = useRouter();
  const deleteRecord = async()=> {
    let response = await fetch(process.env.NEXT_PUBLIC_URL +"/api/products/"+props.id,{
        method:"delete"
    });

    response = await response.json();
    if (response.success) {
        alert("Product deleted")
        router.push("/products")
    }
  }
    return <button onClick={deleteRecord}>Delete</button>;
}