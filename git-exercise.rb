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
    B. git commit -m"changed README file" README
    C. echo "demo of git commit --amend" >> README
    D. git commit --amend README git-exercise.rb
  *Reverting the changes after it added to the staging area
    A. git reset HEAD README
