# Weather App
As instructed by homework, the main goal is to create a randomized weather app with HTML, CSS and Javascript.

The idea is to create a function to define weather with temperatures, conditions (clear, cloudy, etc) and cloudiness percentage, as such, use if/else if statements to make sure certain conditions don't mix with weird temperatures.
(like Snow condition with 40ºC lol)

Questions from homework:
1. How can you ensure the weather updates automatically at regular intervals? SetInterval() function allows to set a timer in milliseconds for the app tp update, in this case 3 minutes or 180000 milliseconds
2. What is the best way to generate random values for the weather properties? Main way is to use Math.random() built-in function to make it randomized from an array set.
3. How can you dynamically check for extreme weather conditions and update warnings? Use conditional statements to define those warnings
4. How will you structure the CSS so the warning message stands out? Red text is easiest way to call someone's attention, but I've used multiple colors
