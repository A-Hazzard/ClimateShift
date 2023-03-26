-- Active: 1678170583678@@127.0.0.1@3306
USE drgn_studio;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(150) NOT NULL UNIQUE,
  email VARCHAR(254) NOT NULL,
  password VARCHAR(128) NOT NULL,
  is_superuser BOOLEAN NOT NULL DEFAULT FALSE,
  is_staff BOOLEAN NOT NULL DEFAULT FALSE,
  is_active BOOLEAN NOT NULL DEFAULT FALSE,
  date_joined DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_login DATETIME NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE blogs (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (username, email, password, is_superuser, is_staff, is_active)
VALUES ('admin', '868drgnstudio@gmail.com', 'admin', TRUE, TRUE, FALSE);


CREATE TABLE ABOUT(
  information VARCHAR(250) NOT NULL
);

INSERT INTO ABOUT (information) VALUES ("Welcome to NE1-FREELANCE");

SELECT * FROM users;
SELECT * FROM ABOUT;
CREATE USER 'drgnstudio'@'0.0.0.0' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON drgn_studio.* TO 'drgnstudio'@'0.0.0.0';
 
 