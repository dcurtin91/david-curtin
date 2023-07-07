import image from "./speccheck.png";
import image2 from "./GPTloop.png";
import Summary from "./Summary";
import SummaryTwo from "./SummaryTwo";
import "./App.css"

function MyApps() {
    return (
<div className="container">
    <h1 style={{ alignItems: "center", marginBottom: "500px"}}>David Curtin</h1>
        <div className="tile is-ancestor" style={{ marginTop: "50px", marginBottom: "25px"}}>
            <div className="tile is-6 is-vertical is-parent">
                <div class="tile is-child box">
                    <h1 ><a href="https://dcurtin91.github.io/gpt-loop/" target="_blank" rel="noreferrer" className="apps">GPT Loop</a></h1>
                    <div className="summary"><Summary /></div>
                    <a href="https://dcurtin91.github.io/gpt-loop/" target="_blank" rel="noreferrer"><img src={image2} alt="gptloop" /></a>
                </div>
                {/* <div class="tile is-child box">
                    <a href="/apps/spectralcentroid">Spectral Centroid</a>
                </div> */}
            </div>

            <div className="tile is-6 is-vertical is-parent">
                <div class="tile is-child box" >
                    <h1 >
                        <a href="https://dcurtin91.github.io/spec-check/" target="_blank" rel="noreferrer" className="apps">Spec Check</a></h1>
                    <div className="summary2"><SummaryTwo /></div>
                    <a href="https://dcurtin91.github.io/spec-check/" target="_blank" rel="noreferrer"><img src={image} alt="speccheck" /></a>
                </div>
            </div>
        </div>
        <div className="tile is-ancestor" style={{ marginTop: "25px", marginBottom: "10px" }}>
            <div className="tile is-6 is-vertical is-parent">
                <div class="tile is-child box">
                    <h1 ><a href="https://dcurtin91.github.io/gpt-loop/" target="_blank" rel="noreferrer" className="apps">GPT Loop</a></h1>
                    <div className="summary"><Summary /></div>
                    <a href="https://dcurtin91.github.io/gpt-loop/" target="_blank" rel="noreferrer"><img src={image2} alt="gptloop" /></a>
                </div>
                {/* <div class="tile is-child box">
                    <a href="/apps/spectralcentroid">Spectral Centroid</a>
                </div> */}
            </div>

            <div className="tile is-6 is-vertical is-parent">
                <div class="tile is-child box" >
                    <h1 >
                        <a href="https://dcurtin91.github.io/spec-check/" target="_blank" rel="noreferrer" className="apps">Spec Check</a></h1>
                    <div className="summary2"><SummaryTwo /></div>
                    <a href="https://dcurtin91.github.io/spec-check/" target="_blank" rel="noreferrer"><img src={image} alt="speccheck" /></a>
                </div>
            </div>
        </div>
        </div>
    )

}

export default MyApps;
