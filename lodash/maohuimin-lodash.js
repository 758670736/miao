var maohuimin = {
  add:
    function add(a, b) {
      return a + b
    },
  chunk:
    function chunk(array, nums) {
      var result = []
    },
  compact:
    function compact(array) {
      var result = []
      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          result.push(array[i])
        }
      }
      return result
    },
  difference:
    function difference(array, val) {

    },
  drop:
    function drop(array, n = 1) {
      if (n > array.length) {
        return []
      }
      var result = []
      for (var i = 0; i < array.length; i++) {
        if (i >= n) {
          result.push(array[i])
        }
      }
      return result
    },
  fill:
    function fill(array, value, start = 0, end = array.length) {
      for (var i = start; i < end; i++) {
        array[i] = value
      }
      return array
    },
  flatten:
    function flatten(array) {
      return array.reduce((result, item) => {
        return result = result.concat(item)
      }, [])
      return result
    },
  flattenDeep:
    function flattenDeep(array) {
      return array.reduce((result, item) => {
        if (Array.isArray(item)) {
          return result.concat(     flatten(item)     )
        }
        return result.concat(item)
      }, [])
    },
}