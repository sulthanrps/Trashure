import Navbar from "../../components/navbar";

export default function WasteConnectLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar loggedIn={true} />
            <main>{children}</main>
        </div>
    )
}