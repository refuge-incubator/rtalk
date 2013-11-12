/*
 * RTalk
 */

var RTalk = function() {
    log('RTalk is loading ...');

    this.version = '0.0.1';

    this.initialize();
};

RTalk.prototype.initialize = function() {
    log('RTalk is initializing itself.');

    log('Making sure the dbs are right.');
    this.rtdb = new PouchDB('rtalk-db');

    log('Grabbing the profile if it exists');
    this.rtprofile = new RTProfile(this.rtdb);

    if(!this.rtprofile.exists()) {
        log('Profile doesn\'t exist!');
    }
};
