table of content
=======
* [introduction](#leadshareapp)
* [demo](#demo)
* [usage](#usage)
* [api](#api)
* [authors](#authors)
* [jobs](#jobs)
* [contribute](#contribute)
* [repository description](#repository)
* [license](#license)




LeadShareApp
=====
[[back to top](#table-of-content)]

PaaS for sharing costs for google ad campaigns to get leads




demo
=======
[[back to top](#table-of-content)]

__☠☠☠ section is under construction ☠☠☠__




usage
=======
[[back to top](#table-of-content)]

__☠☠☠ section is under construction ☠☠☠__




api
=======
[[back to top](#table-of-content)]

__☠☠☠ section is under construction ☠☠☠__




authors
=======
[[back to top](#table-of-content)]

* [ninabreznik](https://github.com/ninabreznik "Nina Breznik")
* [serapath](https://github.com/serapath "Alexander Praetorius")




jobs
=======
[[back to top](#table-of-content)]

There is more jobs in the source code marked with `// @TODO: <job description>` and eventually some jobs might be listed under the [LeadShareApp issues](https://github.com/ninabreznik/LeadShareApp/issues "LeadShareApp - open issues") page, which can also be accessed through [waffle.io](https://waffle.io/ninabreznik/LeadShareApp "LeadShareApp - open issues").
* __@TODO:__ Create a Github Page
  * https://github.com/jekyll/jekyll
  * https://help.github.com/categories/20/articles
* __@TODO:__ Include Testing via "Specification Driven Development" using gherkin dsl & TESTEM
  * https://github.com/cucumber/cucumber/wiki/Gherkin
  * npm install mocha --save-dev
  * npm install chai --save-dev
  * https://github.com/airportyh/testem
* __@TODO:__ Add CHANGELOG File
* __@TODO:__ This section should instead list all the TODO-Branches currently available + a link to the "TODO Description file in that branch"
  * The README.markdown in that branch could list the description under the "jobs section"
* __@TODO:__ add workflow description
  * http://www.wolfe.id.au/2014/02/01/getting-a-new-node-project-started-with-npm/ 
  * http://quickleft.com/blog/creating-and-publishing-a-node-js-module
  * http://www.devthought.com/2012/02/17/npm-tricks/
* __@TODO:__ jobs like on: https://github.com/topcoat/resin




contribute
=======
[[back to top](#table-of-content)]

### PREPARE SYSTEM
  * install [git](http://git-scm.com "git") if it is not yet installed on your system
  * install [node](http://nodejs.org "nodejs") if it is not yet installed on your system
  * open a terminal on your system and navigate to your favourite workspace folder
    * _(you might need to prefix some of the following commands with `sudo` to make them work)_

### START PREPARING LEADSHAREAPP PROJECT
* `git clone https://github.com/ninabreznik/LeadShareApp.git`
* `npm install -g stylus nib jeet rupture`
* `npm install`
* `npm update`
* `stylus -u jeet -u nib -rupture -w stylus.styl`
* `bundle install`
* `rake db:migrate`
* `npm start & rails s`
* load main HTML project file by opening and pointing your browser to:
  * a server that serves the `./DEMO/dev.html` file _(e.g. localhost:3000/)_
    * __HINT1:__ this might only works with CORS disabled. In order to do so:
      * mac osx `open -a Google\ Chrome --args --disable-web-security`
      * linux `google-chrome --disable-web-security`
      * windows `chrome.exe --disable-web-security`
    * __HINT2:__ the server can be administrated through _(e.g. localhost:3000/admin)_
      * __user:__ admin@example.com
      * __pass:__ password

__... HAPPY CODING :-)__



### How to shorten feedback cycles during development
(Process to use for projects, where dependencies projects have to be developed in parallel to the main project)
In order to use changes made in a dependency project, they have to be commited and pushed and the version has to be increased and published.
Afterwards, in the main project, the version for the updated dependency has to be adapted in `package.json` and `npm install` has to be run.
That is a lot of hassle to be done for each change.


### Solution
__Given:__ "Main Project" and "Dependency Project" are both `git clone`'ed to the local developer machine.
__Process:__
0. Open all those Project Folders in sublime editor and then use the terminal to...
1. Go to the "Dependency Project" repository and increase the "Version Number" in the `package.json` file, but don't `git push`.
2. Run `npm link` in the root directory of the "Dependency Project" repository.
3. Go to the "Main Project" repository and increase the "Version Number" of the "Dependency Project" in the `package.json` file.
4. Run `npm link 'dependency name'` in the root directory of the "Main Project" repository.
That's it, execute `npm start` in the "Main Project" repository and start hacking...

__Finishing:__ After all changes are done to both projects and you are satisfied with the result...
1. Go to the "Main Project" repository and run `npm link 'dependency name'` in the root directory.
2. Go to the "Dependency Project" repository and run `npm unlink` in the root directory.
3. Then `git commit` and `git push` all the changes to publish the new version.
4. Go to the "Main Project" repository and run `npm install` to get the new version of the dependency you just updated.

That's it.




repository
=======
[[back to top](#table-of-content)]

__☠☠☠ section is under construction ☠☠☠__




license
=======
[[back to top](#table-of-content)]

![CC BY-NC-ND 4.0](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License")

This work is licensed under <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode" alt="Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License">`CC BY-NC-ND 4.0`</a>.

__In short - you are free to:__

* __Share__ — copy and redistribute the material in any medium or format
The licensor cannot revoke these freedoms as long as you follow the license terms.
Under the following terms:

* __Attribution__ — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
NonCommercial — You may not use the material for commercial purposes.

* __NoDerivatives__ — If you remix, transform, or build upon the material, you may not distribute the modified material.
No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.
Notices:

You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.

No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.

[...more information](https://raw.github.com/ninabreznik/LeadShareApp/master/LICENSE "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License")
