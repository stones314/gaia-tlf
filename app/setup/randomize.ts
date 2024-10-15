import { SetupData } from "../lib/type_def";

const ADV_TECH : string[] = [
    "ADVfedP",
    "ADVfedV",
    "ADVgai",
    "ADVknw",
    "ADVlab", 
    "ADVminB",
    "ADVminV",
    "ADVore",
    "ADVqic",
    "ADVsecO",
    "ADVsecV",
    "ADVstp",
    "ADVtrsB",
    "ADVtrsV",
    "ADVtyp"
];
const BASE_TECH : string[] = [
    "TECcre",
    "TECgai",
    "TECknw",
    "TECore",
    "TECpia",
    "TECpow",
    "TECqic",
    "TECtyp",
    "TECvps"
];
const BOOSTERS : string[] = [
    "BOOgai",
    "BOOknw",
    "BOOlab",
    "BOOmin",
    "BOOnav",
    "BOOpia",
    "BOOpwt",
    "BOOqic",
    "BOOter",
    "BOOtrs"
];
const ROUND_VPS : string[] = [
    "RNDfed",
    "RNDgai3", 
    "RNDgai4", 
    "RNDmin", 
    "RNDpia", 
    "RNDstp", 
    "RNDter", 
    "RNDtrs3", 
    "RNDtrs4"
];
const END_VPS : string[] = [
    "FINbld",
    "FINfed",
    "FINgai",
    "FINsat",
    "FINsec",
    "FINtyp"
];
const BASE_FEDS : string[] = [
    "FEDcre",
    "FEDknw",
    "FEDore",
    "FEDpwt",
    "FEDqic",
    "FEDvps"
];

function GetRandomElements(array : string[], number : number) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, number);
}

function getRemainingBaseTech(selectedTech : string[]) {
    const out = [];
    for (const [, t] of BASE_TECH.entries()) {
        if (!selectedTech.includes(t))
            out.push(t);
    }
    return out;
}

export function getRandomSetup(np: number)
{
    const adv = GetRandomElements(ADV_TECH, 6);
    const base = GetRandomElements(BASE_TECH, 6);
    const rest = getRemainingBaseTech(base);
    const fed = GetRandomElements(BASE_FEDS, 1);
    const boost = GetRandomElements(BOOSTERS, np+3)
    const round_vps = GetRandomElements(ROUND_VPS, 6)
    const end_vps = GetRandomElements(END_VPS, 3)

    const setup : SetupData = {
        np: 2,
        adv_tech: adv,
        base_tech: base,
        rest_tech: rest,
        boosters: boost,
        round_vps: round_vps,
        end_vps: end_vps,
        terra_fed : fed[0],
        tlf_tech : "",
        ship_data : []
    }
    return setup;
}