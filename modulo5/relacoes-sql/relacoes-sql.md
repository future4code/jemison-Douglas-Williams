### Exercício 1
a) Chave estrangeira é uma coluna que referencia uma chave primária de outra tabela. Chave primária é uma coluna que identifica de forma única uma linha de uma tabela.

b) INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

c) INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Muito bom!",
    7,
		"007"
);
    - Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4415744-douglas-porto`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
    - O Erro ocorreu porque o id do filme não existe na tabela Movie.

d) ALTER TABLE Movie DROP COLUMN Rating;

e) DELETE FROM Movie WHERE Rating;
    - Error Code: 1054. Unknown column 'Rating' in 'where clause'

### Exercício 2
a) CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
  - Cria a tabela MovieCast e já adiciona as chaves estrangeiras movie_id e actor_id

b) INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
    "004",
    "003"
);

c) SELECT * FROM MovieCast;
    - movie_id	actor_id
    - 004	      003

d) 

