import { SectorData, MapData } from '@/app/lib/type_def'
import SectorView from './sector_view';

const getMapId = (c : string) => {
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

const numPlayerToNumSec = (np : number) => {
    if( np < 3 ) return 7;
    if ( np == 3) return 9;
    return 10;
}

const parseMapString = (map_str : string) => {
    // make map data stuct from map string
    const np = parseInt(map_str[0]);
    const ns = numPlayerToNumSec(np);
    let sectors : SectorData[] = [];
    for (let s = 0; s < ns; s++){
        const first = 1 + s*2;
        const second = first+1;
        if (second >= map_str.length) break;
        sectors.push(
            {
                id: getMapId( map_str[first] ),
                rotation: parseInt(map_str[second]),
                slot: s
            }
        )
    }

    let md: MapData = {
        np: np,
        sectors: sectors
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
  return (
    <div className='relative bg-white-100 h-800'>
        {sectors}
    </div>
  );
}
