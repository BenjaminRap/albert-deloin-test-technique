import Machines from "@/components/ui/Machines";
import Stocks from "@/components/ui/Stocks";

export default async function Home() {
    return (
        <div className="flex flex-row gap-16 bg-(--color-background)">
            <div>
                <Stocks></Stocks>
            </div>
            <div>
                <Machines></Machines>
            </div>
        </div>
    );
}
