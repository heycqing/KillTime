const {rm ,cp ,mkdir , exec, echo } = require('shelljs');
const chalk = require('chalk');

rm('-rf','coverage');
rm('-rf','.nyc_output');

exec('nyc --reporter=html npm test');

mkdir('-p','coverage_archive/$npm_package_version ');
cp('-r','coverage/*','coverage_archive/$npm_package_version');

exec('npm-run-all --parallel cover-serve cover-open');