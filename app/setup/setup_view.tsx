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

// class RoundView extends React.Component {
//     render() {
//         var rounds = [];
//         for (const [i, imgRef] of this.props.images.entries()) {
//             rounds.push(
//                 <div key={i} className={"rnd"+i}>
//                     <img
//                         className="rnd-img"
//                         src={images[imgRef]}
//                         alt={imgRef}
//                     />
//                 </div>
//             );
//         }
//         return (
//             <div className="rnd-box">
//                 {rounds}
//             </div>
//         );
//     }
// }

// class BoosterView extends React.Component {
//     render() {
//         var boosts = [];
//         for (const [i, imgRef] of this.props.images.entries()) {
//             boosts.push(
//                 <div className="booster" key={i}>
//                     <img
//                         className="booster-img"
//                         src={images[imgRef]}
//                         alt={imgRef}

//                     />
//                 </div>
//             );
//         }
//         return (
//             <div className="booster-box">
//                 {boosts}
//             </div>
//         );
//     }
// }

// class EndVpView extends React.Component {
//     render() {
//         var endVps = [];
//         for (const [i, imgRef] of this.props.images.entries()) {
//             endVps.push(
//                 <div className="end" key={i}>
//                     <img
//                         className="end-img"
//                         src={images[imgRef]}
//                         alt={imgRef}

//                     />
//                 </div>
//             );
//         }
//         return (
//             <div className="end-box">
//                 {endVps}
//             </div>
//         );
//     }
// }

// export class SetupString extends React.Component {
//     render() {
//         return (
//             <div className="map-string-box">
//                 <text className="map-string-txt">
//                     {this.props.setupString}
//                 </text>
//            </div>
//         );
//     }
// }

// class Setup extends React.Component {
//     render() {
//         return (
//             <div className="setup-box">
//                 <StringInput
//                     onStringSubmit={(event) => this.props.onMapStringSubmit(event)}
//                     onStringChange={(value) => this.props.onMapStringChange(value)}
//                     textString={this.props.mapString}
//                     errorMsg={this.props.errorMsgMap}
//                     description="Import map from string:"
//                 />
//                 <TechView setup={this.props.setup} />
//                 <RoundView images={this.props.setup.rounds} />
//                 <BoosterView images={this.props.setup.boosts} />
//                 <EndVpView images={this.props.setup.endVps} />
//                 <SetupString setupString={"Setup: " + this.props.setupString} />
//                 <StringInput
//                     onStringSubmit={(event) => this.props.onSetupStringSubmit(event)}
//                     onStringChange={(value) => this.props.onSetupStringChange(value)}
//                     textString={this.props.editSetupString}
//                     errorMsg={this.props.errorMsgSetup}
//                     description="Import setup from string:"
//                 />
//                 <button className="setup-rng-btn" onClick={() => this.props.onClickRandomSetup()}>
//                     Randomize Setup
//                 </button>
//             </div>
//         );
//     }
// }

// export default Setup;
