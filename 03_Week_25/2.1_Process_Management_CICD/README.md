# CI/CD & Process management (by Sargam)

### What will we be discussing about today?

- Start off with QnA if you have any for me for 5min
- Process management
- Simply understanding CI/CD
- Writing actionable scripts used for CI/CD
- Deploying a sample nextjs application on ec2 with CI/CD.

##

### Process management 

Keeps a process running unless stopped explicitely.

**Key Feature :**

- Keeps apps running continuously.
- Automatically restarts crashed apps.
- Provides monitoring and logging.
- Supports running multiple app instances for better performance.

**Installation :**

```bash
npm i -g pm2
```

**NOTE :** 
1. The command to know the processes running on all the ports is `lsof`.
2. The command to know the process running on a specific port is `lsof -i :3000`.
2. The command to kill the process running on a specific port is `kill PID`. `PID = Process ID`

**Terms to understand**

- curl: similar to postman but for terminal. For example ru `curl localhost:3000`.
- lsof: this gives you the process id for a given port.

##

### CI/CD

**Continuous Integration**

Continuous Integration (CI) is a development practice where developers frequently integrate their code changes into a shared repository, preferably several times a day. Each integration is automatically verified by

1. Building the project and
2. Running automated tests.

This process allows teams to detect problems early, improve software quality, and reduce the time it takes to validate and release new software updates.

**Continuous Deployment**

As the name suggests, deploying your code `continuously` to various environments (dev/stage/prod).

##

### Some special files in github

In a codebase if a file is inside of `.github/workflows`

It is considered a CI file which means github will run the contents of the files whenever the conditions are met.

**Some useful cases where this might be handy**:

- To run unit/integrated tests
- To run lint/format checking
- To build the application
- Deploy it whenever someone pushes their code

##

### Simple CI script

- Create a git repo
- Create a file named `.github/workflows/hello.yml`

```yml
name: GitHub Actions Demo
run-name: ${{ github.actor }} is testing out GitHub Actions 🚀
on: [push]
jobs:
  Explore-GitHub-Actions:
    runs-on: ubuntu-latest
    steps:
      - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
      - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
      - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
      - name: Check out repository code
        uses: actions/checkout@v4
      - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
      - run: echo "🖥️ The workflow is now ready to test your code on the runner."
      - name: List files in the repository
        run: |
          ls ${{ github.workspace }}
      - run: echo "🍏 This job's status is ${{ job.status }}."
```