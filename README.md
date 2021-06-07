# Amazon Testing Suite
 
This testing suite demonstrate testing scenarios using cypress
 
### Contents
 
- [How to run testing suite on local machine](#-how-to-run-testing-suite-on-local-machine)
- [Test execution report](#test-execution-report)
- [Included Prettier](#included-prettier)
- [Jmeter](#jmeter)
- [Defect found](#defect-found)
 
## How to run testing suite on local machine
 
### On MacOS
 
Install NodeJS from https://nodejs.org/en/download/ if not already installed.
 
Clone git repo or download source code
 
```bash
git clone <repository-url>
```
 
Navigate to cloned folder using terminal
 
```bash
cd <path-to-directory>/AmazonCypressAutomation
```
 
Install node modules
 
```bash
npm install
```
 
Run testing from cypress node modules using following command. This will execute the testing scenarios in sequential manner as mentioned in cypress.json in headless mode
 
```bash
./node_modules/.bin/cypress run
```
 
If you want to run testing scenarios in headed mode, using following command
 
```bash
./node_modules/.bin/cypress run --headed
```
 
### On Windows
 
Install NodeJS from https://nodejs.org/en/download/ if not already installed.
 
Clone git repo via Github desktop, Gitbash or download source code
 
```bash
git clone <repository-url>
```
 
Navigate to cloned/copied folder using cmd
 
```bash
cd <path-to-directory>\AmazonCypressAutomation
```
 
Install node modules
 
```bash
npm install
```
 
Run testing from cypress node modules using following command. This will execute the testing scenarios in sequential manner as mentioned in cypress.json in headless mode
 
```bash
.\node_modules\.bin\cypress run
```
 
If you want to run testing scenarios in headed mode, using following command
 
```bash
.\node_modules\.bin\cypress run --headed
```

## Test execution report

Test execution html report is available in folder mochaswersome-report folder with name mochaawesome.html

View the test execution html report <a href="https://htmlpreview.github.io/?https://github.com/ayushigarg1/AmazonCypressAutomation/blob/main/mochawesome-report/mochawesome.html" target="_blank">here</a>, but it may take good amount of time to load.

## Included Prettier
 
Prettier is installed in the node modules, once you execute npm install. It will locally install into the project
 
## Jmeter
 
Jmeter .jmx file is included in Jmeter folder. It covers performance of Homepage and <a href="https://www.amazon.com/music" target="_blank">music</a> url of https://www.amazon.com. I've also included a screenshot of Dashboard.
 
Use following steps to execute jmx file
 
### On MacOS
 
- Install JDK 1.8 if not already installed from https://www.oracle.com/in/java/technologies/javase/javase-jdk8-downloads.html
- Download Jmeter zip from https://jmeter.apache.org/download_jmeter.cgi
- Unzip downloaded Jmeter zip
- With finder create a folder where you want to generate csv file and HTML report
- Using terminal navigate to Jmeter bin director
 
```bash
cd <path-to-jmeter-unzipfolder>/bin
```
 
- Execute following command to run performance test and generate report
 
```bash
sh jmeter -n -t "<path-to-jmeter-file>/AmazonHomepage.jmx" -l "<path-to-generate-report>/test1.csv" -e -o "<path-to-generate-html-report>"
```
 
### On Windows
 
- Install JDK 1.8 if not already installed from https://www.oracle.com/in/java/technologies/javase/javase-jdk8-downloads.html
- Download Jmeter zip from https://jmeter.apache.org/download_jmeter.cgi
- Unzip downloaded Jmeter zip
- With file explorer create a folder where you want to generate csv file and HTML report
- Using cmd navigate to Jmeter bin director
 
```bash
cd <path-to-jmeter-unzipfolder>/bin
```
 
- Execute following command to run performance test and generate report
 
```bash
jmeter -n -t "<path-to-jmeter-file>/AmazonHomepage.jmx" -l "<path-to-generate-report>/test1.csv" -e -o "<path-to-generate-html-report>"
```
 
## Defect Found
 
Identified a defect with displayed search count result for same search. Attached word document in defect folder with the details and steps to product it
