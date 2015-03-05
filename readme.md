# Python Skeleton

A default project skeleton for Python web applications. 

## Directory Structure

    /ansible
    /build
    /gulp
    /nginx
    /node_modules
    /secure
    /source
    	/app
    		/views
    		... 
    	/data
    		/db
    		/logs
    	/public
    	/static
    	/tests
    	requirements.txt
    /uwsgi
    /vagrant
    /virtualenv
    .envrc
    .gitignore
    gulpfile.js
    package.json
    project.sublime-project
    readme.md

### Breakdown

**/ansible**  
Contains all the ansible inventory and tasks (taken from [https://github.com/simoncoulton/ansible](https://github.com/simoncoulton/ansible))

**/build**  
Empty directory that contains output from running the gulp tasks and unit tests

**/gulp**  
Contains all the gulp tasks, pathing can be configured within `config.js`

**/nginx**  
Nginx related configuration files, to be symlinked

**/node_modules**  
Only created once `npm install` has been run, ignored from git

**/secure**  
Configuration settings that shouldn't be committed to the public repository

**/source**  
All application related source code

**/source/app**  
Python application source code

**/source/static**  
Static web assets (css/sass/js/images) that are to be compiled

**/source/public**  
Publically accessible files (compiled from /source/static)

**/uwsgi**  
uwsgi related configuration files, to be symlinked

**/vagrant**  
The vagrant file required to create the vagrantbox (taken from [https://github.com/simoncoulton/vagrant](https://github.com/simoncoulton/vagrant))

**/virtualenv**  
Only created once `pyvenv` creates the virtualenv

# Gulp Workflow

Several gulp commands are available:

# Language Dependencies

**Node**

Used for Gulp and it's associated tasks.

**Ruby**

Used for compiled SASS (sass) and SASS linting (scss-lint)

**Python**

For your project obviously ;)

# Other Dependencies
1. direnv
2. Ansible
3. Vagrant

# Deployment steps

1. Check out code
2. Create virtualenv and install Python dependencies
3. Install Ruby dependencies
4. Install Node dependencies
5. Run `gulp build`, lints JS/SASS (output saved to ./build), collects static resources (symlinks all to ./build), compiles SASS, concatenates JS, minifies images. All generated CSS/JS/image files are then saved to ./source/public (publically accessible)
6. Run `gulp clean` to remove the contents of the build directory (automatically run on `gulp build`).
