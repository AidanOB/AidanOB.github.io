// Constants for solar system

// Declare the planets and their meshes
var mercuryOrbit, venusOrbit, earthOrbit, lunaOrbit, marsOrbit;
var sun, mercury, venus, earth, luna, mars;
var sunWireMesh, mercuryWireMesh, venusWireMesh, earthWireMesh, lunaWireMesh, marsWireMesh;
var sunMesh, mercuryMesh, venusMesh, earthMesh, lunaMesh, marsMesh;
            
// Declare equitorial rotation velocities
var sunRotationSpeed = 0.001;
var earthRotationSpeed = 0.005;
var lunaRotationSpeed = 0.01;

var skyGeometry = new THREE.SphereGeometry(skyRadius, skySegments, skyRings);
var skyMaterial = new THREE.MeshBasicMaterial();
       skyMaterial.map = THREE.ImageUtils.loadTexture('materials/starfield/ESO_-_Milky_Way.jpg');
       skyMaterial.side = THREE.BackSide;

// Set up the vars for the Sun
                            
// Sun's radius is 696000 km
var  sunRadius = 69.6,
        sunSegments = 32,
        sunRings = 32;
        
// Set up the Variables for Earth
// Radius is measured in 10,000s. 6,371km = 0.6371
var earthRadius = 0.6371,
       segments = 50,
       rings = 50;
                       
// Create the Earth's material and textures
var earthMap = 'materials/earth/Earth.png';
var earthBumpMap = 'materials/earth/bump/earthbump1k.jpg';
var earthBumpScale = 0.05;
var earthSpecularMap = 'materials/earth/specular/lores/EarthSpec.png';
                       
// Set up the Moon's variables
var lunaRadius = 0.17371,
       lunaSegments = 8,
       lunaRings = 8;