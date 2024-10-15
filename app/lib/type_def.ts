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

export type InnerPos = {
    ship : number[];
    other : number[];
}

export type ShipData = {
    name : string;
    tech : string;
    fed : string;
    artifacts: string[];
}

export type SetupData = {
    np : number;
    adv_tech : string[];
    base_tech : string[];
    rest_tech : string[];
    boosters : string[];
    round_vps : string[];
    end_vps : string[];
    terra_fed : string;
    tlf_tech : string;
    ship_data: ShipData[];
}