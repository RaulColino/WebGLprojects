var vec3 = glMatrix.vec3;
var height = 50.0;
var width = 50.0;
var heightSegments = 50.0;
var radius = 1.0;
var ix, iy; 
var idx = 0.0; 
var grid = []; 
var vertex = vec3.create(); 
var normal = vec3.create(); 
// Buffers 
var indices = []; 
var vertices = []; 
var normals = []; 
var texCoords = []; 

// Generate vertices, normals and texCoords 
for ( iy = 0.0; iy <= height; ++iy ) { 
	var verticesRow = []; 
	var v = iy / heightSegments; 
	for ( ix = 0.0; ix <= width; ++ix ) { 
		var u = ix / width; 
		// Vertex 
		vertex[0] = -radius * Math.cos( u * Math.PI * 2.0 ) * Math.sin( v * Math.PI ); 
		vertex[1] = radius * Math.cos( v * Math.PI ); 
		vertex[2] = radius * Math.sin( u * Math.PI * 2.0 ) * Math.sin( v * Math.PI ); 
		vertices.push( vertex[0] ); 
		vertices.push( vertex[1] ); 
		vertices.push( vertex[2] ); 
		
		// Normal 
		normal = vec3.clone(vertex);
		vec3.normalize(normal, normal); 
		normals.push(normal[0]); 
		normals.push(normal[1]); 
		normals.push(normal[2]); 
		// TexCoord 
		texCoords.push( u ); 
		texCoords.push(1.0 - v ); 
		verticesRow.push( idx++ ); 
	} 
	grid.push( verticesRow ); 
} 
// Generate índices 
//Sorting of indices...(for triangles-strip) 
for ( iy = 0.0; iy < height; ++iy ) { 
	for ( ix = 0.0; ix < width; ++ix ) { 
		var a = grid[ iy ][ ix + 1.0 ]; 
		var b = grid[ iy ][ ix ]; 
		var c = grid[ iy + 1.0 ][ ix ]; 
		var d = grid[ iy + 1.0 ][ ix + 1.0 ]; 
		indices.push(a); 
		indices.push(b);
		indices.push(d);
		indices.push(b); 
		indices.push(c);
		indices.push(d);
	} 
}
