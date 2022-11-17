### Exercício 1
a) ALTER TABLE Actor DROP COLUMN salary;
    - Remove a coluna salary da tabela Actor.
b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
    - Renomeia uma tabela.
c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
    - Renomeia a tabela gender para gender, mas agora com até 255 caracteres.
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


### Exercício 2
a) UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-04-22" WHERE id = "003";
    - Atualiza o nome e a data de nascimento do ator com id 003.
b) UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
    - Atualiza o nome do ator com nome Juliana Paes para JULIANA PAES.
c) UPDATE Actor 
    SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male"
    WHERE id = "005";
    - Atualiza todos os dados do ator com id 005.

### Exercício 3
a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";
    - Deleta o ator com nome Fernanda Montenegro.
    - Antes rodei o comando SET SQL_SAFE_UPDATES = 0; para liberar o safe mode.
b) DELETE FROM Actor WHERE salary > 1000000;
    - Deleta todos os atores com salário maior que 1 milhão.

### Exercício 4
a) SELECT MAX(salary) FROM Actor;
    - Retorna o maior salário da tabela Actor.
b) SELECT MIN(salary) FROM Actor;
    - Retorna o menor salário da tabela Actor.
c) SELECT COUNT(*) FROM Actor WHERE gender = "female";
    - Retorna a quantidade de atores do gênero feminino.
d) SELECT SUM(salary) FROM Actor;
    - Retorna a soma de todos os salários da tabela Actor.

### Exercício 5
a) A query retorna a quantidade de generos distintos na tabela Actor.
b) SELECT id, name FROM Actor ORDER BY name DESC;
    - Retorna o id e o nome dos atores em ordem decrescente.
c) SELECT * FROM Actor ORDER BY salary;
    - Retorna todos os atores em ordem crescente de salário.
d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
    - Retorna os 3 atores com maior salário.
e) SELECT AVG(salary) FROM Actor GROUP BY gender;
    - Retorna a média de salário por gênero.

### Exercício 6
a) ALTER TABLE Movie ADD playing_limit_date DATE;
    - Adiciona uma coluna na tabela Movie.
b) ALTER TABLE Movie CHANGE rating rating FLOAT;
    - Altera o tipo da coluna rating para float.
c) UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001";
    - Atualiza a data de fim de exibição do filme com id 001.
d) DELETE FROM Movie WHERE id = "002";
    - Deleta o filme com id 002.

### Exercício 7
a) SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
    - Retorna a quantidade de filmes com rating maior que 7.5.

b) SELECT AVG(rating) FROM Movie;
    - Retorna a média de rating dos filmes.

c) SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
    - Retorna a quantidade de filmes que ainda estão em cartaz.

d) SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();
    - Retorna a quantidade de filmes que já foram lançados.

e) SELECT MAX(rating) FROM Movie;
    - Retorna o maior rating de um filme.

f) SELECT MIN(rating) FROM Movie;
    - Retorna o menor rating de um filme.

### Exercício 8
a) SELECT * FROM Movie ORDER BY title;
    - Retorna todos os filmes em ordem alfabética.

b) SELECT * FROM Movie ORDER BY title DESC LIMIT 5;
    - Retorna os 5 filmes com maior rating em ordem decrescente.

c) SELECT * FROM Movie WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;   
    - Retorna os 3 filmes que já foram lançados em ordem decrescente de data de lançamento.

d) SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
    - Retorna os 3 filmes com maior rating em ordem decrescente.

