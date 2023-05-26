# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Within a Github action that runs whenever code is pushed.
The automated tests should be run every time there is a change within the code as any change could have larger repercussions that cause the program as a whole to fail. Running the automated tests whenever the code is pushed will help identify what test the changed code fails, if any, and makes a more complete check than one would usually do in their local machine since it is possible that between doing the automated tests, and pushing the code, one may have accidentally changed something. It also makes sure before deploying that the code is correct rather than risking deploying something that causes everything to fail.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No. Unless a function's return is based on a user input, then maybe. End to end tests should be used to test what actions the use might take and whether features that involve user input are working properly.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No. Unit testing is not thorough enough that I would consider it over end to end testing. This is because the "message" features involves two users, so there is a limit to how much can be tested with unit tests regarding both user's inputs.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes. Unit testing can be used to test the messaging application's response to an input of over 80 characters since while it is based on user input, any input can actually be used to test it.
