# two lists of location IDs
# e.g.
# 3   4
# 4   3
# 2   5
# 1   3
# 3   9
# 3   3

# pair up the numbers and measure how far apart they are.
# Pair up the smallest number in the left list with the smallest number in the right list,
# then the second-smallest left number with the second-smallest right number, and so on.

# Within each pair, figure out how far apart the two numbers are;
# you'll need to add up all of those distances.

## PART A
# brute forcing it and creating two lists then sorting them.

list_a = []
list_b = []
sum = 0

File.foreach('input.txt') do |line|
  a, b = line.split(' ')
  list_a << a
  list_b << b
end

list_a.sort!
list_b.sort!

list_a.each_with_index do |id, index|
  diff = (id.to_i - list_b[index].to_i).abs
  sum += diff
end

puts "part A: #{sum}"

## PART B

hash = {}

list_b.each do |id|
  hash[id] ||= 0
  hash[id] += 1
end

result = list_a.reduce(0) do |running_total, id|
  running_total += id.to_i * (hash[id].to_i || 0)
  running_total
end

puts result
