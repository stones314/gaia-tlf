'use client'

import MapView from "./map_view";
import { randomMap } from "./map_make";
import React from "react";

export default function Page() {
    const [mapStr, setMapStr] = React.useState(randomMap(4))

    return(
    <div>
        <div onClick={() => {setMapStr(randomMap(2))}}>2</div>
        <div onClick={() => {setMapStr(randomMap(3))}}>3</div>
        <div onClick={() => {setMapStr(randomMap(4))}}>4</div>
        <MapView map_str={mapStr}/>
    </div>
    );
}