import Gallery from "@/components/Gallery"
import portfolio from "@/database/portfolio.json"

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
            <Gallery images={data?.images ?? []}/>
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