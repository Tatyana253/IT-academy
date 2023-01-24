const fs = require('fs-extra');

fs.mkdirp('NewDir');

fs.ensureFileSync('/Users/tatanaivasuk/IT-academy/NewDir/filefirst.txt');
fs.mkdirp('NewDirSecond');
fs.moveSync('/Users/tatanaivasuk/IT-academy/NewDir/filefirst.txt', '/Users/tatanaivasuk/IT-academy/NewDirSecond/filefirst.txt');
fs.mkdirp('NewDirThird');
fs.copySync('/Users/tatanaivasuk/IT-academy/NewDirSecond/filefirst.txt', '/Users/tatanaivasuk/IT-academy/NewDirThird/filefirst.txt');

fs.removeSync('/Users/tatanaivasuk/IT-academy/NewDirSecond/filefirst.txt');
fs.removeSync('/Users/tatanaivasuk/IT-academy/NewDirThird/filefirst.txt');
fs.removeSync('/Users/tatanaivasuk/IT-academy/NewDirThird');
fs.removeSync('/Users/tatanaivasuk/IT-academy/NewDirSecond');
fs.removeSync('/Users/tatanaivasuk/IT-academy/NewDir');