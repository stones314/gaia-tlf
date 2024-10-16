import { SetupData } from "../lib/type_def";

function TechElement({tech, color} : {tech: string, color: string}) {

    const renderImg = (imgRef : string) => {
        if (imgRef.length > 2) {
            let imgClass = "tech-img";
            if (imgRef.slice(0, 3) === "FED")
                imgClass += "-fed";
            return (
                <img
                    className={imgClass}
                    src={'/setup/'+tech+'.png'}
                    alt={'/setup/'+tech+'.png'}
                />
            );
        }
        return null;
    }

    return (
        <div className={"tech-element" + color}>
            {renderImg(tech)}
        </div>
    )
}


function TechRow({techs} : {techs: string[]}) {
    const elements = [];
    const colors = [" tech-ter", " tech-nav", " tech-qic", " tech-gai", " tech-eco", " tech-sci"];
    for (const [i, tech] of techs.entries()) {
        const color = techs.length != 3 ? colors[i] : " tech-low";
        elements.push(<TechElement tech={tech} color={color} key={i}/>);
    }
    return (
        <div className="tech-row">
            {elements}
        </div>
    )
}

export function TechView({setup_data} : {setup_data: SetupData}) {
    const row1 = [setup_data.terra_fed];
    for (let i = 0; i < 5; i++)
        row1.push("");
    return (
        <div className="tech-box">
            <TechRow techs={row1} />
            <TechRow techs={setup_data.adv_tech} />
            <TechRow techs={setup_data.base_tech} />
            <TechRow techs={setup_data.rest_tech} />
        </div>
    )
}

export function RoundView({round_vps} : {round_vps: string[]}) {
    const rounds = [];
    for (const [i, end_vp] of round_vps.entries()) {
        rounds.push(
            <div key={i} className={"rnd"+i}>
                <img
                    className="rnd-img"
                    src={'/setup/'+end_vp+'.png'}
                    alt={'/setup/'+end_vp+'.png'}
                />
            </div>
        );
    }
    return (
        <div className="rnd-box">
            {rounds}
        </div>
    );
}

export function BoosterView({boosters} : {boosters: string[]}) {
    const boosts = [];
    for (const [i, boost] of boosters.entries()) {
        boosts.push(
            <div className="booster" key={i}>
                <img
                    className="booster-img"
                    src={'/setup/'+boost+'.png'}
                    alt={'/setup/'+boost+'.png'}
                />
            </div>
        );
    }
    return (
        <div className="booster-box">
            {boosts}
        </div>
    );
}

export function EndVpView({end_vps} : {end_vps: string[]}) {
    const endVps = [];
    for (const [i, end_vp] of end_vps.entries()) {
        endVps.push(
            <div className="end" key={i}>
                <img
                    className="end-img"
                    src={'/setup/'+end_vp+'.png'}
                    alt={'/setup/'+end_vp+'.png'}
                />
            </div>
        );
    }
    return (
        <div className="end-box">
            {endVps}
        </div>
    );
}

