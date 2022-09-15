var maohuimin = {
  add:
    function add(a, b) {
      return a + b
    },
  compact:
    function compact(ary) {
      var result = []
      for (var i = 0; i < ary.length; i++) {
        if (ary[i]) {
          result.push(ary[i])
        }
      }
      return result
    },
  
}