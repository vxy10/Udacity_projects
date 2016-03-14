 var awesomeThoughts = "I am Vivek I am Awesome"

 var funThoughts = awesomeThoughts.replace("Awesome","Fun")
 console.log(awesomeThoughts)
 console.log(funThoughts)


var formattedName = HTMLheaderName.replace("%data%","Vivek Yadav")
var roleName = HTMLheaderRole.replace("%data%","Data Scientist")

var skills = 
["programming","teaching","Python","R","MATLAB","d3"]

$("#main").append(skills)
 console.log(skills.length)


$("#header").prepend(roleName)
$("#header").prepend(formattedName)
