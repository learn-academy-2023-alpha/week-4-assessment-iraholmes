# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
# Create a function called even_or_odd
# Write a conditional statement that will return even or odd for each integer
# using the modulator I will determine if the number has a remainder or not which will signify even or odd.
# Use the bang operator on the elseif statement to make the statement untrue "odd" to be returned

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
def even_or_odd (num)
    if num % 2 === 0
        "#{num} is even"
    elsif !(num % 2 == 0)
          "#{num} is odd"
    end
end
p even_or_odd 7
p even_or_odd 42
p even_or_odd 221

### Results: "7 is odd"
# "42 is even"
# "221 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# Psuedi Code: Use the str.delete built in method to erase all vowels in the given strings.
# Use string interpolation to iterate through the variables given.
# Input the string variable
#outPut: A new string without the 
beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
str = "#{beatles_album1}"
puts str.delete "aeiou"

str = "#{beatles_album2}"
puts str.delete "aeiou"

str = "#{beatles_album3}"
puts str.delete "aeiou"
# Output: Rbbr Sl
# Sgt Pppr
# Abby Rd
# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# Psuedo Code: 
# Create a method that takes in a string and returns wethere or not it is a palindrome 
# Use string interpolation to iterate through the the string
# Create a conditional statement to return if the value is a palindrome or not.
# Use the bang operatorto search for the inverese of the conditional


palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def is_palindrome (string)
    if (string.reverse == string)
        "#{string} is a palindrome"
    elsif !(string.reverse == string)
        "#{string} is not a palindrome"
    else
        "Error"
    end
end
# while
#         (String == String.reverse)
#             "#{string} is a palindrome"
#          String == String.reverse
#             "#{string} is not a palindrome"
# end  
    #         "Error"
    #     end
    # end

p is_palindrome(palindrome_tester1)
p is_palindrome(palindrome_tester2)
p is_palindrome(palindrome_tester3)
### I was able to get close but the method would overlook the elsif statement and only read the first line, I coulld not figure out what I was missing could you please give me some feedback on this problem.