-- CreateTable
CREATE TABLE "instruments" (
    "id" SERIAL NOT NULL,
    "ticker" VARCHAR(10),
    "name" VARCHAR(255),
    "type" VARCHAR(10),

    CONSTRAINT "instruments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marketdata" (
    "id" SERIAL NOT NULL,
    "instrumentid" INTEGER,
    "high" DECIMAL(10,2),
    "low" DECIMAL(10,2),
    "open" DECIMAL(10,2),
    "close" DECIMAL(10,2),
    "previousclose" DECIMAL(10,2),
    "date" DATE,

    CONSTRAINT "marketdata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "instrumentid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "side" VARCHAR(10) NOT NULL,
    "status" VARCHAR(20) NOT NULL,
    "datetime" TIMESTAMP(6),

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255),
    "accountnumber" VARCHAR(20),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "orders_userid_idx" ON "orders"("userid");

-- AddForeignKey
ALTER TABLE "marketdata" ADD CONSTRAINT "marketdata_instrumentid_fkey" FOREIGN KEY ("instrumentid") REFERENCES "instruments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_instrumentid_fkey" FOREIGN KEY ("instrumentid") REFERENCES "instruments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
