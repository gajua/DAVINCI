import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="w-full bg-davinci-blue px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="font-heading text-4xl font-bold text-davinci-accent"
        >
          DAVINCI
        </Link>
        <nav>
          <Button
            asChild
            variant="ghost"
            className="font-sans text-lg text-davinci-text hover:bg-davinci-lightBlue hover:text-davinci-accent"
          >
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
