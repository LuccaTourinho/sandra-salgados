CREATE TABLE "produtos" (
	"id" serial PRIMARY KEY NOT NULL,
	"tp_produto" varchar(20) NOT NULL,
	"nm_produto" varchar(80) NOT NULL,
	"vl_produto" numeric(10, 2) NOT NULL,
	"ds_produto" text NOT NULL,
	CONSTRAINT "produtos_tp_produto_unique" UNIQUE("tp_produto"),
	CONSTRAINT "produtos_nm_produto_unique" UNIQUE("nm_produto"),
	CONSTRAINT "produtos_ds_produto_unique" UNIQUE("ds_produto")
);
