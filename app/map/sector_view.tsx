import Image from 'next/image'
import { SectorData } from '@/app/lib/type_def'

const SLOT_TO_POS = [
    {left: 5, top: 10},
    {left: 10, top: 10},
    {left: 20, top: 5},
    {left: 5, top: 5},
    {left: 5, top: 5},
    {left: 5, top: 5},
    {left: 5, top: 5},
    {left: 5, top: 5},
    {left: 5, top: 5},
    {left: 5, top: 10},
]

export default function SectorView({sector_data} : {sector_data: SectorData}) {
  const {left, top} = SLOT_TO_POS[sector_data.slot] 
  return (
    <div className={"sec-slot-"+sector_data.slot+" rot"+sector_data.rotation}>
        <Image
            src={'/map/'+sector_data.id+'.png'}
            alt={'/map/'+sector_data.id+'.png'}
            width={260}
            height={282}
        />
    </div>
  );
}
