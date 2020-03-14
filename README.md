# outfitbuilder

* Heroku link: https://outfitbuilder.herokuapp.com/

* Purpose: create outfits/outfit inspo from head to toe using links/text/images 

* Problem: User doesn't don't know what to wear/wants to update their wardrobe/create new outfit ideas/inspo
General App Idea/Purpose: create outfits/outfit inspo from head to toe using links/text/images and view outfits created by other users
Who Would Use It: anyone with the above problems that is also interested in new fashion ideas.

* Technologies used: 
mongo, mongoDB, mongoDB compass, JavaScript, EJS, node.js, express, HTML/CSS, Heroku for hosting.

* Approach taken: Set up authentication first, then created the REST routes, then added styling, and finally deployed to Heroku. Wanted users to be able to create outfits/outfit inspo with multiple components for themselves and to share with other users.

Unsolved problems/changes to make:
* ~~Have logged in username and logout button show on each page~~
* Have options to filter results by user or tags.
* ~~Have tags show as an array rather than just one string so that results can be filtered by tags in the future.~~

User stories:
* As a user, I click on the sign up button to create an account. Once I've done so, I should be able to click log in, enter my username and password, and log in to page. Once logged in, I should be brought to an index page where I can view all created outfits, to or click a button to add a new outfit. 
* After clicking on the Add New button, I can add:
* hats/hair accessories
* --jewelry/accessories
* --top (dresses go here also)
* --bottoms
* --shoes
* tags for outfit occassion (party, fitness, work attire etc.)
* -After clicking submit, I will be brought to the show page for that outfit.
* -After clicking on the back to index link, all outfits created are viewable with a thumbnail of the top showing and the user that created it. Each outfit is clickable to bring up it's show page.
* -On the show page, the tags and username of the user who created the outfit show underneath the images of the outfit components. I should be able to click a link back to the index page from the outfit show page.
* If I am viewing the show page for an outfit I created, the edit and delete buttons will be visible, but will not show if I'm viewing outfits created by other users.
* -Clicking the edit button will allow me to edit all fields in show page except the user. 
* -Submitting the form from the edit page will redirect me to the show page and it should be updated to reflect any changes I made.
* -Clicking the delete button from the show page will redirect to the index page and the outfit that was deleted should no longer show.