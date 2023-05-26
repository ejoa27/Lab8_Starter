<<<<<<< HEAD
# Lab 8 - Starter
=======
# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Within a Github action that runs whenever code is pushed.
The automated tests should be run every time there is a change within the code as any change could have larger repercussions that cause the program as a whole to fail. Running the automated tests whenever the code is pushed will help identify what test the changed code fails, if any, and makes a more complete check than one would usually do in their local machine since it is possible that between doing the automated tests, and pushing the code, one may have accidentally changed something. It also makes sure before deploying that the code is correct rather than risking deploying something that causes everything to fail.
>>>>>>> 69a314cbe61873f8b499fd596bd9205795cad319
