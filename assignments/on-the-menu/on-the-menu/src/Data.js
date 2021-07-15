import React, { useContext} from "react"
import { MenuContext } from "./MenuContext"

function Data() {
    const {ratingArray, setRatingArray} = useContext(MenuContext)

    
console.log(ratingArray)

    return (
        <div>
            {ratingArray}
        </div>
    )
}

export default Data
