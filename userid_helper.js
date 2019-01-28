module.exports = function(num) {
    var userIds = [];
    var i;
    for (i = 0; i < num; i++) {
      function guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      }
      userIds.push(guid());
    }
  console.log(userIds);
  return userIds;
}
