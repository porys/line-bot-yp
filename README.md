# LINE Messaging API Callback Bot with Heroku

## What is this?

This helps developers to create their own callback server on Heroku for LINE Messaging API

## How to deploy on Heroku

### Step 1
Get Channel Secret and Channel Access Token from LINE developers page.

### Step 2 
Tap the deploy button below.

(https://heroku.com/deploy?template=https://github.com/porys/line-bot-yp)

### Step 3

Fill in the form and run your instance.

### Step 4

Tap the **Manage App** button and copy the name of your Heroku instance.

### Step 5

Set the webhook URL for your Channel on the Channel Console using the following URL:
`https://${YOUR_HEROKU_APP_NAME}.herokuapp.com/`

### Step 6

Use Heroku Logs to identify and monitor Ids and requests 
