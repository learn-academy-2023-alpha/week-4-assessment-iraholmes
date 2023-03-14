# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

(I am not 100% sure) Your answer: Object- Oriented programming is when the code is focused on the functionality of Objects used within the code not the functions written within the code.

Researched answer: Everything is considered an object in Object-Oriented programming. Everything is an object The form is the ideal (class) .The actual thing (implemintation of the form) - is the Object. This form of coding is best suited for complex and large programs, It focuses on the manipulation of objects and rather than the logic used to make manipulates to the objects in the code, helping the program to achieve results through altering objects. and functional programming is used by telling the program directly how to behave, This is a more static way of coding where functions retain the exact same inputs.

1. What is the difference between a Float and an Integer in Ruby?

Your answer: A float has a remainder and an integer is a whole number with no remainder.

Researched answer: A float must be introduced to your program using a decimal, a float can be a any real number and can also be rational or irrational. While an integer is simply a whole number, with no decimal.

1. Ruby has an implicit return. What does that mean?

Your answer: Implicit return means you do not have to signal a retun at the end of a method it will automatically read through the code provided on the last line.

Researched answer: An implicit return is the Output of the laste code in the method, before the end leaving no use for the keyword return. 

1. What is a block in Ruby?

Your answer: (I do not fully remember the definition but THey involve passing a function into a method)

Researched answer: Ruby Blocks consist of anonymous functions that are used in a method, and must be enclosed in do-end statements as well as curly brackets.

1. How do you extract a value in a Ruby hash?

Your answer: By using key value pairs you can call upon the value of a hash.

Researched answer: You can extract a value from a hash by using the .value or .extract method on the variable array you wish to extract or using bracket notation to access a stored hash value by writing the key then value- Example: my_love = {
  "dog" => "Keanu",
  "breed" => "Shiba Inu",
  "age_in_years" => 1,
}

puts my_love["breed"]

## Looking Ahead: Terms for Next Week

1. Class Inheritance: Allows you to reuse code from an existing class to create a new derivitive of the previously created class. 

2. RSpec: This is a behavior-driven development (BDD) tool used for testing in ruby, (something similar to jest I assume)

3. CRUD: Creat, Read, Update, and Delete data within a database in ruby

4. Test-driven development: The continous testing of the software before the actual implementation of a program to ensure that there are no bugs and the code runs as it is supposed to.

5. HTTP: Is a request-response protocol between a client and a server, the response contains status information about the request.
