PlanetGen = {};

PlanetGen.init = function(radius, normalMat, bumpMat, bumpScale, specMat){
    var geometry = new THREE.SphereGeometry(radius, 32, 32);
    var material   = new THREE.MeshPhongMaterial({
        map            : THREE.ImageUtils.loadTexture(normalMat),
        bumpMap     : THREE.ImageUtils.loadTexture(bumpMat),
        bumpScale   : bumpScale,
        specularMap : THREE.ImageUtils.loadTexture(specMat),
        specular       : new THREE.Color('grey')
    });
    var planetMesh = new THREE.Mesh(geometry, material);
    return planetMesh;
}

//PlanetGen.createClouds = function(planetMesh, cloudHeight, transparency, cloudMat){
    //var radius = planetMesh.radius + cloudHeight;
    //var geometry(radius, 32, 32);
    //var material = new THREE.MeshPhongMaterial({
    //    map         : THREE.ImageUtils.loadTexture(cloudMat),
    //    side         : THREE.DoubleSide,
    //    transparent : true,
    //    opacity: transparency
    //});
    //var cloudMesh = new THREE.Mesh(geometry, material);
    //return cloudMesh;
//}