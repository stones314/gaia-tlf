'use client'

import React from "react";
import { useSearchParams } from "next/navigation";
import { BoosterView, EndVpView, RoundView, TechView } from "./setup_view";
import { getRandomSetup } from "./randomize";

export default function Page() {
    const searchParams = useSearchParams();
    const [shuffle, setShuffle] = React.useState(0)
    const num_p = parseInt(searchParams.get("np") || "4");

    const setup = getRandomSetup(num_p);

    return(
        <div className="setup-box">
            <div className="btn" onClick={() => setShuffle(1-shuffle)}>Shuffle</div>
            <TechView setup_data={setup} />
            <RoundView round_vps={setup.round_vps} />
            <BoosterView boosters={setup.boosters} />
            <EndVpView end_vps={setup.end_vps} />
        </div>
    );
}
