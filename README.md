# netfilx-clone
Netflix clone built with Firebase authentication for users Here we can add movies or TV shows to our like page, or we can also remove them from that page. We can also filter the movies or TV shows according to genre.
 ## Technology Stack

![Screenshot 2024-02-04 at 3 43 38 PM](https://github.com/yash7488/netfilx-clone/assets/80100162/3775baf5-df86-4160-bd1f-aceed0e12283)
![Screenshot 2024-02-04 at 3 44 01 PM](https://github.com/yash7488/netfilx-clone/assets/80100162/fed27367-28f0-4159-8ceb-9539269c8c9b)

netflix-clone is built using the following technologies:

-   **Frontend**: React.js
-   **Backend**: Node.js with Express.js
-   **Database**: MongoDB
   


## Prerequisites

Before running netflix-clone, ensure that you have the following software installed:

-   Node.js: Make sure you have Node.js installed on your system. You can download it from the official Node.js website and follow the installation instructions for your operating system.
    
-   MongoDB: Install MongoDB and make sure it is running on your local machine or provide the connection details for a remote MongoDB database.

## Installation

To install and run netflix-clone locally, follow these steps:

1.  Clone the repository:
    ```sh    
       git clone https://github.com/yash74880/netfilx-clone.git
    ```
    
2.  Navigate to the cloned repository:
     
    `cd netflix-clone` 
    
3.  Install the dependencies for the frontend:
    
    ```sh    
    cd client
    npm install
    ``` 
    
4.  Install the dependencies for the backend:
        
    ```sh    
    cd ../server
    npm install
    ```
    
## Configuration

netflix-clone requires configuration for various services. Here are the steps to set up the required configuration:

### Backend Configuration

1.  Open the `server` directory.
    
2.  Create a `.env` file in this directory.
    
3.  Set the following environment variables in the `.env` file:
    
    -   `MONGO_URL`: The MongoDB connection string.
    
    -   `PORT` : 3000.
                
    -   `JWT_KEY`: A secret key used for JWT token generation and validation.
        
4.  Save the `.env` file.

## Running netflix-clone

After completing the configuration steps, you can now run netflix-clone locally.

1.  Start the backend server:
	```sh
	cd server 
	node index.js
	```
2. Start the frontend development server:
	```sh
	cd ../client
	npm start
	```
3. Access netflix-clone in your browser at `http://localhost:3001`.

