import Link from "next/link";


export default function MyLogo() {
  return (
    <div className="flex flex-col items-center">
    {/* <img src="/logo.svg" alt="dRuivo" className="w-24 h-24" /> */}
      <Link href={'/'}><h1 className="text-4xl font-bold m-0">dRuivo</h1></Link>
    </div>
  );
}