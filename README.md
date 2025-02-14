## Task 1: Website Wireframe

![image](https://github.com/user-attachments/assets/d6eb5691-e3b4-42e0-9088-6d5309872739)
![image](https://github.com/user-attachments/assets/4060959d-045a-42c1-a1f9-f01340c96243)
![image](https://github.com/user-attachments/assets/65688434-e427-4f0b-9fc5-33ec43690723)
![image](https://github.com/user-attachments/assets/cc6dff36-db9d-4a84-ae6e-44b00b1f65e4)



## Task 2: Follow-up Questions

### Q1

My Mini-Project repo is public.

Website link:  https://swordfinger.github.io/

Mini-Project link:  https://github.com/Swordfinger/Swordfinger.github.io.git

### Q2

My personal website is for my online portfolio and to introduce myself. It consists of several main sections. First is the “About Me” section, where I briefly introduce my background. This is followed by the “My Project” section, which shows some of my personal and academic projects on GitHub. After that, there was the “Skills, Work Experience, and Education” section, where I introduced my skilled programming languages and applications, my work experience, and my educational background. Next is the “Hobbies” section, where I focus on my personal interests such as video games, Rubik's Cubes, computers, and travelling. Finally, there is a “Contact” section, which provides ways to contact me, such as e-mail or GitHub.

### Q3

A favicon is the small icon associated with the websites; it is displayed in the browser tab, bookmarks, and search results. It's important for the SEO because a favicon makes a website look more unique, more professional, and more recognizable in browser tabs. Helps users quickly identify what this tab is for.

### Q4

GitHub Pages is a static site hosting service that allows users to deploy websites directly from a GitHub repository. It is hosted on GitHub's server; otherwise, the developer may need to pay extra costs on the server loan. Also, it's much easier to use GitHub to set up a website, especially with all those extremely useful features on the GitHub platform.

### Q5

`name: CI`

  The part is to name this GitHub Actions workflow “CI” which is Continuous Integration.

`on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]`

  "on" is to define the conditions that trigger this workflow. So therefore, in this "function", it has "push," which triggers the workflow every time someone "commits," which "push" code to the main branch. Then the "pull_request" means that it triggers the workflow every time someone makes a Pull Request to the main branch.

`jobs:
  build:
    runs-on: ubuntu-latest`

  The jobs "function" is the list of tasks in the workflow. In the function, "build" is a task build. "runs-on: ubuntu-latest" means that the task will run on the latest version of the Ubuntu Linux server.

`steps:
    - name: Checkout code
    uses: actions/checkout@v2`

  The steps "function" will define the specific steps of the task. "-name: Checkout code" which is the name of the step to pull the repository code. "uses: actions/checkout@v2" is to use the official actions tool to download the repository code.
  
`-name: Set up Python
    uses: actions/setup-python@v2
    with:
      python-version: '3.8'`

  "name: Set up Python" means Set up Python environment. "uses: actions/setup-python@v2" means install Python using the official GitHub setup-python Action. "python-version: '3.8'" indicates the version of Python, which is Python version 3.8.

`-name: Install dependencies
    run: |
      python -m pip install --upgrade pip
      pip install -r requirements.txt`

"name: Install dependencies", this step include "run: |" which will run the shell command, "python -m pip install --upgrade pip" and "pip install -r requirements.txt" which will upgrade the pip and the Python package manager. Also, install all Python dependencies listed in the requirements.txt file.

`-name: Run tests
    run: |
      pytest`

"name: Run tests" this step will execute the test code. Then "run: | pytest" will run  Python testing framework to check if the code is correct.

### Q6

My personal website uses HTML and CSS. GitHub Pages and Actions are used for the deployment of the website. I chose these stacks because they are necessary and free. HTML and CSS are the languages used for the development of my personal website because they are necessary for the Web development and since the project doesn't need a backend, I decided to use only these two languages in order to keep things simple and neat. As for GitHub Pages and Actions, I don't think there is a reason not to use GitHub for my personal website, even if professor didn't require it.

## Task 3: Github Video

### Q1

Pull Requests is a request of merge of branches for collaborative development. What it does is, in a group project, if I want to merge my branch into the master branch, I can set up a pull request, and other team members will be notified that I want to merge my branch into the master branch so they can review and comment on the commits and file changes that I've done on my branch, after communicating and deciding, then we can merge into the master branch. The Pull Request will show if the code in my branch can automatically merge to the master branch or not on GitHub. Also, after merge into the master branch, I can delete my branch on GitHub.

### Q2

The green label indicates there are 34 lines of code that were being added in my branch; the red label indicates there are 42 lines of code that were deleted in my branch. This will be shown in the reviewing stage of the Pull Request.

### Q3

#### 3a

When this command was entered, the code in the “test” branch will start to merge into the the current “HEAD” branch which is the “develop” branch, now the latest code of the “test” branch and the “commit history” of the “test” branch will try to merge with the “HEAD” , which is the “develop” branch’s commit history and code, but if the two branches have different versions of code in the same location in some file, Git can not automatically merge them, and it will generate a “conflict”.

#### 3b

When this message appears, it means that there is a “conflict” in some part of the code in the file, because that part of the code has different code in different branches. Because the code is different, git doesn't know which version we want when trying to merge two branches. So we have to decide for git. To tell git what that part of the code should be. To resolve the conflict, we need to edit the current file, first write out what that part of the code should be, and then delete the beginning of the conflict (<<<<<<HEAD), the delimiter (=======), and the end of the “conflict” (>>>>>> test). Then we can git add and commit.

#### 3c

The conflict start marker <<<<<<< HEAD (line 1) indicates the branch where the Head is currently on, which is on the “develop” branch. The separator ======= (line 4) is used as a demarcation between different code versions, representing the end of the “conflicting” code on “develop” branch,  also the start of the “conflicting” code in the other branch, while the end of the conflict marker >>>>>>> test in line 6 indicates that the other branch is the “test” branch,  also represents the end of the “conflict” code in the “test” branch. So above the separator, the code is belong to “develop” branch(line 2, 3), and below the separator the code is belong to “test” branch(line 5).
