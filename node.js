const fs = require('fs-extra');

fs.mkdirp('NewDir');

fs.ensureFileSync('NewDir/filefirst.txt');
fs.mkdirp('NewDirSecond');
fs.moveSync('NewDir/filefirst.txt', 'NewDirSecond/filefirst.txt');
fs.mkdirp('NewDirThird');
fs.copySync('NewDirSecond/filefirst.txt', 'NewDirThird/filefirst.txt');

fs.removeSync('NewDirSecond/filefirst.txt');
fs.removeSync('NewDirThird/filefirst.txt');
fs.removeSync('NewDirThird');
fs.removeSync('NewDirSecond');
fs.removeSync('NewDir');