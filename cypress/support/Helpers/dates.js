export function captureDateAndTime() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const date = new Date()
    var month = monthNames[date.getMonth()]
    var day = date.getDate()
    var year = date.getFullYear()
    var time = new Date().toLocaleTimeString();
    var time = new Date().toLocaleTimeString();
    let dateAndTime = month+' '+day+', '+year+', '+time

    return dateAndTime 
}