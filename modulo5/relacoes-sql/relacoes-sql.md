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


