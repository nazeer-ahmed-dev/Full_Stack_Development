# Git Cheet Sheet
## 1 - Install
    > Window        : http://windows.github.com
    > Mac           : http://mac.github.com
    > All platforms : http://git-scm.com
## 2 - Configure tooling 
    > git config --global user.name "[name]" : Sets the name you want attached to your commit transactions
    > git config --global user.email "[email address]" : Sets the email you want attached to your commit transactions
    > git config --global color.ui auto : Enables helpful colorization of command line output
## 3 - Branches
    >  git branch [branch-name] : Creates a new branch
    >  git checkout [branch-name]  : Switches to the specified branch and updates the working directory
    >  git merge [branch]  : Combines the specified branch’s history into the current branch. This is usually done in pull requests, but is a  important Git operation
    > git branch -d [branch-name ] : Delete the Specific Branch
## 4 - Create repositories
    > git init : Turn an existing directory into a git repository
    > git clone [url] : Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits
## 5 - The .gitignore file
    > Sometimes it may be a good idea to exclude files from being tracked with Git. This is typically done in a special file named .gitignore. You can find helpful templates for .gitignore files at github.com/github/gitignore
## 6 - Synchronize changes
    > git fetch : Downloads all history from the remote tracking branches
    > git merge : Combines remote tracking branch into current local branch
    > git push  : Uploads all local branch commits to GitHub
    > git pull  : Updates your current local working branch with all new commits from the corresponding remote branch on GitHub. git pull is a combination of git fetch and git merge
## 7 - Make changes
    > git log : Lists version history for the current branch
    > git log --follow [file] : Lists version history for a file, including renames
    > git diff [first-branch]...[second-branch]  : Shows content differences between two branches
    > git show [commit] : Outputs metadata and content changes of the specified commit
    > git add [file] : Snapshots the file in preparation for versioning
    > git commit -m "[descriptive message]": Records file snapshots permanently in version history
## 8  - Redo Commits 
    >  git reset [commit] : Undoes all commits after [commit], preserving changes locally
    > git reset --hard [commit] : Discards all history and changes back to the specified commit
## 9 - Github Flow 
![Github Flow ](https://github.com/nazeerahmedofficial/Full_Stack_Development/blob/main/GitHubPics/githubflow.PNG)
## 10 - Glossary
    > git: an open source, distributed version-control system   
    > GitHub: a platform for hosting and collaborating on Git repositories
    > commit: a Git object, a snapshot of your entire repository compressed into a SHA  
    > branch: a lightweight movable pointer to a commit
    > clone: a local version of a repository, including all commits and branches
    > remote: a common repository on GitHub that all team member use to exchange their changes
    > fork: a copy of a repository on GitHub owned by a different user
    > pull request: a place to compare and discuss the differences introduced on a branch with reviews, comments, integrated tests, and more
    > HEAD: representing your current working directory, the HEAD pointer can be moved to different branches, tags, or commits when using git checkout

## 11 - Others
### Rename folder/file
        > git mv [Folder/file name] [new name]
        > git add .
        > git commit -am "Rename"
        > git push origin master