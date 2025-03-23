import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { Pool } from 'pg';
import { produtosTable } from './db/schema';
// Configura o pool de conexões com o PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Inicializa o Drizzle com o pool de conexões
const db = drizzle(pool);

// Função para inserir um novo produto
export async function inserirProduto(produto: typeof produtosTable.$inferInsert) {
  await db.insert(produtosTable).values(produto);
  console.log('Produto inserido com sucesso!');
}

// Função para buscar todos os produtos
export async function buscarProdutos() {
  const produtos = await db.select().from(produtosTable);
  return produtos;
}

// Função para atualizar um produto
export async function atualizarProduto(nome: string, novosDados: Partial<typeof produtosTable.$inferInsert>) {
  await db
    .update(produtosTable)
    .set(novosDados)
    .where(eq(produtosTable.nm_produto, nome));
  console.log('Produto atualizado com sucesso!');
}

// Função para deletar um produto
export async function deletarProduto(nome: string) {
  await db.delete(produtosTable).where(eq(produtosTable.nm_produto, nome));
  console.log('Produto deletado com sucesso!');
}