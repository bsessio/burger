USE jawsDBname;
-- Creates burgers DB. 
-- DROP DATABASE IF EXISTS burgers_db; for use if desired.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Creates table of burgers, with auto-incrementing ID, burger name, and devoured state.
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(225) NOT NULL,
    devoured BOOLEAN DEFAULT false
)