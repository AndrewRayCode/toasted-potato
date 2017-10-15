const colors = require('colors/safe');
const path = require('path');
const child = require('child_process');

const { exec } = child;
const md5 = require('md5');
const THREE = require('three');

const { ObjectLoader } = THREE;

function executeBlender(blenderPath, filePath, exportFile, options) {
  return new Promise((resolve, reject) => {
    // -noaudio flag because errors on travis:
    //    ALSA lib confmisc.c:768:(parse_card) cannot find card '0'
    // https://blender.stackexchange.com/questions/31581/alsa-lib-confmisc-c768parse-card-cannot-find-card-0-and-etc-errors-happend
    exec(
      `${blenderPath} ${filePath} -noaudio --background --python test/scripts/export-from-blender.py -- ${exportFile} '${options}'`,
      (err, stdout, stderr) => {
        if (err) {
          return reject(err);
        }
        if (stderr) {
          console.error(stderr);
          return reject(new Error(colors.red('Blender wrote to STDERR, please check the output')));
        }
        console.log(stdout);
        return resolve();
      },
    );
  });
}

async function exportFromBlender(blenderFilePath, exporterOptions) {
  const fullBlenderFilePath = path.resolve(__dirname, '..', 'blender-files', blenderFilePath);
  const exportFilePath = `${process.outputPath}/${md5(fullBlenderFilePath)}.json`;
  const threeOptions = JSON.stringify(exporterOptions);
  // Disable caching for now, since it will cache files even if python source
  // code changes. could revisit as some hash of python code?
  // if (fs.existsSync(exportFilePath)) {
  //     return callback(exportFilePath);
  // }
  await executeBlender(process.blenderPath, fullBlenderFilePath, exportFilePath, threeOptions);
  return exportFilePath;
}

async function exportBlender(fileName, exporterOptions) {
  const exportedFilePath = await exportFromBlender(fileName, exporterOptions);
  const loader = new ObjectLoader();
  return loader.parse(require(exportedFilePath)); // eslint-disable-line
}

module.exports = {
  exportFromBlender,
  exportBlender,
};
