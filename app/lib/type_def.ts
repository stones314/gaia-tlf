export type SectorData = {
    id: string;
    rotation: string;
    slot: string;
};

export type MapData = {
    np : number;
    sectors : SectorData[];
    inner : SectorData[];
    outer : SectorData[];
};