import { NextResponse } from "next/server";
import db from "@/db";
import { produtosTable } from "@/db/schema";

export async function GET() {
    try{
        const produtos = await db.select().from(produtosTable);
        return NextResponse.json(produtos, { status: 200 });
    }catch (error){
        return NextResponse.json(
            {message: 'Erro ao buscar os produtos', error},
            {status: 500}
        );
    }
}