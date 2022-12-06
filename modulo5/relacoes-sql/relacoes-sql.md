-- EXERCICIO 1
CREATE TABLE Rating (
	id INT PRIMARY KEY auto_increment,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

DESCRIBE Rating; 

-- A) Chave estrangeira é uma forma de vincular uma tabela a outra para que aja uma comunicação. Uma tabela "Empresta um identificador que poderá ser usado para outra tabela para acessar um de seus dados."


-- B) 

INSERT INTO Rating (comment, rate, movie_id) 
VALUES (
	"Muito Bom!",
    9,
    5
);

-- C) Não é possível adicionar ou atualizar uma linha filha, uma restrição de chave estrangeira falhou. 

-- D) 

ALTER TABLE Rating DROP COLUMN score;

-- E) 

DELETE FROM Movies WHERE Movies.id = 1;

-- Não é possível deletar uma linha pai


-- EXERCICIO 2

CREATE TABLE MovieCast (
	movie_id INT,
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- A) A tabela serve para fazer conexão entre a tabela Movies e Actors visto que se trata de uma relação N:M é necessário uma tabela intermediária.alter

-- B)

SELECT * FROM Actor;

INSERT INTO MovieCast(movie_id, actor_id)
Values (
     1,
     "002"
);

-- C) Não é possível adicionar ou atualizar uma linha filha.

INSERT INTO MovieCast(movie_id, actor_id)
VALUES (
	7,
    "006"
);

-- D) Não é possivel deleter ou atualizar uma linha pai

DELETE FROM Actor WHERE Actor.id = "002";

-- EXERCICIO 3

SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;

-- A) O operador INNER JOIN faz com que as tabelas juntem onde há intersecção das chaves estrangeiras, que é especificado com o operador ON.alter

-- B) 

SELECT Movies.id , title, rate FROM Movies INNER JOIN Rating ON movie_id = Rating.movie_id;
