// Geographic helpers; local Mercator scale, feet.
const R=6378137,F=.3048;
export function validGeo(g,max=2000){return !!g&&[g.lat,g.lon,g.width,g.depth].every(Number.isFinite)&&Math.abs(g.lat)<=80&&Math.abs(g.lon)<=180&&g.width>=10&&g.width<=max&&g.depth>=10&&g.depth<=max&&g.projection==="local-mercator"}
export function bounds(g){const x=R*g.lon*Math.PI/180,y=R*Math.log(Math.tan(Math.PI/4+g.lat*Math.PI/360)),m=F/Math.cos(g.lat*Math.PI/180);return [x-g.width*m/2,y-g.depth*m/2,x+g.width*m/2,y+g.depth*m/2]}
export function recenter(g,u,v){const [a,b,c,d]=bounds(g),x=a+u*(c-a),y=d-v*(d-b);return {lon:x/R*180/Math.PI,lat:(2*Math.atan(Math.exp(y/R))-Math.PI/2)*180/Math.PI}}
