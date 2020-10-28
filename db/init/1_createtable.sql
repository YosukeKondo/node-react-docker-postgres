create table if not exists chat(
id       SERIAL PRIMARY KEY,
username         VARCHAR(20),
comment   VARCHAR(100),
"createdAt"   TIMESTAMP NOT NULL,
"updatedAt"   TIMESTAMP NOT NULL
);