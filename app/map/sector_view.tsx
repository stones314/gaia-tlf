import Image from 'next/image'
import { SectorData } from '@/app/lib/type_def'

export function SectorView({sector_data} : {sector_data: SectorData}) {
  return (
    <div className={"sec sec-slot-"+sector_data.slot+" rot"+sector_data.rotation}>
        <Image
            src={'/map/'+sector_data.id+'.png'}
            alt={'/map/'+sector_data.id+'.png'}
            fill
            sizes="(max-width: 768px) 30vh, (max-width: 1200px) 30vh, 30vh"
        />
    </div>
  );
}

export function InnerView({sector_data} : {sector_data: SectorData}) {
  return (
    <div className={"inn inn-slot-"+sector_data.slot}>
        <Image
            src={'/map/'+sector_data.id+'.png'}
            alt={'/map/'+sector_data.id+'.png'}
            fill
            sizes="(max-width: 768px) 6vh, (max-width: 1200px) 6vh, 6vh"
        />
    </div>
  );
}

export function OuterView({sector_data} : {sector_data: SectorData}) {
  return (
    <div className={"out out-slot-"+sector_data.slot+" rot"+sector_data.rotation}>
        <Image
            src={'/map/'+sector_data.id+'.png'}
            alt={'/map/'+sector_data.id+'.png'}
            fill
            sizes="(max-width: 768px) 12vh, (max-width: 1200px) 12vh, 12vh"
        />
    </div>
  );
}

