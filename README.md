# Drifting Apart

Drifting Apart Explained

Drifting Apart is an app created for drifters to track their vehicle preparation and specific tasks that they have created to prepare for upcoming drift events.

## Setup: Follow these steps
1. Open the terminal and clone the repository git@github.com:Slyydz/drifting-apart.git
2. In order to begin serving the project cd into drifting-apart.
3. Type npm install and wait for all dependencies to be installed.
4. After installing the dependencies, in the drifting-apart directory run npm start to serve on your local host. This should serve in localhost: 3000.
5. In a separate window in the temrinal cd into drifting-apart.
6. cd into api/ and type json-sever -p 8088 -w database.json.
7. Serve localhost:8088 in the web browser to retrieve data from the database.

## How to navigate Drifting-apart
Upon serving the correct hosts through your browser, you will be prompted with an option to sign in or register as anew user. You will need to register as a new user.

After creating your account, you will notice five nav bar selections allowing users to navigate to Home, My Vehicles, Upcoming Events, Past Events, and Logout.

You can begin your experience by navigating to my vehicles to add whatever vehicle you may take to drift events. After that you should see your vehicle on the screen. 

Once you have done this you can navigate to Upcoming Events to see other users events, create your own, or edit/delete your events. After you have created an event you can select the "Show Tasks" button to show the specific tasks for said event. You can see (but not edit) other users completed and incomplete tasks on this screen.

If you selected one of your events you can edit, delete, or set your tasks to completed. You can also add new tasks to keep track of. 

If you want to see preparation you have done in the past then you can navigate to Past Events to see events that have passed the current date and navigate through them.
