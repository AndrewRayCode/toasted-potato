const THREE = require('three');
const utils = require('../config/utils.js');

const { exportBlender } = utils;
const { Mesh, BufferGeometry } = THREE;

describe('exporting a cube scene', () => {
  const exporterOptions = {
    option_export_scene: true,
    option_hierarchy: true,
  };
  test('cube sanity check', async () => {
    const output = await exportBlender('cube-only.blend', exporterOptions);
    const { children } = output;
    const cube = children[0];
    const { geometry } = cube;

    expect(children.length).toBe(1);
    expect(cube).toBeInstanceOf(Mesh);
    expect(geometry).toBeInstanceOf(BufferGeometry);
  });
});
