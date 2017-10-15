![Travis Build Status](https://api.travis-ci.org/AndrewRayCode/toasted-potato.svg?branch=master)

# Developing

#### Python Setup

The exporter itself is a Python Blender add-on. Install the Python dependencies:

    pip install -r requirements.txt

#### Node 8.6.0

You need Node 8.6.0. [Install NVM](https://github.com/creationix/nvm), then in this repository, `nvm use`.

#### Yarn

You can run tests with npm if you want, but the documentation in this repository is for yarn.

[Install Yarn](https://yarnpkg.com/lang/en/docs/install/) then install the dependencies:

    yarn

#### Run the tests!

This project uses the [Facebook Jest test framework](https://github.com/facebook/jest). To run the tests, we need to tell the scripts where the Blender addons folder is. It will look for your Blender installation folder in the default place for your operating system.

To run the tests once, run

    yarn test -- --addons-path='/path/to/blender/addons/folder'

This might look something like:

    yarn test -- --addons-path='/Users/myuser/Library/Application Support/Blender/2.77/scripts/addons/'

To continuously watch the tests so they re-run, replace `yarn test` with `yarn watch-test`:

    yarn watch-test -- --addons-path='/Users/myuser/Library/Application Support/Blender/2.77/scripts/addons/'
