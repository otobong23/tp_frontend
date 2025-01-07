import DepositProvider from "@/context/DepositContext";
import GoBack from "./_components/Button";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="flex justify-between items-center pb-14">
                <div className="col">
                    <h1 className='text-2xl font-bold text-[#353535]'>Deposit</h1>
                    <p className='text-sm text-[#ABABAB]'>Fund and withdraw from your wallet</p>
                </div>
                <div className="col">
                    <GoBack />
                </div>
            </div>
            <DepositProvider>
                {children}
            </DepositProvider>
        </div>
    );
}