# javascript-sdk-activation-perf-demo


This project is a simple node server that allows you to 'stress test' the performance of the activation calls of Optimizely's Full Stack JS SDK for a given amount of users

Required
- Latest version of Node and NPM
- Access to Optimizely Full Stack

### To get started:

1. Clone the repo and make sure you're in the project folder 'batch-events-demo'
2. In your Optimizely Full Stack Project, create an experiment called "BATCH_EVENTS_TEST". Add 2 variation names and an event -- the naming convention isn't important for this demo. 
2. Run ```npm install``` to install neceessary packages
3. In the ```index.js``` file, change ```javascript const DATAFILE_URL``` (line 15) to your datafile url from your Optimizely Full Stack project.
4. In ```index.js``` on line 20 you will see the variable ```const NUM_USERIDS``` which is set to 10000. Feel free to change this to what number you want. This number represents how many user ids will be generated by userIdsHelper function and passed through the Optimizely ```activate``` function.
5. Run ```node index.js | gnomon elapsed-total``` in your your terminal
6. The last line in your terminal will show you the total time it took to create an Optimizely client and run the number of activations you specified.

