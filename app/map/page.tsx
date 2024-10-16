'use client'


import React from "react";
import { useSearchParams } from "next/navigation";
import MapView from "./map_view";
import { randomMap } from "./map_make";

export default function Page() {
    const searchParams = useSearchParams();
    const num_p = parseInt(searchParams.get("np") || "4");
    const [shuffle, setShuffle] = React.useState(0)

    const map_str = randomMap(num_p);
    
    return(
    <div>
        <div className="btn" onClick={() => setShuffle(1-shuffle)}>Shuffle</div>
        <MapView map_str={map_str}/>
    </div>
    );
}
