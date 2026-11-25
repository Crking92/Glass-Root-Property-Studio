import {validGeo,bounds} from "./geo-math.js";
export const providers={
regional:{base:"https://imagery.geographic.texas.gov/server/rest/services/StratMap/StratMap20_NCCIR_CapArea_McLennan/ImageServer",name:"TxGIO / CAPCOG regional",year:"2020",extra:{bandIds:"0,1,2"}},
texas:{base:"https://imagery.geographic.texas.gov/server/rest/services/NAIP/NAIP22_NCCIR_60cm/ImageServer",name:"TxGIO / USDA NAIP",year:"2022",extra:{bandIds:"0,1,2"}},
naip:{base:"https://imagery.nationalmap.gov/arcgis/rest/services/USGSNAIPImagery/ImageServer",name:"USGS / USDA NAIP",year:null,extra:{}}
};
export function aerialURL(g,key){if(!validGeo(g)||!providers[key])throw Error("Invalid extent or source.");const b=bounds(g),edge=6378137*Math.PI;if(b[0]<-edge||b[2]>edge)throw Error("Antimeridian crossing unsupported.");const p=providers[key],r=g.width/g.depth;return p.base+"/exportImage?"+new URLSearchParams({bbox:b.join(","),bboxSR:3857,imageSR:3857,size:Math.max(1,Math.round(1024*Math.min(1,r)))+","+Math.max(1,Math.round(1024*Math.min(1,1/r))),format:"jpg",returnSquarePixels:"false",...p.extra,f:"image"})}
