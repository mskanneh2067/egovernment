
import {topMenu }from "@/app/data/data"
import Link from "next/link"
const Top = () => {

  return (
    <div className="bg-red-700 text-white w-full h-16 flex items-center justify-between p-5 font-bold space-x-1">
      {
      topMenu.map((e)=>(
        <Link href={e.path} key={e.id} className="border border-white p-1 rounded-sm">{e.title}</Link>
      ))
      }
    </div>
  )
}

export default Top
