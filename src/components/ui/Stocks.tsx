import * as z from "zod";
import StocksChart from "./StocksChart";

const zodStockUnit = z.enum(["kg", "pcs", "L", "pcs"]);

const zodStock = z.object({
    id: z.int(),
    reference: z.string(),
    name: z.string(),
    quantity: z.int(),
    unit: zodStockUnit,
    minimum: z.int()
});

export type Stock = z.infer<typeof zodStock>;

const zodStockArray = z.array(zodStock);

export default async function Home() {
    const response = await fetch("https://test-api.ad6.com/api/stocks");
    const json = await response.json();
    const stocks = zodStockArray.parse(json);

    return <StocksChart stocks={stocks} />;
}

