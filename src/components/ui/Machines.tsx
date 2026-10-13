import * as z from "zod";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const zodMachineStatus = z.enum([
    "running",
    "stopped",
    "maintenance",
    "unknown"
]);

const zodMachineWorkshop = z.enum([
    "Usinage",
    "Découpe",
    "Assemblage"
])

const zodMachine = z.object({
    id: z.int(),
    name: z.string(),
    type: z.string(),
    workshop: zodMachineWorkshop,
    status: zodMachineStatus,
    efficiency: z.int().nullable()
});

const zodMachineArray = z.array(zodMachine);

export default async function Home() {
    const response = await fetch("https://test-api.ad6.com/api/machines");
    const json = await response.json();
    const machines = zodMachineArray.parse(json);

    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-25">Id</TableHead>
                        <TableHead>name</TableHead>
                        <TableHead>type</TableHead>
                        <TableHead>workshop</TableHead>
                        <TableHead>status</TableHead>
                        <TableHead>efficiency</TableHead>
                    </TableRow>
                </TableHeader>
            <TableBody>
                {machines.map((machine) => (
                    <TableRow key={machine.id}>
                    <TableCell>{machine.id}</TableCell>
                    <TableCell>{machine.name}</TableCell>
                    <TableCell>{machine.type}</TableCell>
                    <TableCell>{machine.workshop}</TableCell>
                    <TableCell>{machine.status}</TableCell>
                    <TableCell>{machine.efficiency}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
