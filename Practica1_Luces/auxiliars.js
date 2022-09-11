//Request CORS permission if image is not in the same origin
function requestCORSIfNotSameOrigin(img, url) {
    if ((new URL(url, window.location.href)).origin !== window.location.origin) {
        img.crossOrigin = "";
    }
}

//Creates a texture info { width: w, height: h, texture: tex }
//The texture will start with 1x1 pixels and be updated when the image has loaded
function loadImageAndCreateTextureInformation(url, textureID) {
    var tex = textureID;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    
    // Fill the texture with a 1x1 blue pixel.
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
                    new Uint8Array([0, 0, 255, 255]));

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    var textureInfo = {
        width: 1,   // we don't know the size until it loads
        height: 1,
        texture: tex,
    };

    var img = new Image();
    img.addEventListener('load', function() {
        textureInfo.width = img.width;
        textureInfo.height = img.height;

        gl.bindTexture(gl.TEXTURE_2D, textureInfo.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        gl.generateMipmap(gl.TEXTURE_2D);
    });
    requestCORSIfNotSameOrigin(img, url);
    img.src = url;

    return textureInfo;
}