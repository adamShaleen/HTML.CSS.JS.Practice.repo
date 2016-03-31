// check if something's a palindrome

function palindrome(str){
  return str === str.split('').reverse().join('')
}

function palindrome(str){
  var result = true
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] != str[str.length - 1 -i]) {
      return false
    }
  }
  return result
}

function palindrome(str) {
  if (str.slice(0,1) != str.slice(-1)) {
    return false
  }
  if (str.length == 0 || str.length == 1) {
    return true
  }
  return isPalindrome3(str.slice(1,-1))
}

function palindrome(str) {
  str = str.toLowerCase()
  str = str.replace(/[^a-z]/g, '')
  var isPal = true
  for (var i = 0; i <= Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false
    }
  }
  return true
}

// check it
palindrome('eye')
palindrome('tacocat')

