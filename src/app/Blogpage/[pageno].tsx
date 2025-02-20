import { useRouter } from "next/router";

function pageno (){

const router = useRouter();
const pagenumber=router.query.pageno;

return (
    <div>
        <h1>my blog {pagenumber} content</h1>
    </div>
)
}

export default pageno;
