'use client'

import React from "react";
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import NavLinks from '@/app/nav-links';

function NumPSelect({num_p} : {num_p: number}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const old_num_p = parseInt(searchParams.get("np") || "4");
  const sel = old_num_p == num_p ? " bg-green" : "";
  return (
    <Link
      replace
      key={num_p}
      href={pathname+'?np='+num_p}
      className={sel}
    >
      <p className={"btn-rnd"+sel}>{num_p}</p>
    </Link>
  )
}

export default function Menu() {
  const [numP, setNumP] = React.useState(4)
  return (
    <div className="">
      <div className="row">
        <NavLinks num_p={numP} />
        <div className="col">
          <div className="txt-center">Player Count:</div>
          <div className="row">
            <div className="" onClick={() => {setNumP(2)}}> <NumPSelect num_p={2}/></div>
            <div className="" onClick={() => {setNumP(3)}}> <NumPSelect num_p={3}/></div>
            <div className="" onClick={() => {setNumP(4)}}> <NumPSelect num_p={4}/> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
