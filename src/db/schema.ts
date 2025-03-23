import { pgTable, serial, varchar, text, numeric } from 'drizzle-orm/pg-core';

export const produtosTable = pgTable('produtos', {
  id: serial('id').primaryKey(), // Chave primária autoincrementada
  tp_produto: varchar('tp_produto', { length: 20 }).notNull().unique(), // Tipo de produto (não pode ser nulo e é único)
  nm_produto: varchar('nm_produto', { length: 80 }).notNull().unique(), // Nome do produto (não pode ser nulo e é único)
  vl_produto: numeric('vl_produto', { precision: 10, scale: 2 }).notNull(), // Valor do produto (não pode ser nulo, 10 dígitos no total, 2 casas decimais)
  ds_produto: text('ds_produto').notNull().unique(), // Descrição do produto (não pode ser nula e é única)
  img_produto: text('img_produto').notNull(), // Imagem do produto (não pode ser nula)
});