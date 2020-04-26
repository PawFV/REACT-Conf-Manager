const IsEmpty = (props) => {
    debugger
    for (let prop in props.obj) {
        if (props.obj.hasOwnProperty(prop)) {
            return true
        }
    }
    console.log(props)
    return false
}

export default IsEmpty;
