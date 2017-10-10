const child = require('child_process');
const { exec } = child;

function exportFromBlender(options, callback) {
    modelPath = `${process.outputPath}/${Date.now()}.json`;
    const threeOptions = JSON.stringify(options);
    exec(
        `${process.blenderPath} --background --python test/scripts/export-from-blender.py -- ${modelPath} '${threeOptions}'`,
        (err, stdout, stderr) => {
            if (err) {
                throw err;
            }
            console.log('stdout', stdout);
            console.log('stderr', stderr);
            callback(modelPath);
        },
    );
}

module.exports = {
    exportFromBlender: exportFromBlender
};
