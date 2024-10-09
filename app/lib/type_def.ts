export type SectorData = {
    id: string;
    rotation: number;
    slot: number;
};

export type MapData = {
    np : number;
    sectors : SectorData[];
}