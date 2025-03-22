import Area from "@/app/components/Area";
import ButtonDefault from "@/app/components/Button";
import Link from "next/link";

interface PresentationProps {
    className?: string
}


export default function Presentation(props: PresentationProps) {
    return (
        <Area className="bg-transparent">
            <div id="start" className={`flex flex-col items-center justify-center leading-loose
             md:text-2xl text-white font-title  gap-8`}>
                <h2 className="text-zinc-400">SMARTCITY CURITIBA 2025</h2>
                <h2>25 a 27 de Março</h2>
                <div className="flex flex-col text-center  gap-4 font-body">
                    <p>Preparado para mergulhar em um universo de tecnologia e inovação?</p>
                    <p>Preencha nosso formulário abaixo e garanta os brindes exclusivos da Polkadot!🚀</p>
                </div>


                <Link href="/brindes">
                <ButtonDefault className="mb-10" text={"Garanta seus brindes"} />
                </Link>




                </div>


        </Area>
    )

}