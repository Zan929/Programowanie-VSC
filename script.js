const allCItems = document.querySelectorAll("#Members .cItem");
allCItems.forEach( cItem => {
    // console.log(cItem)
    cItem.onclick = () => {
        allCItems.forEach( cItem2 => {
            cItem2.classList.remove("active")})
    cItem.classList.add("active")

}

})