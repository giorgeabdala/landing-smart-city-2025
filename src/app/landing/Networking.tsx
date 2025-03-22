import Area from "@/app/components/Area";
import Image from 'next/image';


export default function Networking() {
    return (

        <Area className="bg-background-secondary">
            <div
                className="flex flex-col items-center justify-center font-body text-justify text-2xl gap-8 mt-10 mb-20 ">

                <div className="flex font-background  opacity-10 text-5xl font-black lg:text-9xl md:text-8xl">
                    <p>Networking...</p>
                </div>


                <div className="flex-col leading-loose">
                    <p>O Smart City Expo Curitiba é o principal evento de cidades inteligentes do Brasil.
                        Com o tema {"\""}Reinventando cidades para todos{"\""}, a quinta edição acontecerá nos dias 25,
                        26 e 27 de março de 2025 na Ligga Arena.
                        O evento reúne representantes do setor público, empresas, universidades e sociedade civil,
                        oferecendo oportunidades de networking e apresentação de projetos inovadores.</p>

                </div>

                <div className="grid grid-cols-3 gap-4 w-auto h-auto">
                    <Image className="rounded-2xl" src={"/photos/foto1.jpeg"} alt={"foto"} width={300} height={200}/>
                    <Image className="rounded-2xl" src={"/photos/foto2.jpeg"} alt={"foto"} width={300} height={200}/>
                    <Image className="rounded-2xl" src={"/photos/foto3.jpeg"} alt={"foto"} width={300} height={200}/>

                    <Image className="rounded-2xl" src={"/photos/foto5.jpeg"} alt={"foto"} width={300} height={200}/>
                    <Image className="rounded-2xl" src={"/photos/foto6.jpeg"} alt={"foto"} width={300} height={200}/>
                    <Image className="rounded-2xl" src={"/photos/foto7.jpeg"} alt={"foto"} width={300} height={200}/>
                    <Image className="rounded-2xl" src={"/photos/foto8.jpeg"} alt={"foto"} width={300} height={200}/>
                    <Image className="rounded-2xl" src={"/photos/foto10.jpeg"} alt={"foto"} width={300} height={200}/>
                    <Image className="rounded-2xl" src={"/photos/foto9.jpeg"} alt={"foto"} width={300} height={200}/>
                </div>
            </div>

        </Area>
    )
}