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

