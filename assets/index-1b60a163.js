(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();class le{constructor(t,n,i){this._gl=t,this._program=this._gl.createProgram(),this._program||console.error("failed to creat a program.");const r=this.compileShader(this._gl.VERTEX_SHADER,n),s=this.compileShader(this._gl.FRAGMENT_SHADER,i);this._gl.attachShader(this._program,r),this._gl.attachShader(this._program,s),this._gl.linkProgram(this._program),t.getProgramParameter(this._program,t.LINK_STATUS)||console.error(t.getProgramInfoLog(this._program))}use(){this._gl.useProgram(this._program)}get id(){return this._program}compileShader(t,n){const i=this._gl.createShader(t);if(!i)return console.error(`failed to creat a shader type ${t}.`);if(this._gl.shaderSource(i,n),this._gl.compileShader(i),this._gl.getShaderParameter(i,this._gl.COMPILE_STATUS))return i;console.log(this._gl.getShaderInfoLog(i))}}class pe{constructor(t,n){this._canvas=document.getElementById("canvas"),this._canvas.width=t,this._canvas.height=n,this._gl=this._canvas.getContext("webgl2"),this._gl&&(this._gl.viewport(0,0,t,n),this._gl.enable(this._gl.DEPTH_TEST),this._gl.cullFace(this._gl.BACK),this._gl.enable(this._gl.CULL_FACE))}clear(){this._gl&&(this._gl.clearColor(0,0,0,1),this._gl.clear(this._gl.DEPTH_BUFFER_BIT|this._gl.COLOR_BUFFER_BIT))}get gl(){return this._gl}}class oe{constructor(t){this._gl=t,this._VAO=null,this._IBO=null,this._VBO=null,this._indexCount=0,this._vertices=[],this._indices=[]}initialise(){this._indexCount=this._indices.length;const t=[];for(let n=0;n<this._vertices.length;n++){const{position:i,normal:r,texCoord:s}=this._vertices[n];t.push(...i,...r,...s)}this._VAO=this._gl.createVertexArray(),this._gl.bindVertexArray(this._VAO),this._IBO=this._gl.createBuffer(),this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER,this._IBO),this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(this._indices),this._gl.STATIC_DRAW),this._VBO=this._gl.createBuffer(),this._gl.bindBuffer(this._gl.ARRAY_BUFFER,this._VBO),this._gl.bufferData(this._gl.ARRAY_BUFFER,new Float32Array(t),this._gl.STATIC_DRAW),this._gl.vertexAttribPointer(0,3,this._gl.FLOAT,!1,4*8,0),this._gl.enableVertexAttribArray(0),this._gl.vertexAttribPointer(1,3,this._gl.FLOAT,!1,4*8,4*3),this._gl.enableVertexAttribArray(1),this._gl.vertexAttribPointer(2,2,this._gl.FLOAT,!1,4*8,4*6),this._gl.enableVertexAttribArray(2),this._gl.bindBuffer(this._gl.ARRAY_BUFFER,null),this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER,null),this._gl.bindVertexArray(null)}draw(){this._gl.bindVertexArray(this._VAO),this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER,this._IBO),this._gl.drawElements(this._gl.TRIANGLES,this._indexCount,this._gl.UNSIGNED_SHORT,0),this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER,null),this._gl.bindVertexArray(null)}}const z=1e-6;let T=typeof Float32Array<"u"?Float32Array:Array;const ve=Math.PI/180;function V(e){return e*ve}function Te(){let e=new T(9);return T!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function y(){let e=new T(16);return T!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function xe(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function ie(e,t,n,i){let r=i[0],s=i[1],l=i[2],o=Math.sqrt(r*r+s*s+l*l),a,h,c,d,_,g,p,u,E,R,b,M,P,w,U,L,S,B,C,D,F,O,X,N;return o<z?null:(o=1/o,r*=o,s*=o,l*=o,a=Math.sin(n),h=Math.cos(n),c=1-h,d=t[0],_=t[1],g=t[2],p=t[3],u=t[4],E=t[5],R=t[6],b=t[7],M=t[8],P=t[9],w=t[10],U=t[11],L=r*r*c+h,S=s*r*c+l*a,B=l*r*c-s*a,C=r*s*c-l*a,D=s*s*c+h,F=l*s*c+r*a,O=r*l*c+s*a,X=s*l*c-r*a,N=l*l*c+h,e[0]=d*L+u*S+M*B,e[1]=_*L+E*S+P*B,e[2]=g*L+R*S+w*B,e[3]=p*L+b*S+U*B,e[4]=d*C+u*D+M*F,e[5]=_*C+E*D+P*F,e[6]=g*C+R*D+w*F,e[7]=p*C+b*D+U*F,e[8]=d*O+u*X+M*N,e[9]=_*O+E*X+P*N,e[10]=g*O+R*X+w*N,e[11]=p*O+b*X+U*N,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function ye(e,t,n){let i=Math.sin(n),r=Math.cos(n),s=t[4],l=t[5],o=t[6],a=t[7],h=t[8],c=t[9],d=t[10],_=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=s*r+h*i,e[5]=l*r+c*i,e[6]=o*r+d*i,e[7]=a*r+_*i,e[8]=h*r-s*i,e[9]=c*r-l*i,e[10]=d*r-o*i,e[11]=_*r-a*i,e}function re(e,t,n){let i=Math.sin(n),r=Math.cos(n),s=t[0],l=t[1],o=t[2],a=t[3],h=t[8],c=t[9],d=t[10],_=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*r-h*i,e[1]=l*r-c*i,e[2]=o*r-d*i,e[3]=a*r-_*i,e[8]=s*i+h*r,e[9]=l*i+c*r,e[10]=o*i+d*r,e[11]=a*i+_*r,e}function Ae(e,t,n){let i=Math.sin(n),r=Math.cos(n),s=t[0],l=t[1],o=t[2],a=t[3],h=t[4],c=t[5],d=t[6],_=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*r+h*i,e[1]=l*r+c*i,e[2]=o*r+d*i,e[3]=a*r+_*i,e[4]=h*r-s*i,e[5]=c*r-l*i,e[6]=d*r-o*i,e[7]=_*r-a*i,e}function Re(e,t,n,i,r){const s=1/Math.tan(t/2);if(e[0]=s/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,r!=null&&r!==1/0){const l=1/(i-r);e[10]=(r+i)*l,e[14]=2*r*i*l}else e[10]=-1,e[14]=-2*i;return e}const be=Re;function Me(e,t,n,i){let r,s,l,o,a,h,c,d,_,g,p=t[0],u=t[1],E=t[2],R=i[0],b=i[1],M=i[2],P=n[0],w=n[1],U=n[2];return Math.abs(p-P)<z&&Math.abs(u-w)<z&&Math.abs(E-U)<z?xe(e):(c=p-P,d=u-w,_=E-U,g=1/Math.sqrt(c*c+d*d+_*_),c*=g,d*=g,_*=g,r=b*_-M*d,s=M*c-R*_,l=R*d-b*c,g=Math.sqrt(r*r+s*s+l*l),g?(g=1/g,r*=g,s*=g,l*=g):(r=0,s=0,l=0),o=d*l-_*s,a=_*r-c*l,h=c*s-d*r,g=Math.sqrt(o*o+a*a+h*h),g?(g=1/g,o*=g,a*=g,h*=g):(o=0,a=0,h=0),e[0]=r,e[1]=o,e[2]=c,e[3]=0,e[4]=s,e[5]=a,e[6]=d,e[7]=0,e[8]=l,e[9]=h,e[10]=_,e[11]=0,e[12]=-(r*p+s*u+l*E),e[13]=-(o*p+a*u+h*E),e[14]=-(c*p+d*u+_*E),e[15]=1,e)}function A(){let e=new T(3);return T!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function Pe(e){let t=e[0],n=e[1],i=e[2];return Math.sqrt(t*t+n*n+i*i)}function f(e,t,n){let i=new T(3);return i[0]=e,i[1]=t,i[2]=n,i}function ae(e,t){let n=t[0],i=t[1],r=t[2],s=n*n+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s,e}function we(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function k(e,t,n){let i=t[0],r=t[1],s=t[2],l=n[0],o=n[1],a=n[2];return e[0]=r*a-s*o,e[1]=s*l-i*a,e[2]=i*o-r*l,e}function Y(e,t,n){let i=t[0],r=t[1],s=t[2],l=n[3]*i+n[7]*r+n[11]*s+n[15];return l=l||1,e[0]=(n[0]*i+n[4]*r+n[8]*s+n[12])/l,e[1]=(n[1]*i+n[5]*r+n[9]*s+n[13])/l,e[2]=(n[2]*i+n[6]*r+n[10]*s+n[14])/l,e}const Ue=Pe;(function(){let e=A();return function(t,n,i,r,s,l){let o,a;for(n||(n=3),i||(i=0),r?a=Math.min(r*n+i,t.length):a=t.length,o=i;o<a;o+=n)e[0]=t[o],e[1]=t[o+1],e[2]=t[o+2],s(e,e,l),t[o]=e[0],t[o+1]=e[1],t[o+2]=e[2];return t}})();function Ie(){let e=new T(4);return T!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Le(e,t){let n=t[0],i=t[1],r=t[2],s=t[3],l=n*n+i*i+r*r+s*s;return l>0&&(l=1/Math.sqrt(l)),e[0]=n*l,e[1]=i*l,e[2]=r*l,e[3]=s*l,e}(function(){let e=Ie();return function(t,n,i,r,s,l){let o,a;for(n||(n=4),i||(i=0),r?a=Math.min(r*n+i,t.length):a=t.length,o=i;o<a;o+=n)e[0]=t[o],e[1]=t[o+1],e[2]=t[o+2],e[3]=t[o+3],s(e,e,l),t[o]=e[0],t[o+1]=e[1],t[o+2]=e[2],t[o+3]=e[3];return t}})();function ne(){let e=new T(4);return T!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function Se(e,t,n){n=n*.5;let i=Math.sin(n);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(n),e}function q(e,t,n,i){let r=t[0],s=t[1],l=t[2],o=t[3],a=n[0],h=n[1],c=n[2],d=n[3],_,g,p,u,E;return g=r*a+s*h+l*c+o*d,g<0&&(g=-g,a=-a,h=-h,c=-c,d=-d),1-g>z?(_=Math.acos(g),p=Math.sin(_),u=Math.sin((1-i)*_)/p,E=Math.sin(i*_)/p):(u=1-i,E=i),e[0]=u*r+E*a,e[1]=u*s+E*h,e[2]=u*l+E*c,e[3]=u*o+E*d,e}function Be(e,t){let n=t[0]+t[4]+t[8],i;if(n>0)i=Math.sqrt(n+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[r*3+r]&&(r=2);let s=(r+1)%3,l=(r+2)%3;i=Math.sqrt(t[r*3+r]-t[s*3+s]-t[l*3+l]+1),e[r]=.5*i,i=.5/i,e[3]=(t[s*3+l]-t[l*3+s])*i,e[s]=(t[s*3+r]+t[r*3+s])*i,e[l]=(t[l*3+r]+t[r*3+l])*i}return e}const ce=Le;(function(){let e=A(),t=f(1,0,0),n=f(0,1,0);return function(i,r,s){let l=we(r,s);return l<-.999999?(k(e,t,r),Ue(e)<1e-6&&k(e,n,r),ae(e,e),Se(i,e,Math.PI),i):l>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(k(e,r,s),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=1+l,ce(i,i))}})();(function(){let e=ne(),t=ne();return function(n,i,r,s,l,o){return q(e,i,l,o),q(t,r,s,o),q(n,e,t,2*o*(1-o)),n}})();(function(){let e=Te();return function(t,n,i,r){return e[0]=i[0],e[3]=i[1],e[6]=i[2],e[1]=r[0],e[4]=r[1],e[7]=r[2],e[2]=-n[0],e[5]=-n[1],e[8]=-n[2],ce(t,Be(t,e))}})();function Ce(){let e=new T(2);return T!=Float32Array&&(e[0]=0,e[1]=0),e}function x(e,t){let n=new T(2);return n[0]=e,n[1]=t,n}(function(){let e=Ce();return function(t,n,i,r,s,l){let o,a;for(n||(n=2),i||(i=0),r?a=Math.min(r*n+i,t.length):a=t.length,o=i;o<a;o+=n)e[0]=t[o],e[1]=t[o+1],s(e,e,l),t[o]=e[0],t[o+1]=e[1];return t}})();class De extends oe{constructor(t,n){super(t);const i=20,r=20,s=-2*Math.PI/i,l=-1*Math.PI/r;for(let o=0;o<=r;o++){const a=y();ie(a,y(),l*o,f(0,0,1));const h=A();Y(h,f(0,-n,0),a);for(let c=0;c<=i;c++){const d=y();ie(d,y(),s*c,f(0,1,0));const _=A();Y(_,h,d);const g=A();ae(g,_);const p=x(1-c/i,1-o/r);this._vertices.push({position:_,normal:g,texCoord:p})}}for(let o=0;o<r;o++){const a=(i+1)*o;for(let h=0;h<i;h++)this._indices.push(a+h),this._indices.push(a+h+i+1),this._indices.push(a+h+1+i+1),this._indices.push(a+h),this._indices.push(a+h+1+i+1),this._indices.push(a+h+1)}}}class Fe{constructor(t){this._gl=t,this._textureID=t.createTexture()}initialise(t){this._gl.bindTexture(this._gl.TEXTURE_2D,this._textureID),this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_WRAP_S,this._gl.CLAMP_TO_EDGE),this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_WRAP_T,this._gl.CLAMP_TO_EDGE),this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_MIN_FILTER,this._gl.LINEAR),this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_MAG_FILTER,this._gl.LINEAR),this._gl.texImage2D(this._gl.TEXTURE_2D,0,this._gl.RGB,this._gl.RGB,this._gl.UNSIGNED_BYTE,t),this._gl.bindTexture(this._gl.TEXTURE_2D,null)}use(){this._gl.activeTexture(this._gl.TEXTURE0),this._gl.bindTexture(this._gl.TEXTURE_2D,this._textureID)}update(t){this.use(),this._gl.texImage2D(this._gl.TEXTURE_2D,0,this._gl.RGB,this._gl.RGB,this._gl.UNSIGNED_BYTE,t)}}const Oe=`#version 300 es
precision mediump float;

in vec2 texCoord;
in vec3 posWorld;
in vec3 normalWorld;

uniform sampler2D uImage;
uniform vec3 viewPosition;

out vec4 color;

struct Light {
    vec3 direction;
    vec3 strength;
};

struct Material {
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
    float shininess;
};

float calcAttenuation(float d, float falloffStart, float falloffEnd)
{
    // Linear falloff
    return clamp((falloffEnd - d) / (falloffEnd - falloffStart), 0.0, 1.0);
}

vec3 blinnPhong(vec3 lightStrength, vec3 lightVec, vec3 normal, vec3 toEye, Material material)
{
    vec3 halfway = normalize(toEye + lightVec);
    float hdotn = dot(halfway, normal);
    vec3 specular = vec3(material.specular) * pow(max(hdotn, 0.0f), material.shininess);
    return material.ambient + (vec3(material.diffuse) + specular) * lightStrength;
}

vec3 computeDirectionalLight(vec3 normal, vec3 toEye, Light light, Material material)
{
    vec3 lightVec = -light.direction;
    
    float ndotl = max(dot(lightVec, normal), 0.0f);
    vec3 lightStrength = vec3(light.strength) * ndotl;
    
    return blinnPhong(lightStrength, lightVec, normal, toEye, material);
}

void main() {
    Light light;
    light.direction = vec3(-1.0, 0.0, -1.0);
    light.strength = vec3(0.6);

    Material material;
    material.ambient = vec3(0.1);
    material.diffuse = vec3(1.0);
    material.specular = vec3(1.0);
    material.shininess = 1.0;

	vec3 toEye = normalize(viewPosition - posWorld);

	vec3 res = vec3(0.0);

    res += computeDirectionalLight(normalWorld, toEye, light, material);
    
    color = vec4(res, 1.0) * texture(uImage, texCoord);
}
`,Xe=`#version 300 es
precision mediump float;

layout (location = 0) in vec3 pos;
layout (location = 1) in vec3 norm;
layout (location = 2) in vec2 tex;

uniform mat4 model;
uniform mat4 projection;
uniform mat4 view;

out vec2 texCoord;
out vec3 posWorld;
out vec3 normalWorld;

void main () {
    gl_Position = projection * view * model * vec4(pos, 1.0);
    texCoord = tex;
    posWorld = (model * vec4(pos, 1.0)).xyz;
    normalWorld = normalize(mat3(transpose(inverse(model))) * norm);
}
`;class Ne{constructor(t){this._images=[],this._gl=t,this._textureID=t.createTexture()}async initialise(t){this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP,this._textureID);for(let n=0;n<6;n++)this._gl.texImage2D(this._gl.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,this._gl.RGB,this._gl.RGB,this._gl.UNSIGNED_BYTE,t[n]);this._gl.texParameteri(this._gl.TEXTURE_CUBE_MAP,this._gl.TEXTURE_WRAP_S,this._gl.CLAMP_TO_EDGE),this._gl.texParameteri(this._gl.TEXTURE_CUBE_MAP,this._gl.TEXTURE_WRAP_T,this._gl.CLAMP_TO_EDGE),this._gl.texParameteri(this._gl.TEXTURE_CUBE_MAP,this._gl.TEXTURE_MIN_FILTER,this._gl.LINEAR),this._gl.texParameteri(this._gl.TEXTURE_CUBE_MAP,this._gl.TEXTURE_MAG_FILTER,this._gl.LINEAR),this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP,null)}use(){this._gl.activeTexture(this._gl.TEXTURE0),this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP,this._textureID)}}class Ve extends oe{constructor(t,n){super(t),this._vertices.push({position:f(-1*n,1*n,-1*n),normal:f(0,0,0),texCoord:x(0,0)}),this._vertices.push({position:f(-1*n,-1*n,-1*n),normal:f(0,0,0),texCoord:x(0,0)}),this._vertices.push({position:f(1*n,1*n,-1*n),normal:f(0,0,0),texCoord:x(0,0)}),this._vertices.push({position:f(1*n,-1*n,-1*n),normal:f(0,0,0),texCoord:x(0,0)}),this._vertices.push({position:f(-1*n,1*n,1*n),normal:f(0,0,0),texCoord:x(0,0)}),this._vertices.push({position:f(1*n,1*n,1*n),normal:f(0,0,0),texCoord:x(0,0)}),this._vertices.push({position:f(-1*n,-1*n,1*n),normal:f(0,0,0),texCoord:x(0,0)}),this._vertices.push({position:f(1*n,-1*n,1*n),normal:f(0,0,0),texCoord:x(0,0)}),this._indices.push(0,1,2,2,1,3,2,3,5,5,3,7,5,7,4,4,7,6,4,6,0,0,6,1,4,0,5,5,0,2,1,6,3,3,6,7)}}const ze=`#version 300 es
precision mediump float;

layout (location = 0) in vec3 pos;
layout (location = 1) in vec3 norm;
layout (location = 2) in vec2 tex;

uniform mat4 projection;
uniform mat4 view;

out vec3 texCoord;

void main () {
    gl_Position = projection * view * vec4(pos, 1.0);
    texCoord = pos;
}
`,Ye=`#version 300 es
precision mediump float;

in vec3 texCoord;
uniform samplerCube skybox;
out vec4 color;

void main() {
    color = texture(skybox, texCoord);
}
`,Q=document.documentElement.clientWidth*.9,he=document.documentElement.clientHeight*.9;let H=0,se=0,j=130;const Ge=-23.5,je=10;let _e=0,ge=0;const We=f(0,0,2.5),ke=f(0,0,1.5),qe=f(0,1,0),m=new pe(Q,he),G=new le(m.gl,Xe,Oe),He=m.gl.getUniformLocation(G.id,"model"),$e=m.gl.getUniformLocation(G.id,"projection"),Ke=m.gl.getUniformLocation(G.id,"view"),Ze=m.gl.getUniformLocation(G.id,"viewPosition"),ee=new le(m.gl,ze,Ye),Je=m.gl.getUniformLocation(ee.id,"projection"),Qe=m.gl.getUniformLocation(ee.id,"view"),W={cubemapImages:!1,videoLoaded:!1};function $(){W.cubemapImages&&W.videoLoaded&&(document.getElementById("loader").style.display="none")}let te=!1,K,Z;const I=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),et=I?"touchstart":"mousedown",tt=I?"touchmove":"mousemove",it=I?"touchend":"mouseup";document.addEventListener(et,e=>{te=!0,K=I?e.touches[0].clientX:e.clientX,Z=I?e.touches[0].clientY:e.clientY});document.addEventListener(tt,e=>{if(te){const t=I?e.touches[0].clientX:e.clientX,n=I?e.touches[0].clientY:e.clientY,i=t-K,r=n-Z;_e+=r/10,ge+=i/10,K=t,Z=n,e.preventDefault()}});document.addEventListener(it,()=>{te=!1});const de=new Fe(m.gl),v=document.createElement("video");v.muted=!0;v.src="https://waynechoidev.github.io/earth-animation/sphere.mp4";v.crossOrigin="anonymous";v.addEventListener("ended",()=>{v.currentTime=.1,v.play()});v.load();v.addEventListener("loadedmetadata",()=>{v.currentTime=.1,W.videoLoaded=!0,$(),v.play(),de.initialise(v)});const fe=new Ve(m.gl,20);fe.initialise();const me=new Ne(m.gl),rt=["https://waynechoidev.github.io/earth-animation/cubemap/px.jpg","https://waynechoidev.github.io/earth-animation/cubemap/nx.jpg","https://waynechoidev.github.io/earth-animation/cubemap/py.jpg","https://waynechoidev.github.io/earth-animation/cubemap/ny.jpg","https://waynechoidev.github.io/earth-animation/cubemap/pz.jpg","https://waynechoidev.github.io/earth-animation/cubemap/nz.jpg"],nt=async()=>{const e=rt.map(t=>new Promise((n,i)=>{const r=new Image;r.src=t,r.crossOrigin="anonymous",r.onload=()=>{n(r),W.cubemapImages=!0,$()},r.onerror=()=>{i(new Error("Image loading failed")),$()}}));try{const t=await Promise.all(e);me.initialise(t)}catch(t){console.error("Error loading cubemap images:",t)}},ue=new De(m.gl,Q>=500?.6:.4);ue.initialise();const J=y();be(J,V(45),Q/he,.1,100);function Ee(e){m.clear(),H=(e-se)*.002,se=e,v.paused||(j>=360?j=0:j+=H*je),G.use();const t=y();Ae(t,t,V(Ge)),re(t,t,V(j));const n=y(),i=y();re(i,i,V(ge)),ye(i,i,V(_e));const r=A(),s=A(),l=A();Y(r,We,i),Y(s,ke,i),Y(l,qe,i),Me(n,r,s,l),m.gl.uniformMatrix4fv(He,!1,t),m.gl.uniformMatrix4fv(Ke,!1,n),m.gl.uniformMatrix4fv($e,!1,J),m.gl.uniform3f(Ze,r[0],r[1],r[2]),v.readyState===v.HAVE_ENOUGH_DATA&&(de.update(v),ue.draw()),ee.use(),m.gl.uniformMatrix4fv(Qe,!1,n),m.gl.uniformMatrix4fv(Je,!1,J),me.use(),fe.draw(),m.gl.useProgram(null),m.gl.bindTexture(m.gl.TEXTURE_2D,null),window.requestAnimationFrame(Ee)}const st=async()=>{await nt(),Ee(H)};st();