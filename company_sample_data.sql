CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE directors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    company_id INT REFERENCES companies(id)
);

INSERT INTO companies (name, description) VALUES 
('TechCorp', 'TechCorp specializes in AI-driven solutions.'),
('Innovatech', 'Innovatech leads in sustainable technologies.'),
('FutureWave', 'FutureWave pioneers future-ready applications.');

INSERT INTO directors (name, company_id) VALUES 
('Alice Johnson', 1), 
('Bob Smith', 1),
('Carla Green', 2), 
('Daniel Brown', 2),
('Eve Turner', 3), 
('Frank White', 3);
