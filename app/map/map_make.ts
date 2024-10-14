import { InnerPos } from "../lib/type_def";

export const numPlayerToNumSec = (np : number) => {
    if( np < 3 ) return 7;
    if ( np == 3) return 9;
    return 10;
}
export const numPlayerToNumOuter = (np : number) => {
    if( np < 3 ) return 6;
    return 8;
}
export const numPlayerToNumInner = (np : number) => {
    if( np < 3 ) return 6;
    if ( np == 3 ) return 8;
    return 10;
}

const SEC_IDS = [
    [ "A", "B", "C", "D", "e", "f", "g"],
    [ "A", "B", "C", "D", "E", "F", "G", "I", "J"],
    [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
]

/* Inner: E = Astro, F = Empty, G = Proto */

const INNER_SHIP = ["A", "B", "C", "D"] // 2p use 3 first, 3p+4p use all
const INNER_OTHER = ["G", "E", "E", "F", "E", "E"] // 2p use 3 first, 4p use all
const INNER_OTHER_3P = ["G", "E", "E", "F"]

const OUTER_IDS = [
    ["A", "a"], ["B", "b"], ["C", "c"], ["D", "d"], ["E", "e"], ["F", "f"], ["G", "g"], ["H", "h"],
]

const INNER_POS_2P : InnerPos[] = [
    {ship: [0,2,4], other: [1,3,5]},
    {ship: [1,3,5], other: [0,2,4]},
];

const INNER_POS_3P : InnerPos[] = [
    {ship: [2,3,6,7], other: [0,1,4,5]},
    {ship: [1,3,6,7], other: [0,2,4,5]},
    {ship: [0,2,6,7], other: [1,3,4,5]},
    {ship: [0,2,4,6], other: [1,3,5,7]},
    {ship: [1,3,5,7], other: [0,2,4,6]},
];

const INNER_POS_4P : InnerPos[] = [
    {ship: [0, 2, 4, 6], other:  [1, 3, 5, 7, 8, 9]},
    {ship: [0, 5, 7, 9], other:  [1, 2, 3, 4, 6, 8]},
    {ship: [1, 5, 7, 9], other:  [0, 2, 3, 4, 6, 8]},
    {ship: [0, 2, 6, 7], other:  [1, 3, 4, 5, 8, 9]},
    {ship: [1, 4, 6, 8], other:  [0, 2, 3, 5, 7, 9]},
    {ship: [0, 2, 6, 8], other:  [1, 3, 4, 5, 7, 9]},
    {ship: [2, 4, 6, 8], other:  [0, 1, 3, 5, 7, 9]},
    {ship: [0, 4, 6, 8], other:  [1, 2, 3, 5, 7, 9]},
    {ship: [1, 3, 6, 7], other:  [0, 2, 4, 5, 8, 9]},
    {ship: [2, 3, 7, 9], other:  [0, 1, 4, 5, 6, 8]},
    {ship: [1, 3, 6, 8], other:  [0, 2, 4, 5, 7, 9]},
    {ship: [0, 2, 7, 9], other:  [1, 3, 4, 5, 6, 8]},
    {ship: [0, 2, 4, 8], other:  [1, 3, 5, 6, 7, 9]},
    {ship: [3, 5, 7, 9], other:  [0, 1, 2, 4, 6, 8]},
    {ship: [0, 2, 4, 9], other:  [1, 3, 5, 6, 7, 8]},
    {ship: [1, 3, 5, 9], other:  [0, 2, 4, 6, 7, 8]},
    {ship: [1, 3, 5, 8], other:  [0, 2, 4, 6, 7, 9]},
    {ship: [2, 3, 6, 7], other:  [0, 1, 4, 5, 8, 9]},
    {ship: [1, 3, 7, 9], other:  [0, 2, 4, 5, 6, 8]},
    {ship: [2, 3, 6, 8], other:  [0, 1, 4, 5, 7, 9]},
    {ship: [1, 3, 5, 7], other:  [0, 2, 4, 6, 8, 9]}
];

export function randomInt(min: number, max:number){
    const N = Math.abs(max-min)
    return min + Math.floor(Math.random() * N);
}

export function shuffle<Type>(array : Type[]) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      const randomIndex = randomInt(0,currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

const randomSec = (np : number) => {
    // TODO: 1-4 must be in the center!
    const np_id = np-2
    const sec_arr = SEC_IDS[np_id].slice();
    shuffle(sec_arr);
    let sec_str = ""
    for( const [, s] of sec_arr.entries()){
        sec_str += s + randomInt(0,6);
    }
    return sec_str;
}

const randomInnNp = (np: number, pos_arr : InnerPos[]) => {
    const n_ship = pos_arr[0].ship.length
    const n_othr = pos_arr[0].other.length
    const x = randomInt(0,pos_arr.length)
    const inn_arr = []
    for(let i = 0; i < n_ship+n_othr; ++i){
        inn_arr.push("x");
    }
    const inn_ship_arr = INNER_SHIP.slice(0, n_ship)
    let inn_othr_arr = INNER_OTHER.slice(0, n_othr)
    if (np == 3) inn_othr_arr = INNER_OTHER_3P.slice()
    shuffle(inn_ship_arr)
    shuffle(inn_othr_arr)
    for (const [i, p] of pos_arr[x].ship.entries()){
        inn_arr[p] = inn_ship_arr[i]
    }
    for (const [i, p] of pos_arr[x].other.entries()){
        inn_arr[p] = inn_othr_arr[i]
    }
    return inn_arr.join("")
}
const randomInn = (np : number) => {
    if (np < 3) return randomInnNp(np, INNER_POS_2P);
    if (np == 3) return randomInnNp(np, INNER_POS_3P);
    return randomInnNp(np, INNER_POS_4P);
}
const randomOut = (np : number) => {
    const no = numPlayerToNumOuter(np);
    const out_arr = []
    for( let i = 0; i < no; i++){
        out_arr.push(OUTER_IDS[i][randomInt(0,2)])
    }
    shuffle(out_arr)
    let out_str = ""
    for( const [, s] of out_arr.entries()){
        out_str += s + randomInt(0,3);
    }
    return out_str;
}

export const randomMap = (np: number) => {
    return ""+np+randomSec(np)+randomInn(np)+randomOut(np);
}
