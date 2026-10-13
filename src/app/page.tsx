import Machines from "@/components/ui/Machines";
import Stocks from "@/components/ui/Stocks";

export default async function Home() {
    return (
        <div>
            <Stocks></Stocks>
            <Machines></Machines>
        </div>
    );
}
