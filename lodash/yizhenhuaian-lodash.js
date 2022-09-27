var yizhenhuaian = {
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
      var result = {}
      
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
      for (var i = 0; i < values.length; i++) {
        for (var j = 0; j < array.length; i++) {
          if (array[j] == values[i]) {
            array.splice(j,1)
          }
        }
      }
      return array
    },
  pullAt:
    function pullAt(array, indexes = []) {
      for (var i = 0; i < array.length; i++) {
        array.slice(array[indexes], 1)
      }
      return array
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
  uniq:
    function uniq(array) {
      var result = []
      for (var i = 0; i < array.length; i++) {
        if (!(array.indexOf(array[i] in result))) {
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