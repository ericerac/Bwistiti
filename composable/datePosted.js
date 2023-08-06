export const datePosted = ((d) => {
    let dat = d.split("T")[0].split("-")
    let year = dat[0]
    let month = dat[1]
    let day = dat[2]

    return day + "/" + month + "/" + year
})