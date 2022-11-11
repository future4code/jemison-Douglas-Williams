### Exercício 1
a) VARCHAR - Para uma string com um certo número de caracteres.
    DATE - Para uma data.
    PRIMARY KEY - Para uma chave primária.
    NOT NULL - Para uma coluna que não pode ser nula.

b) Quando usei o comando SHOW DATABASES, apareceu informações schema e o meu Name jbl-4415744-douglas-porto
Quando usei o SHOW TABLES, apareceu a tabela Actor criada anteriormente.

c) Ao usar o comando DESCRIBE Actor, apareceu as informações da tabela Actor.

### Exercício 2
a) INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "002", 
        "Glória Pires",
        400000,
         "1963-08-23", 
        "female"
);

b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
    Esse erro esta informando que possui umaChave primaria igual a que foi informada.

c) Error Code: 1136. Column count doesn't match value count at row 1
    Esse erro esta informando que a quantidade de colunas não corresponde a quantidade de valores informados.

d) Error Code: 1364. Field 'name' doesn't have a default value
    Esse erro retorna que está faltando um valor para a coluna name.
e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
    Esse erro retorna que o valor informado para a coluna birth_date não é uma data válida, pois está como number.
f) Foram criados mais atores.

### Exercício 3
a) SELECT * from Actor WHERE gender = "female"; 
    Retorna todas as informações das atrizes

b) SELECT salary from Actor WHERE name = "Tony Ramos"; 
    Retorna o salário do ator Tony Ramos

c) SELECT * from Actor WHERE gender = "invalid"; 
    Retornou a tabela vazia pois não possui nenhum ator com genero invalido

d) SELECT id, name, salary from Actor WHERE salary < 500000; 
    Retornou o id, os nomes dos atores com salario menor que 500000

e) SELECT id, name from Actor WHERE id = "002"; 
    Retornou o ator referente ao id 002

### Exercício 4
a) SELECT * from Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
    Retornou os atores que começam com A ou J e que tem salario maior que 300000
    Like é um comparador que pode ser usado para comparar strings, ele pode ser usado com % que significa qualquer coisa antes ou depois da string.
b) SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000;
    Retornou os atores que não começam com A e que tem salario maior que 350000
    Not é um comparador que inverte o resultado do comparador. Negação
c) SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
    Retornou os atores que tem a letra g ou G em seu nome
d) SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%") AND (name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;
    Retornou os atores que tem a letra g ou G em seu nome e a letra a ou A em seu nome e que tem salario entre 350000 e 900000

### Exercício 5
a)CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
   Text é um tipo de dado que pode ser usado para armazenar textos longos.

b)INSERT INTO Movie (id, title, synopsis, release_date, rating)
    VALUES(
        "001",
        "Se Eu Fosse Você",
        "Dois casais trocam de corpos e vivem as experiências um do outro.",
        "2006-01-06",
        7
    );

c) INSERT INTO Movie (id, title, synopsis, release_date, rating)
    VALUES(
        "002",
        "Doce de mãe",
        "Uma mulher se vê obrigada a criar os filhos do ex-marido, que está preso.",
        "2012-12-27",
        10
    );

d)INSERT INTO Movie (id, title, synopsis, release_date, rating)
    VALUES(
        "003",
        "Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma mulher que vive em uma fazenda com dois maridos.",
        "2017-11-02",
        8
    );

e) INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

### Exercício 6
a) SELECT id, title, rating FROM Movie WHERE id = "004";

b) SELECT * FROM Movie WHERE name = "Deus é Brasileiro";

c) SELECT id, title, synopsis FROM Movie WHERE rating > 7;

### Exercício 7
a) SELECT * FROM Movie
WHERE title LIKE "%vida%";

b) SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";

c) SELECT * FROM MOVIE
WHERE release_date < "2020-05-04";


d) SELECT * FROM MOVIE
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;

