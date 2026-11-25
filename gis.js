import {validGeo,recenter} from "./geo-math.js";
import {providers,aerialURL,fetchImage} from "./geo-imagery.js";
import {census} from "./geo-address.js";
export function installGIS({button,getProject,onImport}){
const dlg=document.createElement("dialog");dlg.style.cssText="width:min(700px,95vw);max-height:90vh;overflow:auto;background:#202d28;color:#e7eee9;border:1px solid #607968;border-radius:12px;padding:18px";
dlg.innerHTML='<h2>Find / import property</h2><p>Address goes to US Census; coordinates and extent to the chosen imagery provider. Do not submit confidential locations. Verify match visually.</p><label>Complete US street address<input id="address" type="text" maxlength="240"></label><button id="search">Find address</button><select id="matches" hidden></select><div class="pair"><label>Latitude<input id="lat" type="number" step="any"></label><label>Longitude<input id="lon" type="number" step="any"></label><label>Width (ft)<input id="w" type="number" value="600"></label><label>Depth (ft)<input id="d" type="number" value="600"></label></div><div class="pair"><button id="wide">600-ft overview</button><button id="near">250-ft lot</button></div><label>Imagery source<select id="source"></select></label><button id="preview">Load aerial preview</button> <a id="raw" hidden target="_blank" rel="noopener noreferrer" style="color:#a2d2a0">Open raw imagery</a><p id="msg" role="status"></p><div id="photo"></div><p>Click preview to recenter and reload. Scale is approximate, not survey grade.</p><div class="stack"><button id="import" disabled>Import preview as new property</button><button id="blank">Create scaled site without image</button><button id="close">Close</button></div>';
document.body.append(dlg);const $=id=>dlg.querySelector("#"+id);let preview=null,busy=false,matches=[];
for(const [key,p] of Object.entries(providers)){const o=document.createElement("option");o.value=key;o.textContent=p.name+" ("+(p.year||"vintage unknown")+")";$("source").append(o)}
const msg=m=>$("msg").textContent=m;
function clear(){preview=null;$("photo").replaceChildren();$("raw").hidden=true;$("import").disabled=true}
function lock(on){busy=on;for(const el of dlg.querySelectorAll("button,input,select"))el.disabled=on;$("import").disabled=on||!preview}
function set(lat,lon){$("lat").value=lat.toFixed(8);$("lon").value=lon.toFixed(8);clear()}
function read(){const g={lat:$("lat").valueAsNumber,lon:$("lon").valueAsNumber,width:$("w").valueAsNumber,depth:$("d").valueAsNumber,projection:"local-mercator"};if(!validGeo(g))throw Error("Enter valid coordinates and 10–2,000 ft site dimensions.");return g}
button.onclick=()=>{clear();$("matches").hidden=true;const g=getProject().geo;if(validGeo(g)){set(g.lat,g.lon);$("w").value=g.width;$("d").value=g.depth}else{$("w").value=600;$("d").value=600}msg("Enter an address or coordinates.");dlg.showModal()};
$("close").onclick=()=>dlg.close();dlg.addEventListener("cancel",e=>{if(busy)e.preventDefault()});
for(const k of ["lat","lon","w","d","source"])$(k).oninput=()=>{clear();msg("Location or source changed. Load a new preview.")};
$("wide").onclick=()=>{$("w").value=$("d").value=600;clear()};$("near").onclick=()=>{$("w").value=$("d").value=250;clear()};
