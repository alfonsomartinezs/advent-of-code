//doing it in javascript cause I gotta practice.

//find the two entries that sum to 2020 and then multiply those two numbers together.

let input = [
  1686,
  1983,
  1801,
  1890,
  1910,
  1722,
  1571,
  1952,
  1602,
  1551,
  1144,
  1208,
  1335,
  1914,
  1656,
  1515,
  1600,
  1520,
  1683,
  1679,
  1800,
  1889,
  1717,
  1592,
  1617,
  1756,
  1646,
  1596,
  1874,
  1595,
  1660,
  1748,
  1946,
  1734,
  1852,
  2006,
  1685,
  1668,
  1607,
  1677,
  403,
  1312,
  1828,
  1627,
  1925,
  1657,
  1536,
  1522,
  1557,
  1636,
  1586,
  1654,
  1541,
  1363,
  1844,
  1951,
  1765,
  1872,
  696,
  1764,
  1718,
  1540,
  1493,
  1947,
  1786,
  1548,
  1981,
  1861,
  1589,
  1707,
  1915,
  1755,
  1906,
  1911,
  1628,
  1980,
  1986,
  1780,
  1645,
  741,
  1727,
  524,
  1690,
  1732,
  1956,
  1523,
  1534,
  1498,
  1510,
  372,
  1777,
  1585,
  1614,
  1712,
  1650,
  702,
  1773,
  1713,
  1797,
  1691,
  1758,
  1973,
  1560,
  1615,
  1933,
  1281,
  1899,
  1845,
  1752,
  1542,
  1694,
  1950,
  1879,
  1684,
  1809,
  1988,
  1978,
  1843,
  1730,
  1377,
  1507,
  1506,
  1566,
  935,
  1851,
  1995,
  1796,
  1900,
  896,
  171,
  1728,
  1635,
  1810,
  2003,
  1580,
  1789,
  1709,
  2007,
  1639,
  1726,
  1537,
  1976,
  1538,
  1544,
  1626,
  1876,
  1840,
  1953,
  1710,
  1661,
  1563,
  1836,
  1358,
  1550,
  1112,
  1832,
  1555,
  1394,
  1912,
  1884,
  1524,
  1689,
  1775,
  1724,
  1366,
  1966,
  1549,
  1931,
  1975,
  1500,
  1667,
  1674,
  1771,
  1631,
  1662,
  1902,
  1970,
  1864,
  2004,
  2010,
  504,
  1714,
  1917,
  1907,
  1704,
  1501,
  1812,
  1349,
  1577,
  1638,
  1886,
  1157,
  1761,
  1676,
  1731,
  2001,
  1261,
  1154,
  1769,
  1529
]

//first try. using 2 loops. I'm sure there's a better way but this was the first thing I thought of.

for (let i = 0; i < input.length; i++){
  for (let j = i+1; j < input.length; j++){
    if (input[i] + input[j] == 2020) {
      console.log("found it!");
      console.log(input[i] + " plus " + input[j] + " equals " + (input[i] + input[j]))
      console.log("these multiplied gives us "+(input[i] * input[j]));
    }
  }  
}

//alright. so now I need to find 3 numbers. The above won't work.
//research tells me I can use something called the two pointer technique.
//you need to sort the array, then have two pointers at each end. you shift the left pointer up if the sum is lower than the target.
//shift the right pointer if the sum is higher than the target amount.

//trying it out on the first challenge.

input.sort(function (a, b) {
  return a - b
})

let leftPointer = 0
let rightPointer = input.length-1
let sum = input[leftPointer] + input[rightPointer]

while (sum !== 2020) {
  if (sum > 2020) {
    rightPointer = rightPointer - 1
    sum = input[leftPointer] + input[rightPointer]
  } else if (sum < 2020) {
    leftPointer = leftPointer + 1
    sum = input[leftPointer] + input[rightPointer]
  }
}
console.log(sum);
console.log("this version gets us the same result as the first:")
console.log(input[leftPointer] * input[rightPointer])



//now for the second challenge

//gonna keep the first loop
for (let i = 0; i < input.length; i++){
  leftPointer = i+1 //left pointer starts after first number
  rightPointer = input.length - 1
  sum = input[i] + input[leftPointer] + input[rightPointer]
  console.log(sum)
  while (leftPointer < rightPointer) { 
    if (sum === 2020) {
      console.log("numbers are: " + input[i] + " " + input[leftPointer] + " " + input[rightPointer])
      console.log(input[i]*input[leftPointer]*input[rightPointer])
      return
    } else if (sum > 2020) {
      rightPointer = rightPointer - 1
      sum = input[i] + input[leftPointer] + input[rightPointer]
      console.log(sum);

    } else if (sum < 2020) {
      leftPointer = leftPointer + 1
      sum = input[i] + input[leftPointer] + input[rightPointer]
      console.log(sum);
    }
  }


}

//works! 2 part done. yay!