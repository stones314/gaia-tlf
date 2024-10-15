'use client';
 
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Map', href: '/map' },
    { name: 'Setup', href: '/setup' },
];

export default function NavLinks({num_p} : {num_p: number}) {
  const pathname = usePathname();

  return (
    <div className='row'>
      {links.map((link) => {
        const sel = pathname == link.href ? " bg-green" : "";
        return (
          <Link
            replace
            key={link.name}
            href={link.href+'?np='+num_p}
            className={"btn"+sel}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}