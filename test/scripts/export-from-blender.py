import bpy
import sys
import addon_utils
import json

argv = sys.argv
args = argv[argv.index('--') + 1:]
modelPath = args[0]
exporter_options = json.loads(args[1])

print('hello from python', args, exporter_options, modelPath)

addon_utils.enable('io_three_development')

# This is a bug! The exporter doesn't do anything until you have an active
# object. Here's a workaround for now.
bpy.context.scene.objects.active = bpy.data.objects[0]

bpy.ops.export.io_three_development(
    filepath=modelPath,
    **exporter_options
)

addon_utils.disable('io_three_development')

# filepath='',
# check_existing=True,
# option_vertices=True,
# option_faces=True,
# option_normals=True,
# option_colors=False,
# option_mix_colors=False,
# option_uv_coords=True,
# option_materials=False,
# option_face_materials=False,
# option_maps=False,
# option_skinning=False,
# option_bones=False,
# option_extra_vgroups='',
# option_apply_modifiers=True,
# option_index_type='Uint16Array',
# option_scale=1,
# option_round_off=True,
# option_round_value=6,
# option_custom_properties=False,
# option_logging='disabled',
# option_geometry_type='geometry',
# option_export_scene=False,
# option_embed_animation=True,
# option_export_textures=True,
# option_embed_textures=False,
# option_texture_folder='',
# option_lights=False,
# option_cameras=False,
# option_hierarchy=False,
# option_animation_morph=False,
# option_blend_shape=False,
# option_animation_skeletal='off',
# option_keyframes=False,
# option_frame_index_as_time=False,
# option_frame_step=1,
# option_indent=True,
# option_compression='None',
# option_influences=2