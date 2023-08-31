import "../App.css";
import greencard from "../Assets/greencard.png"
import blackcat from "../Assets/blackcat.png"
import thetafuel from "../Assets/thetafuel.png"
function MiddleInfo() {
  return (
    <div class="secondSection">
      <div class="top-menu">
        <p>Top coins</p>
        <select>
          <option value="#">all time</option>
          <option value="#">last 7 days</option>
          <option value="#">last 14 days</option>
          <option value="#">a month ago</option>
          <option value="#">customize</option>
        </select>
      </div>
      <div className="topWrapperContainer">
        <div className="top-coins">
          <div class="top-coins-header coinWrapperOne">
            <div style={{ display: "flex", gap: " 10px", flexDirection: "column" }}>
              <div className="coinIconsHeader">
                <img src={greencard} alt="" style={{width: "90%"}}/>
              </div>
            </div>
          </div>
          <div class="top-coins-header colorWhite coinWrapperTwo">
            <div style={{ display: "flex", gap: " 10px", flexDirection: "column" }}>
              <div className="coinIconsHeader">
                <img src={blackcat} alt="" style={{width: "90%"}}/>
              </div>
            </div>
          </div>
          <div class="top-coins-header colorWhite coinWrapperTwo">
            <div style={{ display: "flex", gap: " 10px", flexDirection: "column" }}>
              <div className="coinIconsHeader">
                <img src={thetafuel} alt="" style={{width: "90%"}}/>
              </div>
            </div>
          </div>
          <div class="top-coins-header colorWhite coinWrapperTwo">
            <div style={{ display: "flex", gap: " 10px", flexDirection: "column" }}>
              <div className="coinIconsHeader">
                <img src={thetafuel} alt="" style={{width: "90%"}}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default MiddleInfo;
