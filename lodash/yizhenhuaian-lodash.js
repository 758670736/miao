var yizhenhuaian = {
  chunk:
    function chunk(array, size = 1) {
      var result = []
      var count = array.length / size
      for (var i = 0; i < count; i++) {
          result[i] = array.splice(0, size)
      }
      return result
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
  dropRight:
    function dropRight(array, n = 1) {
      if (n > array.length) {
        return []
      }
      var result = []
      var key = array.length - n - 1
      for (var i = 0; i < array.length; i++) {
        if (i <= key) {
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
  fromPairs:
    function fromPairs(pairs) {
      var map = {}
      for (var i = 0; i < pairs.length; i++) {
          map[pairs[i][0]] = pairs[i][1]
      }
      return map
    },
  head:
    function head(array) {
      if (!array) {
        return undefined
      }
      return array[0]
    },
  indexOf:
    function indexOf(array, value, fromIndex = 0) {
      for (var i = fromIndex; i < array.length; i++) {
        if (array[i] === value) {
          return i
        }
      }
      return -1
    },
  initial:
    function initial(array) {
      var result = []
      for (var i = 0; i < array.length - 1; i++) {
        result.push(array[i])
      }
      return result
    },
  join:
    function join(array, separator) {
      var result = ''
      for (var i = 0; i < array.length; i++) {
        result = result + array[i] + separator
      }
      return result.slice(0, result.length - 1)
    },
  last:
    function last(array) {
      if (!array) {
        return undefined
      }
      return array[array.length - 1]
    },
  lastIndexOf:
    function lastIndexOf(ary, value, fromIndex = ary.length - 1) {
      for (var i = fromIndex; i >= 0; i--) {
          if (ary[i] === value) {
              return i
          }
      }
      return -1
    },
  nth:
    function nth(array, n = 0) {
      if (n >= 0 && n < array.length) {
            return array[n]
        } else if (n < 0 && n >= -array.length) {
        return array[array.length + n]
      } else {
        return undefined
      }
    },
  pull:
    function pull(array, values = []) {
    },
  pullAt:
    function pullAt(array, indexes = []) {
    },
  reverse:
    function reverse(array) {
      var stop = Math.floor(array.length / 2)
      for(var i = 0; i < stop; i++) {
        var j = array.length - i - 1
        var t = array[j]
        array[j] = array[i]
        array[i] = t
      }
        return array
    },
  sortedindex:
    function sortedindex(array, value) {
      array.push(value)
      array.sort(function (a, b) { return a - b })
      for (var i = 0; i < array.length; i++) {
        if (array[i] == value) {
          return i
        }
      }
    },
  uniq:
    function uniq(array) {
      var result = []
      for (var i = 0; i < array.length; i++) {
        if (!(result.includes(array[i]))){
          result.push(array[i])
        }
      }
      return result
    },
  gt:
    function gt(value, other) {
      if (value > other) {
        return true
      } else {
        return false
      }
    },
  gte:
    function gte(value, other) {
      if (value >= other) {
        return true
      } else {
        return false
      }
    },
  It:
    function It(value, other) {
      if (value < other) {
        return true
      } else {
        return false
      }
    },
  Ite:
    function Ite(value, other) {
      if (value <= other) {
        return true
      } else {
        return false
      }
    },
  max:
    function max(array) {
      if (!array) {
        return undefined
      }
      var max = array[0]
      for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
          max = array[i]
        }
      }
      return max
    },
  mean:
    function mean(array) {
      var sum = 0
      for (var i = 0; i < array.length; i++) {
        sum += array[i]
      }
      return sum / array.length
    },
  min:
    function min(array) {
      if (!array) {
        return undefined
      }
      var min = array[0]
      for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
          min = array[i]
        }
      }
      return min
    },
  sum:
    function sum(array) {
      var sum = 0
      for (var i = 0; i < array.length; i++) {
        sum += array[i]
      }
      return sum
    },
  inRange:
    function inRange(number, start = 0, end) {
      if (number >= start && number < end) {
        return true
      } else {
        return false
      }
    },
  add:
    function add(a, b) {
      return a + b
    },
  concat:
    function concat(array, [values]) {

    },
  flow:
  function flow(a, b) {
      var n = a + b
      function square(n) {
          return n * n
    }
    return square(n)
  },
  //源代码push的实现
  // push:
  //   a.push = function push(val) {
  //    this[this.length] = val
  //    return this.length
  //  },
  // map:
  //   a.map2 = function (mapper) {
  //     var result = []
  //     for (var i = 0; i < this.length; i++) {
  //       result.push(  mapper(this[i])  )
  //     }
  //     return result
  //   }
  // a.map2( function (it) { return it / this.length})
}