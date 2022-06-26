var cubeNVertex = 24;
var cubeNTriangleIndex = 12;

var cubeTriangleIndex = [
	//Cara z = 1
	0,1,2,			1,3,2,
	//Cara z = -1
	4,6,5,			5,6,7,
	//Cara x = 1
	8,10,9,			9,10,11,
	//Cara x = -1
	12,13,14,		13,15,14,
	//Cara y = 1
	16,17,18,		17,19,18,
	//Cara y = -1
	20,22,21,		21,22,23,
];

var cubeVertexPos = [
	//Cara z = 1
	-1.0,	-1.0,	 1.0, //0
	 1.0,	-1.0,	 1.0, //1
	-1.0,	 1.0,	 1.0, //2
	 1.0,	 1.0,	 1.0, //3

	//Cara z = -1		   
	-1.0,	-1.0,	-1.0, //4
	 1.0,	-1.0,	-1.0, //5
	-1.0,	 1.0,	-1.0, //6
	 1.0,	 1.0,	-1.0, //7

	//Cara x = 1		   
	1.0,	-1.0,	-1.0, //8
	1.0,	-1.0,	 1.0, //9
	1.0,	 1.0,	-1.0, //10
	1.0,	 1.0,	 1.0, //11

	//Cara x = -1		   
	-1.0,	-1.0,	-1.0, //12
	-1.0,	-1.0,	 1.0, //13
	-1.0,	 1.0,	-1.0, //14
	-1.0,	 1.0,	 1.0, //15

	//Cara y = 1		   
	-1.0,	 1.0,	-1.0, //16
	-1.0,	 1.0,	 1.0, //17
	 1.0,	 1.0,	-1.0, //18
	 1.0,	 1.0,	 1.0, //19

	//Cara y = -1		   
	-1.0,	-1.0,	-1.0, //20
	-1.0,	-1.0,	 1.0, //21
	 1.0,	-1.0,	-1.0, //22
	 1.0,	-1.0,	 1.0  //23
];

var cubeVertexNormal = [ 
	//Cara z = 1
	0.0,	0.0,	 1.0, 
	0.0,	0.0,	 1.0, 
	0.0,	0.0,	 1.0, 
	0.0,	0.0,	 1.0, 

	//Cara z = -1		   
	0.0,	0.0,	-1.0, 
	0.0,	0.0,	-1.0, 
	0.0,	0.0,	-1.0, 
	0.0,	0.0,	-1.0, 

	//Cara x = 1		   
	1.0,	0.0,	 0.0, 
	1.0,	0.0,	 0.0, 
	1.0,	0.0,	 0.0, 
	1.0,	0.0,	 0.0, 

	//Cara x = -1		   
	-1.0,	0.0,	 0.0, 
	-1.0,	0.0,	 0.0, 
	-1.0,	0.0,	 0.0, 
	-1.0,	0.0,	 0.0, 

	//Cara y = 1		   
	0.0,	1.0,	0.0, 
	0.0,	1.0,	0.0, 
	0.0,	1.0,	0.0, 
	0.0,	1.0,	0.0, 

	//Cara y = -1		   
	0.0,	-1.0,	0.0, 
	0.0,	-1.0,	0.0, 
	0.0,	-1.0,	0.0, 
	0.0,	-1.0,	0.0  
];

var cubeVertexColor = [ 
	//Cara z = 1
	0.0,	0.0,	 1.0, 
	0.0,	0.0,	 1.0, 
	0.0,	0.0,	 1.0, 
	0.0,	0.0,	 1.0, 

	//Cara z = -1		   
	0.6,	0.6,	 1.0, 
	0.6,	0.6,	 1.0, 
	0.6,	0.6,	 1.0, 
	0.6,	0.6,	 1.0, 

	//Cara x = 1		   
	1.0,	0.0,	 0.0, 
	1.0,	0.0,	 0.0, 
	1.0,	0.0,	 0.0, 
	1.0,	0.0,	 0.0, 

	//Cara x = -1		   
	1.0,	0.6,	 0.6, 
	1.0,	0.6,	 0.6, 
	1.0,	0.6,	 0.6, 
	1.0,	0.6,	 0.6, 

	//Cara y = 1		   
	0.0,	1.0,	0.0, 
	0.0,	1.0,	0.0, 
	0.0,	1.0,	0.0, 
	0.0,	1.0,	0.0, 

	//Cara y = -1		   
	0.6,	1.0,	0.6, 
	0.6,	1.0,	0.6, 
	0.6,	1.0,	0.6, 
	0.6,	1.0,	0.6  
];

var cubeVertexTexCoord = [ 
	//Cara z = 1
	 0.0, 0.0,
	 1.0, 0.0,
	 0.0, 1.0,
	 1.0, 1.0,

	//Cara z = -1
	0.0, 1.0, 
	1.0, 1.0, 
	0.0, 0.0, 
	1.0, 0.0, 

	//Cara x = 1	
	0.0,	1.0,
	1.0,	1.0,
	0.0,	0.0,
	1.0,	0.0,

	//Cara x = -1
	0.0,	0.0,
	1.0,	0.0,
	0.0,	1.0,
	1.0,	1.0,

	//Cara y = 1	
	0.0, 1.0,
	0.0, 0.0,
	1.0, 1.0,
	1.0, 0.0,

	//Cara y = -1
	0.0, 0.0,
	0.0, 1.0,
	1.0, 0.0,
	1.0, 1.0,
];

var cubeVertexTangent = [ 
	//Cara z = 1
	1.0,	0.0,	0.0,
	1.0,	0.0,	0.0,
	1.0,	0.0,	0.0,
	1.0,	0.0,	0.0,

	//Cara z = -1				
	1.0,	0.0,	0.0,		
	1.0,	0.0,	0.0,		
	1.0,	0.0,	0.0,		
	1.0,	0.0,	0.0,		

	//Cara x = 1				
	0.0,	0.0,	-1.0,		
	0.0,	0.0,	-1.0,		
	0.0,	0.0,	-1.0,		
	0.0,	0.0,	-1.0,		

	//Cara x = -1				
	0.0,	0.0,	1.0,		
	0.0,	0.0,	1.0,		
	0.0,	0.0,	1.0,		
	0.0,	0.0,	1.0,		

	//Cara y = 1	   
	1.0,	0.0,	0.0,
	1.0,	0.0,	0.0,
	1.0,	0.0,	0.0,
	1.0,	0.0,	0.0,
					
	//Cara y = -1					   
	1.0,	0.0,	0.0,
	1.0,	0.0,	0.0,
	1.0,	0.0,	0.0,
	1.0,	0.0,	0.0,
];
