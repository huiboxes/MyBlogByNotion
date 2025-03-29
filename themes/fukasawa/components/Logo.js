import { siteConfig } from '@/lib/config'
import Link from 'next/link'

const Logo = props => {
  return (
    <section className='flex'>
      <Link
        href='/'
        className='flex items-center gap-3 hover:bg-black hover:text-white border-black border-2 duration-500 px-4 py-2 cursor-pointer dark:text-gray-300 dark:border-gray-300 font-black rounded-lg'>

        <div class='relative inline-block'>
          <div class='rounded-full overflow-hidden w-8 h-8 shadow-md transition-transform duration-300 hover:scale-110'>
            <img
              src="avatar.png"
              alt='用户头像'
              class='w-full h-full object-cover'
            />
          </div>
        </div>

        <span class='text-base font-bold tracking-wide text-nowrap'>
          {siteConfig('TITLE')}
        </span>
      </Link>
    </section>
  )
}

export default Logo
