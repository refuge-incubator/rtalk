/*
 * RTalk profile
 */

var RTProfile = function(rtdb) {
    this.rtdb = rtdb;
};

RTProfile.prototype.exists = function() {
    var result = false;
    this.rtdb.get('myprofile',
        function(err, doc) {
             result = doc != undefined && err == null;
        }
    );
    return result;
};