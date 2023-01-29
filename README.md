# Chatbots Automation using Cypress Automation tool (Cypress 12.2)
1. Project commands
   i)   npm i - installs the dependencies of the project
   ii)  npx cypress open - opens the cypress test runner and can run the tests in browsers of choice
   iii) npm run test - runs the tests in headless mode with HTML reports
2. All the test files will be under 'e2e' folder.
3. Bugs are reported under 'Bugs' folder and its respective screenshots under 'screenshots' folder.
4. Reports are generated under 'cypress/reports' folder.
5. Integration with a CI provider is demonstrated in '.circleci/config.yml' file.
6. Test cases for few conversations are written in 'EPIC002_ConversationFlow: TC003-withInputField.cy.js, TC004-withMenuOptions.cy.js, TC005-withSpeechRecognition.cy.js'
7. Additional recommendations for conversation testing are in 'TC006_intelligence.cy.js, TC008_userIsEngaged.cy.js' files
8. Additional test suites are: 'EPIC003_EmailChatShareFlow','EPIC004_ConversationFlow_Viber','EPIC005-ConversationFlow_Messenger'
