import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export default async function Nav(){

  return(
    <nav className="top-0 w-full py-2 flex items-center justify-around absolute z-50">
      <h1 className="font-bold lg:text-2xl text-xl">Safwan Bouceta</h1>
      <div className="flex items-center justify-center gap-3">
      <Link className="hover:-rotate-12 transition-transform delay-100 ease-in-out" target="_blank" href="https://github.com/Saf265">
          <Github size={26} />
        </Link>
        <Link className="hover:-rotate-12 transition-transform delay-100 ease-in-out" target="_blank" href="https://x.com/Safwan1978774">
          <Twitter size={26} />
        </Link>
      </div>
    </nav>
  )
}
