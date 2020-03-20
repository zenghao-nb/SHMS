
const formatTime = date => {
  var date = new Date(date);
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  // console.log(second + "344444444444444");
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  // console.log(n[0] + " " + n);
  return n[1] ? n : '0' + n
}


module.exports = {
  formatTime: formatTime
}