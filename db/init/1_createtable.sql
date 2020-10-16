create table if not exists task(
id       SERIAL PRIMARY KEY,
title         VARCHAR(20),
description   VARCHAR(100),
"createdAt"   TIMESTAMP NOT NULL,
"updatedAt"   TIMESTAMP NOT NULL
);