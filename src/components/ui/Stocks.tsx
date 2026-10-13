import * as z from "zod";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const zodStockUnit = z.enum(["kg", "pcs", "L", "pcs"]);

const zodStock = z.object({
    id: z.int(),
    reference: z.string(),
    name: z.string(),
    quantity: z.int(),
    unit: zodStockUnit,
    minimum: z.int()
});

const zodStockArray = z.array(zodStock);

export default async function Home() {
    const response = await fetch("https://test-api.ad6.com/api/stocks");
    const json = await response.json();
    const machines = zodStockArray.parse(json);

    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-25">Id</TableHead>
                        <TableHead>reference</TableHead>
                        <TableHead>name</TableHead>
                        <TableHead>quantity</TableHead>
                        <TableHead>unit</TableHead>
                        <TableHead>minimum</TableHead>
                    </TableRow>
                </TableHeader>
            <TableBody>
                {machines.map((machine) => (
                    <TableRow key={machine.id}>
                    <TableCell>{machine.id}</TableCell>
                    <TableCell>{machine.reference}</TableCell>
                    <TableCell>{machine.name}</TableCell>
                    <TableCell>{machine.quantity}</TableCell>
                    <TableCell>{machine.unit}</TableCell>
                    <TableCell>{machine.minimum}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
