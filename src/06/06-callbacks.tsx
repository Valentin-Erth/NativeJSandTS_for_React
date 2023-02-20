import React, {ChangeEvent, MouseEvent} from "react";
import {createSecretKey} from "crypto";
import {fchmodSync} from "fs";
// const callback=()=>{
//     alert("hey")
// }
// window.setTimeout(callback,1000)

export const User = () => {
    const search = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }
    const saveUser = () => {
        alert("user have been saved")
    }
    const onNameChanged = () => {
        console.log("name changed")
    }
    const focusLostHandler = () => {
        console.log("focws lost")
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed" + event.currentTarget.value)
    }

    return <div>
        <textarea
            onChange={onNameChanged}
            onBlur={focusLostHandler}
        >Dimych</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name="delete" onClick={search}>search</button>
        {/*<button name="save" onClick={deleteUser}>x</button>*/}
    </div>
}
