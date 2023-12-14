import psycopg2
import os 
from dotenv import load_dotenv

# Load variables from the .env file into the connect
load_dotenv()

conn = psycopg2.connect(
    dbname = os.getenv('DB_NAME'),
    user = os.getenv('DB_USER'),
    password = os.getenv('DB_PASS'),
    host = os.getenv('DB_HOST'),
    port = os.getenv('PORT')
)

# Create a cursur object to execute SQL queries
cur = conn.cursor()

# Insert query
# insert_query = 'INSERT INTO users(username, email, age) VALUES(%s, %s, %s)'
# data_to_insert = ('Avi', 'Avi@gmail.com', 28) 
# cur.execute(insert_query, data_to_insert)

# Update query
# update_query = 'UPDATE users SET username = %s WHERE id = %s' 
# update_value = ('Dan', 1)
# cur.execute(update_query, update_value)

# Delete query
# cur.execute('DELETE FROM users WHERE id = %s', ('2'))

# Print execute
cur.execute('SELECT * FROM users')
rows = cur.fetchall()
for row in rows:
    print(row)

#commit
conn.commit()

# Close the cursur and the connection
cur.close()
conn.close()


# Managing a Simple User Database

# Scenario:
# You're building a basic user management system that interacts with a PostgreSQL database. 
# Users should be able to:

# View all existing users.
# Add a new user.
# Update a user's information.
# Delete a user.

# Tasks:
# Database Setup:

# Create a PostgreSQL database named user_management.
# Inside the database, create a table named users with columns: 
# id (integer, primary key), username (varchar), email (varchar), and age (integer).

# Python Script:

# Write a Python script that connects to the user_management database.
# Implement functions to perform the following operations:
# View all users from the users table.
# Add a new user to the users table.
# Update a user's information based on their id.
# Delete a user from the users table based on their id.

# User Interaction:

# Create a simple command-line interface (CLI) to interact with your Python functions.
# The CLI should provide options to view, add, update, or delete users, 
# and take appropriate inputs from the user to perform these actions.

# Testing:

# Test your Python script by adding users, viewing all users, 
# updating user information, and deleting users