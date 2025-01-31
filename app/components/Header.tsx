import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full py-6 px-6 bg-davinci-blue">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-4xl font-heading font-bold text-davinci-accent">
          DAVINCI
        </Link>
        <nav>
          <Button
            asChild
            variant="ghost"
            className="text-lg font-sans text-davinci-text hover:text-davinci-accent hover:bg-davinci-lightBlue"
          >
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

