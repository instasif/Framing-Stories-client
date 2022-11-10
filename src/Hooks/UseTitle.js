import { useEffect } from "react"

const UseTitle = title =>{
    useEffect(() =>{
            document.title = `${title} -FS`;
    },[title])
};
export default UseTitle;