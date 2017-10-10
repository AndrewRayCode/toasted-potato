const THREE = require('three');
const utils = require('../config/utils.js');

const { exportFromBlender } = utils;

const exporterOptions = {
    option_export_scene: true,
    option_hierarchy: true,
    option_materials: true,
    option_face_materials: true,
    option_skinning: true,
    option_bones: true,
    option_animation_skeletal: 'pose'
};

test('adds 1 + 2 to equal 3', done => {
    exportFromBlender(exporterOptions, modelPath => {
        const loader = new THREE.ObjectLoader();
        const output = loader.parse(require(modelPath));
        console.log(output);
        done();
    });
});
