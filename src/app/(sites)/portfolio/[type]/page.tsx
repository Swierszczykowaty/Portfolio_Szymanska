import portfolio from "@/database/portfolio.json"
import Image from "next/image"
import Link from "next/link"

type Params = {
    params: {
        type:string
    }
}

const Page = async ({params}:Params) => {
    
    const type = (await params).type
    const data = portfolio.find(p => p.urlName === type)

    return (
        <>
            <h1>{data?.name}</h1>
            <div className="flex flex-col">
                {data?.images.map((i, index) => (
                    <Link key={index} className="relative h-[200px]" href={`/?photoId=${data.id}-${index}`}
                    as={`/p/${data.id}-${index}`}
                    shallow>
                        <Image className="object-cover" src={i} alt="a" fill/>
                    </Link>
                ))}
            </div>
        </>
    );
}
export default Page;

export async function generateStaticParams() {
    const types = portfolio.map(p => p.urlName)

    return types.map((t) => ({
        type: t,
    }))
}

//ograniczenia nazw /portoflio/xxxx
export const dynamicParams = false;