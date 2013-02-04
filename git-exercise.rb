1.Create a repository
  *On github i have created a account and create a repository 'exercises' on using 'create new repo' link, to commit the exercises of http://vtapp.vinsol.com.
  *Genrtate the ssh key and adding it to github account 
    A. cd ~/.ssh
    B. ssh-keygen -t rsa -C "ashutosh.tiwari@vinsol.com"
    c. add this to github account/ssh Keys with name vinsol demo. 
  *On my system i made a dir in/opt named 'exercises' and then intialize with empty git by using command 'git init'
  *Added a file '.gitignore'
2.Make some changes -- add some files, change content of some files
  *Changes the 'git-exercise.rb' file.
  *Checking diff of local file to remote with 'git diff git-exercise.rb' command.
  *Added a file 'README'
  *git add README
  *checking diff ,git diff git-exercise.rb
  *git add git-exercise.rb
  *git commit -m"Updated git-exercise"
  *git push   
3.Commit changes
  *chceking status through 'git status'
  *checked diff for file shown in status through 'git diff filename'
  *commit the changes, git commit -m "Commiting changes" git-exercise.rb
  *pushing it git push   
4.Repeat steps 1-3 for 2 more times. try to remove and ignore some files . Use git diff before each commit.
  *Repeated it by changing the file and commiting it everytime with extended 'git-exercises.rb' file.
5.Create changes and revert those changes using git when those changes are not added to staging are
  *Changed the README file 
    A. echo "changing the README file" >> README
  *Reverting the changes 
    B. git checkout README
6.Create changes and revert those changes after adding changes to staging area 
  *Changed the README file
    A. echo "Ashutosh is currently working for vinsol" >> README
    B. git add README
  *Reverting the changes after it added to the staging area
    A. git reset HEAD READM
    B. git checkout README
    OR We can also revert it through using Head from 'git log' and specifying specific commit with options availabel to git reset.
7.Create change and revert those changes after committing those changes .
    A. echo "Ashutosh is currently working for vinsol" >> README
    B. git commit -m"changed README file" README
  *Reverting the changes after commiting
    C. git revert HEAD --no-edit
8.Check repository status before adding changes to staging area, after adding changes to staging area and after committing changes .
  A. echo "Ashutosh is currently working for vinsol" >> README
  B. git status And then git diff README
  C. git add README
  D. git status (showing modified README)
  E. git commit -m "Tracking repository status" README
  F. git status and then git log(status show nothing about README but log shows commits and modified README)
  G. git push
9.Display all the commits .
  A. git log (shows all commits , can be customized with option of git log)
  B. git rev-list --remotes (shows commit version )
  C. git branch -r --contains $commit(list the branch that have commits.)
10.Display a specific commit 
  A. git rev-list --remotes and then pick first commit 
  B. git show 52354edde49a7ff106ea9d8d37f732.a43da03c5e
11.Create branches called "feature1" and "feature2" from master. 11 . Delete branch "feature2"
    A. git checkout -b 'feature1'(if you are already on master branch otherwise first checkout'git checkout master' to master branch)
    B. do the work in current branch and commit it if you want otherwise switch to next step. 
    C. git push --all(it will create the branch )
  * creating feature2 branch
    A. git checkout master
    B. git checkout -b 'feature2'
    C. git push --all
    D. git branch -r(shows all master,feature1 and feature2)
  *deleting feature2 branch
    A. git branch -d feature2
    B. git branch -l(shown only two branch not shown feature2)
    C. git branch -r(shows all master,feature1 and feature2)
    D. git push origin :feature2
    E. git branch -l(shown only two branch not shown feature2)
    F. git branch -r(shown only two branch not shown feature2)
12.Make some commits on "feature1",Make some commits on branch "master",merge branch "feature1" in master
   A. echo "Testing for merging and rebasing" >> README on feature1
   B. git commit -m"Read Me Doc" README and then git push
   C. echo "Comparing for merging and rebasing" >> README on master
   D. git commit -m"Read Me Doc for master" README 
   E. git checkout master
   F. git merge feature1
   G. got conflict resloving the conflict and then git add file and git commit -a
   G. git push
13.Create branch "feature2" from master,Make some commits on "feature2",Make some commits on branch "master",rebase branch "master" in "feature2"
  *Creating branch feature2
   A. git checkout -b feature2
   B. git push --all
  *commiting the changes and rebasing 
   A. echo "Testing for merging and rebasing" >> README on master
   B. git commit -m"Read Me Doc" README and then git push
   C. echo "Comparing for merging and rebasing" >> README on master
   D. git commit -m"Read Me Doc for master" README and the git commit
   E. git checkout feature2
   F. git rebase master


