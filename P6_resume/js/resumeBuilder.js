/*
This is empty on purpose! Your code to build the resume will go here.
 */




// BIO

var bio = {
	"name":"Vivek Yadav",
	"age":34,
	"role": "Data Scientist",
	"contacts": {
		"mobile": "814-380-2579",
		"email": "vivek.yadav@gmail.com",
		"github":"vxy10",
		"location": "Port Jefferson, NY"
	},
	"welcomeMsg": "Thank you for visiting. My work involves developing mathematical data models to represent complex phenomena. I am currently working as an assistant professor at Stony Brook University, where I apply techniques like natural language processing, audio signal processing and neural network techniques for my research work. I believe in constantly improving my skills and keeping myself abreast with current knowledge in the field of data science. This curiosity led me to pursue Coursera's Data Science Specialization and Udacity's Data Analyst Nano-Degree. I can pursue a career in data science where I can apply my math knowledge and computational skillset on real-life data sets. ",
	"bioPic": "images/me.jpg",
	"skills": ["Programming","Machine learning","Python/R/MATLAB","JavaScript/d3","EDA","A/B Testing","VB.NET"]

};





// WORK
var work = {

	"jobs": [{
		"title":"Assistant Professor",
		"employer":"Stony Brook University",
		"startyears":"August 2015",
		"endyears":"Current",
		"Dates":"August 2015 - Current",
		"location" :"Stony Brook, NY",
		"Description":"Assistant professor in the departments of Mechanical Engineering and Neurology.",
		"Responsibilites":["Developed and applied audio signal and natural language processing algorithms to quantify psychiatric effects of stroke.",
			"Performed numerical simulations to investigate the role of non-linear dynamics in causing repetitive-use injuries.",
			"Developed and tested nerual network based schemes for robust control of robotic manipulators.",
			"Taught <i>Engineering Dynamics</i> (150 undegraduate students), <i> Advanced Control Systems </i> (30 graduate students).",
			"Co-taught <i> Biomechanics and Movement I </i> (10 graduate students).",
			"Advised senior design projects; Brain-computer interface for robot control, Automated mixologist, Knee/hip energy harvesting device.",
			"Prepared manuscripts for journal and conference proceedings.",
			"Developed algorithms for data analysis and collection in MATLAB, Python and Realbasic"]
		},
		{
		"title":"Post-doctoral Researcher",
		"employer":"Pennsylvania State University",
		"startyears":"Sept 2010",
		"endyears":"August 2015",
		"Dates":"September 2010 - August 2015",
		"location" :"State College, PA",
		"Description":"Post-doctoral researcher in the departments of Kinesiology and Neurology.",
		"Responsibilites":["Developed the first computational model of motor lateralization in humans.",
			"Applied particle swarm optimization to estimate parameters of a hybrid control model.",
			"Condcted experiments in healthy humans and stroke patients to test the validitity of the computational model",
			"Demonstrated that the dominant arm is specialized for optimal control.",
			"Demonstrated that the non-dominant arm is specialized for impedance control.",
			"Advised/trained graduate and undergraduate students in the lab.",
			"Prepared manuscripts for journal and conference proceedings.",
			"Developed algorithms for data analysis and collection in MATLAB and Realbasic"
			]
		},
		{
		"title":"Graduate Research/Teaching Assistant",
		"employer":"Ohio State University",
		"startyears":"August 2006",
		"endyears":"August 2010",
		"Dates":"August 2006 - August 2010",
		"location" :"Columbus, OH",
		"Description":"PhD researcher in the department of Mechanical Engineering.",
		"Responsibilites":["Developed robotic device for upper-arm rehabilitation",
			"Investigated how gravity torques are represented in the brain by conducting experiments in humans",
			"Taught <i> statics </i> (60 undergraduate students).",
			"Prepared manuscripts for journal and conference proceedings.",
			"Developed algorithms for data analysis and collection in MATLAB and VB.Net."]
		},
		{
		"title":"Graduate Research/Teaching Assistant",
		"employer":"University of Missouri",
		"startyears":"August 2004",
		"endyears":"August 2006",
		"Dates":"August 2004 - August 2006",
		"location" :"Rolla, MO",
		"Description":"MS student researcher in the department of Mechanical Engineering.",
		"Responsibilites":["Developed neural network based algorithms for control of complex dynamic systems, non-linear dynamics, partial differential equations",
				"Applied grossberg neural network to compute obstacle free path for unmanned air vehicles.",
				"Developed and tested online clustering and routing algorithm based on grossberg neural networks for communication control between numerous unmanned air vehicles",
				"Prepared manuscripts for journal and conference proceedings.",
				"Taught <i>LABView and PLC control </i> (48 undergraduate students)."]
		},
		{
		"employer":"Tata Motors",
		"startyears":"July 2003",
		"endyears":"June 2004",
		"Dates":"July 2003 - June 2004",
		"location" :"Pune, India",
		"Description":"Graduate Engineer.",
		"Responsibilites":["Coordinated design and development of a station wagon prototype for auto show.",
			"Developed price prediction model for rubber.",
			"Conducted market survey and research to identify geo-politcal factors governing prices of steel and rubber."],
		"title":"Graduate Engineer."
		}
	]
};

// EDUCATION
var education = {
	"schools": [{
		"name": "The Ohio State University",
		"years": "2006-2010",
		"location": "Columbus, OH",
		"State": "Ohio",
		"Courses": ["Mathematical introduction to robotics",
			"Robot control and manipulation",
			"Solid Mechanics",
			"Geometric design of Mechanisms"
		],
		"Majors": "Mechanical Engineering",
		"degree" :"PhD"
	}, {
		"name": "University of Missouri",
		"years": "2004-2006",
		"location": "Rolla, MO",
		"State": "Missouri",
		"Courses": ["Linear control systems",
			"Nonlinear control system",
			"Neural network design",
			"Optimal control and estimation"
		],
		"Majors": "Mechanical Engineering",
		"degree":"Masters"
	}, {
		"name": "Indian Institute of Technology",
		"years": "1999-2003",
		"location": "Chennai, India",
		"State": "India",
		"Courses": ["Linear Algebra",
			"Calculus I/II",
			"Dynamics",
			"Optimal control and estimation"
		],
		"Majors": "Mechanical Engineering",
		"degree":"Bachelors"
	}],

	"Online": [{
		"title": "Data Analyst Nano-Degree",
		"school": "Udacity",
		"url": "https://www.udacity.com/course/data-analyst-nanodegree--nd002",
		"dates":"May 2016 (expected)",
		"Courses": ["Introduction to Machine learning", "Data Analysis with R",
			"Statics", "Data Wrangling with MongoDB",
			"Data Visualization and D3.js", "Introduction to HTML and CSS",
			"JavaScript Basics", "A/B testing"]
	}, {
		
		"title": "Data Science Specialization",
		"school": "Coursera",
		"dates":"August 2015",
		"url":"https://www.coursera.org/specializations/jhu-data-science",
		"Courses": ["Machine learning", "R Programming", "Getting and Cleaning Data",
			"Developing data products", "Exploratory Data Analysis", "Reproducible Research",
			"Practical Machine Learning", "Regression Models"
		]

	}]
};


var projects = {
	"projects":[
	{
		"title":"Machine learning for fraud detection in Enron’s financial and email data",
		"dates": "2016",
		"description":"In this project I investigated the Enron email data. Enron email data set is a large database of about 0.5 Mn emails from about 150 employees at Enron. The Federal Energy Regulatory Commission (FERC) for investigation acquired the data after the company filed for bankruptcy in 2001. Several board members and management employees were involved in illegal business practices, and were eventually charged. Some of these people were found guilty of fraudulent practices, and others settled out of court. These people are tagged as Persons of Interest (POI) in the data set. Here I developed a formal scheme to identify POIs. The goal of this project is to develop an algorithm that has recall and precision above 0.3. Machine learning techniques are well suited to obtain data-driven solutions to such questions. I applied PCA on financial data and selected 2 best features from email data, and then applied SVC for classifying POIs and non-POIs. This technique gave a precision of 0.5 and recall of 0.55, both above 0.3.",
		"images":["images/ModelPerformance.png"],
		"url":"https://github.com/vxy10/Udacity_projects/blob/master/P3_MongoDB_CSosm/main_project_P4_VivekYadav_v2.ipynb"	

	},{
		"title":"San-Francisco Crime Analysis- Exploratory Analysis and Classification",
		"dates": "2016",
		"description":"Here I analyzed the crime incidents in the city of San Francisco, and built a linear classifier to predict the probability of a crime belonging to certain category. I downloaded the data set from Kaggle''s San Francisco crime classification competition (https://www.kaggle.com/c/sf-crime). I first loaded the data into R. The data set has information on the location of the crime and the time at which the crime occured starting from 2003. The data set had more than 800,000 rows and 9 columns. I did exploratory analysis and made several variables to quantify various aspects of the crime incident. For example, from time information, I got information about data, hour of the day, month, year, etc. After exploratory analysis, I identified that the day of week, hour of the day, month, year and location were the main factors that affected crime rates. I therefore used these to predict the probability of a crime belonging to given category. I used R''s Liblinear package to implement a L2-regularized logistic regression model to predict probability of each crime. To validate my model, I split into a 50% training set and 50% validation set. I then fitted the model on training data and improved based on its performance on the validation set. My final model had day of week, hour of the day, month, year, location and interaction between location and year. I then trained this model on full data. I then uploaded this on Kaggle and my best submission got a score of 401/1173. ",
		"images":["images/SFO1.png",
		"images/SFO2.png"],
		"url": "https://github.com/vxy10/Udacity_projects/blob/master/P4_SFO_CrimeAnalysis/main_p4_at_v2_submission.pdf"
	},{
		"title":"OpenStreetMap Data Wrangling with MongoDB",
		"dates": "2015",
		"description":"In this project, I applied data cleaning and wrangling skills to clean address entries in the Open Street Maps (OSM) data of Colorado Springs. Addresses in Open Street Maps are entered by users and may not be entered in the same format by everyone. For example, Street may be written as street, st or St. Further, some individuals may not provide all the entries of address field, for example, city name, zip code. This issue is further immflamed because the area of Colorado Springs includes multiple cities. For example, Colorado Springs area includes US Air Force Academy, Fort Carson, Security-Widefield, Manitou Springs etc, and a user may wrongly enter city name. I first loaded the OSM data into mongoDB. I followed a 2 step approach to fix the address entries. First I correct the over abbreviate street names, for example, converting Blvd, Bld, etc to Boulevard, or S Union Blvd to South Union Boulevard. I then used the geopy package in python to get approximate latitude and longitude and did reverse geocoding to get postal code and city names. After this process, the number of complete entries went from 15789 to 20742 (of 23183). Therefore, by applying this techniques, the percentage of complete address entries increased from 68% to 90%.",
		"images":["images/CO_springs.png"],
		"url":"https://github.com/vxy10/Udacity_projects/blob/master/P3_MongoDB_CSosm/main_project_P4_VivekYadav_v2.ipynb"
	},{
		"title":"Analyzing the New York subway dataset",
		"dates": "2015",
		"description":"In this project, I applied statistical analysis on new york subway's turnstile to check how rain affects new york subway ridership. I first applied a the shapiro wilk's test to determine if the distribution of data is normal. This test revealed that the data were not normally distributed, therefore a non-parametric test is appropriate. However, as the number of data points were more than 50, a parametric test that assumes normal distribution is applicable. I used linear regression to model the relation between features and the data. However, as the data were not distributed normally, a log transform [log(1+x)] was applied to the dependent measures. I designed several features corresponding to the location, rain, level of precipitation, temperature of the day and if the day was week day or weekend. I tested the effect of including various interaction terms in the model. I finally proceeded with a model with 1703 features. I split the data such that 50% of it was used for training and 50% for testing. After fitting, the model had accuracy of 0.85 on both the testing and training data. Another reason for settling for 1703 parameters was to avoid overfitting. After accounting for the categorical variables, each group had about 25 data points that were fitted to continuous data. This number seemed reasonable for fitting the 3 continuous variables. Further analysis revealed that the rain had significant effect on ridership, and on average rainy days had 183 more passengers than on non-rainy days." ,
		"images":["images/Table_NYSub.png","images/RainNoRain.png"],
		"url":"https://github.com/vxy10/Udacity_projects/blob/master/P2_NY_SubwayRidership/P2_DSc_VivekYadav.ipynb"
	} 
	]
}

projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDate = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDate);
		var formattedDsc = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDsc);
		var formattedUrl = HTMLprojectURL.replace("%data%",projects.projects[project].url);
		var formattedUrlName = HTMLprojectURLName.replace("%data%","Click here for project.");
		$(".project-entry:last").append(formattedUrl + formattedUrlName);


		
		if (projects.projects[project].images.length>0) {
			//console.log(projects.projects[project].images.length)
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image])
				$(".project-entry:last").append(formattedImage);	
			}
		}
		

	}
}
projects.display()

education.displayschool = function() {
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedTitle);
		var formattedDate = HTMLschoolDates.replace("%data%",education.schools[school].years);
		$(".education-entry:last").append(formattedDate);
		var formattedDsc = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedDsc);
		var formattedMjr = HTMLschoolMajor.replace("%data%",education.schools[school].Majors);
		$(".education-entry:last").append(formattedMjr);
		var formattedLoc = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLoc);
		$(".education-entry:last").append('<div align="left" class = "list-entry"><b>Relevant Courses</b></div>');
        $(".education-entry:last").append(HTMLlistStart);
	    var school_courses = education.schools[school].Courses
	    for (course in school_courses){
			var formattedCourse = HTMLlistItem.replace("%data%", school_courses[course]);
			$(".education-entry:last").append(formattedCourse);
			}
		$(".education-entry:last").append(HTMLlistEnd);
		
		

	}
}
education.displayschool()
var formattedDesc ="AAAAA"

$("#education").append(HTMLonlineClasses);
education.displayonline = function() {
	for (Online in education.Online){
		$("#education").append(HTMLschoolStart);




		mooc = education.Online[Online];
		var formattedUrl = HTMLonlineURL.replace("%data%", mooc["url"]);
        var formattedTitle = HTMLonlineTitle.replace("%data%", mooc["title"]);
        var formattedSchool = HTMLonlineSchool.replace("%data%", mooc["school"]);
        var formattedDates = HTMLonlineDates.replace("%data%", mooc["dates"]);
        $(".education-entry:last").append(formattedUrl+formattedTitle + formattedSchool + formattedDates);
        $(".education-entry:last").append('<div align="left" class="list-entry"><b>Courses</b></div>');
        $(".education-entry:last").append(HTMLlistStart);
	    for (course in mooc.Courses){
	    		//console.log(education.Online.Courses)
			var formattedCourse = HTMLlistItem.replace("%data%", mooc["Courses"][course]);
			$(".education-entry:last").append(formattedCourse);
			}
		$(".education-entry:last").append(HTMLlistEnd);
			
		}
}
education.displayonline()

function displaywork() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer+formattedTitle;
	//console.log(formattedEmployerTitle);
	var formattedloc = HTMLworkLocation.replace("%data%",work.jobs[job].location);

	var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[job].Description);
	var formattedDays = HTMLworkDates.replace("%data%",work.jobs[job].Dates);
	
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDays);
	$(".work-entry:last").append(formattedloc);
	$(".work-entry:last").append(formattedDesc);

	Resp = work.jobs[job];
	$(".work-entry:last").append('<div align="left"  class="list-entry"><b>Contributions</b></div>');
    $(".work-entry:last").append(HTMLlistStart);
	for (rr in Resp.Responsibilites){
		//console.log(education.Online.Courses)
		var formattedCourse = HTMLlistItem.replace("%data%", Resp.Responsibilites[rr]);
		$(".work-entry:last").append(formattedCourse);
	}
	$(".work-entry:last").append(HTMLlistEnd);
			
	
	}
}

function inName(name) {
    var finalName = name;
    var str_split = name.trim().split(' ');
    var lastName = str_split[1].toUpperCase();
    var firstName = str_split[0].slice(0,1).toUpperCase().concat(str_split[0].slice(1).toLowerCase());
    var Names = [firstName,lastName];
    finalName = Names.join(' ');
    return finalName;
};








// add header


var formattedName = HTMLheaderName.replace("%data%","Vivek Yadav");
var roleName = HTMLheaderRole.replace("%data%","Data Scientist");
var img_src = bio.bioPic;
var formatImg = HTMLbioPic.replace("%data%",img_src);

$("#header").prepend(roleName);
$("#header").prepend(formattedName);


// add Contact




var ContactObj = bio.contacts;
var formattedContact = ""; 
var formattedLine = []; 
for(obj in ContactObj) {
	formattedContact = HTMLcontactGeneric.replace("%contact%", obj);
	formattedContact = formattedContact.replace("%data%", ContactObj[obj]); 
	formattedLine.push(formattedContact);
	$("#topContacts").append(formattedContact);
	$("#footerContacts").append(formattedContact);
	

};

ContactLine = formattedLine.join(" ");




// add Image

$("#header").append(formatImg);

// add Descriotion
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
$("#header").append(formattedWelcomeMsg);


//$("#header").prepend(ContactLine);

//description

// skills
var len_skills = bio.skills.length
$("#header").append(HTMLskillsStart);

for (var i=0;i<len_skills;i++) {
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
	$("#skills").append(formattedSkill);
}


// add Work
displaywork();

function locationizer(work_obj) {
    var location = [];
    for (i_work in work_obj.jobs) {
        var loc_i = work_obj.jobs[i_work].location;
        //console.log(location)
        location.push(loc_i);
        
  
     }
    //console.log(location)
    return location;
}

locationizer(work);
//name = "Vivek Yadav"
// adding internationalize button
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


//$("#main").append(bio.Role);
//$("#main").append(bio.contact.email);
//$("#main").append(bio.welcomeMsg);
//$("#main").append(bio.bioPic);
//$("#main").append(bio.skills);
//$("#main").append(work["position"]);