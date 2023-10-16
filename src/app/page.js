import style from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={style.main}>
      <Link href="/products">Products</Link>
      <Link href="/addproduct">Add Product</Link>
    </main>
  )
}