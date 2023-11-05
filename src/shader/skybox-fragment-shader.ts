export const skyboxFragmentShader = `#version 300 es
precision mediump float;

in vec3 texCoord;
uniform samplerCube skybox;
out vec4 color;

void main() {
    color = texture(skybox, texCoord);
}
`;
