import { Show, SignIn, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md">
      <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href='/'>
          <Image src={"/mainlogo.png"}  alt='Niova Logo' height={60} width={150} className='h-12 w-auto object-contain' />
        </Link>

        <div className='flex items-center space-x-4'>
          <Show when="signed-in">
            <Link href={"/dashboard"} className='text-gray-600 hover:text-blue-500 flex items-center gap-2'>
              <Button variant="outline">
                <LayoutDashboard size={18}/>
                <span className='hidden md:inline'>Dashboard</span>
              </Button>
            </Link>

            <Link href={"/transaction/create"}>
              <Button className={'flex items-center gap-2'}>
                <PenBox size={18}/>
                <span className='hidden md:inline'>Add Transaction</span>
              </Button>
            </Link>
          </Show>

          <Show when="signed-out">
            <SignInButton forceRedirectUrl={"/dashboard"}>
              <Button variant="outline">Login</Button>
            </SignInButton>
          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </nav>
    </div>
  )
}

export default Header