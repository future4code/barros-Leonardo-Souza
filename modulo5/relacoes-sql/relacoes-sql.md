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