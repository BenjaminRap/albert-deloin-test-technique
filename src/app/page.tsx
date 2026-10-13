import Machines from "@/components/ui/Machines";
import Stocks from "@/components/ui/Stocks";

export default async function Home() {
    return (
        <div className="flex flex-row gap-8 bg-(--color-background) mx-8 my-4">
            <div className="flex-1 border rounded-lg p-4">
                <Stocks></Stocks>
            </div>
            <div className="flex-1 border rounded-lg p-4">
                <Machines></Machines>
            </div>
        </div>
    );
}
