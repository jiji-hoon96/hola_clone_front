import { useLocation } from "react-router-dom"

export function Info(){
    const {pathname} = useLocation();
    const url = pathname.split('/')[2]
    return <h1>{`여기는 정보가 ${url} 의 페이지 입니다`} </h1>
}
