import image from "./speccheck.png";
import image2 from "./GPTloop.png";
import Summary from "./Summary";
import SummaryTwo from "./SummaryTwo";

function MyApps() {
    return (

        <div className="tile is-ancestor" style={{ marginTop: "50px", marginBottom: "100px" }}>
            <div className="tile is-6 is-vertical is-parent">
                <div class="tile is-child box">
                    <h1 ><a href="https://gpt-loop.herokuapp.com/" target="_blank" rel="noreferrer" className="apps">GPT Loop</a></h1>
                    <div className="summary"><Summary /></div>
                    <a href="https://gpt-loop.herokuapp.com/" target="_blank" rel="noreferrer"><img src={image2} alt="gptloop" /></a>
                </div>
                {/* <div class="tile is-child box">
                    <a href="/apps/spectralcentroid">Spectral Centroid</a>
                </div> */}
            </div>

            <div className="tile is-6 is-vertical is-parent">
                <div class="tile is-child box" >
                    <h1 >
                        <a href="https://spec-check.herokuapp.com/" target="_blank" rel="noreferrer" className="apps">Spec Check</a></h1>
                    <div className="summary2"><SummaryTwo /></div>
                    <a href="https://spec-check.herokuapp.com/" target="_blank" rel="noreferrer"><img src={image} alt="speccheck" /></a>
                </div>
            </div>
        </div>
    )

}

export default MyApps;
