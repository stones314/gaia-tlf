'use client'


import React from "react";
import { useSearchParams } from "next/navigation";
import MapView from "./map_view";
import { randomMap } from "./map_make";

export default function Page() {
    const searchParams = useSearchParams();
    const num_p = parseInt(searchParams.get("np") || "4");
    const [mapStr, setMapStr] = React.useState(randomMap(num_p))
    const [usedP, setUsedP] = React.useState(num_p)
    if(num_p != usedP){
        setMapStr(randomMap(num_p));
        setUsedP(num_p);
    }
    return(
    <div>
        <div className="btn" onClick={() => setMapStr(randomMap(num_p))}>Shuffle</div>
        <MapView map_str={mapStr}/>
    </div>
    );
}
