Run Report submitted with the project. 
Please open the file to get the report or see below to run the test
location of report => /restapitesting/target/CucumberReport/cucumber-html-reports/feature-overview.html

Location of logs: /restapitesting/target/Logs/App.log
The logs can be used for triaging the issue
  


How to run the test
1. Via Test Runner (/restapitesting/src/test/java/com/splunk/runner/TestRunner.java)
	will generate html report
2. Via pom.xml (Preferable) (/restapitesting/pom.xml)
	mvn clean, mvn install
	will generate cucumber jvm report
	
Framework folder:
1. /restapitesting/src/test/java/com/splunk/runner
	Has test runner file, used to execute the feature file
2. /restapitesting/src/test/resources/feature
	Has feature file which has the scenarios that will be executed
3. /restapitesting/src/test/java/com/splunk/steps
	Has step defination/method for the steps present in feature file
4. /restapitesting/src/test/java/com/splunk/actions
	Has methods that has the actual logic
5. /restapitesting/src/test/java/com/splunk/base
	Has common function file that has reusable functions to be used in the project
6. /restapitesting/src/test/java/com/splunk/constant
   Has constant and GlobalData file that has variables that are used during test execution

Each test execution does the below:
- Submit the get request and get response
- response + POJO => java object
- The java object is used to retrieve values for verifiation/printing

Once the test is executed cucumber jvm is generated.
The report has 
 - json response as attachment   
 - verification in table format as attachment
 
 Test Results:
 SPL-001: Verify no two movie should have same image/poster path
 Test Failed
 Duplicate poster path => https://www.dropbox.com/s/2jda8hu20y99jxl/cinema-food-movie-theater-33129.jpg?dl=0
 
 SPL-002: Verify all poster path should be either valid or null
 Test Failed
 Broken Poster path => /sWa1Y5QhGuJMjw8uuFoggGLqZ0y.jpg
 
 SPL-003 Prints movie title in sorted order as per the requirement
  Sorted Movie Title
 Batman: Beyond Batman
 The Dark Knight
 Return to the Batcave: The Misadventures of Adam and Burt
 The Dark Knight Rises
 Batman and Robin
 James Batman
 Batman Tech
 Batman: A Gotham Fairytale
 Batman James Batman 75th Anniversary Short
 Scooby-Doo Meets Dante
 LEGO DC Comics Super Heroes: Batman: Be-Leaguered
 Dante
 Batman: Return of the Kayak Crusaders
 Batman Unlimited: Mechs vs. Mutants
 Being Batman
 Batman Jr.
 
 SPL-004 Prints movie title whose sum of genre ids > 400
 Movie Title  
 Gerner Ids whose sum is greater than 400 
 James Batman
 [28, 12, 35, 878]
 Scooby-Doo Meets Dante
 [10751, 16]
 Batman and Robin
 [28, 878, 53]
 LEGO DC Comics Super Heroes: Batman: Be-Leaguered
 [28, 12, 16, 10751]
 Batman James Batman 75th Anniversary Short
 [28, 16, 878, 10770]
 
 SPL-005  Print movie title/s with pallindrome string in it
 Movie Title 
 Pallindrome in movie title 
 Batman: Return of the Kayak Crusaders
  Kayak
  
 SPL-006 Print movie title/s which contains title of another movie	
ovie Title containing another movie title 
 Another Movie Title 
 The Dark Knight Rises
 The Dark Knight
 Scooby-Doo Meets Dante
 Dante
 Batman James Batman 75th Anniversary Short
 James Batman
 
 For detailed walkthrough about the framework please contact mirtunjay1984@gmail.com