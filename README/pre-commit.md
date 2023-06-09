// create a file pre-commit in folder .git/hooks
touch .git/hooks/pre-commit

// permission to the file to execute
chmod +x .git/hooks/pre-commit

// script to be added in pre-commit hook. package.json has script for precommit
#!/bin/sh
echo "Running pre-commit hook"
npm run precommit

echo "Finished running pre-commit hook"

//Verify that the Git configuration allows the execution of hooks. Run the following command to check:
git config core.hooksPath

// git config to hooks
git config core.hooksPath .git/hooks/
