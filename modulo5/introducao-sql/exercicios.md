INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "fulano",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);


-- 3 - a

SELECT * FROM Actor WHERE gender="female"


-- 3 - b.
SELECT salary FROM Actor WHERE name = "Tony Ramos"


-- 3 - c. 

SELECT * FROM Actor WHERE gender = "invalid";

-- 3 - d.
SELECT id, name, salary FROM Actor WHERE salary <= 500000;

-- 3 - e. 
SELECT id, nome from Actor WHERE id = "002";

-- coluna "nome" desconhecido. a coluna nome não existe.

-- 4 - a.
like - indica se existe algo como o que foi proposto no argumento

between - indica se  existe algo que está entre dois valores

not - indica negação de determinado statement

-- b. 
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;

-- c.
SELECT * FROM Actor WHERE (name like "G%" OR name like "g%");

-- d. 
SELECT * FROM Actor WHERE (name like "A%" OR name LIKE "a%" OR name LIKE "G" OR name LIKE "g%") AND (salary BETWEEN 300000 AND 900000);

