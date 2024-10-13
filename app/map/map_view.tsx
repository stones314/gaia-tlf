import { SectorData, MapData } from '@/app/lib/type_def'
import { SectorView, InnerView, OuterView} from './sector_view';
import { numPlayerToNumInner, numPlayerToNumOuter, numPlayerToNumSec } from './map_make';

const getSecId = (c : string) => {
    if (c == "A") return "s01";
    if (c == "B") return "s02";
    if (c == "C") return "s03";
    if (c == "D") return "s04";
    if (c == "E") return "s05";
    if (c == "e") return "s05b";
    if (c == "F") return "s06";
    if (c == "f") return "s06b";
    if (c == "G") return "s07";
    if (c == "g") return "s07b";
    if (c == "H") return "s08";
    if (c == "I") return "s09";
    if (c == "J") return "s10";
    return "s00"
}

const getInnerId = (c : string) => {
    if ( c == "A") return "inn1";
    if ( c == "B") return "inn2";
    if ( c == "C") return "inn3";
    if ( c == "D") return "inn4";
    if ( c == "E") return "inn5";
    if ( c == "F") return "inn6";
    if ( c == "G") return "inn7";
    return "i6";
}

const getOuterId = (c : string) => {
    if (c == "A") return "out11A";
    if (c == "a") return "out11B";
    if (c == "B") return "out12A";
    if (c == "b") return "out12B";
    if (c == "C") return "out13A";
    if (c == "c") return "out13B";
    if (c == "D") return "out14A";
    if (c == "d") return "out14B";
    if (c == "E") return "out15A";
    if (c == "e") return "out15B";
    if (c == "F") return "out16A";
    if (c == "f") return "out16B";
    if (c == "G") return "out17A";
    if (c == "g") return "out17B";
    if (c == "H") return "out18A";
    if (c == "h") return "out18B";
    return "11A.png"
}

const getOuterSlot = (slot_id : number, np : number) => {
    if( slot_id == 0 || slot_id == 1) return ""+slot_id;
    if(np < 3){
        if( slot_id == 2 ) return "2a";
        if( slot_id == 3 ) return "3a";
        if( slot_id == 4 ) return "6";
        if( slot_id == 5 ) return "7";
    }
    if( slot_id == 2 ) return "2b";
    if(np == 3){
        if( slot_id == 3 ) return "3b";
        if( slot_id == 4 ) return "4a";
        return ""+slot_id;
    }
    if(np > 3){
        if( slot_id == 3 ) return "3c";
        if( slot_id == 4 ) return "4b";
        return ""+slot_id;
    }
    return "0";
}

const addRot = (base: number, add: number) => {
    return ""+(base + add)%360;
}

const rotIdToDeg = (id: string) => {
    if (id == "1") return 120;
    if (id == "2") return 240;
    return 0;
}

const getOuterRot = (slot : string, rot_id : string) => {
    if ( slot == "0")  return addRot( 90, rotIdToDeg(rot_id));
    if ( slot == "1")  return addRot(150, rotIdToDeg(rot_id));
    if ( slot == "2a") return addRot(210, rotIdToDeg(rot_id));
    if ( slot == "2b") return addRot(150, rotIdToDeg(rot_id));
    if ( slot == "3a") return addRot(270, rotIdToDeg(rot_id));
    if ( slot == "3b") return addRot(270, rotIdToDeg(rot_id));
    if ( slot == "3c") return addRot(210, rotIdToDeg(rot_id));
    if ( slot == "4a") return addRot(210, rotIdToDeg(rot_id));
    if ( slot == "4b") return addRot(270, rotIdToDeg(rot_id));
    if ( slot == "5")  return addRot(330, rotIdToDeg(rot_id));
    if ( slot == "6")  return addRot(330, rotIdToDeg(rot_id));
    if ( slot == "7")  return addRot( 30, rotIdToDeg(rot_id));
    return "0";
}

const parseMapString = (map_str : string) => {
    // make map data stuct from map string
    const np = parseInt(map_str[0]);

    // SECTORS
    const ns = numPlayerToNumSec(np);
    let sectors : SectorData[] = [];
    for (let s = 0; s < ns; s++){
        const first = 1 + s*2;
        const second = first+1;
        if (second >= map_str.length) break;
        sectors.push(
            {
                id: getSecId( map_str[first] ),
                rotation: map_str[second],
                slot: ""+s
            }
        )
    }

    // INNER
    const ni = numPlayerToNumInner(np);
    let inner : SectorData[] = [];
    for (let s = 0; s < ni; s++){
        const pos = 1 + ns*2 + s;
        if (pos >= map_str.length) break;
        inner.push(
            {
                id: getInnerId( map_str[pos] ),
                rotation: "0",
                slot: ""+s
            }
        )
    }

    // OUTER
    const no = numPlayerToNumOuter(np);
    let outer : SectorData[] = [];
    for (let s = 0; s < no; s++){
        const first = 1 + ns*2 + ni + s*2;
        const second = first+1;
        if (second >= map_str.length) break;
        const slot_str = getOuterSlot(s, np);
        outer.push(
            {
                id: getOuterId( map_str[first] ),
                rotation: getOuterRot(slot_str, map_str[second]),
                slot: slot_str
            }
        )
    }

    let md: MapData = {
        np: np,
        sectors: sectors,
        inner: inner,
        outer: outer
    }
    return md;
}

export default function MapView({map_str} : {map_str: string}) {
    const map_data = parseMapString(map_str);
    let sectors = []
    for(const [i, sec] of map_data.sectors.entries())
    {
        sectors.push(
            <SectorView
                sector_data={sec}
                key={i}
            />
        )
    }
    let inner = []
    for(const [i, inn] of map_data.inner.entries())
    {
        inner.push(
            <InnerView
                sector_data={inn}
                key={i}
            />
        )
    }
    let outer = []
    let debug = ""
    for(const [i, out] of map_data.outer.entries())
    {
        outer.push(
            <OuterView
                sector_data={out}
                key={i}
            />
        )
        debug+=out.slot + ", "
    }
  return (
    <div className='relative bg-white-100 h-800'>
        {map_data.outer.length + " " + outer.length+" "+ debug}
        {sectors}
        {inner}
        {outer}
    </div>
  );
}
