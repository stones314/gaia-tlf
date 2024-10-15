'use client'

import React from "react";
import { TechView } from "./setup_view";
import { getRandomSetup } from "./randomize";

export default function Page() {

    return(
    <div>
        <TechView
            setup_data={getRandomSetup(4)}
        />
    </div>
    );
}
