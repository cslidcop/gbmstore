
//index page
function gbmStoreBuildIndex(document) {

    //gbmMasterDivHeader
    var gbmMasterDivHeader = document.createElement("div")
    gbmMasterDivHeader.id = "gbmMasterDivHeader"
    gbmMasterDivHeader.style.background = "#191970"
    gbmMasterDivHeader.style.width = "100%"
    gbmMasterDivHeader.style.height = "10%"
    gbmMasterDivHeader.style.position = "absolute"

    var gbmTopMenuTable = document.createElement("table")
    gbmTopMenuTable.id = "gbmTopMenuTable"
    gbmTopMenuTable.style.borderSpacing = "12px"
    gbmTopMenuTable.style.float = "right"
    gbmTopMenuTable.style.marginRight = "2%"
    gbmTopMenuTable.style.color = "white"
    gbmTopMenuTable.style.textDecoration = "none"
    gbmTopMenuTable.style.fontSize = "20px"
    gbmTopMenuTable.style.fontFamily = "sans-serif"
    gbmTopMenuTable.style.top = "11%"
    gbmTopMenuTable.style.position = "relative"


    var tbody = document.createElement("TBODY")
    var tr = document.createElement("tr")

    var tdHome = document.createElement("td")
    var aHome = document.createElement("a")
    aHome.href = "index.html"
    aHome.innerText = "Home"
    aHome.class = "gbmTopMenuTableLink"
    aHome.style.color = "white"
    aHome.style.textDecoration = "none"
    tdHome.appendChild(aHome)

    var tdProduct = document.createElement("td")
    var aProduct = document.createElement("a")
    aProduct.style.color = "white"
    aProduct.style.textDecoration = "none"
    aProduct.href = "All_product.html"
    aProduct.innerText = "Our Products"
    aProduct.class = "gbmTopMenuTableLink"
    tdProduct.appendChild(aProduct)

    var tdAboutUs = document.createElement("td")
    var aAboutUs = document.createElement("a")
    aAboutUs.href = "About-Us.html"
    aAboutUs.innerText = "About Us"
    aAboutUs.class = "gbmTopMenuTableLink"
    aAboutUs.style.color = "white"
    aAboutUs.style.textDecoration = "none"
    tdAboutUs.appendChild(aAboutUs)

    var tdContactUs = document.createElement("td")
    var aContactUs = document.createElement("a")
    aContactUs.href = "Contact-Us.html"
    aContactUs.innerText = "Contact Us"
    aContactUs.style.color = "white"
    aContactUs.style.textDecoration = "none"
    aContactUs.class = "gbmTopMenuTableLink"
    tdContactUs.appendChild(aContactUs)


    tr.appendChild(tdHome)
    tr.appendChild(tdProduct)
    tr.appendChild(tdAboutUs)
    tr.appendChild(tdContactUs)
    tbody.appendChild(tr)
    gbmTopMenuTable.appendChild(tbody)
    gbmMasterDivHeader.appendChild(gbmTopMenuTable)
    document.body.appendChild(gbmMasterDivHeader)

    //gbmMasterDivSideBar
    var gbmMasterDivSideBar = document.createElement("div")
    gbmMasterDivSideBar.id = "gbmMasterDivSideBar"
    gbmMasterDivSideBar.style.background = "#4682B4"
    gbmMasterDivSideBar.style.width = "10%"
    gbmMasterDivSideBar.style.height = "90%"
    gbmMasterDivSideBar.style.top = "10%"
    gbmMasterDivSideBar.style.position = "absolute"
    document.body.appendChild(gbmMasterDivSideBar)

    //gbmMasterDivContainer
    var gbmMasterDivContainer = document.createElement("div")
    gbmMasterDivContainer.id = "gbmMasterDivContainer"
    gbmMasterDivContainer.style.background = "white"
    gbmMasterDivContainer.style.width = "90%"
    gbmMasterDivContainer.style.height = "90%"
    gbmMasterDivContainer.style.left = "10%"
    gbmMasterDivContainer.style.top = "10%"
    gbmMasterDivContainer.style.position = "absolute"
    document.body.appendChild(gbmMasterDivContainer)

    //=>gbmDashboard
    var gbmDashboard = document.createElement('div')
    gbmDashboard.id = "gbmDashboard"
    gbmDashboard.style.width = "100%"
    gbmDashboard.style.height = "50%"
    gbmDashboard.style.position = "relative"
    gbmDashboard.style.top = "10%"
    gbmMasterDivContainer.appendChild(gbmDashboard)

    //==>gbmUserItemDiv
    var gbmUserItemDiv = document.createElement('div')
    gbmUserItemDiv.id = "gbmUserItemDiv"
    gbmUserItemDiv.style.width = "50%"
    gbmUserItemDiv.style.height = "100%"
    gbmUserItemDiv.style.float = "left"
    gbmDashboard.appendChild(gbmUserItemDiv)

    //===>gbmUserItemImgDiv
    var gbmUserItemImgDiv = document.createElement('img')
    gbmUserItemImgDiv.id = "gbmUserItemImgDiv"
    gbmUserItemImgDiv.src = "img/coop.jpg"
    gbmUserItemImgDiv.style.width = "40%"
    gbmUserItemImgDiv.style.height = "70%"
    gbmUserItemImgDiv.style.borderRadius = "100%"
    gbmUserItemImgDiv.style.float = "right"
    gbmUserItemImgDiv.style.position = "relative"
    gbmUserItemImgDiv.style.right = "5%"
    gbmUserItemImgDiv.style.top = "10%"
    gbmUserItemDiv.appendChild(gbmUserItemImgDiv)

    //===>gbmUserSpDiv
    var gbmUserSpDiv = document.createElement("span")
    gbmUserSpDiv.id = "gbmUserSpDiv"
    gbmUserSpDiv.style.float = "right"
    gbmUserSpDiv.style.position = "relative"
    gbmUserSpDiv.style.left = "20%"
    gbmUserSpDiv.style.top = "85%"
    gbmUserSpDiv.style.fontSize = "32px"
    gbmUserItemDiv.appendChild(gbmUserSpDiv)

    //====>gbmUserLink
    var gbmUserLinkSpn = document.createElement('a')
    gbmUserLinkSpn.href = "All_product.html"
    gbmUserLinkSpn.innerText = "User"
    gbmUserLinkSpn.class = "gbmUserLinkSpn"
    gbmUserLinkSpn.style.textDecoration = "none"
    gbmUserLinkSpn.style.color = "black"
    gbmUserLinkSpn.style.fontFamily = "sans-serif"
    gbmUserLinkSpn.style.fontSize = "28px"
    gbmUserSpDiv.appendChild(gbmUserLinkSpn)



    //==>gbmAdminItemDiv
    var gbmAdminItemDiv = document.createElement('div')
    gbmAdminItemDiv.id = "gbmAdminItemDiv"
    gbmAdminItemDiv.style.width = "50%"
    gbmAdminItemDiv.style.height = "100%"
    gbmAdminItemDiv.style.float = "right"
    gbmDashboard.appendChild(gbmAdminItemDiv)

    //===>gbmAdminItemImgDiv
    var gbmAdminItemImgDiv = document.createElement('img')
    gbmAdminItemImgDiv.id = "gbmAdminItemImgDiv"
    gbmAdminItemImgDiv.src = "img/admin.jpg"
    gbmAdminItemImgDiv.style.width = "40%"
    gbmAdminItemImgDiv.style.height = "70%"
    gbmAdminItemImgDiv.style.borderRadius = "100%"
    gbmAdminItemImgDiv.style.float = "left"
    gbmAdminItemImgDiv.style.position = "relative"
    gbmAdminItemImgDiv.style.left = "5%"
    gbmAdminItemImgDiv.style.top = "10%"
    gbmAdminItemDiv.appendChild(gbmAdminItemImgDiv)

    //===>gbmAdminSpDiv
    var gbmAdminSpDiv = document.createElement("span")
    gbmAdminSpDiv.id = "gbmAdminSpDiv"
    gbmAdminSpDiv.style.float = "left"
    gbmAdminSpDiv.style.position = "relative"
    gbmAdminSpDiv.style.right = "20%"
    gbmAdminSpDiv.style.top = "85%"
    gbmAdminSpDiv.style.fontSize = "32px"
    gbmAdminItemDiv.appendChild(gbmAdminSpDiv)

    //====>gbmAdminLinkSpn
    var gbmAdminLinkSpn = document.createElement('a')
    gbmAdminLinkSpn.class = "gbmAdminLinkSpn"
    gbmAdminLinkSpn.href = "Login.html"
    gbmAdminLinkSpn.innerText = "Admin"
    gbmAdminLinkSpn.style.textDecoration = "none"
    gbmAdminLinkSpn.style.color = "black"
    gbmAdminLinkSpn.style.fontFamily = "sans-serif"
    gbmAdminLinkSpn.style.fontSize = "28px"
    gbmAdminSpDiv.appendChild(gbmAdminLinkSpn)
}
//second Login
function gbmLoginHtml(document) {

    //gbmMasterDivHeader
    var gbmMasterDivHeader = document.createElement("div")
    gbmMasterDivHeader.id = "gbmMasterDivHeader"
    gbmMasterDivHeader.style.background = "#191970"
    gbmMasterDivHeader.style.width = "100%"
    gbmMasterDivHeader.style.height = "10%"
    gbmMasterDivHeader.style.position = "absolute"

    var gbmTopMenuTable = document.createElement("table")
    gbmTopMenuTable.id = "gbmTopMenuTable"
    gbmTopMenuTable.style.borderSpacing = "12px"
    gbmTopMenuTable.style.float = "right"
    gbmTopMenuTable.style.marginRight = "2%"
    gbmTopMenuTable.style.color = "white"
    gbmTopMenuTable.style.textDecoration = "none"
    gbmTopMenuTable.style.fontSize = "20px"
    gbmTopMenuTable.style.fontFamily = "sans-serif"
    gbmTopMenuTable.style.top = "11%"
    gbmTopMenuTable.style.position = "relative"


    var tbody = document.createElement("TBODY")
    var tr = document.createElement("tr")

    var tdHome = document.createElement("td")
    var aHome = document.createElement("a")
    aHome.href = "index.html"
    aHome.innerText = "Home"
    aHome.class = "gbmTopMenuTableLink"
    aHome.style.color = "white"
    aHome.style.textDecoration = "none"
    tdHome.appendChild(aHome)

    var tdProduct = document.createElement("td")
    var aProduct = document.createElement("a")
    aProduct.style.color = "white"
    aProduct.style.textDecoration = "none"
    aProduct.href = "All_product.html"
    aProduct.innerText = "Our Products"
    aProduct.class = "gbmTopMenuTableLink"
    tdProduct.appendChild(aProduct)

    var tdAboutUs = document.createElement("td")
    var aAboutUs = document.createElement("a")
    aAboutUs.href = "About-Us.html"
    aAboutUs.innerText = "About Us"
    aAboutUs.class = "gbmTopMenuTableLink"
    aAboutUs.style.color = "white"
    aAboutUs.style.textDecoration = "none"
    tdAboutUs.appendChild(aAboutUs)

    var tdContactUs = document.createElement("td")
    var aContactUs = document.createElement("a")
    aContactUs.href = "Contact-Us.html"
    aContactUs.innerText = "Contact Us"
    aContactUs.style.color = "white"
    aContactUs.style.textDecoration = "none"
    aContactUs.class = "gbmTopMenuTableLink"
    tdContactUs.appendChild(aContactUs)


    tr.appendChild(tdHome)
    tr.appendChild(tdProduct)
    tr.appendChild(tdAboutUs)
    tr.appendChild(tdContactUs)
    tbody.appendChild(tr)
    gbmTopMenuTable.appendChild(tbody)
    gbmMasterDivHeader.appendChild(gbmTopMenuTable)
    document.body.appendChild(gbmMasterDivHeader)

    //gbmMasterDivSideBar
    var gbmMasterDivSideBar = document.createElement("div")
    gbmMasterDivSideBar.id = "gbmMasterDivSideBar"
    gbmMasterDivSideBar.style.background = "#4682B4"
    gbmMasterDivSideBar.style.width = "10%"
    gbmMasterDivSideBar.style.height = "90%"
    gbmMasterDivSideBar.style.top = "10%"
    gbmMasterDivSideBar.style.position = "absolute"
    document.body.appendChild(gbmMasterDivSideBar)

    //gbmMasterDivContainer
    var gbmMasterDivContainer = document.createElement("div")
    gbmMasterDivContainer.id = "gbmMasterDivContainer"
    gbmMasterDivContainer.style.background = "white"
    gbmMasterDivContainer.style.width = "90%"
    gbmMasterDivContainer.style.height = "90%"
    gbmMasterDivContainer.style.left = "10%"
    gbmMasterDivContainer.style.top = "10%"
    gbmMasterDivContainer.style.position = "absolute"
    document.body.appendChild(gbmMasterDivContainer)

    //gbmLoginDiv
    var gbmLoginDiv = document.createElement("div")
    gbmLoginDiv.id = "gbmLoginDiv"
    gbmLoginDiv.style.width = "30%"
    gbmLoginDiv.style.height = "50%"
    gbmLoginDiv.style.top = "12%"
    gbmLoginDiv.style.marginLeft = "35%"
    gbmLoginDiv.style.position = "relative"
    gbmLoginDiv.style.display = "grid"
    gbmLoginDiv.style.boxShadow = "0 0 3px rgb(0, 0, 0, 0.1)"
    gbmLoginDiv.style.fontFamily = "sans-serif"
    gbmMasterDivContainer.appendChild(gbmLoginDiv)

    //gbmLoginFormDiv
    var gbmLoginFormDiv = document.createElement("form")
    gbmLoginFormDiv.id = "gbmLoginFormDiv"
    gbmLoginFormDiv.style.width = "100%"
    gbmLoginFormDiv.style.height = "100%"
    gbmLoginFormDiv.style.position = "relative"
    gbmLoginFormDiv.style.top = "10%"
    gbmLoginDiv.appendChild(gbmLoginFormDiv)

    //=>gbmLoginUnamesectionDiv
    var gbmLoginUnamesectionDiv = document.createElement("div")
    gbmLoginUnamesectionDiv.id = "gbmLoginUnamesectionDiv"
    gbmLoginUnamesectionDiv.style.width = "80%"
    gbmLoginUnamesectionDiv.style.height = "60%"
    gbmLoginUnamesectionDiv.style.marginLeft = "8%"
    gbmLoginUnamesectionDiv.style.fontSize = "23px"
    gbmLoginUnamesectionDiv.style.position = "relative"
    gbmLoginUnamesectionDiv.style.color = "#8a8686"
    gbmLoginFormDiv.appendChild(gbmLoginUnamesectionDiv)

    //==>gbmLoginUsernameLblDiv//label
    var gbmLoginUsernameLblDiv = document.createElement("label")
    gbmLoginUsernameLblDiv.id = "gbmLoginUsernameLblDiv"
    gbmLoginUsernameLblDiv.innerHTML = "Username<br>"
    gbmLoginUnamesectionDiv.appendChild(gbmLoginUsernameLblDiv)

    //==>gbmLoginUsernameInputDiv//input
    var gbmLoginUsernameInputDiv = document.createElement("input")
    gbmLoginUsernameInputDiv.id = "gbmLoginUsernameInputDiv"
    gbmLoginUsernameInputDiv.type = "text"
    gbmLoginUsernameInputDiv.style.width = "100%"
    gbmLoginUsernameInputDiv.style.height = "20%"
    gbmLoginUnamesectionDiv.appendChild(gbmLoginUsernameInputDiv)


    //gbmLoginPasswordSectionDiv
    var gbmLoginPasswordSectionDiv = document.createElement("div")
    gbmLoginPasswordSectionDiv.id = "gbmLoginPasswordSectionDiv"
    gbmLoginPasswordSectionDiv.style.width = "80%"
    gbmLoginPasswordSectionDiv.style.position = "relative"
    gbmLoginPasswordSectionDiv.style.height = "60%"
    gbmLoginPasswordSectionDiv.style.bottom = "28%"
    gbmLoginPasswordSectionDiv.style.marginLeft = "8%"
    gbmLoginPasswordSectionDiv.style.fontSize = "23px"
    gbmLoginPasswordSectionDiv.style.color = "#8a8686"
    gbmLoginFormDiv.appendChild(gbmLoginPasswordSectionDiv)

    //==>gbmLoginPasswordLblDiv//label
    var gbmLoginPasswordLblDiv = document.createElement("label")
    gbmLoginPasswordLblDiv.id = "gbmLoginPasswordLblDiv"
    gbmLoginPasswordLblDiv.innerHTML = "Password<br>"
    gbmLoginPasswordSectionDiv.appendChild(gbmLoginPasswordLblDiv)

    //==>gbmLoginPasswordInputDiv//input
    var gbmLoginPasswordInputDiv = document.createElement("input")
    gbmLoginPasswordInputDiv.id = "gbmLoginPasswordInputDiv"
    gbmLoginPasswordInputDiv.style.width = "100%"
    gbmLoginPasswordInputDiv.type = "password"
    gbmLoginPasswordInputDiv.style.height = "20%"
    gbmLoginPasswordSectionDiv.appendChild(gbmLoginPasswordInputDiv)

    //gbmLoginCheckboxSectionDiv
    var gbmLoginCheckboxSectionDiv = document.createElement("div")
    gbmLoginCheckboxSectionDiv.id = "gbmLoginCheckboxSectionDiv"
    gbmLoginCheckboxSectionDiv.style.bottom = "55%"
    gbmLoginCheckboxSectionDiv.style.position = "relative"
    gbmLoginCheckboxSectionDiv.style.marginLeft = "8%"
    gbmLoginCheckboxSectionDiv.style.color = "#8a8686"
    gbmLoginFormDiv.appendChild(gbmLoginCheckboxSectionDiv)


    //==>gbmLoginCheckboxInputDiv//input
    var gbmLoginCheckboxInputDiv = document.createElement("input")
    gbmLoginCheckboxInputDiv.id = "gbmLoginCheckboxInputDiv"
    gbmLoginCheckboxInputDiv.type = "checkbox"
    gbmLoginCheckboxInputDiv.style.cursor = "pointer"
    gbmLoginCheckboxSectionDiv.appendChild(gbmLoginCheckboxInputDiv)

    //==>gbmLoginCheckboxLblDiv//label
    var gbmLoginCheckboxLblDiv = document.createElement("label")
    gbmLoginCheckboxLblDiv.id = "gbmLoginCheckboxLblDiv"
    gbmLoginCheckboxLblDiv.innerHTML = "Remember me"
    gbmLoginCheckboxSectionDiv.appendChild(gbmLoginCheckboxLblDiv)

    //gbmLoginButtonSectionDiv
    var gbmLoginButtonSectionDiv = document.createElement("div")
    gbmLoginButtonSectionDiv.id = "gbmLoginButtonSectionDiv"
    gbmLoginButtonSectionDiv.style.position = "relative"
    gbmLoginButtonSectionDiv.style.width = "90%"
    gbmLoginButtonSectionDiv.style.height = "88%"
    gbmLoginButtonSectionDiv.style.left = "63%"
    gbmLoginButtonSectionDiv.style.bottom = "67%"
    gbmLoginFormDiv.appendChild(gbmLoginButtonSectionDiv)

    //=>gbmLoginBtn
    var gbmLoginBtn = document.createElement('button')
    gbmLoginBtn.id = "gbmLoginBtn"
    gbmLoginBtn.style.width = "30%"
    gbmLoginBtn.style.height = "20%"
    gbmLoginBtn.style.borderRadius = "10px"
    gbmLoginBtn.style.border = "none"
    gbmLoginBtn.style.cursor = "pointer"
    gbmLoginBtn.style.background = "royalblue"
    gbmLoginBtn.style.color = "white"
    gbmLoginBtn.style.position = "relative"
    gbmLoginButtonSectionDiv.appendChild(gbmLoginBtn)

    //==>gbmLogInLinkBtn
    var gbmLogInLinkBtn = document.createElement("a")
    gbmLogInLinkBtn.id = "gbmLogInLinkBtn"
    gbmLogInLinkBtn.href = "Admin.html"
    gbmLogInLinkBtn.style.textDecoration = "none"
    gbmLogInLinkBtn.style.color = "white"
    gbmLogInLinkBtn.innerText = "Log in"
    gbmLoginBtn.appendChild(gbmLogInLinkBtn)
}
//admin
function gbmAdminHtml(document) {
    //gbmMasterDivHeader
    var gbmMasterDivHeader = document.createElement("div")
    gbmMasterDivHeader.id = "gbmMasterDivHeader"
    gbmMasterDivHeader.style.background = "#191970"
    gbmMasterDivHeader.style.width = "100%"
    gbmMasterDivHeader.style.height = "10%"
    gbmMasterDivHeader.style.position = "absolute"

    var gbmTopMenuTable = document.createElement("table")
    gbmTopMenuTable.id = "gbmTopMenuTable"
    gbmTopMenuTable.style.borderSpacing = "12px"
    gbmTopMenuTable.style.float = "right"
    gbmTopMenuTable.style.marginRight = "2%"
    gbmTopMenuTable.style.color = "white"
    gbmTopMenuTable.style.textDecoration = "none"
    gbmTopMenuTable.style.fontSize = "20px"
    gbmTopMenuTable.style.fontFamily = "sans-serif"
    gbmTopMenuTable.style.top = "11%"
    gbmTopMenuTable.style.position = "relative"


    var tbody = document.createElement("TBODY")
    var tr = document.createElement("tr")

    var tdHome = document.createElement("td")
    var aHome = document.createElement("a")
    aHome.href = "index.html"
    aHome.innerText = "Home"
    aHome.class = "gbmTopMenuTableLink"
    aHome.style.color = "white"
    aHome.style.textDecoration = "none"
    tdHome.appendChild(aHome)

    var tdProduct = document.createElement("td")
    var aProduct = document.createElement("a")
    aProduct.style.color = "white"
    aProduct.style.textDecoration = "none"
    aProduct.href = "All_product.html"
    aProduct.innerText = "Our Products"
    aProduct.class = "gbmTopMenuTableLink"
    tdProduct.appendChild(aProduct)

    var tdAboutUs = document.createElement("td")
    var aAboutUs = document.createElement("a")
    aAboutUs.href = "About-Us.html"
    aAboutUs.innerText = "About Us"
    aAboutUs.class = "gbmTopMenuTableLink"
    aAboutUs.style.color = "white"
    aAboutUs.style.textDecoration = "none"
    tdAboutUs.appendChild(aAboutUs)

    var tdContactUs = document.createElement("td")
    var aContactUs = document.createElement("a")
    aContactUs.href = "Contact-Us.html"
    aContactUs.innerText = "Contact Us"
    aContactUs.style.color = "white"
    aContactUs.style.textDecoration = "none"
    aContactUs.class = "gbmTopMenuTableLink"
    tdContactUs.appendChild(aContactUs)


    tr.appendChild(tdHome)
    tr.appendChild(tdProduct)
    tr.appendChild(tdAboutUs)
    tr.appendChild(tdContactUs)
    tbody.appendChild(tr)
    gbmTopMenuTable.appendChild(tbody)
    gbmMasterDivHeader.appendChild(gbmTopMenuTable)
    document.body.appendChild(gbmMasterDivHeader)

    //gbmMasterDivSideBar
    var gbmMasterDivSideBar = document.createElement("div")
    gbmMasterDivSideBar.id = "gbmMasterDivSideBar"
    gbmMasterDivSideBar.style.background = "#4682B4"
    gbmMasterDivSideBar.style.width = "10%"
    gbmMasterDivSideBar.style.height = "90%"
    gbmMasterDivSideBar.style.top = "10%"
    gbmMasterDivSideBar.style.position = "absolute"
    document.body.appendChild(gbmMasterDivSideBar)

    //gbmMasterDivContainer
    var gbmMasterDivContainer = document.createElement("div")
    gbmMasterDivContainer.id = "gbmMasterDivContainer"
    gbmMasterDivContainer.style.background = "white"
    gbmMasterDivContainer.style.width = "90%"
    gbmMasterDivContainer.style.height = "90%"
    gbmMasterDivContainer.style.left = "10%"
    gbmMasterDivContainer.style.top = "10%"
    gbmMasterDivContainer.style.position = "absolute"
    document.body.appendChild(gbmMasterDivContainer)

    //gbmAdminDasboardCheckDiv-------------------------------------
    var gbmAdminDasboardCheckDiv = document.createElement("div")
    gbmAdminDasboardCheckDiv.id = "gbmAdminDasboardCheckDiv"
    gbmAdminDasboardCheckDiv.style.width = "100%"
    gbmAdminDasboardCheckDiv.style.height = "50%"
    gbmAdminDasboardCheckDiv.style.position = "relative"
    gbmMasterDivContainer.appendChild(gbmAdminDasboardCheckDiv)

    //==>gbmBoughtItemImgDiv
    var gbmBoughtItemImgDiv = document.createElement("div")
    gbmBoughtItemImgDiv.id = "gbmBoughtItemImgDiv"
    gbmBoughtItemImgDiv.style.width = "50%"
    gbmBoughtItemImgDiv.style.float = "left"
    gbmBoughtItemImgDiv.style.height = "100%"
    gbmAdminDasboardCheckDiv.appendChild(gbmBoughtItemImgDiv)

    //===>gbmBoughtImgDiv
    var gbmBoughtImgDiv = document.createElement("img")
    gbmBoughtImgDiv.src = "img/bought.jpg"
    gbmBoughtImgDiv.id = "gbmBoughtImgDiv"
    gbmBoughtImgDiv.style.width = "50%"
    gbmBoughtImgDiv.style.height = "70%"
    gbmBoughtImgDiv.style.borderRadius = "100%"
    gbmBoughtImgDiv.style.float = "right"
    gbmBoughtImgDiv.style.position = "relative"
    gbmBoughtImgDiv.style.right = "5%"
    gbmBoughtImgDiv.style.top = "10%"
    gbmBoughtItemImgDiv.appendChild(gbmBoughtImgDiv)

    //===>gbmBoughtSpDiv
    var gbmBoughtSpDiv = document.createElement("span")
    gbmBoughtSpDiv.id = "gbmBoughtSpDiv"
    gbmBoughtSpDiv.style.position = "relative"
    gbmBoughtSpDiv.style.float = "right"
    gbmBoughtSpDiv.style.fontSize = "32px"
    gbmBoughtSpDiv.style.top = "85%"
    gbmBoughtSpDiv.style.left = "35%"
    gbmBoughtItemImgDiv.appendChild(gbmBoughtSpDiv)

    //gbmBoughtLinkA
    var gbmBoughtLinkA = document.createElement("a")
    gbmBoughtLinkA.id = "gbmBoughtLinkA"
    gbmBoughtLinkA.href = "Bought_product.html"
    gbmBoughtLinkA.style.color = "black"
    gbmBoughtLinkA.style.textDecoration = "none"
    gbmBoughtLinkA.innerHTML = "Bought Items"
    gbmBoughtSpDiv.appendChild(gbmBoughtLinkA)
    //------------------------------------------------

    //==>gbmBookingItemImgDiv
    var gbmBookingItemImgDiv = document.createElement("div")
    gbmBookingItemImgDiv.id = "gbmBookingItemImgDiv"
    gbmBookingItemImgDiv.style.width = "50%"
    gbmBookingItemImgDiv.style.float = "right"
    gbmBookingItemImgDiv.style.height = "100%"
    gbmBookingItemImgDiv.style.position = "relative"
    gbmAdminDasboardCheckDiv.appendChild(gbmBookingItemImgDiv)

    //===>gbmBookingImgDiv
    var gbmBookingImgDiv = document.createElement("img")
    gbmBookingImgDiv.id = "gbmBookingImgDiv"
    gbmBookingImgDiv.src = "img/booking.jpg"
    gbmBookingImgDiv.style.width = "50%"
    gbmBookingImgDiv.style.height = "70%"
    gbmBookingImgDiv.style.borderRadius = "100%"
    gbmBookingImgDiv.style.float = "left"
    gbmBookingImgDiv.style.top = "10%"
    gbmBookingImgDiv.style.left = "5%"
    gbmBookingImgDiv.style.position = "relative"
    gbmBookingItemImgDiv.appendChild(gbmBookingImgDiv)

    //===>gbmBookingSpDiv
    var gbmBookingSpDiv = document.createElement("span")
    gbmBookingSpDiv.id = "gbmBookingSpDiv"
    gbmBookingSpDiv.style.position = "relative"
    gbmBookingSpDiv.style.right = "35%"
    gbmBookingSpDiv.style.top = "85%"
    gbmBookingSpDiv.style.fontSize = "32px"
    gbmBookingItemImgDiv.appendChild(gbmBookingSpDiv)

    //gbmBookingLinkA
    var gbmBookingLinkA = document.createElement("a")
    gbmBookingLinkA.id = "gbmBookingLinkA"
    gbmBookingLinkA.href = "Booking.html"
    gbmBookingLinkA.style.color = "black"
    gbmBookingLinkA.style.position = "relative"
    gbmBookingLinkA.style.textDecoration = "none"
    gbmBookingLinkA.innerHTML = "Booking Items"
    gbmBookingSpDiv.appendChild(gbmBookingLinkA)

    //------------------------------------------------

    //gbmAppointmentCheckItem-----------------------------------
    var gbmAppointmentCheckItem = document.createElement("div")
    gbmAppointmentCheckItem.id = "gbmAppointmentCheckItem"
    gbmAppointmentCheckItem.style.height = "50%"
    gbmAppointmentCheckItem.style.width = "100%"
    gbmMasterDivContainer.appendChild(gbmAppointmentCheckItem)

    //==>gbmAppointmentImgDiv
    var gbmAppointmentImgDiv = document.createElement("img")
    gbmAppointmentImgDiv.id = "gbmAppointmentImgDiv"
    gbmAppointmentImgDiv.src = "img/template.jpg"
    gbmAppointmentImgDiv.style.width = "25%"
    gbmAppointmentImgDiv.style.height = "70%"
    gbmAppointmentImgDiv.style.borderRadius = "100%"
    gbmAppointmentImgDiv.style.top = "10%"
    gbmAppointmentImgDiv.style.position = "relative"
    gbmAppointmentImgDiv.style.display = "flex"
    gbmAppointmentImgDiv.style.margin = "0px auto";
    gbmAppointmentCheckItem.appendChild(gbmAppointmentImgDiv)

    //==>gbmAppointmentSpDiv
    var gbmAppointmentSpDiv = document.createElement("spn")
    gbmAppointmentSpDiv.id = "gbmAppointmentSpDiv"
    gbmAppointmentSpDiv.style.display = "flex"
    gbmAppointmentSpDiv.style.margin = "0px 43%"
    gbmAppointmentSpDiv.style.fontSize = "32px"
    gbmAppointmentSpDiv.style.position = "relative"
    gbmAppointmentSpDiv.style.top = "14%"
    gbmAppointmentSpDiv.style.width = "10px"
    gbmAppointmentCheckItem.appendChild(gbmAppointmentSpDiv)

    //===>gbmAppointmentLinkA
    var gbmAppointmentLinkA = document.createElement("a")
    gbmAppointmentLinkA.href = "Appointment.html"
    gbmAppointmentLinkA.innerHTML = "Appointment"
    gbmAppointmentLinkA.style.textDecoration = "none"
    gbmAppointmentLinkA.style.color = "black"
    gbmAppointmentLinkA.id = "gbmAppointmentLinkA"
    gbmAppointmentSpDiv.appendChild(gbmAppointmentLinkA)

}
function gbmStoreAllProduct() {
    //gbmMasterDivHeader
    var gbmMasterDivHeader = document.createElement("div")
    gbmMasterDivHeader.id = "gbmMasterDivHeader"
    gbmMasterDivHeader.style.background = "#191970"
    gbmMasterDivHeader.style.width = "100%"
    gbmMasterDivHeader.style.height = "10%"
    gbmMasterDivHeader.style.position = "absolute"

    var gbmTopMenuTable = document.createElement("table")
    gbmTopMenuTable.id = "gbmTopMenuTable"
    gbmTopMenuTable.style.borderSpacing = "12px"
    gbmTopMenuTable.style.float = "right"
    gbmTopMenuTable.style.marginRight = "2%"
    gbmTopMenuTable.style.color = "white"
    gbmTopMenuTable.style.textDecoration = "none"
    gbmTopMenuTable.style.fontSize = "20px"
    gbmTopMenuTable.style.fontFamily = "sans-serif"
    gbmTopMenuTable.style.top = "11%"
    gbmTopMenuTable.style.position = "relative"


    var tbody = document.createElement("TBODY")
    var tr = document.createElement("tr")

    var tdHome = document.createElement("td")
    var aHome = document.createElement("a")
    aHome.href = "index.html"
    aHome.innerText = "Home"
    aHome.class = "gbmTopMenuTableLink"
    aHome.style.color = "white"
    aHome.style.textDecoration = "none"
    tdHome.appendChild(aHome)

    var tdProduct = document.createElement("td")
    var aProduct = document.createElement("a")
    aProduct.style.color = "white"
    aProduct.style.textDecoration = "none"
    aProduct.href = "All_product.html"
    aProduct.innerText = "Our Products"
    aProduct.class = "gbmTopMenuTableLink"
    tdProduct.appendChild(aProduct)

    var tdAboutUs = document.createElement("td")
    var aAboutUs = document.createElement("a")
    aAboutUs.href = "About-Us.html"
    aAboutUs.innerText = "About Us"
    aAboutUs.class = "gbmTopMenuTableLink"
    aAboutUs.style.color = "white"
    aAboutUs.style.textDecoration = "none"
    tdAboutUs.appendChild(aAboutUs)

    var tdContactUs = document.createElement("td")
    var aContactUs = document.createElement("a")
    aContactUs.href = "Contact-Us.html"
    aContactUs.innerText = "Contact Us"
    aContactUs.style.color = "white"
    aContactUs.style.textDecoration = "none"
    aContactUs.class = "gbmTopMenuTableLink"
    tdContactUs.appendChild(aContactUs)


    tr.appendChild(tdHome)
    tr.appendChild(tdProduct)
    tr.appendChild(tdAboutUs)
    tr.appendChild(tdContactUs)
    tbody.appendChild(tr)
    gbmTopMenuTable.appendChild(tbody)
    gbmMasterDivHeader.appendChild(gbmTopMenuTable)
    document.body.appendChild(gbmMasterDivHeader)

    //gbmMasterDivSideBar
    var gbmMasterDivSideBar = document.createElement("div")
    gbmMasterDivSideBar.id = "gbmMasterDivSideBar"
    gbmMasterDivSideBar.style.background = "#4682B4"
    gbmMasterDivSideBar.style.width = "10%"
    gbmMasterDivSideBar.style.height = "90%"
    gbmMasterDivSideBar.style.top = "10%"
    gbmMasterDivSideBar.style.position = "absolute"
    document.body.appendChild(gbmMasterDivSideBar)

    //gbmMasterDivContainer
    var gbmMasterDivContainer = document.createElement("div")
    gbmMasterDivContainer.id = "gbmMasterDivContainer"
    gbmMasterDivContainer.style.background = "white"
    gbmMasterDivContainer.style.width = "90%"
    gbmMasterDivContainer.style.height = "90%"
    gbmMasterDivContainer.style.left = "10%"
    gbmMasterDivContainer.style.top = "10%"
    gbmMasterDivContainer.style.position = "absolute"
    document.body.appendChild(gbmMasterDivContainer)

    //gbmTitlePageGridDiv
    var gbmTitlePageGridDiv = document.createElement("div")
    gbmTitlePageGridDiv.id = "gbmTitlePageGridDiv"
    gbmTitlePageGridDiv.style.width = "100%"
    gbmTitlePageGridDiv.style.height = "5%"
    gbmTitlePageGridDiv.style.top = "5%"
    gbmTitlePageGridDiv.style.position = "relative"
    gbmMasterDivContainer.appendChild(gbmTitlePageGridDiv)

    //=>gbmProductGridTitle
    var gbmProductGridTitle = document.createElement("h2")
    gbmProductGridTitle.id = "gbmProductGridTitle"
    gbmProductGridTitle.style.textAlign = "center"
    gbmProductGridTitle.style.fontSize = "36px"
    gbmProductGridTitle.innerHTML = "Our Product"
    gbmTitlePageGridDiv.appendChild(gbmProductGridTitle)


    //gbmDivProductGrid
    var gbmDivProductGrid = document.createElement("div")
    gbmDivProductGrid.id = "gbmDivProductGrid"
    gbmDivProductGrid.style.position = "relative"
    gbmDivProductGrid.style.width = "90%"
    gbmDivProductGrid.style.height = "80%"
    gbmDivProductGrid.style.top = "15%"
    gbmDivProductGrid.style.left = "5%"
    gbmMasterDivContainer.appendChild(gbmDivProductGrid)
    //-----------------------------
    //=>gbmProductGridDiv1
    var gbmProductGridDiv1 = document.createElement("div")
    gbmProductGridDiv1.id = "gbmProductGridDiv1"
    gbmProductGridDiv1.style.marginLeft = "0%"
    gbmProductGridDiv1.style.width = "23%"
    gbmProductGridDiv1.style.height = "40%"
    gbmProductGridDiv1.style.float = "left"
    gbmDivProductGrid.appendChild(gbmProductGridDiv1)

    //==>gbmProductGridImg1
    var gbmProductGridImg1 = document.createElement("img")
    gbmProductGridImg1.id = "gbmProductGridImg1"
    gbmProductGridImg1.src = "img/cool.jpg"
    gbmProductGridImg1.style.width = "100%"
    gbmProductGridImg1.style.height = "65%"
    gbmProductGridDiv1.appendChild(gbmProductGridImg1)

    //==>gbmProductGridTxt
    var gbmProductGridTxt = document.createElement("span")
    gbmProductGridTxt.id = "gbmProductGridTxt"
    gbmProductGridTxt.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    gbmProductGridTxt.style.width = "100%"
    gbmProductGridTxt.height = "30%"
    gbmProductGridDiv1.appendChild(gbmProductGridTxt)

    //-----------------------------------
    //=>gbmProductGridDiv2
    var gbmProductGridDiv2 = document.createElement("div")
    gbmProductGridDiv2.id = "gbmProductGridDiv2"
    gbmProductGridDiv2.style.marginLeft = "2.5%"
    gbmProductGridDiv2.style.width = "23%"
    gbmProductGridDiv2.style.height = "40%"
    gbmProductGridDiv2.style.float = "left"
    gbmDivProductGrid.appendChild(gbmProductGridDiv2)

    //==>gbmProductGridImg2
    var gbmProductGridImg2 = document.createElement("img")
    gbmProductGridImg2.id = "gbmProductGridImg2"
    gbmProductGridImg2.src = "img/cool.jpg"
    gbmProductGridImg2.style.width = "100%"
    gbmProductGridImg2.style.height = "65%"
    gbmProductGridDiv2.appendChild(gbmProductGridImg2)

    //==>gbmProductGridTxt2
    var gbmProductGridTxt2 = document.createElement("span")
    gbmProductGridTxt2.id = "gbmProductGridTxt2"
    gbmProductGridTxt2.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    gbmProductGridTxt2.style.width = "100%"
    gbmProductGridTxt2.height = "30%"
    gbmProductGridDiv2.appendChild(gbmProductGridTxt2)

    //-----------------------------------
    //=>gbmProductGridDiv3
    var gbmProductGridDiv3 = document.createElement("div")
    gbmProductGridDiv3.id = "gbmProductGridDiv3"
    gbmProductGridDiv3.style.marginRight = "0%"
    gbmProductGridDiv3.style.width = "23%"
    gbmProductGridDiv3.style.height = "40%"
    gbmProductGridDiv3.style.float = "Right"
    gbmDivProductGrid.appendChild(gbmProductGridDiv3)

    //==>gbmProductGridTxt3
    var gbmProductGridImg3 = document.createElement("img")
    gbmProductGridImg3.id = "gbmProductGridImg3"
    gbmProductGridImg3.src = "img/cool.jpg"
    gbmProductGridImg3.style.width = "100%"
    gbmProductGridImg3.style.height = "65%"
    gbmProductGridDiv3.appendChild(gbmProductGridImg3)

    //==>gbmProductGridTxt3
    var gbmProductGridTxt3 = document.createElement("span")
    gbmProductGridTxt3.id = "gbmProductGridTxt3"
    gbmProductGridTxt3.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    gbmProductGridTxt3.style.width = "100%"
    gbmProductGridTxt3.height = "30%"
    gbmProductGridDiv3.appendChild(gbmProductGridTxt3)

    //-------------------------------------------------------

    //-----------------------------------
    //=>gbmProductGridDiv4
    var gbmProductGridDiv4 = document.createElement("div")
    gbmProductGridDiv4.id = "gbmProductGridDiv4"
    gbmProductGridDiv4.style.marginRight = "2.5%"
    gbmProductGridDiv4.style.width = "23%"
    gbmProductGridDiv4.style.height = "40%"
    gbmProductGridDiv4.style.float = "right"
    gbmDivProductGrid.appendChild(gbmProductGridDiv4)

    //==>gbmProductGridImg4
    var gbmProductGridImg4 = document.createElement("img")
    gbmProductGridImg4.id = "gbmProductGridImg4"
    gbmProductGridImg4.src = "img/cool.jpg"
    gbmProductGridImg4.style.width = "100%"
    gbmProductGridImg4.style.height = "65%"
    gbmProductGridDiv4.appendChild(gbmProductGridImg4)

    //==>gbmProductGridTxt4
    var gbmProductGridTxt4 = document.createElement("span")
    gbmProductGridTxt4.id = "gbmProductGridTxt4"
    gbmProductGridTxt4.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    gbmProductGridTxt4.style.width = "100%"
    gbmProductGridTxt4.height = "30%"
    gbmProductGridDiv4.appendChild(gbmProductGridTxt4)

    //-------------------------------------------------------

    //=>gbmProductGridDiv5
    var gbmProductGridDiv5 = document.createElement("div")
    gbmProductGridDiv5.id = "gbmProductGridDiv5"
    gbmProductGridDiv5.style.marginLeft = "0%"
    gbmProductGridDiv5.style.width = "23%"
    gbmProductGridDiv5.style.height = "40%"
    gbmProductGridDiv5.style.float = "left"
    gbmDivProductGrid.appendChild(gbmProductGridDiv5)

    //==>gbmProductGridImg5
    var gbmProductGridImg5 = document.createElement("img")
    gbmProductGridImg5.id = "gbmProductGridImg5"
    gbmProductGridImg5.src = "img/cool.jpg"
    gbmProductGridImg5.style.width = "100%"
    gbmProductGridImg5.style.height = "65%"
    gbmProductGridDiv5.appendChild(gbmProductGridImg5)

    //==>gbmProductGridTxt5
    var gbmProductGridTxt5 = document.createElement("span")
    gbmProductGridTxt5.id = "gbmProductGridTxt5"
    gbmProductGridTxt5.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    gbmProductGridTxt5.style.width = "100%"
    gbmProductGridTxt5.height = "30%"
    gbmProductGridDiv5.appendChild(gbmProductGridTxt5)

    //--------------------------------------------------
    //=>gbmProductGridDiv6
    var gbmProductGridDiv6 = document.createElement("div")
    gbmProductGridDiv6.id = "gbmProductGridDiv6"
    gbmProductGridDiv6.style.marginLeft = "2.5%"
    gbmProductGridDiv6.style.width = "23%"
    gbmProductGridDiv6.style.height = "40%"
    gbmProductGridDiv6.style.float = "left"
    gbmDivProductGrid.appendChild(gbmProductGridDiv6)

    //==>gbmProductGridImg6
    var gbmProductGridImg6 = document.createElement("img")
    gbmProductGridImg6.id = "gbmProductGridImg6"
    gbmProductGridImg6.src = "img/cool.jpg"
    gbmProductGridImg6.style.width = "100%"
    gbmProductGridImg6.style.height = "65%"
    gbmProductGridDiv6.appendChild(gbmProductGridImg6)

    //==>gbmProductGridTxt6
    var gbmProductGridTxt6 = document.createElement("span")
    gbmProductGridTxt6.id = "gbmProductGridTxt2"
    gbmProductGridTxt6.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    gbmProductGridTxt6.style.width = "100%"
    gbmProductGridTxt6.height = "30%"
    gbmProductGridDiv6.appendChild(gbmProductGridTxt6)

    //---------------------------------------------------------
    //=>gbmProductGridDiv7
    var gbmProductGridDiv7 = document.createElement("div")
    gbmProductGridDiv7.id = "gbmProductGridDiv3"
    gbmProductGridDiv7.style.marginRight = "0%"
    gbmProductGridDiv7.style.width = "23%"
    gbmProductGridDiv7.style.height = "40%"
    gbmProductGridDiv7.style.float = "Right"
    gbmDivProductGrid.appendChild(gbmProductGridDiv7)

    //==>gbmProductGridTxt7
    var gbmProductGridImg7 = document.createElement("img")
    gbmProductGridImg7.id = "gbmProductGridImg7"
    gbmProductGridImg7.src = "img/cool.jpg"
    gbmProductGridImg7.style.width = "100%"
    gbmProductGridImg7.style.height = "65%"
    gbmProductGridDiv7.appendChild(gbmProductGridImg7)

    //==>gbmProductGridTxt7
    var gbmProductGridTxt7 = document.createElement("span")
    gbmProductGridTxt7.id = "gbmProductGridTxt7"
    gbmProductGridTxt7.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    gbmProductGridTxt7.style.width = "100%"
    gbmProductGridTxt7.height = "30%"
    gbmProductGridDiv7.appendChild(gbmProductGridTxt7)

    //---------------------------------------------------

    //=>gbmProductGridDiv8
    var gbmProductGridDiv8 = document.createElement("div")
    gbmProductGridDiv8.id = "gbmProductGridDiv8"
    gbmProductGridDiv8.style.marginRight = "2.5%"
    gbmProductGridDiv8.style.width = "23%"
    gbmProductGridDiv8.style.height = "40%"
    gbmProductGridDiv8.style.float = "right"
    gbmDivProductGrid.appendChild(gbmProductGridDiv8)

    //==>gbmProductGridImg4
    var gbmProductGridImg8 = document.createElement("img")
    gbmProductGridImg8.id = "gbmProductGridImg8"
    gbmProductGridImg8.src = "img/cool.jpg"
    gbmProductGridImg8.style.width = "100%"
    gbmProductGridImg8.style.height = "65%"
    gbmProductGridDiv8.appendChild(gbmProductGridImg8)

    //==>gbmProductGridTxt8
    var gbmProductGridTxt8 = document.createElement("span")
    gbmProductGridTxt8.id = "gbmProductGridTxt8"
    gbmProductGridTxt8.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    gbmProductGridTxt8.style.width = "100%"
    gbmProductGridTxt8.height = "30%"
    gbmProductGridDiv8.appendChild(gbmProductGridTxt8)

}
//description
function gbmStoreDescription(document) {

    //gbmMasterDivHeader
    var gbmMasterDivHeader = document.createElement("div")
    gbmMasterDivHeader.id = "gbmMasterDivHeader"
    gbmMasterDivHeader.style.background = "#191970"
    gbmMasterDivHeader.style.width = "100%"
    gbmMasterDivHeader.style.height = "10%"
    gbmMasterDivHeader.style.position = "absolute"

    var gbmTopMenuTable = document.createElement("table")
    gbmTopMenuTable.id = "gbmTopMenuTable"
    gbmTopMenuTable.style.borderSpacing = "12px"
    gbmTopMenuTable.style.float = "right"
    gbmTopMenuTable.style.marginRight = "2%"
    gbmTopMenuTable.style.color = "white"
    gbmTopMenuTable.style.textDecoration = "none"
    gbmTopMenuTable.style.fontSize = "20px"
    gbmTopMenuTable.style.fontFamily = "sans-serif"
    gbmTopMenuTable.style.top = "11%"
    gbmTopMenuTable.style.position = "relative"


    var tbody = document.createElement("TBODY")
    var tr = document.createElement("tr")

    var tdHome = document.createElement("td")
    var aHome = document.createElement("a")
    aHome.href = "index.html"
    aHome.innerText = "Home"
    aHome.class = "gbmTopMenuTableLink"
    aHome.style.color = "white"
    aHome.style.textDecoration = "none"
    tdHome.appendChild(aHome)

    var tdProduct = document.createElement("td")
    var aProduct = document.createElement("a")
    aProduct.style.color = "white"
    aProduct.style.textDecoration = "none"
    aProduct.href = "All_product.html"
    aProduct.innerText = "Our Products"
    aProduct.class = "gbmTopMenuTableLink"
    tdProduct.appendChild(aProduct)

    var tdAboutUs = document.createElement("td")
    var aAboutUs = document.createElement("a")
    aAboutUs.href = "About-Us.html"
    aAboutUs.innerText = "About Us"
    aAboutUs.class = "gbmTopMenuTableLink"
    aAboutUs.style.color = "white"
    aAboutUs.style.textDecoration = "none"
    tdAboutUs.appendChild(aAboutUs)

    var tdContactUs = document.createElement("td")
    var aContactUs = document.createElement("a")
    aContactUs.href = "Contact-Us.html"
    aContactUs.innerText = "Contact Us"
    aContactUs.style.color = "white"
    aContactUs.style.textDecoration = "none"
    aContactUs.class = "gbmTopMenuTableLink"
    tdContactUs.appendChild(aContactUs)


    tr.appendChild(tdHome)
    tr.appendChild(tdProduct)
    tr.appendChild(tdAboutUs)
    tr.appendChild(tdContactUs)
    tbody.appendChild(tr)
    gbmTopMenuTable.appendChild(tbody)
    gbmMasterDivHeader.appendChild(gbmTopMenuTable)
    document.body.appendChild(gbmMasterDivHeader)

    //gbmMasterDivSideBar
    var gbmMasterDivSideBar = document.createElement("div")
    gbmMasterDivSideBar.id = "gbmMasterDivSideBar"
    gbmMasterDivSideBar.style.background = "#4682B4"
    gbmMasterDivSideBar.style.width = "10%"
    gbmMasterDivSideBar.style.height = "90%"
    gbmMasterDivSideBar.style.top = "10%"
    gbmMasterDivSideBar.style.position = "absolute"
    document.body.appendChild(gbmMasterDivSideBar)

    //gbmMasterDivContainer
    var gbmMasterDivContainer = document.createElement("div")
    gbmMasterDivContainer.id = "gbmMasterDivContainer"
    gbmMasterDivContainer.style.background = "white"
    gbmMasterDivContainer.style.width = "90%"
    gbmMasterDivContainer.style.height = "90%"
    gbmMasterDivContainer.style.left = "10%"
    gbmMasterDivContainer.style.top = "10%"
    gbmMasterDivContainer.style.position = "absolute"
    document.body.appendChild(gbmMasterDivContainer)
    //=>gbmDescriptionImageBtnDiv
    var gbmDescriptionImageBtnDiv = document.createElement("div")
    gbmDescriptionImageBtnDiv.id = "gbmDescriptionImageBtnDiv"
    gbmDescriptionImageBtnDiv.style.width = "50%"
    gbmDescriptionImageBtnDiv.style.height = "90%"
    gbmDescriptionImageBtnDiv.style.position = "relative"
    gbmDescriptionImageBtnDiv.style.float = "left"
    gbmDescriptionImageBtnDiv.style.top = "10%"
    gbmMasterDivContainer.appendChild(gbmDescriptionImageBtnDiv)

    //==>gbmDescriptionImageDiv
    var gbmDescriptionImageDiv = document.createElement("img")
    gbmDescriptionImageDiv.id = "gbmDescriptionImageDiv"
    gbmDescriptionImageDiv.style.width = "70%"
    gbmDescriptionImageDiv.style.height = "50%"
    gbmDescriptionImageDiv.style.position = "relative"
    gbmDescriptionImageDiv.style.left = "25%"
    gbmDescriptionImageDiv.src = "img/cool.jpg"
    gbmDescriptionImageBtnDiv.appendChild(gbmDescriptionImageDiv)

    //==>gbmButtonDescriptionDiv
    var gbmButtonDescriptionDiv = document.createElement("button")
    gbmButtonDescriptionDiv.id = "gbmButtonDescriptionDiv"
    gbmButtonDescriptionDiv.type = "submit"
    gbmButtonDescriptionDiv.style.cursor = "pointer"
    gbmButtonDescriptionDiv.innerHTML = "Buy Now"
    gbmButtonDescriptionDiv.style.width = "70%"
    gbmButtonDescriptionDiv.style.height = "10%"
    gbmButtonDescriptionDiv.style.position = "relative"
    gbmButtonDescriptionDiv.style.left = "25%"
    gbmDescriptionImageBtnDiv.appendChild(gbmButtonDescriptionDiv)

    //=>gbmDescriptionSpnDiv
    var gbmDescriptionSpnDiv = document.createElement("div")
    gbmDescriptionSpnDiv.id = "gbmDescriptionSpnDiv"
    gbmDescriptionSpnDiv.style.width = "50%"
    gbmDescriptionSpnDiv.style.height = "90%"
    gbmDescriptionSpnDiv.style.position = "relative"
    gbmDescriptionSpnDiv.style.float = "right"
    gbmDescriptionSpnDiv.style.top = "10%"
    gbmMasterDivContainer.appendChild(gbmDescriptionSpnDiv)

    //==>gbmDescriptionDivSpn
    var gbmDescriptionDivSpn = document.createElement("div")
    gbmDescriptionDivSpn.id = "gbmDescriptionDivSpn"
    gbmDescriptionDivSpn.style.width = "70%"
    gbmDescriptionDivSpn.style.height = "60%"
    gbmDescriptionDivSpn.style.position = "relative"
    gbmDescriptionDivSpn.style.fontSize = "25px"
    gbmDescriptionDivSpn.innerHTML = "<span><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popula rised in the 1960s with the release of Let raset sheets containing Lorem</span>"
    gbmDescriptionSpnDiv.appendChild(gbmDescriptionDivSpn)

    //===>gbmDescriptionSpan

}
//contact us
function gbmStoreContactUs() {
    //gbmMasterDivHeader
    var gbmMasterDivHeader = document.createElement("div")
    gbmMasterDivHeader.id = "gbmMasterDivHeader"
    gbmMasterDivHeader.style.background = "#191970"
    gbmMasterDivHeader.style.width = "100%"
    gbmMasterDivHeader.style.height = "10%"
    gbmMasterDivHeader.style.position = "absolute"

    var gbmTopMenuTable = document.createElement("table")
    gbmTopMenuTable.id = "gbmTopMenuTable"
    gbmTopMenuTable.style.borderSpacing = "12px"
    gbmTopMenuTable.style.float = "right"
    gbmTopMenuTable.style.marginRight = "2%"
    gbmTopMenuTable.style.color = "white"
    gbmTopMenuTable.style.textDecoration = "none"
    gbmTopMenuTable.style.fontSize = "20px"
    gbmTopMenuTable.style.fontFamily = "sans-serif"
    gbmTopMenuTable.style.top = "11%"
    gbmTopMenuTable.style.position = "relative"


    var tbody = document.createElement("TBODY")
    var tr = document.createElement("tr")

    var tdHome = document.createElement("td")
    var aHome = document.createElement("a")
    aHome.href = "index.html"
    aHome.innerText = "Home"
    aHome.class = "gbmTopMenuTableLink"
    aHome.style.color = "white"
    aHome.style.textDecoration = "none"
    tdHome.appendChild(aHome)

    var tdProduct = document.createElement("td")
    var aProduct = document.createElement("a")
    aProduct.style.color = "white"
    aProduct.style.textDecoration = "none"
    aProduct.href = "All_product.html"
    aProduct.innerText = "Our Products"
    aProduct.class = "gbmTopMenuTableLink"
    tdProduct.appendChild(aProduct)

    var tdAboutUs = document.createElement("td")
    var aAboutUs = document.createElement("a")
    aAboutUs.href = "About-Us.html"
    aAboutUs.innerText = "About Us"
    aAboutUs.class = "gbmTopMenuTableLink"
    aAboutUs.style.color = "white"
    aAboutUs.style.textDecoration = "none"
    tdAboutUs.appendChild(aAboutUs)

    var tdContactUs = document.createElement("td")
    var aContactUs = document.createElement("a")
    aContactUs.href = "Contact-Us.html"
    aContactUs.innerText = "Contact Us"
    aContactUs.style.color = "white"
    aContactUs.style.textDecoration = "none"
    aContactUs.class = "gbmTopMenuTableLink"
    tdContactUs.appendChild(aContactUs)


    tr.appendChild(tdHome)
    tr.appendChild(tdProduct)
    tr.appendChild(tdAboutUs)
    tr.appendChild(tdContactUs)
    tbody.appendChild(tr)
    gbmTopMenuTable.appendChild(tbody)
    gbmMasterDivHeader.appendChild(gbmTopMenuTable)
    document.body.appendChild(gbmMasterDivHeader)

    //gbmMasterDivSideBar
    var gbmMasterDivSideBar = document.createElement("div")
    gbmMasterDivSideBar.id = "gbmMasterDivSideBar"
    gbmMasterDivSideBar.style.background = "#4682B4"
    gbmMasterDivSideBar.style.width = "10%"
    gbmMasterDivSideBar.style.height = "90%"
    gbmMasterDivSideBar.style.top = "10%"
    gbmMasterDivSideBar.style.position = "absolute"
    document.body.appendChild(gbmMasterDivSideBar)

    //gbmMasterDivContainer
    var gbmMasterDivContainer = document.createElement("div")
    gbmMasterDivContainer.id = "gbmMasterDivContainer"
    gbmMasterDivContainer.style.background = "white"
    gbmMasterDivContainer.style.width = "90%"
    gbmMasterDivContainer.style.height = "90%"
    gbmMasterDivContainer.style.left = "10%"
    gbmMasterDivContainer.style.top = "10%"
    gbmMasterDivContainer.style.position = "absolute"
    document.body.appendChild(gbmMasterDivContainer)


    var gbmContactUsFormDiv = document.createElement("form")
    gbmContactUsFormDiv.id = "gbmContactUsFormDiv"
    gbmContactUsFormDiv.style.width = "40%"
    gbmContactUsFormDiv.style.height = "80%"
    gbmContactUsFormDiv.style.position = "relative"
    gbmContactUsFormDiv.style.left = "5%"
    gbmContactUsFormDiv.style.top = "10%"
    gbmMasterDivContainer.appendChild(gbmContactUsFormDiv)

    var gbmContactUsTitleForm = document.createElement("h2")
    gbmContactUsTitleForm.id = "gbmContactUsTitleForm"
    gbmContactUsTitleForm.innerText = "Contact Us"
    gbmContactUsTitleForm.style.textAlign = "center"
    gbmContactUsTitleForm.style.width = "100%"
    gbmContactUsTitleForm.style.position = "relative"
    gbmContactUsTitleForm.style.fontSize = "71px"
    gbmContactUsTitleForm.style.textShadow = "-4px 4px dimgray"
    gbmContactUsFormDiv.appendChild(gbmContactUsTitleForm)

    //gbmLnameDiv
    var gbmLnameDiv = document.createElement("div")
    gbmLnameDiv.id = "gbmLnameDiv"
    gbmLnameDiv.style.width = "48%"
    gbmLnameDiv.style.float = "left"
    gbmLnameDiv.style.marginRight = "2%"
    gbmLnameDiv.style.position = "relative"
    gbmContactUsFormDiv.appendChild(gbmLnameDiv)

    var gbmLblLnameDiv = document.createElement("label")
    gbmLblLnameDiv.id = "gbmLblLnameDiv"
    gbmLblLnameDiv.innerHTML = "Last Name<BR>"
    gbmLblLnameDiv.setAttribute("for", "gbmLname")
    gbmLnameDiv.appendChild(gbmLblLnameDiv)

    var gbmTxtLnameDiv = document.createElement("input")
    gbmTxtLnameDiv.id = "gbmTxtLnameDiv"
    gbmTxtLnameDiv.style.width = "100%"
    gbmTxtLnameDiv.setAttribute("type", "text")
    gbmLnameDiv.appendChild(gbmTxtLnameDiv)

    //gbmFnameDiv
    var gbmFnameDiv = document.createElement("div")
    gbmFnameDiv.id = "gbmFnameDiv"
    gbmFnameDiv.style.width = "48%"
    gbmFnameDiv.style.position = "relative"
    gbmFnameDiv.style.float = "right"
    gbmFnameDiv.style.marginLeft = "2%"
    gbmContactUsFormDiv.appendChild(gbmFnameDiv)

    var gbmFnameLblDiv = document.createElement("label")
    gbmFnameLblDiv.id = "gbmFnameLblDiv"
    gbmFnameLblDiv.innerHTML = "First Name<BR>"
    gbmFnameLblDiv.setAttribute("for", "gbmFname")
    gbmFnameDiv.appendChild(gbmFnameLblDiv)

    var gbmTxtFnameDiv = document.createElement("input")
    gbmTxtFnameDiv.id = "gbmTxtFnameDiv"
    gbmTxtFnameDiv.setAttribute("type", "text")
    gbmTxtFnameDiv.style.width = "100%"
    gbmFnameDiv.appendChild(gbmTxtFnameDiv)

    //gbmEmailDiv
    var gbmEmailDiv = document.createElement("div")
    gbmEmailDiv.id = "gbmEmailDiv"
    gbmContactUsFormDiv.appendChild(gbmEmailDiv)

    var gbmLblEmailDiv = document.createElement("label")
    gbmLblEmailDiv.id = "gbmLblEmailDiv"
    gbmLblEmailDiv.innerHTML = "Your Email<BR>"
    gbmLblEmailDiv.setAttribute("for", "gbmEmail")
    gbmEmailDiv.appendChild(gbmLblEmailDiv)

    var gbmTxtEmailDiv = document.createElement("input")
    gbmTxtEmailDiv.id = "gbmTxtEmailDiv"
    gbmTxtEmailDiv.style.width = "100%"
    gbmTxtEmailDiv.setAttribute("type", "text")
    gbmEmailDiv.appendChild(gbmTxtEmailDiv)

    //gbmSubjectDiv
    var gbmSubjectDiv = document.createElement("div")
    gbmSubjectDiv.id = "gbmSubjectDiv"
    gbmContactUsFormDiv.appendChild(gbmSubjectDiv)

    var gbmLblSubjectDiv = document.createElement("label")
    gbmLblSubjectDiv.id = "gbmLblSubjectDiv"
    gbmLblSubjectDiv.innerHTML = "Your Subject<BR>"
    gbmLblSubjectDiv.setAttribute("for", "gbmSuject")
    gbmSubjectDiv.appendChild(gbmLblSubjectDiv)

    var gbmTxtSujectDiv = document.createElement("input")
    gbmTxtSujectDiv.id = "gbmTxtSujectDiv"
    gbmTxtSujectDiv.setAttribute("type", "text")
    gbmTxtSujectDiv.style.width = "100%"
    gbmSubjectDiv.appendChild(gbmTxtSujectDiv)

    //gbmYourMessageDiv
    var gbmYourMessageDiv = document.createElement("div")
    gbmYourMessageDiv.id = "gbmYourMessageDiv"
    gbmYourMessageDiv.style.width = "100%"
    gbmYourMessageDiv.style.height = "50%"
    gbmYourMessageDiv.style.position = "relative"
    gbmContactUsFormDiv.appendChild(gbmYourMessageDiv)

    var gbmLblYourMessageDiv = document.createElement("label")
    gbmLblYourMessageDiv.id = "gbmLblYourMessageDiv"
    gbmLblYourMessageDiv.innerHTML = "Your Message<BR>"
    gbmLblYourMessageDiv.setAttribute("for", "gbmSuject")
    gbmYourMessageDiv.appendChild(gbmLblYourMessageDiv)

    var gbmAreaYourMessageDiv = document.createElement("TEXTAREA");
    gbmAreaYourMessageDiv.id = "gbmAreaYourMessageDiv"
    gbmAreaYourMessageDiv.style.width = "100%"
    gbmAreaYourMessageDiv.style.height = "50%"
    gbmYourMessageDiv.appendChild(gbmAreaYourMessageDiv)

    //gbmSendDiv
    var gbmSendDiv = document.createElement("div")
    gbmSendDiv.id = "gbmSendDiv"
    gbmSendDiv.style.width = "100%"
    gbmSendDiv.style.position = "relative"
    gbmSendDiv.style.bottom = "15%"
    gbmContactUsFormDiv.appendChild(gbmSendDiv)
    //==>button send
    var gbmDivButSend = document.createElement("div")
    gbmDivButSend.id = "gbmDivButSend"
    gbmDivButSend.style.float = "left"
    gbmDivButSend.style.width = "50%"
    gbmDivButSend.style.top = "20%"
    gbmSendDiv.appendChild(gbmDivButSend)

    var gbmButtonSendDiv = document.createElement("Button")
    gbmButtonSendDiv.id = "gbmButtonSendDiv"
    gbmButtonSendDiv.setAttribute("type", "button")
    gbmButtonSendDiv.innerText = "Send"
    gbmButtonSendDiv.style.width = "50%"
    gbmButtonSendDiv.style.height = "50%"
    gbmButtonSendDiv.style.position = "relative"
    gbmButtonSendDiv.style.fontSize = "25px"
    gbmButtonSendDiv.style.Color = "white"
    gbmButtonSendDiv.style.backgroundColor = "#191970"
    gbmButtonSendDiv.style.cursor = "pointer"
    gbmDivButSend.appendChild(gbmButtonSendDiv)


    //==>button cancel
    var gbmDivButCancel = document.createElement("div")
    gbmDivButCancel.id = "gbmDivButCancel"
    gbmDivButCancel.style.float = "right"
    gbmDivButCancel.style.width = "50%"
    gbmDivButCancel.style.position = "relative"
    gbmDivButCancel.style.right = "17%"
    gbmSendDiv.appendChild(gbmDivButCancel)

    var gbmButtonCancelDiv = document.createElement("Button")
    gbmButtonCancelDiv.id = "gbmButtonCancelDiv"
    gbmButtonCancelDiv.setAttribute("type", "button")
    gbmButtonCancelDiv.innerText = "cancel"
    gbmButtonCancelDiv.style.width = "50%"
    gbmButtonCancelDiv.style.height = "50%"
    gbmButtonCancelDiv.style.position = "relative"
    gbmButtonCancelDiv.style.fontSize = "25px"
    gbmButtonCancelDiv.style.backgroundColor = "#ff0000"
    gbmButtonCancelDiv.style.color = "white"
    gbmButtonCancelDiv.style.cursor = "pointer"
    gbmDivButCancel.appendChild(gbmButtonCancelDiv)

}

//checkout
function gbmStoreCheckout() {
    //gbmMasterDivHeader
    var gbmMasterDivHeader = document.createElement("div")
    gbmMasterDivHeader.id = "gbmMasterDivHeader"
    gbmMasterDivHeader.style.background = "#191970"
    gbmMasterDivHeader.style.width = "100%"
    gbmMasterDivHeader.style.height = "10%"
    gbmMasterDivHeader.style.position = "absolute"

    var gbmTopMenuTable = document.createElement("table")
    gbmTopMenuTable.id = "gbmTopMenuTable"
    gbmTopMenuTable.style.borderSpacing = "12px"
    gbmTopMenuTable.style.float = "right"
    gbmTopMenuTable.style.marginRight = "2%"
    gbmTopMenuTable.style.color = "white"
    gbmTopMenuTable.style.textDecoration = "none"
    gbmTopMenuTable.style.fontSize = "20px"
    gbmTopMenuTable.style.fontFamily = "sans-serif"
    gbmTopMenuTable.style.top = "11%"
    gbmTopMenuTable.style.position = "relative"


    var tbody = document.createElement("TBODY")
    var tr = document.createElement("tr")

    var tdHome = document.createElement("td")
    var aHome = document.createElement("a")
    aHome.href = "index.html"
    aHome.innerText = "Home"
    aHome.class = "gbmTopMenuTableLink"
    aHome.style.color = "white"
    aHome.style.textDecoration = "none"
    tdHome.appendChild(aHome)

    var tdProduct = document.createElement("td")
    var aProduct = document.createElement("a")
    aProduct.style.color = "white"
    aProduct.style.textDecoration = "none"
    aProduct.href = "All_product.html"
    aProduct.innerText = "Our Products"
    aProduct.class = "gbmTopMenuTableLink"
    tdProduct.appendChild(aProduct)

    var tdAboutUs = document.createElement("td")
    var aAboutUs = document.createElement("a")
    aAboutUs.href = "About-Us.html"
    aAboutUs.innerText = "About Us"
    aAboutUs.class = "gbmTopMenuTableLink"
    aAboutUs.style.color = "white"
    aAboutUs.style.textDecoration = "none"
    tdAboutUs.appendChild(aAboutUs)

    var tdContactUs = document.createElement("td")
    var aContactUs = document.createElement("a")
    aContactUs.href = "Contact-Us.html"
    aContactUs.innerText = "Contact Us"
    aContactUs.style.color = "white"
    aContactUs.style.textDecoration = "none"
    aContactUs.class = "gbmTopMenuTableLink"
    tdContactUs.appendChild(aContactUs)


    tr.appendChild(tdHome)
    tr.appendChild(tdProduct)
    tr.appendChild(tdAboutUs)
    tr.appendChild(tdContactUs)
    tbody.appendChild(tr)
    gbmTopMenuTable.appendChild(tbody)
    gbmMasterDivHeader.appendChild(gbmTopMenuTable)
    document.body.appendChild(gbmMasterDivHeader)

    //gbmMasterDivSideBar
    var gbmMasterDivSideBar = document.createElement("div")
    gbmMasterDivSideBar.id = "gbmMasterDivSideBar"
    gbmMasterDivSideBar.style.background = "#4682B4"
    gbmMasterDivSideBar.style.width = "10%"
    gbmMasterDivSideBar.style.height = "90%"
    gbmMasterDivSideBar.style.top = "10%"
    gbmMasterDivSideBar.style.position = "absolute"
    document.body.appendChild(gbmMasterDivSideBar)

    //gbmMasterDivContainer
    var gbmMasterDivContainer = document.createElement("div")
    gbmMasterDivContainer.id = "gbmMasterDivContainer"
    gbmMasterDivContainer.style.background = "white"
    gbmMasterDivContainer.style.width = "90%"
    gbmMasterDivContainer.style.height = "90%"
    gbmMasterDivContainer.style.left = "10%"
    gbmMasterDivContainer.style.top = "10%"
    gbmMasterDivContainer.style.position = "absolute"
    document.body.appendChild(gbmMasterDivContainer)

    //--------div for form------------------------------
    var gbmPaymentFormPackage = document.createElement("div")
    gbmPaymentFormPackage.id = "gbmPaymentFormPackage"
    gbmPaymentFormPackage.style.width = "60%"
    gbmPaymentFormPackage.style.float = "left"
    gbmPaymentFormPackage.style.position = "relative"
    gbmMasterDivContainer.appendChild(gbmPaymentFormPackage)
    //-----------*-----------------------------\
    //==>gbmPaymentFormDiv
    var gbmPaymentFormDiv = document.createElement("form")
    gbmPaymentFormDiv.id = "gbmPaymentFormDiv"
    gbmPaymentFormDiv.style.width = "50%"
    gbmPaymentFormDiv.style.height = "80%"
    gbmPaymentFormDiv.style.position = "relative"
    gbmPaymentFormDiv.style.left = "10%"
    gbmPaymentFormDiv.style.top = "10%"
    gbmPaymentFormPackage.appendChild(gbmPaymentFormDiv)
    //===>gbmPaymentTitleForm
    var gbmPaymentTitleForm = document.createElement("h2")
    gbmPaymentTitleForm.id = "gbmPaymentTitleForm"
    gbmPaymentTitleForm.style.textAlign = "center"
    gbmPaymentTitleForm.style.width = "100%"
    gbmPaymentTitleForm.style.left = "10%"
    gbmPaymentTitleForm.innerHTML = "Payment Gateaway"
    gbmPaymentFormDiv.appendChild(gbmPaymentTitleForm)
    //===>gbmPaymentLnameDiv
    var gbmPaymentLnameDiv = document.createElement("div")
    gbmPaymentLnameDiv.id = "gbmPaymentLnameDiv"
    gbmPaymentLnameDiv.style.width = "45%"
    gbmPaymentLnameDiv.style.height = "relative"
    gbmPaymentLnameDiv.style.float = "left"
    gbmPaymentLnameDiv.style.marginRight = "5%"
    gbmPaymentFormDiv.appendChild(gbmPaymentLnameDiv)

    //==>gbmPaymentLnameLbl
    var gbmPaymentLnameLbl = document.createElement("label")
    gbmPaymentLnameLbl.id = "gbmPaymentLnameLbl"
    gbmPaymentLnameLbl.innerHTML = "Last Name<br>"
    gbmPaymentLnameDiv.appendChild(gbmPaymentLnameLbl)

    //==>gbmPaymentLnameInput
    var gbmPaymentLnameInput = document.createElement("input")
    gbmPaymentLnameInput.id = "gbmPaymentLnameInput"
    gbmPaymentLnameInput.style.width = "100%"
    gbmPaymentLnameInput.style.position = "relative"
    gbmPaymentLnameDiv.appendChild(gbmPaymentLnameInput)

    //----fname------
    var gbmPaymentFnameDiv = document.createElement("div")
    gbmPaymentFnameDiv.id = "gbmPaymentFnameDiv"
    gbmPaymentFnameDiv.style.width = "45%"
    gbmPaymentFnameDiv.style.position = "relative"
    gbmPaymentFnameDiv.style.float = "right"
    gbmPaymentFnameDiv.style.marginLeft = "5%"
    gbmPaymentFormDiv.appendChild(gbmPaymentFnameDiv)

    //==>gbmPaymentFnameLbl
    var gbmPaymentFnameLbl = document.createElement("label")
    gbmPaymentFnameLbl.id = "gbmPaymentFnameLbl"
    gbmPaymentFnameLbl.innerHTML = "First Name<br>"
    gbmPaymentFnameDiv.appendChild(gbmPaymentFnameLbl)

    //==>gbmPaymentFnameInput
    var gbmPaymentFnameInput = document.createElement("input")
    gbmPaymentFnameInput.id = "gbmPaymentFnameInput"
    gbmPaymentFnameInput.style.width = "100%"
    gbmPaymentFnameDiv.appendChild(gbmPaymentFnameInput)

    //===>gbmPaymentAddressDiv
    var gbmPaymentAddressDiv = document.createElement('div')
    gbmPaymentAddressDiv.id = "gbmPaymentAddressDiv"
    gbmPaymentAddressDiv.style.width = "100%"
    gbmPaymentAddressDiv.style.height = "100%"
    gbmPaymentAddressDiv.style.display = "block"
    gbmPaymentFormDiv.appendChild(gbmPaymentAddressDiv)

    //====>gbmPaymentAddressLbl
    var gbmPaymentAddressLbl = document.createElement("label")
    gbmPaymentAddressLbl.id = "gbmPaymentAddressLbl"
    gbmPaymentAddressLbl.innerHTML = "Address<br>"
    gbmPaymentAddressDiv.appendChild(gbmPaymentAddressLbl)

    //===>gbmPaymentAddressInput
    var gbmPaymentAddressInput = document.createElement("textarea")
    gbmPaymentAddressInput.id = "gbmPaymentAddressInput"
    gbmPaymentAddressInput.style.width = "100%"
    gbmPaymentAddressDiv.appendChild(gbmPaymentAddressInput)

    //===>gbmPaymentCityDiv
    var gbmPaymentCityDiv = document.createElement('div')
    gbmPaymentCityDiv.id = "gbmPaymentCityDiv"
    gbmPaymentFormDiv.appendChild(gbmPaymentCityDiv)

    //====>gbmPaymentCityLbl
    var gbmPaymentCityLbl = document.createElement("label")
    gbmPaymentCityLbl.id = "gbmPaymentCityLbl"
    gbmPaymentCityLbl.innerHTML = "City<br>"
    gbmPaymentCityDiv.appendChild(gbmPaymentCityLbl)

    //===>gbmPaymentCityInput
    var gbmPaymentCityInput = document.createElement("input")
    gbmPaymentCityInput.id = "gbmPaymentCityInput"
    gbmPaymentCityInput.style.width = "100%"
    gbmPaymentCityDiv.appendChild(gbmPaymentCityInput)

    //===>gbmPaymentCountryDiv
    var gbmPaymentCountryDiv = document.createElement("div")
    gbmPaymentCountryDiv.id = "gbmPaymentCountryDiv"
    gbmPaymentCountryDiv.style.width = "45%"
    gbmPaymentCountryDiv.style.height = "relative"
    gbmPaymentCountryDiv.style.float = "left"
    gbmPaymentCountryDiv.style.marginRight = "5%"
    gbmPaymentFormDiv.appendChild(gbmPaymentCountryDiv)

    //==>gbmPaymentCountryLbl
    var gbmPaymentCountryLbl = document.createElement("label")
    gbmPaymentCountryLbl.id = "gbmPaymentCountryLbl"
    gbmPaymentCountryLbl.innerHTML = "Country<br>"
    gbmPaymentCountryDiv.appendChild(gbmPaymentCountryLbl)

    //==>gbmPaymentCountryInput
    var gbmPaymentCountryInput = document.createElement("input")
    gbmPaymentCountryInput.id = "gbmPaymentCountryInput"
    gbmPaymentCountryInput.style.width = "100%"
    gbmPaymentCountryInput.style.position = "relative"
    gbmPaymentCountryDiv.appendChild(gbmPaymentCountryInput)

    //----zip------
    var gbmPaymentZipDiv = document.createElement("div")
    gbmPaymentZipDiv.id = "gbmPaymentZipDiv"
    gbmPaymentZipDiv.style.width = "45%"
    gbmPaymentZipDiv.style.position = "relative"
    gbmPaymentZipDiv.style.float = "right"
    gbmPaymentZipDiv.style.marginLeft = "5%"
    gbmPaymentFormDiv.appendChild(gbmPaymentZipDiv)

    //==>gbmPaymentZipLbl
    var gbmPaymentZipLbl = document.createElement("label")
    gbmPaymentZipLbl.id = "gbmPaymentZipLbl"
    gbmPaymentZipLbl.innerHTML = "Zip Code"
    gbmPaymentZipDiv.appendChild(gbmPaymentZipLbl)

    //==>gbmPaymentZipInput
    var gbmPaymentZipInput = document.createElement("input")
    gbmPaymentZipInput.id = "gbmPaymentZipInput"
    gbmPaymentZipInput.style.width = "100%"
    gbmPaymentZipDiv.appendChild(gbmPaymentZipInput)

    //-----------gbmPaymentEmailDiv
    var gbmPaymentEmailDiv = document.createElement("div")
    gbmPaymentEmailDiv.id = "gbmPaymentEmailDiv"
    gbmPaymentEmailDiv.style.width = "45%"
    gbmPaymentEmailDiv.style.position = "relative"
    gbmPaymentEmailDiv.style.float = "left"
    gbmPaymentEmailDiv.marginRight = "5%"
    gbmPaymentFormDiv.appendChild(gbmPaymentEmailDiv)

    //gbmPaymentEmailLbl
    var gbmPaymentEmailLbl = document.createElement("label")
    gbmPaymentEmailLbl.id = "gbmPaymentEmailLbl"
    gbmPaymentEmailLbl.innerHTML = "Email<br>"
    gbmPaymentEmailDiv.appendChild(gbmPaymentEmailLbl)

    //gbmPaymentEmailInput
    var gbmPaymentEmailInput = document.createElement("input")
    gbmPaymentEmailInput.id = "gbmPaymentEmailInput"
    gbmPaymentEmailInput.style.width = "100%"
    gbmPaymentEmailDiv.appendChild(gbmPaymentEmailInput)

    //------------------------------
    //-----------gbmPaymentPhoneDiv
    var gbmPaymentPhoneDiv = document.createElement("div")
    gbmPaymentPhoneDiv.id = "gbmPaymentPhoneDiv"
    gbmPaymentPhoneDiv.style.width = "45%"
    gbmPaymentPhoneDiv.style.position = "relative"
    gbmPaymentPhoneDiv.style.float = "right"
    gbmPaymentPhoneDiv.marginLeft = "5%"
    gbmPaymentFormDiv.appendChild(gbmPaymentPhoneDiv)

    //gbmPaymentPhoneLbl
    var gbmPaymentPhoneLbl = document.createElement("label")
    gbmPaymentPhoneLbl.id = "gbmPaymentPhoneLbl"
    gbmPaymentPhoneLbl.innerHTML = "Phone<br>"
    gbmPaymentPhoneDiv.appendChild(gbmPaymentPhoneLbl)

    //gbmPaymentPhoneInput
    var gbmPaymentPhoneInput = document.createElement("input")
    gbmPaymentPhoneInput.id = "gbmPaymentPhoneInput"
    gbmPaymentPhoneInput.style.width = "100%"
    gbmPaymentPhoneDiv.appendChild(gbmPaymentPhoneInput)





    //---------*-------------
    var gbmYourOrderDiv = document.createElement("div")
    gbmYourOrderDiv.id = "gbmYourOrderDiv"
    gbmYourOrderDiv.style.position = "relative"
    gbmYourOrderDiv.style.width = "40%"
    gbmYourOrderDiv.style.height = "2%"
    gbmYourOrderDiv.style.float = "right"
    gbmMasterDivContainer.appendChild(gbmYourOrderDiv)

    //=>gbmYourOrderTitle
    var gbmYourOrderTitle = document.createElement("h2")
    gbmYourOrderTitle.id = "gbmYourOrderTitle"
    gbmYourOrderTitle.style.left = "5%"
    gbmYourOrderTitle.style.position = "relative"
    gbmYourOrderTitle.innerHTML = "Your Order"
    gbmYourOrderDiv.appendChild(gbmYourOrderTitle)

    //=>gbmYourOrderTable
    var gbmYourOrderTable = document.createElement("table")
    gbmYourOrderTable.id = 'gbmYourOrderTable'
    gbmYourOrderTable.style.border = "1px solid black"
    gbmYourOrderTable.style.borderCollapse = "Collapse"
    gbmYourOrderTable.style.width = "40%"
    gbmYourOrderTable.style.position = "relative"
    gbmYourOrderTable.style.left = "5%"
    gbmYourOrderTable.style.textAlign = "center"
    gbmYourOrderDiv.appendChild(gbmYourOrderTable)

    //==>gbmYourOrderTr1
    var gbmYourOrderTr1 = document.createElement("tr")
    gbmYourOrderTr1.id = "gbmYourOrderTr1"
    gbmYourOrderTr1.style.backgroundColor = '#dddddd'
    gbmYourOrderTr1.style.color = "white"
    gbmYourOrderTable.appendChild(gbmYourOrderTr1)

    //===>gbmYourOrderTh1
    var gbmYourOrderTh1 = document.createElement("th")
    gbmYourOrderTh1.id = "gbmYourOrderTh1"
    gbmYourOrderTh1.innerHTML = "Item"
    gbmYourOrderTr1.appendChild(gbmYourOrderTh1)

    //===>gbmYourOrderTh2
    var gbmYourOrderTh2 = document.createElement("th")
    gbmYourOrderTh2.id = "gbmYourOrderTh2"
    gbmYourOrderTh2.innerHTML = "Price"
    gbmYourOrderTr1.appendChild(gbmYourOrderTh2)

    //===>gbmYourOrderTh3
    var gbmYourOrderTh3 = document.createElement("th")
    gbmYourOrderTh3.id = "gbmYourOrderTh3"
    gbmYourOrderTh3.innerHTML = "Total"
    gbmYourOrderTr1.appendChild(gbmYourOrderTh3)

    //*-----tr2
    //==>gbmYourOrderTr
    var gbmYourOrderTr3 = document.createElement("tr")
    gbmYourOrderTr3.id = "gbmYourOrderTr3"
    gbmYourOrderTable.appendChild(gbmYourOrderTr3)

    //===>gbmYourOrderTd4
    var gbmYourOrderTd4 = document.createElement("td")
    gbmYourOrderTd4.id = "gbmYourOrderTd4"
    gbmYourOrderTd4.innerText = "----"
    gbmYourOrderTr3.appendChild(gbmYourOrderTd4)

    //===>gbmYourOrderTd5
    var gbmYourOrderTd5 = document.createElement("td")
    gbmYourOrderTd5.id = "gbmYourOrderTd5"
    gbmYourOrderTd5.innerText = "------"
    gbmYourOrderTr3.appendChild(gbmYourOrderTd5)

    //===>gbmYourOrderTd6
    var gbmYourOrderTd6 = document.createElement("td")
    gbmYourOrderTd6.id = "gbmYourOrderTd6"
    gbmYourOrderTd6.innerText = "------"
    gbmYourOrderTr3.appendChild(gbmYourOrderTd6)

    //--------tr4
    //==>gbmYourOrderTr4
    var gbmYourOrderTr4 = document.createElement("tr")
    gbmYourOrderTr4.id = "gbmYourOrderTr4"
    gbmYourOrderTable.appendChild(gbmYourOrderTr4)

    //===>gbmYourOrderTd7
    var gbmYourOrderTd7 = document.createElement("td")
    gbmYourOrderTd7.id = "gbmYourOrderTd7"
    gbmYourOrderTd7.innerText = "------"
    gbmYourOrderTr4.appendChild(gbmYourOrderTd7)

    //===>gbmYourOrderTd8
    var gbmYourOrderTd8 = document.createElement("td")
    gbmYourOrderTd8.id = "gbmYourOrderTd8"
    gbmYourOrderTd8.innerText = "----"
    gbmYourOrderTr4.appendChild(gbmYourOrderTd8)

    //===>gbmYourOrderTd9
    var gbmYourOrderTd9 = document.createElement("td")
    gbmYourOrderTd9.id = "gbmYourOrderTd9"
    gbmYourOrderTd9.innerText = "----"
    gbmYourOrderTr4.appendChild(gbmYourOrderTd9)


    //*-----third div
    var gbmYourOrderInformationDiv = document.createElement("div")
    gbmYourOrderInformationDiv.id = "gbmYourOrderInformationDiv"
    gbmYourOrderInformationDiv.style.position = "relative"
    gbmYourOrderInformationDiv.style.width = "40%"
    gbmYourOrderInformationDiv.style.left = "5%"
    gbmYourOrderInformationDiv.float = "right"
    gbmYourOrderDiv.appendChild(gbmYourOrderInformationDiv)

    //gbmYourOrderDirectBank
    var gbmYourOrderDirectBank = document.createElement("input")
    gbmYourOrderDirectBank.id = 'gbmYourOrderDirectBank'
    gbmYourOrderDirectBank.setAttribute("type", "radio")
    gbmYourOrderDirectBank.value = "Direct Bank Transfert"
    gbmYourOrderInformationDiv.appendChild(gbmYourOrderDirectBank)

    //gbmYourOrderLbl
    var gbmYourOrderLbl = document.createElement("label")
    gbmYourOrderLbl.id = "gbmYourOrderLbl"
    gbmYourOrderLbl.innerHTML = "Direct Bank Transfert<br>"
    gbmYourOrderInformationDiv.appendChild(gbmYourOrderLbl)

    //-----*-------------
    //gbmYourOrderChequePayment
    var gbmYourOrderChequePayment = document.createElement("input")
    gbmYourOrderChequePayment.id = 'gbmYourOrderChequePayment'
    gbmYourOrderChequePayment.setAttribute("type", "radio")
    gbmYourOrderChequePayment.value = "Cheque Payment"
    gbmYourOrderInformationDiv.appendChild(gbmYourOrderChequePayment)

    //gbmYourOrderChequePaymentLbl
    var gbmYourOrderChequePaymentLbl = document.createElement("label")
    gbmYourOrderChequePaymentLbl.id = "gbmYourOrderChequePaymentLbl"
    gbmYourOrderChequePaymentLbl.innerHTML = "Cheque Payment<br>"
    gbmYourOrderInformationDiv.appendChild(gbmYourOrderChequePaymentLbl)

    //gbmYourOrderCredit
    var gbmYourOrderCredit = document.createElement("input")
    gbmYourOrderCredit.id = 'gbmYourOrderCredit'
    gbmYourOrderCredit.setAttribute("type", "radio")
    gbmYourOrderCredit.setAttribute("name", "Credit Card")
    gbmYourOrderCredit.value = "Credit"
    gbmYourOrderInformationDiv.appendChild(gbmYourOrderCredit)

    //gbmYourOrderCreditLbl
    var gbmYourOrderCreditLbl = document.createElement("label")
    gbmYourOrderCreditLbl.id = "gbmYourOrderCreditLbl"
    gbmYourOrderCreditLbl.innerText = "Credit"
    gbmYourOrderInformationDiv.appendChild(gbmYourOrderCreditLbl)

    //gbmYourOrderInformationDiv2
    var gbmYourOrderInformationDiv2 = document.createElement("div")
    gbmYourOrderInformationDiv2.id = "gbmYourOrderInformationDiv2"
    gbmYourOrderInformationDiv2.style.padding = "8px"
    gbmYourOrderInformationDiv2.style.width = "283px"
    gbmYourOrderInformationDiv2.innerHTML = "<p>Pay Securely using Your Credit Card</p>"
    gbmYourOrderInformationDiv2.style.backgroundColor = "#dddddd"
    gbmYourOrderInformationDiv.appendChild(gbmYourOrderInformationDiv2)

    //**********gbmYourOrderInformationh3**************
    var gbmYourOrderInformationh3 = document.createElement("h3")
    gbmYourOrderInformationh3.id = "gbmYourOrderInformationh3"
    gbmYourOrderInformationh3.innerHTML = "<h3>TEST MODE ENABLED</h3>"
    gbmYourOrderInformationDiv2.appendChild(gbmYourOrderInformationh3)

    //gbmYourOrderInformationDiv2Lbl
    var gbmYourOrderInformationDiv2Lbl = document.createElement("label")
    gbmYourOrderInformationDiv2Lbl.id = "gbmYourOrderInformationDiv2Lbl"
    gbmYourOrderInformationDiv2Lbl.innerHTML = "Credit Card Number<br>"
    gbmYourOrderInformationDiv2.appendChild(gbmYourOrderInformationDiv2Lbl)

    //gbmYourOrderInformationDiv2Input
    var gbmYourOrderInformationDiv2Input = document.createElement("input")
    gbmYourOrderInformationDiv2Input.id = "gbmYourOrderInformationDiv2Input"
    gbmYourOrderInformationDiv2Input.setAttribute("placeholder", "4000790058")
    gbmYourOrderInformationDiv2.appendChild(gbmYourOrderInformationDiv2Input)

    //gbmYourOrderInformationDiv2Lbl2
    var gbmYourOrderInformationDiv2Lbl2 = document.createElement("label")
    gbmYourOrderInformationDiv2Lbl2.id = "gbmYourOrderInformationDiv2Lbl2"
    gbmYourOrderInformationDiv2Lbl2.innerHTML = "<br>Card Security<br>"
    gbmYourOrderInformationDiv2.appendChild(gbmYourOrderInformationDiv2Lbl2)

    //gbmYourOrderInformationDiv2Input2
    var gbmYourOrderInformationDiv2Input2 = document.createElement("input")
    gbmYourOrderInformationDiv2Input2.id = "gbmYourOrderInformationDiv2Input2"
    gbmYourOrderInformationDiv2Input2.setAttribute("placeholder", "123")
    gbmYourOrderInformationDiv2.appendChild(gbmYourOrderInformationDiv2Input2)

    //gbmYourOrderSubmitBtn
    var gbmYourOrderSubmitBtn = document.createElement("div")
    gbmYourOrderSubmitBtn.id = "gbmYourOrderSubmitBtn"
    gbmYourOrderSubmitBtn.style.position = "relative"
    gbmYourOrderSubmitBtn.style.top = "102%"
    gbmYourOrderSubmitBtn.style.left = "5%"
    gbmYourOrderDiv.appendChild(gbmYourOrderSubmitBtn)

    //gbmYourOrderButtonInput
    var gbmYourOrderButtonInput = document.createElement("input")
    gbmYourOrderButtonInput.id = "gbmYourOrderButtonInput"
    gbmYourOrderButtonInput.setAttribute("type", "Submit")
    gbmYourOrderButtonInput.setAttribute("value", "Place Order")
    gbmYourOrderButtonInput.style.width = "40%"
    gbmYourOrderButtonInput.style.position = "relative"
    gbmYourOrderButtonInput.style.height = "20%"
    gbmYourOrderButtonInput.style.backgroundColor = "#666666"
    gbmYourOrderButtonInput.style.cursor = "pointer"
    gbmYourOrderButtonInput.style.color = "white"
    gbmYourOrderSubmitBtn.appendChild(gbmYourOrderButtonInput)

}
//boughtProduct
function gbmBoughtProduct(document) {

    //gbmMasterDivHeader
    var gbmMasterDivHeader = document.createElement("div")
    gbmMasterDivHeader.id = "gbmMasterDivHeader"
    gbmMasterDivHeader.style.background = "#191970"
    gbmMasterDivHeader.style.width = "100%"
    gbmMasterDivHeader.style.height = "10%"
    gbmMasterDivHeader.style.position = "absolute"

    var gbmTopMenuTable = document.createElement("table")
    gbmTopMenuTable.id = "gbmTopMenuTable"
    gbmTopMenuTable.style.borderSpacing = "12px"
    gbmTopMenuTable.style.float = "right"
    gbmTopMenuTable.style.marginRight = "2%"
    gbmTopMenuTable.style.color = "white"
    gbmTopMenuTable.style.textDecoration = "none"
    gbmTopMenuTable.style.fontSize = "20px"
    gbmTopMenuTable.style.fontFamily = "sans-serif"
    gbmTopMenuTable.style.top = "11%"
    gbmTopMenuTable.style.position = "relative"


    var tbody = document.createElement("TBODY")
    var tr = document.createElement("tr")

    var tdHome = document.createElement("td")
    var aHome = document.createElement("a")
    aHome.href = "index.html"
    aHome.innerText = "Home"
    aHome.class = "gbmTopMenuTableLink"
    aHome.style.color = "white"
    aHome.style.textDecoration = "none"
    tdHome.appendChild(aHome)

    var tdProduct = document.createElement("td")
    var aProduct = document.createElement("a")
    aProduct.style.color = "white"
    aProduct.style.textDecoration = "none"
    aProduct.href = "All_product.html"
    aProduct.innerText = "Our Products"
    aProduct.class = "gbmTopMenuTableLink"
    tdProduct.appendChild(aProduct)

    var tdAboutUs = document.createElement("td")
    var aAboutUs = document.createElement("a")
    aAboutUs.href = "About-Us.html"
    aAboutUs.innerText = "About Us"
    aAboutUs.class = "gbmTopMenuTableLink"
    aAboutUs.style.color = "white"
    aAboutUs.style.textDecoration = "none"
    tdAboutUs.appendChild(aAboutUs)

    var tdContactUs = document.createElement("td")
    var aContactUs = document.createElement("a")
    aContactUs.href = "Contact-Us.html"
    aContactUs.innerText = "Contact Us"
    aContactUs.style.color = "white"
    aContactUs.style.textDecoration = "none"
    aContactUs.class = "gbmTopMenuTableLink"
    tdContactUs.appendChild(aContactUs)


    tr.appendChild(tdHome)
    tr.appendChild(tdProduct)
    tr.appendChild(tdAboutUs)
    tr.appendChild(tdContactUs)
    tbody.appendChild(tr)
    gbmTopMenuTable.appendChild(tbody)
    gbmMasterDivHeader.appendChild(gbmTopMenuTable)
    document.body.appendChild(gbmMasterDivHeader)

    //gbmMasterDivSideBar
    var gbmMasterDivSideBar = document.createElement("div")
    gbmMasterDivSideBar.id = "gbmMasterDivSideBar"
    gbmMasterDivSideBar.style.background = "#4682B4"
    gbmMasterDivSideBar.style.width = "10%"
    gbmMasterDivSideBar.style.height = "90%"
    gbmMasterDivSideBar.style.top = "10%"
    gbmMasterDivSideBar.style.position = "absolute"
    document.body.appendChild(gbmMasterDivSideBar)

    //gbmMasterDivContainer
    var gbmMasterDivContainer = document.createElement("div")
    gbmMasterDivContainer.id = "gbmMasterDivContainer"
    gbmMasterDivContainer.style.background = "white"
    gbmMasterDivContainer.style.width = "90%"
    gbmMasterDivContainer.style.height = "90%"
    gbmMasterDivContainer.style.left = "10%"
    gbmMasterDivContainer.style.top = "10%"
    gbmMasterDivContainer.style.position = "absolute"
    document.body.appendChild(gbmMasterDivContainer)


    //*******************gbmBoughtProductDiv
    var gbmBoughtProductDiv = document.createElement("div")
    gbmBoughtProductDiv.id = "gbmBoughtProductDiv"
    gbmBoughtProductDiv.style.left = "20%"
    gbmBoughtProductDiv.style.top = "10%"
    gbmBoughtProductDiv.style.width = "80%"
    gbmBoughtProductDiv.style.position = "relative"
    gbmMasterDivContainer.appendChild(gbmBoughtProductDiv)

    //==>gbmBoughtProductTableDiv
    var gbmBoughtProductTableDiv = document.createElement("table")
    gbmBoughtProductTableDiv.id = "gbmBoughtProductTableDiv"
    gbmBoughtProductTableDiv.setAttribute("border", "1px")
    gbmBoughtProductTableDiv.style.borderCollapse = "collapse"
    gbmBoughtProductTableDiv.style.height = "360px"
    gbmBoughtProductTableDiv.style.textAlign = "center"
    gbmBoughtProductTableDiv.innerHTML = "<caption><strong>Product Bought</strong></caption>"
    gbmBoughtProductTableDiv.style.borderStyle = "solid"
    gbmBoughtProductTableDiv.style.borderSpacing = "22px"
    gbmBoughtProductDiv.appendChild(gbmBoughtProductTableDiv)

    //====>tbody
    var gbmBoughProductTbody = document.createElement("tbody")
    gbmBoughProductTbody.id = "gbmBoughProductTbody"
    gbmBoughtProductTableDiv.appendChild(gbmBoughProductTbody)

    //tr1
    var gbmBoughtProductTr1 = document.createElement("tr")
    gbmBoughtProductTr1.id = "gbmBoughtProductTr1"
    gbmBoughtProductTr1.style.backgroundColor = "#4682B4"
    gbmBoughtProductTr1.style.color = "white"
    gbmBoughProductTbody.appendChild(gbmBoughtProductTr1)

    //tr1td
    var gbmBoughtProductTr1Td = document.createElement("td")
    gbmBoughtProductTr1Td.id = "gbmBoughtProductTr1Td"
    gbmBoughtProductTr1Td.innerHTML = "<strong>Date</strong>"
    gbmBoughtProductTr1.appendChild(gbmBoughtProductTr1Td)

    //tr1td2
    var gbmBoughtProductTr1Td2 = document.createElement("td")
    gbmBoughtProductTr1Td2.id = "gbmBoughtProductTr1Td2"
    gbmBoughtProductTr1Td2.innerHTML = "<strong>Product</strong>"
    gbmBoughtProductTr1.appendChild(gbmBoughtProductTr1Td2)

    //tr1td3
    var gbmBoughtProductTr1Td3 = document.createElement("td")
    gbmBoughtProductTr1Td3.id = "gbmBoughtProductTr1Td3"
    gbmBoughtProductTr1Td3.innerHTML = "<strong>Catergory</strong>"
    gbmBoughtProductTr1.appendChild(gbmBoughtProductTr1Td3)

    //tr1td4
    var gbmBoughtProductTr1Td4 = document.createElement("td")
    gbmBoughtProductTr1Td4.id = "gbmBoughtProductTr1Td4"
    gbmBoughtProductTr1Td4.innerHTML = "<strong>Quantity</strong>"
    gbmBoughtProductTr1.appendChild(gbmBoughtProductTr1Td4)

    //tr1td5
    var gbmBoughtProductTr1Td5 = document.createElement("td")
    gbmBoughtProductTr1Td5.id = "gbmBoughtProductTr1Td5"
    gbmBoughtProductTr1Td5.innerHTML = "<strong>Price</strong>"
    gbmBoughtProductTr1.appendChild(gbmBoughtProductTr1Td5)

    //tr1td6
    var gbmBoughtProductTr1Td6 = document.createElement("td")
    gbmBoughtProductTr1Td6.id = "gbmBoughtProductTr1Td6"
    gbmBoughtProductTr1Td6.innerHTML = "<strong>Paid</strong>"
    gbmBoughtProductTr1.appendChild(gbmBoughtProductTr1Td6)

    //tr1td7
    var gbmBoughtProductTr1Td7 = document.createElement("td")
    gbmBoughtProductTr1Td7.id = "gbmBoughtProductTr1Td7"
    gbmBoughtProductTr1Td7.innerHTML = "<strong>Name of Customer</strong>"
    gbmBoughtProductTr1.appendChild(gbmBoughtProductTr1Td7)

    //tr1td8
    var gbmBoughtProductTr1Td8 = document.createElement("td")
    gbmBoughtProductTr1Td8.id = "gbmBoughtProductTr1Td8"
    gbmBoughtProductTr1Td8.innerHTML = "<strong>Customer Code</strong>"
    gbmBoughtProductTr1.appendChild(gbmBoughtProductTr1Td8)

    //tr1td9
    var gbmBoughtProductTr1Td9 = document.createElement("td")
    gbmBoughtProductTr1Td9.id = "gbmBoughtProductTr1Td9"
    gbmBoughtProductTr1Td9.innerHTML = "<strong>Customer Code</strong>"
    gbmBoughtProductTr1.appendChild(gbmBoughtProductTr1Td9)


    //--------------------------------------------

    //tr2
    var gbmBoughtProductTr2 = document.createElement("tr")
    gbmBoughtProductTr2.id = "gbmBoughtProductTr2"
    gbmBoughProductTbody.appendChild(gbmBoughtProductTr2)

    //tr2td
    var gbmBoughtProductTr2Td = document.createElement("td")
    gbmBoughtProductTr2Td.id = "gbmBoughtProductTr2Td"
    gbmBoughtProductTr2Td.innerHTML = "<strong>02/05/2020</strong>"
    gbmBoughtProductTr2.appendChild(gbmBoughtProductTr2Td)

    //tr2td2
    var gbmBoughtProductTr2Td2 = document.createElement("td")
    gbmBoughtProductTr2Td2.id = "gbmBoughtProductTr2Td2"
    gbmBoughtProductTr2Td2.innerHTML = "<strong>Blue Band</strong>"
    gbmBoughtProductTr2.appendChild(gbmBoughtProductTr2Td2)

    //tr2td3
    var gbmBoughtProductTr2Td3 = document.createElement("td")
    gbmBoughtProductTr2Td3.id = "gbmBoughtProductTr2Td3"
    gbmBoughtProductTr2Td3.innerHTML = "<strong>Butter</strong>"
    gbmBoughtProductTr2.appendChild(gbmBoughtProductTr2Td3)

    //tr2td4
    var gbmBoughtProductTr2Td4 = document.createElement("td")
    gbmBoughtProductTr2Td4.id = "gbmBoughtProductTr2Td4"
    gbmBoughtProductTr2Td4.innerHTML = "<strong>R2</strong>"
    gbmBoughtProductTr2.appendChild(gbmBoughtProductTr2Td4)

    //tr2td5
    var gbmBoughtProductTr2Td5 = document.createElement("td")
    gbmBoughtProductTr2Td5.id = "gbmBoughtProductTr2Td5"
    gbmBoughtProductTr2Td5.innerHTML = "<strong>R250,00</strong>"
    gbmBoughtProductTr2.appendChild(gbmBoughtProductTr2Td5)

    //tr2td6
    var gbmBoughtProductTr2Td6 = document.createElement("td")
    gbmBoughtProductTr2Td6.id = "gbmBoughtProductTr2Td6"
    gbmBoughtProductTr2Td6.innerHTML = "<strong>Yes</strong>"
    gbmBoughtProductTr2.appendChild(gbmBoughtProductTr2Td6)

    //tr2td7
    var gbmBoughtProductTr2Td7 = document.createElement("td")
    gbmBoughtProductTr2Td7.id = "gbmBoughtProductTr2Td7"
    gbmBoughtProductTr2Td7.innerHTML = "<strong>Grace</strong>"
    gbmBoughtProductTr2.appendChild(gbmBoughtProductTr2Td7)

    //tr2td8
    var gbmBoughtProductTr2Td8 = document.createElement("td")
    gbmBoughtProductTr2Td8.id = "gbmBoughtProductTr2Td8"
    gbmBoughtProductTr2Td8.innerHTML = "<strong>GBM001</strong>"
    gbmBoughtProductTr2.appendChild(gbmBoughtProductTr2Td8)

    //tr2td9
    var gbmBoughtProductTr2Td9 = document.createElement("td")
    gbmBoughtProductTr2Td9.id = "gbmBoughtProductTr1Td9"
    gbmBoughtProductTr2Td9.innerHTML = "<strong>0682915931</strong>"
    gbmBoughtProductTr2.appendChild(gbmBoughtProductTr2Td9)

    ///*********-*----------*-*******

    //tr3
    var gbmBoughtProductTr3 = document.createElement("tr")
    gbmBoughtProductTr3.id = "gbmBoughtProductTr3"
    gbmBoughProductTbody.appendChild(gbmBoughtProductTr3)

    //tr2td
    var gbmBoughtProductTr3Td = document.createElement("td")
    gbmBoughtProductTr3Td.id = "gbmBoughtProductTr3Td"
    gbmBoughtProductTr3Td.innerHTML = "<strong>02/05/2020</strong>"
    gbmBoughtProductTr3.appendChild(gbmBoughtProductTr3Td)

    //tr2td2
    var gbmBoughtProductTr3Td2 = document.createElement("td")
    gbmBoughtProductTr3Td2.id = "gbmBoughtProductTr3Td2"
    gbmBoughtProductTr3Td2.innerHTML = "<strong>Soft Skin</strong>"
    gbmBoughtProductTr3.appendChild(gbmBoughtProductTr3Td2)

    //tr2td3
    var gbmBoughtProductTr3Td3 = document.createElement("td")
    gbmBoughtProductTr3Td3.id = "gbmBoughtProductTr3Td3"
    gbmBoughtProductTr3Td3.innerHTML = "<strong>Butter</strong>"
    gbmBoughtProductTr3.appendChild(gbmBoughtProductTr3Td3)

    //tr2td4
    var gbmBoughtProductTr3Td4 = document.createElement("td")
    gbmBoughtProductTr3Td4.id = "gbmBoughtProductTr3Td4"
    gbmBoughtProductTr3Td4.innerHTML = "<strong>R2</strong>"
    gbmBoughtProductTr3.appendChild(gbmBoughtProductTr3Td4)

    //tr2td5
    var gbmBoughtProductTr3Td5 = document.createElement("td")
    gbmBoughtProductTr3Td5.id = "gbmBoughtProductTr3Td5"
    gbmBoughtProductTr3Td5.innerHTML = "<strong>R250,00</strong>"
    gbmBoughtProductTr3.appendChild(gbmBoughtProductTr3Td5)

    //tr2td6
    var gbmBoughtProductTr3Td6 = document.createElement("td")
    gbmBoughtProductTr3Td6.id = "gbmBoughtProductTr3Td6"
    gbmBoughtProductTr3Td6.innerHTML = "<strong>Yes</strong>"
    gbmBoughtProductTr3.appendChild(gbmBoughtProductTr3Td6)

    //tr2td7
    var gbmBoughtProductTr3Td7 = document.createElement("td")
    gbmBoughtProductTr3Td7.id = "gbmBoughtProductTr3Td7"
    gbmBoughtProductTr3Td7.innerHTML = "<strong>Grace</strong>"
    gbmBoughtProductTr3.appendChild(gbmBoughtProductTr3Td7)

    //tr2td8
    var gbmBoughtProductTr3Td8 = document.createElement("td")
    gbmBoughtProductTr3Td8.id = "gbmBoughtProductTr3Td8"
    gbmBoughtProductTr3Td8.innerHTML = "<strong>GBM001</strong>"
    gbmBoughtProductTr3.appendChild(gbmBoughtProductTr3Td8)

    //tr2td9
    var gbmBoughtProductTr3Td9 = document.createElement("td")
    gbmBoughtProductTr3Td9.id = "gbmBoughtProductTr3Td9"
    gbmBoughtProductTr3Td9.innerHTML = "<strong>0682915931</strong>"
    gbmBoughtProductTr3.appendChild(gbmBoughtProductTr3Td9)

    //****************---------******************

    //tr3
    var gbmBoughtProductTr4 = document.createElement("tr")
    gbmBoughtProductTr4.id = "gbmBoughtProductTr4"
    gbmBoughProductTbody.appendChild(gbmBoughtProductTr4)

    //tr2td
    var gbmBoughtProductTr4Td = document.createElement("td")
    gbmBoughtProductTr4Td.id = "gbmBoughtProductTr4Td"
    gbmBoughtProductTr4Td.innerHTML = "<strong></strong>"
    gbmBoughtProductTr4.appendChild(gbmBoughtProductTr4Td)

    //tr2td2
    var gbmBoughtProductTr4Td2 = document.createElement("td")
    gbmBoughtProductTr4Td2.id = "gbmBoughtProductTr4Td2"
    gbmBoughtProductTr4Td2.innerHTML = "<strong></strong>"
    gbmBoughtProductTr4.appendChild(gbmBoughtProductTr4Td2)

    //tr2td3
    var gbmBoughtProductTr4Td3 = document.createElement("td")
    gbmBoughtProductTr4Td3.id = "gbmBoughtProductTr4Td3"
    gbmBoughtProductTr4Td3.innerHTML = "<strong></strong>"
    gbmBoughtProductTr4.appendChild(gbmBoughtProductTr4Td3)

    //tr2td4
    var gbmBoughtProductTr4Td4 = document.createElement("td")
    gbmBoughtProductTr4Td4.id = "gbmBoughtProductTr3Td4"
    gbmBoughtProductTr4Td4.innerHTML = "<strong></strong>"
    gbmBoughtProductTr4.appendChild(gbmBoughtProductTr4Td4)

    //tr2td5
    var gbmBoughtProductTr4Td5 = document.createElement("td")
    gbmBoughtProductTr4Td5.id = "gbmBoughtProductTr4Td5"
    gbmBoughtProductTr4Td5.innerHTML = "<strong></strong>"
    gbmBoughtProductTr4.appendChild(gbmBoughtProductTr4Td5)

    //tr2td6
    var gbmBoughtProductTr4Td6 = document.createElement("td")
    gbmBoughtProductTr4Td6.id = "gbmBoughtProductTr4Td6"
    gbmBoughtProductTr4Td6.innerHTML = "<strong></strong>"
    gbmBoughtProductTr4.appendChild(gbmBoughtProductTr4Td6)

    //tr2td7
    var gbmBoughtProductTr4Td7 = document.createElement("td")
    gbmBoughtProductTr4Td7.id = "gbmBoughtProductTr4Td7"
    gbmBoughtProductTr4Td7.innerHTML = "<strong></strong>"
    gbmBoughtProductTr4.appendChild(gbmBoughtProductTr4Td7)

    //tr2td8
    var gbmBoughtProductTr4Td8 = document.createElement("td")
    gbmBoughtProductTr4Td8.id = "gbmBoughtProductTr4Td8"
    gbmBoughtProductTr4Td8.innerHTML = "<strong></strong>"
    gbmBoughtProductTr4.appendChild(gbmBoughtProductTr4Td8)

    //tr2td9
    var gbmBoughtProductTr4Td9 = document.createElement("td")
    gbmBoughtProductTr4Td9.id = "gbmBoughtProductTr3Td9"
    gbmBoughtProductTr4Td9.innerHTML = "<strong></strong>"
    gbmBoughtProductTr4.appendChild(gbmBoughtProductTr4Td9)

    //***************------*****************

    //tr3
    var gbmBoughtProductTr5 = document.createElement("tr")
    gbmBoughtProductTr5.id = "gbmBoughtProductTr5"
    gbmBoughProductTbody.appendChild(gbmBoughtProductTr5)

    //tr2td
    var gbmBoughtProductTr5Td = document.createElement("td")
    gbmBoughtProductTr5Td.id = "gbmBoughtProductTr5Td"
    gbmBoughtProductTr5Td.innerHTML = "<strong></strong>"
    gbmBoughtProductTr5.appendChild(gbmBoughtProductTr5Td)

    //tr2td2
    var gbmBoughtProductTr5Td2 = document.createElement("td")
    gbmBoughtProductTr5Td2.id = "gbmBoughtProductTr5Td2"
    gbmBoughtProductTr5Td2.innerHTML = "<strong></strong>"
    gbmBoughtProductTr5.appendChild(gbmBoughtProductTr5Td2)

    //tr2td3
    var gbmBoughtProductTr5Td3 = document.createElement("td")
    gbmBoughtProductTr5Td3.id = "gbmBoughtProductTr5Td3"
    gbmBoughtProductTr5Td3.innerHTML = "<strong></strong>"
    gbmBoughtProductTr5.appendChild(gbmBoughtProductTr5Td3)

    //tr2td4
    var gbmBoughtProductTr5Td4 = document.createElement("td")
    gbmBoughtProductTr5Td4.id = "gbmBoughtProductTr5Td4"
    gbmBoughtProductTr5Td4.innerHTML = "<strong></strong>"
    gbmBoughtProductTr5.appendChild(gbmBoughtProductTr5Td4)

    //tr2td5
    var gbmBoughtProductTr5Td5 = document.createElement("td")
    gbmBoughtProductTr5Td5.id = "gbmBoughtProductTr5Td5"
    gbmBoughtProductTr5Td5.innerHTML = "<strong></strong>"
    gbmBoughtProductTr5.appendChild(gbmBoughtProductTr5Td5)

    //tr2td6
    var gbmBoughtProductTr4Td6 = document.createElement("td")
    gbmBoughtProductTr4Td6.id = "gbmBoughtProductTr4Td6"
    gbmBoughtProductTr4Td6.innerHTML = "<strong></strong>"
    gbmBoughtProductTr5.appendChild(gbmBoughtProductTr4Td6)

    //tr2td7
    var gbmBoughtProductTr5Td7 = document.createElement("td")
    gbmBoughtProductTr5Td7.id = "gbmBoughtProductTr5Td7"
    gbmBoughtProductTr5Td7.innerHTML = "<strong</strong>"
    gbmBoughtProductTr5.appendChild(gbmBoughtProductTr5Td7)

    //tr2td8
    var gbmBoughtProductTr5Td8 = document.createElement("td")
    gbmBoughtProductTr4Td8.id = "gbmBoughtProductTr5Td8"
    gbmBoughtProductTr5Td8.innerHTML = "<strong></strong>"
    gbmBoughtProductTr5.appendChild(gbmBoughtProductTr5Td8)

    //tr2td9
    var gbmBoughtProductTr5Td9 = document.createElement("td")
    gbmBoughtProductTr5Td9.id = "gbmBoughtProductTr5Td9"
    gbmBoughtProductTr5Td9.innerHTML = "<strong></strong>"
    gbmBoughtProductTr5.appendChild(gbmBoughtProductTr5Td9)

    //***************-----------********************
    //tr3
    var gbmBoughtProductTr6 = document.createElement("tr")
    gbmBoughtProductTr6.id = "gbmBoughtProductTr6"
    gbmBoughProductTbody.appendChild(gbmBoughtProductTr6)

    //tr2td
    var gbmBoughtProductTr6Td = document.createElement("td")
    gbmBoughtProductTr6Td.id = "gbmBoughtProductTr6Td"
    gbmBoughtProductTr6Td.innerHTML = "<strong></strong>"
    gbmBoughtProductTr6.appendChild(gbmBoughtProductTr6Td)

    //tr2td2
    var gbmBoughtProductTr6Td2 = document.createElement("td")
    gbmBoughtProductTr6Td2.id = "gbmBoughtProductTr6Td2"
    gbmBoughtProductTr6Td2.innerHTML = "<strong></strong>"
    gbmBoughtProductTr6.appendChild(gbmBoughtProductTr6Td2)

    //tr2td3
    var gbmBoughtProductTr6Td3 = document.createElement("td")
    gbmBoughtProductTr6Td3.id = "gbmBoughtProductTr6Td3"
    gbmBoughtProductTr6Td3.innerHTML = "<strong></strong>"
    gbmBoughtProductTr6.appendChild(gbmBoughtProductTr6Td3)

    //tr2td4
    var gbmBoughtProductTr6Td4 = document.createElement("td")
    gbmBoughtProductTr6Td4.id = "gbmBoughtProductTr6Td4"
    gbmBoughtProductTr6Td4.innerHTML = "<strong></strong>"
    gbmBoughtProductTr6.appendChild(gbmBoughtProductTr6Td4)

    //tr2td5
    var gbmBoughtProductTr6Td5 = document.createElement("td")
    gbmBoughtProductTr6Td5.id = "gbmBoughtProductTr6Td5"
    gbmBoughtProductTr6Td5.innerHTML = "<strong></strong>"
    gbmBoughtProductTr6.appendChild(gbmBoughtProductTr6Td5)

    //tr2td6
    var gbmBoughtProductTr6Td6 = document.createElement("td")
    gbmBoughtProductTr6Td6.id = "gbmBoughtProductTr6Td6"
    gbmBoughtProductTr6Td6.innerHTML = "<strong></strong>"
    gbmBoughtProductTr6.appendChild(gbmBoughtProductTr6Td6)

    //tr2td7
    var gbmBoughtProductTr6Td7 = document.createElement("td")
    gbmBoughtProductTr6Td7.id = "gbmBoughtProductTr6Td7"
    gbmBoughtProductTr6Td7.innerHTML = "<strong></strong>"
    gbmBoughtProductTr6.appendChild(gbmBoughtProductTr6Td7)

    //tr2td8
    var gbmBoughtProductTr6Td8 = document.createElement("td")
    gbmBoughtProductTr6Td8.id = "gbmBoughtProductTr6Td8"
    gbmBoughtProductTr6Td8.innerHTML = "<strong></strong>"
    gbmBoughtProductTr6.appendChild(gbmBoughtProductTr6Td8)

    //tr2td9
    var gbmBoughtProductTr6Td9 = document.createElement("td")
    gbmBoughtProductTr6Td9.id = "gbmBoughtProductTr6Td9"
    gbmBoughtProductTr6Td9.innerHTML = "<strong></strong>"
    gbmBoughtProductTr6.appendChild(gbmBoughtProductTr6Td9)

    //-*************---------------
    //tr3
    var gbmBoughtProductTr7 = document.createElement("tr")
    gbmBoughtProductTr7.id = "gbmBoughtProductTr7"
    gbmBoughProductTbody.appendChild(gbmBoughtProductTr7)

    //tr2td
    var gbmBoughtProductTr7Td = document.createElement("td")
    gbmBoughtProductTr7Td.id = "gbmBoughtProductTr7Td"
    gbmBoughtProductTr7Td.innerHTML = "<strong></strong>"
    gbmBoughtProductTr7.appendChild(gbmBoughtProductTr7Td)

    //tr2td2
    var gbmBoughtProductTr7Td2 = document.createElement("td")
    gbmBoughtProductTr7Td2.id = "gbmBoughtProductTr7Td2"
    gbmBoughtProductTr7Td2.innerHTML = "<strong></strong>"
    gbmBoughtProductTr7.appendChild(gbmBoughtProductTr7Td2)

    //tr2td3
    var gbmBoughtProductTr7Td3 = document.createElement("td")
    gbmBoughtProductTr7Td3.id = "gbmBoughtProductTr6Td3"
    gbmBoughtProductTr7Td3.innerHTML = "<strong></strong>"
    gbmBoughtProductTr7.appendChild(gbmBoughtProductTr7Td3)

    //tr2td4
    var gbmBoughtProductTr7Td4 = document.createElement("td")
    gbmBoughtProductTr7Td4.id = "gbmBoughtProductTr7Td4"
    gbmBoughtProductTr7Td4.innerHTML = "<strong></strong>"
    gbmBoughtProductTr7.appendChild(gbmBoughtProductTr7Td4)

    //tr2td5
    var gbmBoughtProductTr7Td5 = document.createElement("td")
    gbmBoughtProductTr7Td5.id = "gbmBoughtProductTr7Td5"
    gbmBoughtProductTr7Td5.innerHTML = "<strong></strong>"
    gbmBoughtProductTr7.appendChild(gbmBoughtProductTr7Td5)

    //tr2td6
    var gbmBoughtProductTr7Td6 = document.createElement("td")
    gbmBoughtProductTr7Td6.id = "gbmBoughtProductTr7Td6"
    gbmBoughtProductTr7Td6.innerHTML = "<strong></strong>"
    gbmBoughtProductTr7.appendChild(gbmBoughtProductTr7Td6)

    //tr2td7
    var gbmBoughtProductTr7Td7 = document.createElement("td")
    gbmBoughtProductTr7Td7.id = "gbmBoughtProductTr7Td7"
    gbmBoughtProductTr7Td7.innerHTML = "<strong></strong>"
    gbmBoughtProductTr7.appendChild(gbmBoughtProductTr7Td7)

    //tr2td8
    var gbmBoughtProductTr7Td8 = document.createElement("td")
    gbmBoughtProductTr7Td8.id = "gbmBoughtProductTr7Td8"
    gbmBoughtProductTr7Td8.innerHTML = "<strong></strong>"
    gbmBoughtProductTr7.appendChild(gbmBoughtProductTr7Td8)

    //tr2td9
    var gbmBoughtProductTr7Td9 = document.createElement("td")
    gbmBoughtProductTr7Td9.id = "gbmBoughtProductTr6Td9"
    gbmBoughtProductTr7Td9.innerHTML = "<strong></strong>"
    gbmBoughtProductTr7.appendChild(gbmBoughtProductTr7Td9)

    //link
    var gbmBoughtProductDivAI = document.createElement("a")
    gbmBoughtProductDivAI.id = "gbmBoughtProductDivAI"
    gbmBoughtProductDivAI.href = "Admin.html"
    gbmBoughtProductDiv.appendChild(gbmBoughtProductDivAI)

    //i
    var gbmBoughProductDivI = document.createElement("i")
    gbmBoughProductDivI.id = "gbmBoughProductDivI"
    gbmBoughProductDivI.class = "fas"
    gbmBoughProductDivI.innerHTML = "&#xf060;"
    gbmBoughtProductDivAI.appendChild(gbmBoughProductDivI)
}
//bookingProdcut
function gbmBookingProduct() {
    //gbmMasterDivHeader
    var gbmMasterDivHeader = document.createElement("div")
    gbmMasterDivHeader.id = "gbmMasterDivHeader"
    gbmMasterDivHeader.style.background = "#191970"
    gbmMasterDivHeader.style.width = "100%"
    gbmMasterDivHeader.style.height = "10%"
    gbmMasterDivHeader.style.position = "absolute"

    var gbmTopMenuTable = document.createElement("table")
    gbmTopMenuTable.id = "gbmTopMenuTable"
    gbmTopMenuTable.style.borderSpacing = "12px"
    gbmTopMenuTable.style.float = "right"
    gbmTopMenuTable.style.marginRight = "2%"
    gbmTopMenuTable.style.color = "white"
    gbmTopMenuTable.style.textDecoration = "none"
    gbmTopMenuTable.style.fontSize = "20px"
    gbmTopMenuTable.style.fontFamily = "sans-serif"
    gbmTopMenuTable.style.top = "11%"
    gbmTopMenuTable.style.position = "relative"


    var tbody = document.createElement("TBODY")
    var tr = document.createElement("tr")

    var tdHome = document.createElement("td")
    var aHome = document.createElement("a")
    aHome.href = "index.html"
    aHome.innerText = "Home"
    aHome.class = "gbmTopMenuTableLink"
    aHome.style.color = "white"
    aHome.style.textDecoration = "none"
    tdHome.appendChild(aHome)

    var tdProduct = document.createElement("td")
    var aProduct = document.createElement("a")
    aProduct.style.color = "white"
    aProduct.style.textDecoration = "none"
    aProduct.href = "All_product.html"
    aProduct.innerText = "Our Products"
    aProduct.class = "gbmTopMenuTableLink"
    tdProduct.appendChild(aProduct)

    var tdAboutUs = document.createElement("td")
    var aAboutUs = document.createElement("a")
    aAboutUs.href = "About-Us.html"
    aAboutUs.innerText = "About Us"
    aAboutUs.class = "gbmTopMenuTableLink"
    aAboutUs.style.color = "white"
    aAboutUs.style.textDecoration = "none"
    tdAboutUs.appendChild(aAboutUs)

    var tdContactUs = document.createElement("td")
    var aContactUs = document.createElement("a")
    aContactUs.href = "Contact-Us.html"
    aContactUs.innerText = "Contact Us"
    aContactUs.style.color = "white"
    aContactUs.style.textDecoration = "none"
    aContactUs.class = "gbmTopMenuTableLink"
    tdContactUs.appendChild(aContactUs)


    tr.appendChild(tdHome)
    tr.appendChild(tdProduct)
    tr.appendChild(tdAboutUs)
    tr.appendChild(tdContactUs)
    tbody.appendChild(tr)
    gbmTopMenuTable.appendChild(tbody)
    gbmMasterDivHeader.appendChild(gbmTopMenuTable)
    document.body.appendChild(gbmMasterDivHeader)

    //gbmMasterDivSideBar
    var gbmMasterDivSideBar = document.createElement("div")
    gbmMasterDivSideBar.id = "gbmMasterDivSideBar"
    gbmMasterDivSideBar.style.background = "#4682B4"
    gbmMasterDivSideBar.style.width = "10%"
    gbmMasterDivSideBar.style.height = "90%"
    gbmMasterDivSideBar.style.top = "10%"
    gbmMasterDivSideBar.style.position = "absolute"
    document.body.appendChild(gbmMasterDivSideBar)

    //gbmMasterDivContainer
    var gbmMasterDivContainer = document.createElement("div")
    gbmMasterDivContainer.id = "gbmMasterDivContainer"
    gbmMasterDivContainer.style.background = "white"
    gbmMasterDivContainer.style.width = "90%"
    gbmMasterDivContainer.style.height = "90%"
    gbmMasterDivContainer.style.left = "10%"
    gbmMasterDivContainer.style.top = "10%"
    gbmMasterDivContainer.style.position = "absolute"
    document.body.appendChild(gbmMasterDivContainer)


    //*******************gbmBookingProductDiv
    var gbmBookingProductDiv = document.createElement("div")
    gbmBookingProductDiv.id = "gbmBookingProductDiv"
    gbmBookingProductDiv.style.left = "20%"
    gbmBookingProductDiv.style.top = "10%"
    gbmBookingProductDiv.style.width = "80%"
    gbmBookingProductDiv.style.position = "relative"
    gbmMasterDivContainer.appendChild(gbmBookingProductDiv)

    //==>gbmBookingProductTableDiv
    var gbmBookingProductTableDiv = document.createElement("table")
    gbmBookingProductTableDiv.id = "gbmBookingProductTableDiv"
    gbmBookingProductTableDiv.setAttribute("border", "1px")
    gbmBookingProductTableDiv.style.borderCollapse = "collapse"
    gbmBookingProductTableDiv.style.height = "360px"
    gbmBookingProductTableDiv.style.textAlign = "center"
    gbmBookingProductTableDiv.innerHTML = "<caption><strong>Product Booking</strong></caption>"
    gbmBookingProductTableDiv.style.borderStyle = "solid"
    gbmBookingProductTableDiv.style.borderSpacing = "22px"
    gbmBookingProductDiv.appendChild(gbmBookingProductTableDiv)

    //====>tbody
    var gbmBoughProductTbody = document.createElement("tbody")
    gbmBoughProductTbody.id = "gbmBoughProductTbody"
    gbmBookingProductTableDiv.appendChild(gbmBoughProductTbody)

    //tr1
    var gbmBookingProductTr1 = document.createElement("tr")
    gbmBookingProductTr1.id = "gbmBookingProductTr1"
    gbmBookingProductTr1.style.backgroundColor = "#4682B4"
    gbmBookingProductTr1.style.color = "white"
    gbmBoughProductTbody.appendChild(gbmBookingProductTr1)

    //tr1td
    var gbmBookingProductTr1Td = document.createElement("td")
    gbmBookingProductTr1Td.id = "gbmBookingProductTr1Td"
    gbmBookingProductTr1Td.innerHTML = "<strong>Date</strong>"
    gbmBookingProductTr1.appendChild(gbmBookingProductTr1Td)

    //tr1td2
    var gbmBookingProductTr1Td2 = document.createElement("td")
    gbmBookingProductTr1Td2.id = "gbmBookingProductTr1Td2"
    gbmBookingProductTr1Td2.innerHTML = "<strong>Time</strong>"
    gbmBookingProductTr1.appendChild(gbmBookingProductTr1Td2)

    //tr1td3
    var gbmBookingProductTr1Td3 = document.createElement("td")
    gbmBookingProductTr1Td3.id = "gbmBookingProductTr1Td3"
    gbmBookingProductTr1Td3.innerHTML = "<strong>Product</strong>"
    gbmBookingProductTr1.appendChild(gbmBookingProductTr1Td3)

    //tr1td4
    var gbmBookingProductTr1Td4 = document.createElement("td")
    gbmBookingProductTr1Td4.id = "gbmBookingProductTr1Td4"
    gbmBookingProductTr1Td4.innerHTML = "<strong>Category</strong>"
    gbmBookingProductTr1.appendChild(gbmBookingProductTr1Td4)

    //tr1td5
    var gbmBookingProductTr1Td5 = document.createElement("td")
    gbmBookingProductTr1Td5.id = "gbmBookingProductTr1Td5"
    gbmBookingProductTr1Td5.innerHTML = "<strong>Quantity</strong>"
    gbmBookingProductTr1.appendChild(gbmBookingProductTr1Td5)

    //tr1td6
    var gbmBookingProductTr1Td6 = document.createElement("td")
    gbmBookingProductTr1Td6.id = "gbmBookingProductTr1Td6"
    gbmBookingProductTr1Td6.innerHTML = "<strong>Amount</strong>"
    gbmBookingProductTr1.appendChild(gbmBookingProductTr1Td6)

    //tr1td7
    var gbmBookingProductTr1Td7 = document.createElement("td")
    gbmBookingProductTr1Td7.id = "gbmBookingProductTr1Td7"
    gbmBookingProductTr1Td7.innerHTML = "<strong>Customer</strong>"
    gbmBookingProductTr1.appendChild(gbmBookingProductTr1Td7)

    //tr1td8
    var gbmBookingProductTr1Td8 = document.createElement("td")
    gbmBookingProductTr1Td8.id = "gbmBookingProductTr1Td8"
    gbmBookingProductTr1Td8.innerHTML = "<strong>Item Track</strong>"
    gbmBookingProductTr1.appendChild(gbmBookingProductTr1Td8)

    //tr1td9
    var gbmBookingProductTr1Td9 = document.createElement("td")
    gbmBookingProductTr1Td9.id = "gbmBookingProductTr1Td9"
    gbmBookingProductTr1Td9.innerHTML = "<strong>Phone Number</strong>"
    gbmBookingProductTr1.appendChild(gbmBookingProductTr1Td9)


    //--------------------------------------------

    //tr2
    var gbmBookingProductTr2 = document.createElement("tr")
    gbmBookingProductTr2.id = "gbmBookingProductTr2"
    gbmBoughProductTbody.appendChild(gbmBookingProductTr2)

    //tr2td
    var gbmBookingProductTr2Td = document.createElement("td")
    gbmBookingProductTr2Td.id = "gbmBookingProductTr2Td"
    gbmBookingProductTr2Td.innerHTML = "<strong>02/05/2020</strong>"
    gbmBookingProductTr2.appendChild(gbmBookingProductTr2Td)

    //tr2td2
    var gbmBookingProductTr2Td2 = document.createElement("td")
    gbmBookingProductTr2Td2.id = "gbmBookingProductTr2Td2"
    gbmBookingProductTr2Td2.innerHTML = "<strong>08:25 AM</strong>"
    gbmBookingProductTr2.appendChild(gbmBookingProductTr2Td2)

    //tr2td3
    var gbmBookingProductTr2Td3 = document.createElement("td")
    gbmBookingProductTr2Td3.id = "gbmBookingProductTr2Td3"
    gbmBookingProductTr2Td3.innerHTML = "<strong>Blue Band</strong>"
    gbmBookingProductTr2.appendChild(gbmBookingProductTr2Td3)

    //tr2td4
    var gbmBookingProductTr2Td4 = document.createElement("td")
    gbmBookingProductTr2Td4.id = "gbmBookingProductTr2Td4"
    gbmBookingProductTr2Td4.innerHTML = "<strong>Butter</strong>"
    gbmBookingProductTr2.appendChild(gbmBookingProductTr2Td4)

    //tr2td5
    var gbmBookingProductTr2Td5 = document.createElement("td")
    gbmBookingProductTr2Td5.id = "gbmBookingProductTr2Td5"
    gbmBookingProductTr2Td5.innerHTML = "<strong>2</strong>"
    gbmBookingProductTr2.appendChild(gbmBookingProductTr2Td5)

    //tr2td6
    var gbmBookingProductTr2Td6 = document.createElement("td")
    gbmBookingProductTr2Td6.id = "gbmBookingProductTr2Td6"
    gbmBookingProductTr2Td6.innerHTML = "<strong>R250,00</strong>"
    gbmBookingProductTr2.appendChild(gbmBookingProductTr2Td6)

    //tr2td7
    var gbmBookingProductTr2Td7 = document.createElement("td")
    gbmBookingProductTr2Td7.id = "gbmBookingProductTr2Td7"
    gbmBookingProductTr2Td7.innerHTML = "<strong>Grace</strong>"
    gbmBookingProductTr2.appendChild(gbmBookingProductTr2Td7)

    //tr2td8
    var gbmBookingProductTr2Td8 = document.createElement("td")
    gbmBookingProductTr2Td8.id = "gbmBookingProductTr2Td8"
    gbmBookingProductTr2Td8.innerHTML = "<strong>Successfull</strong>"
    gbmBookingProductTr2.appendChild(gbmBookingProductTr2Td8)

    //tr2td9
    var gbmBookingProductTr2Td9 = document.createElement("td")
    gbmBookingProductTr2Td9.id = "gbmBookingProductTr1Td9"
    gbmBookingProductTr2Td9.innerHTML = "<strong>0682915931</strong>"
    gbmBookingProductTr2.appendChild(gbmBookingProductTr2Td9)

    ///*********-*----------*-*******

    //tr3
    var gbmBookingProductTr3 = document.createElement("tr")
    gbmBookingProductTr3.id = "gbmBookingProductTr3"
    gbmBoughProductTbody.appendChild(gbmBookingProductTr3)

    //tr2td
    var gbmBookingProductTr3Td = document.createElement("td")
    gbmBookingProductTr3Td.id = "gbmBookingProductTr3Td"
    gbmBookingProductTr3Td.innerHTML = "<strong>12/05/2020</strong>"
    gbmBookingProductTr3.appendChild(gbmBookingProductTr3Td)

    //tr2td2
    var gbmBookingProductTr3Td2 = document.createElement("td")
    gbmBookingProductTr3Td2.id = "gbmBookingProductTr3Td2"
    gbmBookingProductTr3Td2.innerHTML = "<strong>10:25 AM</strong>"
    gbmBookingProductTr3.appendChild(gbmBookingProductTr3Td2)

    //tr2td3
    var gbmBookingProductTr3Td3 = document.createElement("td")
    gbmBookingProductTr3Td3.id = "gbmBookingProductTr3Td3"
    gbmBookingProductTr3Td3.innerHTML = "<strong>Soft Skin</strong>"
    gbmBookingProductTr3.appendChild(gbmBookingProductTr3Td3)

    //tr2td4
    var gbmBookingProductTr3Td4 = document.createElement("td")
    gbmBookingProductTr3Td4.id = "gbmBookingProductTr3Td4"
    gbmBookingProductTr3Td4.innerHTML = "<strong>Lotion</strong>"
    gbmBookingProductTr3.appendChild(gbmBookingProductTr3Td4)

    //tr2td5
    var gbmBookingProductTr3Td5 = document.createElement("td")
    gbmBookingProductTr3Td5.id = "gbmBookingProductTr3Td5"
    gbmBookingProductTr3Td5.innerHTML = "<strong>4</strong>"
    gbmBookingProductTr3.appendChild(gbmBookingProductTr3Td5)

    //tr2td6
    var gbmBookingProductTr3Td6 = document.createElement("td")
    gbmBookingProductTr3Td6.id = "gbmBookingProductTr3Td6"
    gbmBookingProductTr3Td6.innerHTML = "<strong>R150,00</strong>"
    gbmBookingProductTr3.appendChild(gbmBookingProductTr3Td6)

    //tr2td7
    var gbmBookingProductTr3Td7 = document.createElement("td")
    gbmBookingProductTr3Td7.id = "gbmBookingProductTr3Td7"
    gbmBookingProductTr3Td7.innerHTML = "<strong>Slid</strong>"
    gbmBookingProductTr3.appendChild(gbmBookingProductTr3Td7)

    //tr2td8
    var gbmBookingProductTr3Td8 = document.createElement("td")
    gbmBookingProductTr3Td8.id = "gbmBookingProductTr3Td8"
    gbmBookingProductTr3Td8.innerHTML = "<strong>Successfull</strong>"
    gbmBookingProductTr3.appendChild(gbmBookingProductTr3Td8)

    //tr2td9
    var gbmBookingProductTr3Td9 = document.createElement("td")
    gbmBookingProductTr3Td9.id = "gbmBookingProductTr3Td9"
    gbmBookingProductTr3Td9.innerHTML = "<strong>0682915931</strong>"
    gbmBookingProductTr3.appendChild(gbmBookingProductTr3Td9)

    //****************---------******************

    //tr3
    var gbmBookingProductTr4 = document.createElement("tr")
    gbmBookingProductTr4.id = "gbmBookingProductTr4"
    gbmBoughProductTbody.appendChild(gbmBookingProductTr4)

    //tr2td
    var gbmBookingProductTr4Td = document.createElement("td")
    gbmBookingProductTr4Td.id = "gbmBookingProductTr4Td"
    gbmBookingProductTr4Td.innerHTML = "<strong></strong>"
    gbmBookingProductTr4.appendChild(gbmBookingProductTr4Td)

    //tr2td2
    var gbmBookingProductTr4Td2 = document.createElement("td")
    gbmBookingProductTr4Td2.id = "gbmBookingProductTr4Td2"
    gbmBookingProductTr4Td2.innerHTML = "<strong></strong>"
    gbmBookingProductTr4.appendChild(gbmBookingProductTr4Td2)

    //tr2td3
    var gbmBookingProductTr4Td3 = document.createElement("td")
    gbmBookingProductTr4Td3.id = "gbmBookingProductTr4Td3"
    gbmBookingProductTr4Td3.innerHTML = "<strong></strong>"
    gbmBookingProductTr4.appendChild(gbmBookingProductTr4Td3)

    //tr2td4
    var gbmBookingProductTr4Td4 = document.createElement("td")
    gbmBookingProductTr4Td4.id = "gbmBookingProductTr3Td4"
    gbmBookingProductTr4Td4.innerHTML = "<strong></strong>"
    gbmBookingProductTr4.appendChild(gbmBookingProductTr4Td4)

    //tr2td5
    var gbmBookingProductTr4Td5 = document.createElement("td")
    gbmBookingProductTr4Td5.id = "gbmBookingProductTr4Td5"
    gbmBookingProductTr4Td5.innerHTML = "<strong></strong>"
    gbmBookingProductTr4.appendChild(gbmBookingProductTr4Td5)

    //tr2td6
    var gbmBookingProductTr4Td6 = document.createElement("td")
    gbmBookingProductTr4Td6.id = "gbmBookingProductTr4Td6"
    gbmBookingProductTr4Td6.innerHTML = "<strong></strong>"
    gbmBookingProductTr4.appendChild(gbmBookingProductTr4Td6)

    //tr2td7
    var gbmBookingProductTr4Td7 = document.createElement("td")
    gbmBookingProductTr4Td7.id = "gbmBookingProductTr4Td7"
    gbmBookingProductTr4Td7.innerHTML = "<strong></strong>"
    gbmBookingProductTr4.appendChild(gbmBookingProductTr4Td7)

    //tr2td8
    var gbmBookingProductTr4Td8 = document.createElement("td")
    gbmBookingProductTr4Td8.id = "gbmBookingProductTr4Td8"
    gbmBookingProductTr4Td8.innerHTML = "<strong></strong>"
    gbmBookingProductTr4.appendChild(gbmBookingProductTr4Td8)

    //tr2td9
    var gbmBookingProductTr4Td9 = document.createElement("td")
    gbmBookingProductTr4Td9.id = "gbmBookingProductTr3Td9"
    gbmBookingProductTr4Td9.innerHTML = "<strong></strong>"
    gbmBookingProductTr4.appendChild(gbmBookingProductTr4Td9)

    //***************------*****************

    //tr3
    var gbmBookingProductTr5 = document.createElement("tr")
    gbmBookingProductTr5.id = "gbmBookingProductTr5"
    gbmBoughProductTbody.appendChild(gbmBookingProductTr5)

    //tr2td
    var gbmBookingProductTr5Td = document.createElement("td")
    gbmBookingProductTr5Td.id = "gbmBookingProductTr5Td"
    gbmBookingProductTr5Td.innerHTML = "<strong></strong>"
    gbmBookingProductTr5.appendChild(gbmBookingProductTr5Td)

    //tr2td2
    var gbmBookingProductTr5Td2 = document.createElement("td")
    gbmBookingProductTr5Td2.id = "gbmBookingProductTr5Td2"
    gbmBookingProductTr5Td2.innerHTML = "<strong></strong>"
    gbmBookingProductTr5.appendChild(gbmBookingProductTr5Td2)

    //tr2td3
    var gbmBookingProductTr5Td3 = document.createElement("td")
    gbmBookingProductTr5Td3.id = "gbmBookingProductTr5Td3"
    gbmBookingProductTr5Td3.innerHTML = "<strong></strong>"
    gbmBookingProductTr5.appendChild(gbmBookingProductTr5Td3)

    //tr2td4
    var gbmBookingProductTr5Td4 = document.createElement("td")
    gbmBookingProductTr5Td4.id = "gbmBookingProductTr5Td4"
    gbmBookingProductTr5Td4.innerHTML = "<strong></strong>"
    gbmBookingProductTr5.appendChild(gbmBookingProductTr5Td4)

    //tr2td5
    var gbmBookingProductTr5Td5 = document.createElement("td")
    gbmBookingProductTr5Td5.id = "gbmBookingProductTr5Td5"
    gbmBookingProductTr5Td5.innerHTML = "<strong></strong>"
    gbmBookingProductTr5.appendChild(gbmBookingProductTr5Td5)

    //tr2td6
    var gbmBookingProductTr4Td6 = document.createElement("td")
    gbmBookingProductTr4Td6.id = "gbmBookingProductTr4Td6"
    gbmBookingProductTr4Td6.innerHTML = "<strong></strong>"
    gbmBookingProductTr5.appendChild(gbmBookingProductTr4Td6)

    //tr2td7
    var gbmBookingProductTr5Td7 = document.createElement("td")
    gbmBookingProductTr5Td7.id = "gbmBookingProductTr5Td7"
    gbmBookingProductTr5Td7.innerHTML = "<strong</strong>"
    gbmBookingProductTr5.appendChild(gbmBookingProductTr5Td7)

    //tr2td8
    var gbmBookingProductTr5Td8 = document.createElement("td")
    gbmBookingProductTr4Td8.id = "gbmBookingProductTr5Td8"
    gbmBookingProductTr5Td8.innerHTML = "<strong></strong>"
    gbmBookingProductTr5.appendChild(gbmBookingProductTr5Td8)

    //tr2td9
    var gbmBookingProductTr5Td9 = document.createElement("td")
    gbmBookingProductTr5Td9.id = "gbmBookingProductTr5Td9"
    gbmBookingProductTr5Td9.innerHTML = "<strong></strong>"
    gbmBookingProductTr5.appendChild(gbmBookingProductTr5Td9)

    //***************-----------********************
    //tr3
    var gbmBookingProductTr6 = document.createElement("tr")
    gbmBookingProductTr6.id = "gbmBookingProductTr6"
    gbmBoughProductTbody.appendChild(gbmBookingProductTr6)

    //tr2td
    var gbmBookingProductTr6Td = document.createElement("td")
    gbmBookingProductTr6Td.id = "gbmBookingProductTr6Td"
    gbmBookingProductTr6Td.innerHTML = "<strong></strong>"
    gbmBookingProductTr6.appendChild(gbmBookingProductTr6Td)

    //tr2td2
    var gbmBookingProductTr6Td2 = document.createElement("td")
    gbmBookingProductTr6Td2.id = "gbmBookingProductTr6Td2"
    gbmBookingProductTr6Td2.innerHTML = "<strong></strong>"
    gbmBookingProductTr6.appendChild(gbmBookingProductTr6Td2)

    //tr2td3
    var gbmBookingProductTr6Td3 = document.createElement("td")
    gbmBookingProductTr6Td3.id = "gbmBookingProductTr6Td3"
    gbmBookingProductTr6Td3.innerHTML = "<strong></strong>"
    gbmBookingProductTr6.appendChild(gbmBookingProductTr6Td3)

    //tr2td4
    var gbmBookingProductTr6Td4 = document.createElement("td")
    gbmBookingProductTr6Td4.id = "gbmBookingProductTr6Td4"
    gbmBookingProductTr6Td4.innerHTML = "<strong></strong>"
    gbmBookingProductTr6.appendChild(gbmBookingProductTr6Td4)

    //tr2td5
    var gbmBookingProductTr6Td5 = document.createElement("td")
    gbmBookingProductTr6Td5.id = "gbmBookingProductTr6Td5"
    gbmBookingProductTr6Td5.innerHTML = "<strong></strong>"
    gbmBookingProductTr6.appendChild(gbmBookingProductTr6Td5)

    //tr2td6
    var gbmBookingProductTr6Td6 = document.createElement("td")
    gbmBookingProductTr6Td6.id = "gbmBookingProductTr6Td6"
    gbmBookingProductTr6Td6.innerHTML = "<strong></strong>"
    gbmBookingProductTr6.appendChild(gbmBookingProductTr6Td6)

    //tr2td7
    var gbmBookingProductTr6Td7 = document.createElement("td")
    gbmBookingProductTr6Td7.id = "gbmBookingProductTr6Td7"
    gbmBookingProductTr6Td7.innerHTML = "<strong></strong>"
    gbmBookingProductTr6.appendChild(gbmBookingProductTr6Td7)

    //tr2td8
    var gbmBookingProductTr6Td8 = document.createElement("td")
    gbmBookingProductTr6Td8.id = "gbmBookingProductTr6Td8"
    gbmBookingProductTr6Td8.innerHTML = "<strong></strong>"
    gbmBookingProductTr6.appendChild(gbmBookingProductTr6Td8)

    //tr2td9
    var gbmBookingProductTr6Td9 = document.createElement("td")
    gbmBookingProductTr6Td9.id = "gbmBookingProductTr6Td9"
    gbmBookingProductTr6Td9.innerHTML = "<strong></strong>"
    gbmBookingProductTr6.appendChild(gbmBookingProductTr6Td9)

    //-*************---------------
    //tr3
    var gbmBookingProductTr7 = document.createElement("tr")
    gbmBookingProductTr7.id = "gbmBookingProductTr7"
    gbmBoughProductTbody.appendChild(gbmBookingProductTr7)

    //tr2td
    var gbmBookingProductTr7Td = document.createElement("td")
    gbmBookingProductTr7Td.id = "gbmBookingProductTr7Td"
    gbmBookingProductTr7Td.innerHTML = "<strong></strong>"
    gbmBookingProductTr7.appendChild(gbmBookingProductTr7Td)

    //tr2td2
    var gbmBookingProductTr7Td2 = document.createElement("td")
    gbmBookingProductTr7Td2.id = "gbmBookingProductTr7Td2"
    gbmBookingProductTr7Td2.innerHTML = "<strong></strong>"
    gbmBookingProductTr7.appendChild(gbmBookingProductTr7Td2)

    //tr2td3
    var gbmBookingProductTr7Td3 = document.createElement("td")
    gbmBookingProductTr7Td3.id = "gbmBookingProductTr6Td3"
    gbmBookingProductTr7Td3.innerHTML = "<strong></strong>"
    gbmBookingProductTr7.appendChild(gbmBookingProductTr7Td3)

    //tr2td4
    var gbmBookingProductTr7Td4 = document.createElement("td")
    gbmBookingProductTr7Td4.id = "gbmBookingProductTr7Td4"
    gbmBookingProductTr7Td4.innerHTML = "<strong></strong>"
    gbmBookingProductTr7.appendChild(gbmBookingProductTr7Td4)

    //tr2td5
    var gbmBookingProductTr7Td5 = document.createElement("td")
    gbmBookingProductTr7Td5.id = "gbmBookingProductTr7Td5"
    gbmBookingProductTr7Td5.innerHTML = "<strong></strong>"
    gbmBookingProductTr7.appendChild(gbmBookingProductTr7Td5)

    //tr2td6
    var gbmBookingProductTr7Td6 = document.createElement("td")
    gbmBookingProductTr7Td6.id = "gbmBookingProductTr7Td6"
    gbmBookingProductTr7Td6.innerHTML = "<strong></strong>"
    gbmBookingProductTr7.appendChild(gbmBookingProductTr7Td6)

    //tr2td7
    var gbmBookingProductTr7Td7 = document.createElement("td")
    gbmBookingProductTr7Td7.id = "gbmBookingProductTr7Td7"
    gbmBookingProductTr7Td7.innerHTML = "<strong></strong>"
    gbmBookingProductTr7.appendChild(gbmBookingProductTr7Td7)

    //tr2td8
    var gbmBookingProductTr7Td8 = document.createElement("td")
    gbmBookingProductTr7Td8.id = "gbmBookingProductTr7Td8"
    gbmBookingProductTr7Td8.innerHTML = "<strong></strong>"
    gbmBookingProductTr7.appendChild(gbmBookingProductTr7Td8)

    //tr2td9
    var gbmBookingProductTr7Td9 = document.createElement("td")
    gbmBookingProductTr7Td9.id = "gbmBookingProductTr6Td9"
    gbmBookingProductTr7Td9.innerHTML = "<strong></strong>"
    gbmBookingProductTr7.appendChild(gbmBookingProductTr7Td9)

    //link
    var gbmBookingProductDivAI = document.createElement("a")
    gbmBookingProductDivAI.id = "gbmBookingProductDivAI"
    gbmBookingProductDivAI.href = "Admin.html"
    gbmBookingProductDiv.appendChild(gbmBookingProductDivAI)

    //i
    var gbmBoughProductDivI = document.createElement("i")
    gbmBoughProductDivI.id = "gbmBoughProductDivI"
    gbmBoughProductDivI.class = "fas"
    gbmBoughProductDivI.innerHTML = "&#xf060;"
    gbmBookingProductDivAI.appendChild(gbmBoughProductDivI)
}
//appointmentProduct
function gbmAppointmentProduct() {

    //gbmMasterDivHeader
    var gbmMasterDivHeader = document.createElement("div")
    gbmMasterDivHeader.id = "gbmMasterDivHeader"
    gbmMasterDivHeader.style.background = "#191970"
    gbmMasterDivHeader.style.width = "100%"
    gbmMasterDivHeader.style.height = "10%"
    gbmMasterDivHeader.style.position = "absolute"

    var gbmTopMenuTable = document.createElement("table")
    gbmTopMenuTable.id = "gbmTopMenuTable"
    gbmTopMenuTable.style.borderSpacing = "12px"
    gbmTopMenuTable.style.float = "right"
    gbmTopMenuTable.style.marginRight = "2%"
    gbmTopMenuTable.style.color = "white"
    gbmTopMenuTable.style.textDecoration = "none"
    gbmTopMenuTable.style.fontSize = "20px"
    gbmTopMenuTable.style.fontFamily = "sans-serif"
    gbmTopMenuTable.style.top = "11%"
    gbmTopMenuTable.style.position = "relative"


    var tbody = document.createElement("TBODY")
    var tr = document.createElement("tr")

    var tdHome = document.createElement("td")
    var aHome = document.createElement("a")
    aHome.href = "index.html"
    aHome.innerText = "Home"
    aHome.class = "gbmTopMenuTableLink"
    aHome.style.color = "white"
    aHome.style.textDecoration = "none"
    tdHome.appendChild(aHome)

    var tdProduct = document.createElement("td")
    var aProduct = document.createElement("a")
    aProduct.style.color = "white"
    aProduct.style.textDecoration = "none"
    aProduct.href = "All_product.html"
    aProduct.innerText = "Our Products"
    aProduct.class = "gbmTopMenuTableLink"
    tdProduct.appendChild(aProduct)

    var tdAboutUs = document.createElement("td")
    var aAboutUs = document.createElement("a")
    aAboutUs.href = "About-Us.html"
    aAboutUs.innerText = "About Us"
    aAboutUs.class = "gbmTopMenuTableLink"
    aAboutUs.style.color = "white"
    aAboutUs.style.textDecoration = "none"
    tdAboutUs.appendChild(aAboutUs)

    var tdContactUs = document.createElement("td")
    var aContactUs = document.createElement("a")
    aContactUs.href = "Contact-Us.html"
    aContactUs.innerText = "Contact Us"
    aContactUs.style.color = "white"
    aContactUs.style.textDecoration = "none"
    aContactUs.class = "gbmTopMenuTableLink"
    tdContactUs.appendChild(aContactUs)


    tr.appendChild(tdHome)
    tr.appendChild(tdProduct)
    tr.appendChild(tdAboutUs)
    tr.appendChild(tdContactUs)
    tbody.appendChild(tr)
    gbmTopMenuTable.appendChild(tbody)
    gbmMasterDivHeader.appendChild(gbmTopMenuTable)
    document.body.appendChild(gbmMasterDivHeader)

    //gbmMasterDivSideBar
    var gbmMasterDivSideBar = document.createElement("div")
    gbmMasterDivSideBar.id = "gbmMasterDivSideBar"
    gbmMasterDivSideBar.style.background = "#4682B4"
    gbmMasterDivSideBar.style.width = "10%"
    gbmMasterDivSideBar.style.height = "90%"
    gbmMasterDivSideBar.style.top = "10%"
    gbmMasterDivSideBar.style.position = "absolute"
    document.body.appendChild(gbmMasterDivSideBar)

    //gbmMasterDivContainer
    var gbmMasterDivContainer = document.createElement("div")
    gbmMasterDivContainer.id = "gbmMasterDivContainer"
    gbmMasterDivContainer.style.background = "white"
    gbmMasterDivContainer.style.width = "90%"
    gbmMasterDivContainer.style.height = "90%"
    gbmMasterDivContainer.style.left = "10%"
    gbmMasterDivContainer.style.top = "10%"
    gbmMasterDivContainer.style.position = "absolute"
    document.body.appendChild(gbmMasterDivContainer)


    //*******************gbmAppointmentProductDiv
    var gbmAppointmentProductDiv = document.createElement("div")
    gbmAppointmentProductDiv.id = "gbmAppointmentProductDiv"
    gbmAppointmentProductDiv.style.left = "20%"
    gbmAppointmentProductDiv.style.top = "10%"
    gbmAppointmentProductDiv.style.width = "80%"
    gbmAppointmentProductDiv.style.position = "relative"
    gbmMasterDivContainer.appendChild(gbmAppointmentProductDiv)

    //==>gbmAppointmentProductTableDiv
    var gbmAppointmentProductTableDiv = document.createElement("table")
    gbmAppointmentProductTableDiv.id = "gbmAppointmentProductTableDiv"
    gbmAppointmentProductTableDiv.setAttribute("border", "1px")
    gbmAppointmentProductTableDiv.style.borderCollapse = "collapse"
    gbmAppointmentProductTableDiv.style.height = "360px"
    gbmAppointmentProductTableDiv.style.textAlign = "center"
    gbmAppointmentProductTableDiv.innerHTML = "<caption><strong>Product Appointment</strong></caption>"
    gbmAppointmentProductTableDiv.style.borderStyle = "solid"
    gbmAppointmentProductTableDiv.style.borderSpacing = "22px"
    gbmAppointmentProductDiv.appendChild(gbmAppointmentProductTableDiv)

    //====>tbody
    var gbmBoughProductTbody = document.createElement("tbody")
    gbmBoughProductTbody.id = "gbmBoughProductTbody"
    gbmAppointmentProductTableDiv.appendChild(gbmBoughProductTbody)

    //tr1
    var gbmAppointmentProductTr1 = document.createElement("tr")
    gbmAppointmentProductTr1.id = "gbmAppointmentProductTr1"
    gbmAppointmentProductTr1.style.backgroundColor = "#4682B4"
    gbmAppointmentProductTr1.style.color = "white"
    gbmBoughProductTbody.appendChild(gbmAppointmentProductTr1)

    //tr1td
    var gbmAppointmentProductTr1Td = document.createElement("td")
    gbmAppointmentProductTr1Td.id = "gbmAppointmentProductTr1Td"
    gbmAppointmentProductTr1Td.innerHTML = "<strong>Date</strong>"
    gbmAppointmentProductTr1.appendChild(gbmAppointmentProductTr1Td)

    //tr1td2
    var gbmAppointmentProductTr1Td2 = document.createElement("td")
    gbmAppointmentProductTr1Td2.id = "gbmAppointmentProductTr1Td2"
    gbmAppointmentProductTr1Td2.innerHTML = "<strong>Time</strong>"
    gbmAppointmentProductTr1.appendChild(gbmAppointmentProductTr1Td2)

    //tr1td3
    var gbmAppointmentProductTr1Td3 = document.createElement("td")
    gbmAppointmentProductTr1Td3.id = "gbmAppointmentProductTr1Td3"
    gbmAppointmentProductTr1Td3.innerHTML = "<strong>Product</strong>"
    gbmAppointmentProductTr1.appendChild(gbmAppointmentProductTr1Td3)

    //tr1td4
    var gbmAppointmentProductTr1Td4 = document.createElement("td")
    gbmAppointmentProductTr1Td4.id = "gbmAppointmentProductTr1Td4"
    gbmAppointmentProductTr1Td4.innerHTML = "<strong>Category</strong>"
    gbmAppointmentProductTr1.appendChild(gbmAppointmentProductTr1Td4)

    //tr1td5
    var gbmAppointmentProductTr1Td5 = document.createElement("td")
    gbmAppointmentProductTr1Td5.id = "gbmAppointmentProductTr1Td5"
    gbmAppointmentProductTr1Td5.innerHTML = "<strong>Quantity</strong>"
    gbmAppointmentProductTr1.appendChild(gbmAppointmentProductTr1Td5)

    //tr1td6
    var gbmAppointmentProductTr1Td6 = document.createElement("td")
    gbmAppointmentProductTr1Td6.id = "gbmAppointmentProductTr1Td6"
    gbmAppointmentProductTr1Td6.innerHTML = "<strong>Name of Customer</strong>"
    gbmAppointmentProductTr1.appendChild(gbmAppointmentProductTr1Td6)

    //tr1td7
    var gbmAppointmentProductTr1Td7 = document.createElement("td")
    gbmAppointmentProductTr1Td7.id = "gbmAppointmentProductTr1Td7"
    gbmAppointmentProductTr1Td7.innerHTML = "<strong>Customer Code</strong>"
    gbmAppointmentProductTr1.appendChild(gbmAppointmentProductTr1Td7)

    //tr1td8
    var gbmAppointmentProductTr1Td8 = document.createElement("td")
    gbmAppointmentProductTr1Td8.id = "gbmAppointmentProductTr1Td8"
    gbmAppointmentProductTr1Td8.innerHTML = "<strong>Paid</strong>"
    gbmAppointmentProductTr1.appendChild(gbmAppointmentProductTr1Td8)

    //tr1td9
    var gbmAppointmentProductTr1Td9 = document.createElement("td")
    gbmAppointmentProductTr1Td9.id = "gbmAppointmentProductTr1Td9"
    gbmAppointmentProductTr1Td9.innerHTML = "<strong>Phone Number</strong>"
    gbmAppointmentProductTr1.appendChild(gbmAppointmentProductTr1Td9)


    //--------------------------------------------

    //tr2
    var gbmAppointmentProductTr2 = document.createElement("tr")
    gbmAppointmentProductTr2.id = "gbmAppointmentProductTr2"
    gbmBoughProductTbody.appendChild(gbmAppointmentProductTr2)

    //tr2td
    var gbmAppointmentProductTr2Td = document.createElement("td")
    gbmAppointmentProductTr2Td.id = "gbmAppointmentProductTr2Td"
    gbmAppointmentProductTr2Td.innerHTML = "<strong>02/05/2020</strong>"
    gbmAppointmentProductTr2.appendChild(gbmAppointmentProductTr2Td)

    //tr2td2
    var gbmAppointmentProductTr2Td2 = document.createElement("td")
    gbmAppointmentProductTr2Td2.id = "gbmAppointmentProductTr2Td2"
    gbmAppointmentProductTr2Td2.innerHTML = "<strong>08:25 AM</strong>"
    gbmAppointmentProductTr2.appendChild(gbmAppointmentProductTr2Td2)

    //tr2td3
    var gbmAppointmentProductTr2Td3 = document.createElement("td")
    gbmAppointmentProductTr2Td3.id = "gbmAppointmentProductTr2Td3"
    gbmAppointmentProductTr2Td3.innerHTML = "<strong>Blue Band</strong>"
    gbmAppointmentProductTr2.appendChild(gbmAppointmentProductTr2Td3)

    //tr2td4
    var gbmAppointmentProductTr2Td4 = document.createElement("td")
    gbmAppointmentProductTr2Td4.id = "gbmAppointmentProductTr2Td4"
    gbmAppointmentProductTr2Td4.innerHTML = "<strong>Butter</strong>"
    gbmAppointmentProductTr2.appendChild(gbmAppointmentProductTr2Td4)

    //tr2td5
    var gbmAppointmentProductTr2Td5 = document.createElement("td")
    gbmAppointmentProductTr2Td5.id = "gbmAppointmentProductTr2Td5"
    gbmAppointmentProductTr2Td5.innerHTML = "<strong>2</strong>"
    gbmAppointmentProductTr2.appendChild(gbmAppointmentProductTr2Td5)

    //tr2td6
    var gbmAppointmentProductTr2Td6 = document.createElement("td")
    gbmAppointmentProductTr2Td6.id = "gbmAppointmentProductTr2Td6"
    gbmAppointmentProductTr2Td6.innerHTML = "<strong>Grace</strong>"
    gbmAppointmentProductTr2.appendChild(gbmAppointmentProductTr2Td6)

    //tr2td7
    var gbmAppointmentProductTr2Td7 = document.createElement("td")
    gbmAppointmentProductTr2Td7.id = "gbmAppointmentProductTr2Td7"
    gbmAppointmentProductTr2Td7.innerHTML = "<strong>GBM001</strong>"
    gbmAppointmentProductTr2.appendChild(gbmAppointmentProductTr2Td7)

    //tr2td8
    var gbmAppointmentProductTr2Td8 = document.createElement("td")
    gbmAppointmentProductTr2Td8.id = "gbmAppointmentProductTr2Td8"
    gbmAppointmentProductTr2Td8.innerHTML = "<strong>Yes</strong>"
    gbmAppointmentProductTr2.appendChild(gbmAppointmentProductTr2Td8)

    //tr2td9
    var gbmAppointmentProductTr2Td9 = document.createElement("td")
    gbmAppointmentProductTr2Td9.id = "gbmAppointmentProductTr1Td9"
    gbmAppointmentProductTr2Td9.innerHTML = "<strong>0682915931</strong>"
    gbmAppointmentProductTr2.appendChild(gbmAppointmentProductTr2Td9)

    ///*********-*----------*-*******

    //tr3
    var gbmAppointmentProductTr3 = document.createElement("tr")
    gbmAppointmentProductTr3.id = "gbmAppointmentProductTr3"
    gbmBoughProductTbody.appendChild(gbmAppointmentProductTr3)

    //tr2td
    var gbmAppointmentProductTr3Td = document.createElement("td")
    gbmAppointmentProductTr3Td.id = "gbmAppointmentProductTr3Td"
    gbmAppointmentProductTr3Td.innerHTML = "<strong>02/05/2020</strong>"
    gbmAppointmentProductTr3.appendChild(gbmAppointmentProductTr3Td)

    //tr2td2
    var gbmAppointmentProductTr3Td2 = document.createElement("td")
    gbmAppointmentProductTr3Td2.id = "gbmAppointmentProductTr3Td2"
    gbmAppointmentProductTr3Td2.innerHTML = "<strong>10:25 AM</strong>"
    gbmAppointmentProductTr3.appendChild(gbmAppointmentProductTr3Td2)

    //tr2td3
    var gbmAppointmentProductTr3Td3 = document.createElement("td")
    gbmAppointmentProductTr3Td3.id = "gbmAppointmentProductTr3Td3"
    gbmAppointmentProductTr3Td3.innerHTML = "<strong>Soft Skin</strong>"
    gbmAppointmentProductTr3.appendChild(gbmAppointmentProductTr3Td3)

    //tr2td4
    var gbmAppointmentProductTr3Td4 = document.createElement("td")
    gbmAppointmentProductTr3Td4.id = "gbmAppointmentProductTr3Td4"
    gbmAppointmentProductTr3Td4.innerHTML = "<strong>R2</strong>"
    gbmAppointmentProductTr3.appendChild(gbmAppointmentProductTr3Td4)

    //tr2td5
    var gbmAppointmentProductTr3Td5 = document.createElement("td")
    gbmAppointmentProductTr3Td5.id = "gbmAppointmentProductTr3Td5"
    gbmAppointmentProductTr3Td5.innerHTML = "<strong>Lotion</strong>"
    gbmAppointmentProductTr3.appendChild(gbmAppointmentProductTr3Td5)

    //tr2td6
    var gbmAppointmentProductTr3Td6 = document.createElement("td")
    gbmAppointmentProductTr3Td6.id = "gbmAppointmentProductTr3Td6"
    gbmAppointmentProductTr3Td6.innerHTML = "<strong>Grace</strong>"
    gbmAppointmentProductTr3.appendChild(gbmAppointmentProductTr3Td6)

    //tr2td7
    var gbmAppointmentProductTr3Td7 = document.createElement("td")
    gbmAppointmentProductTr3Td7.id = "gbmAppointmentProductTr3Td7"
    gbmAppointmentProductTr3Td7.innerHTML = "<strong>GBM001</strong>"
    gbmAppointmentProductTr3.appendChild(gbmAppointmentProductTr3Td7)

    //tr2td8
    var gbmAppointmentProductTr3Td8 = document.createElement("td")
    gbmAppointmentProductTr3Td8.id = "gbmAppointmentProductTr3Td8"
    gbmAppointmentProductTr3Td8.innerHTML = "<strong>No</strong>"
    gbmAppointmentProductTr3.appendChild(gbmAppointmentProductTr3Td8)

    //tr2td9
    var gbmAppointmentProductTr3Td9 = document.createElement("td")
    gbmAppointmentProductTr3Td9.id = "gbmAppointmentProductTr3Td9"
    gbmAppointmentProductTr3Td9.innerHTML = "<strong>0682915931</strong>"
    gbmAppointmentProductTr3.appendChild(gbmAppointmentProductTr3Td9)

    //****************---------******************

    //tr3
    var gbmAppointmentProductTr4 = document.createElement("tr")
    gbmAppointmentProductTr4.id = "gbmAppointmentProductTr4"
    gbmBoughProductTbody.appendChild(gbmAppointmentProductTr4)

    //tr2td
    var gbmAppointmentProductTr4Td = document.createElement("td")
    gbmAppointmentProductTr4Td.id = "gbmAppointmentProductTr4Td"
    gbmAppointmentProductTr4Td.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr4.appendChild(gbmAppointmentProductTr4Td)

    //tr2td2
    var gbmAppointmentProductTr4Td2 = document.createElement("td")
    gbmAppointmentProductTr4Td2.id = "gbmAppointmentProductTr4Td2"
    gbmAppointmentProductTr4Td2.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr4.appendChild(gbmAppointmentProductTr4Td2)

    //tr2td3
    var gbmAppointmentProductTr4Td3 = document.createElement("td")
    gbmAppointmentProductTr4Td3.id = "gbmAppointmentProductTr4Td3"
    gbmAppointmentProductTr4Td3.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr4.appendChild(gbmAppointmentProductTr4Td3)

    //tr2td4
    var gbmAppointmentProductTr4Td4 = document.createElement("td")
    gbmAppointmentProductTr4Td4.id = "gbmAppointmentProductTr3Td4"
    gbmAppointmentProductTr4Td4.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr4.appendChild(gbmAppointmentProductTr4Td4)

    //tr2td5
    var gbmAppointmentProductTr4Td5 = document.createElement("td")
    gbmAppointmentProductTr4Td5.id = "gbmAppointmentProductTr4Td5"
    gbmAppointmentProductTr4Td5.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr4.appendChild(gbmAppointmentProductTr4Td5)

    //tr2td6
    var gbmAppointmentProductTr4Td6 = document.createElement("td")
    gbmAppointmentProductTr4Td6.id = "gbmAppointmentProductTr4Td6"
    gbmAppointmentProductTr4Td6.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr4.appendChild(gbmAppointmentProductTr4Td6)

    //tr2td7
    var gbmAppointmentProductTr4Td7 = document.createElement("td")
    gbmAppointmentProductTr4Td7.id = "gbmAppointmentProductTr4Td7"
    gbmAppointmentProductTr4Td7.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr4.appendChild(gbmAppointmentProductTr4Td7)

    //tr2td8
    var gbmAppointmentProductTr4Td8 = document.createElement("td")
    gbmAppointmentProductTr4Td8.id = "gbmAppointmentProductTr4Td8"
    gbmAppointmentProductTr4Td8.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr4.appendChild(gbmAppointmentProductTr4Td8)

    //tr2td9
    var gbmAppointmentProductTr4Td9 = document.createElement("td")
    gbmAppointmentProductTr4Td9.id = "gbmAppointmentProductTr3Td9"
    gbmAppointmentProductTr4Td9.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr4.appendChild(gbmAppointmentProductTr4Td9)

    //***************------*****************

    //tr3
    var gbmAppointmentProductTr5 = document.createElement("tr")
    gbmAppointmentProductTr5.id = "gbmAppointmentProductTr5"
    gbmBoughProductTbody.appendChild(gbmAppointmentProductTr5)

    //tr2td
    var gbmAppointmentProductTr5Td = document.createElement("td")
    gbmAppointmentProductTr5Td.id = "gbmAppointmentProductTr5Td"
    gbmAppointmentProductTr5Td.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr5.appendChild(gbmAppointmentProductTr5Td)

    //tr2td2
    var gbmAppointmentProductTr5Td2 = document.createElement("td")
    gbmAppointmentProductTr5Td2.id = "gbmAppointmentProductTr5Td2"
    gbmAppointmentProductTr5Td2.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr5.appendChild(gbmAppointmentProductTr5Td2)

    //tr2td3
    var gbmAppointmentProductTr5Td3 = document.createElement("td")
    gbmAppointmentProductTr5Td3.id = "gbmAppointmentProductTr5Td3"
    gbmAppointmentProductTr5Td3.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr5.appendChild(gbmAppointmentProductTr5Td3)

    //tr2td4
    var gbmAppointmentProductTr5Td4 = document.createElement("td")
    gbmAppointmentProductTr5Td4.id = "gbmAppointmentProductTr5Td4"
    gbmAppointmentProductTr5Td4.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr5.appendChild(gbmAppointmentProductTr5Td4)

    //tr2td5
    var gbmAppointmentProductTr5Td5 = document.createElement("td")
    gbmAppointmentProductTr5Td5.id = "gbmAppointmentProductTr5Td5"
    gbmAppointmentProductTr5Td5.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr5.appendChild(gbmAppointmentProductTr5Td5)

    //tr2td6
    var gbmAppointmentProductTr4Td6 = document.createElement("td")
    gbmAppointmentProductTr4Td6.id = "gbmAppointmentProductTr4Td6"
    gbmAppointmentProductTr4Td6.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr5.appendChild(gbmAppointmentProductTr4Td6)

    //tr2td7
    var gbmAppointmentProductTr5Td7 = document.createElement("td")
    gbmAppointmentProductTr5Td7.id = "gbmAppointmentProductTr5Td7"
    gbmAppointmentProductTr5Td7.innerHTML = "<strong</strong>"
    gbmAppointmentProductTr5.appendChild(gbmAppointmentProductTr5Td7)

    //tr2td8
    var gbmAppointmentProductTr5Td8 = document.createElement("td")
    gbmAppointmentProductTr4Td8.id = "gbmAppointmentProductTr5Td8"
    gbmAppointmentProductTr5Td8.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr5.appendChild(gbmAppointmentProductTr5Td8)

    //tr2td9
    var gbmAppointmentProductTr5Td9 = document.createElement("td")
    gbmAppointmentProductTr5Td9.id = "gbmAppointmentProductTr5Td9"
    gbmAppointmentProductTr5Td9.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr5.appendChild(gbmAppointmentProductTr5Td9)

    //***************-----------********************
    //tr3
    var gbmAppointmentProductTr6 = document.createElement("tr")
    gbmAppointmentProductTr6.id = "gbmAppointmentProductTr6"
    gbmBoughProductTbody.appendChild(gbmAppointmentProductTr6)

    //tr2td
    var gbmAppointmentProductTr6Td = document.createElement("td")
    gbmAppointmentProductTr6Td.id = "gbmAppointmentProductTr6Td"
    gbmAppointmentProductTr6Td.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr6.appendChild(gbmAppointmentProductTr6Td)

    //tr2td2
    var gbmAppointmentProductTr6Td2 = document.createElement("td")
    gbmAppointmentProductTr6Td2.id = "gbmAppointmentProductTr6Td2"
    gbmAppointmentProductTr6Td2.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr6.appendChild(gbmAppointmentProductTr6Td2)

    //tr2td3
    var gbmAppointmentProductTr6Td3 = document.createElement("td")
    gbmAppointmentProductTr6Td3.id = "gbmAppointmentProductTr6Td3"
    gbmAppointmentProductTr6Td3.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr6.appendChild(gbmAppointmentProductTr6Td3)

    //tr2td4
    var gbmAppointmentProductTr6Td4 = document.createElement("td")
    gbmAppointmentProductTr6Td4.id = "gbmAppointmentProductTr6Td4"
    gbmAppointmentProductTr6Td4.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr6.appendChild(gbmAppointmentProductTr6Td4)

    //tr2td5
    var gbmAppointmentProductTr6Td5 = document.createElement("td")
    gbmAppointmentProductTr6Td5.id = "gbmAppointmentProductTr6Td5"
    gbmAppointmentProductTr6Td5.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr6.appendChild(gbmAppointmentProductTr6Td5)

    //tr2td6
    var gbmAppointmentProductTr6Td6 = document.createElement("td")
    gbmAppointmentProductTr6Td6.id = "gbmAppointmentProductTr6Td6"
    gbmAppointmentProductTr6Td6.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr6.appendChild(gbmAppointmentProductTr6Td6)

    //tr2td7
    var gbmAppointmentProductTr6Td7 = document.createElement("td")
    gbmAppointmentProductTr6Td7.id = "gbmAppointmentProductTr6Td7"
    gbmAppointmentProductTr6Td7.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr6.appendChild(gbmAppointmentProductTr6Td7)

    //tr2td8
    var gbmAppointmentProductTr6Td8 = document.createElement("td")
    gbmAppointmentProductTr6Td8.id = "gbmAppointmentProductTr6Td8"
    gbmAppointmentProductTr6Td8.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr6.appendChild(gbmAppointmentProductTr6Td8)

    //tr2td9
    var gbmAppointmentProductTr6Td9 = document.createElement("td")
    gbmAppointmentProductTr6Td9.id = "gbmAppointmentProductTr6Td9"
    gbmAppointmentProductTr6Td9.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr6.appendChild(gbmAppointmentProductTr6Td9)

    //-*************---------------
    //tr3
    var gbmAppointmentProductTr7 = document.createElement("tr")
    gbmAppointmentProductTr7.id = "gbmAppointmentProductTr7"
    gbmBoughProductTbody.appendChild(gbmAppointmentProductTr7)

    //tr2td
    var gbmAppointmentProductTr7Td = document.createElement("td")
    gbmAppointmentProductTr7Td.id = "gbmAppointmentProductTr7Td"
    gbmAppointmentProductTr7Td.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr7.appendChild(gbmAppointmentProductTr7Td)

    //tr2td2
    var gbmAppointmentProductTr7Td2 = document.createElement("td")
    gbmAppointmentProductTr7Td2.id = "gbmAppointmentProductTr7Td2"
    gbmAppointmentProductTr7Td2.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr7.appendChild(gbmAppointmentProductTr7Td2)

    //tr2td3
    var gbmAppointmentProductTr7Td3 = document.createElement("td")
    gbmAppointmentProductTr7Td3.id = "gbmAppointmentProductTr6Td3"
    gbmAppointmentProductTr7Td3.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr7.appendChild(gbmAppointmentProductTr7Td3)

    //tr2td4
    var gbmAppointmentProductTr7Td4 = document.createElement("td")
    gbmAppointmentProductTr7Td4.id = "gbmAppointmentProductTr7Td4"
    gbmAppointmentProductTr7Td4.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr7.appendChild(gbmAppointmentProductTr7Td4)

    //tr2td5
    var gbmAppointmentProductTr7Td5 = document.createElement("td")
    gbmAppointmentProductTr7Td5.id = "gbmAppointmentProductTr7Td5"
    gbmAppointmentProductTr7Td5.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr7.appendChild(gbmAppointmentProductTr7Td5)

    //tr2td6
    var gbmAppointmentProductTr7Td6 = document.createElement("td")
    gbmAppointmentProductTr7Td6.id = "gbmAppointmentProductTr7Td6"
    gbmAppointmentProductTr7Td6.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr7.appendChild(gbmAppointmentProductTr7Td6)

    //tr2td7
    var gbmAppointmentProductTr7Td7 = document.createElement("td")
    gbmAppointmentProductTr7Td7.id = "gbmAppointmentProductTr7Td7"
    gbmAppointmentProductTr7Td7.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr7.appendChild(gbmAppointmentProductTr7Td7)

    //tr2td8
    var gbmAppointmentProductTr7Td8 = document.createElement("td")
    gbmAppointmentProductTr7Td8.id = "gbmAppointmentProductTr7Td8"
    gbmAppointmentProductTr7Td8.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr7.appendChild(gbmAppointmentProductTr7Td8)

    //tr2td9
    var gbmAppointmentProductTr7Td9 = document.createElement("td")
    gbmAppointmentProductTr7Td9.id = "gbmAppointmentProductTr6Td9"
    gbmAppointmentProductTr7Td9.innerHTML = "<strong></strong>"
    gbmAppointmentProductTr7.appendChild(gbmAppointmentProductTr7Td9)

    //link
    var gbmAppointmentProductDivAI = document.createElement("a")
    gbmAppointmentProductDivAI.id = "gbmAppointmentProductDivAI"
    gbmAppointmentProductDivAI.href = "Admin.html"
    gbmAppointmentProductDiv.appendChild(gbmAppointmentProductDivAI)

    //i
    var gbmBoughProductDivI = document.createElement("i")
    gbmBoughProductDivI.id = "gbmBoughProductDivI"
    gbmBoughProductDivI.class = "fas"
    gbmBoughProductDivI.innerHTML = "&#xf060;"
    gbmAppointmentProductDivAI.appendChild(gbmBoughProductDivI)

}
function gbmAboutHtmlPage(document) {
    //gbmMasterDivHeader
    var gbmMasterDivHeader = document.createElement("div")
    gbmMasterDivHeader.id = "gbmMasterDivHeader"
    gbmMasterDivHeader.style.background = "#191970"
    gbmMasterDivHeader.style.width = "100%"
    gbmMasterDivHeader.style.height = "10%"
    gbmMasterDivHeader.style.position = "absolute"

    var gbmTopMenuTable = document.createElement("table")
    gbmTopMenuTable.id = "gbmTopMenuTable"
    gbmTopMenuTable.style.borderSpacing = "12px"
    gbmTopMenuTable.style.float = "right"
    gbmTopMenuTable.style.marginRight = "2%"
    gbmTopMenuTable.style.color = "white"
    gbmTopMenuTable.style.textDecoration = "none"
    gbmTopMenuTable.style.fontSize = "20px"
    gbmTopMenuTable.style.fontFamily = "sans-serif"
    gbmTopMenuTable.style.top = "11%"
    gbmTopMenuTable.style.position = "relative"


    var tbody = document.createElement("TBODY")
    var tr = document.createElement("tr")

    var tdHome = document.createElement("td")
    var aHome = document.createElement("a")
    aHome.href = "index.html"
    aHome.innerText = "Home"
    aHome.class = "gbmTopMenuTableLink"
    aHome.style.color = "white"
    aHome.style.textDecoration = "none"
    tdHome.appendChild(aHome)

    var tdProduct = document.createElement("td")
    var aProduct = document.createElement("a")
    aProduct.style.color = "white"
    aProduct.style.textDecoration = "none"
    aProduct.href = "All_product.html"
    aProduct.innerText = "Our Products"
    aProduct.class = "gbmTopMenuTableLink"
    tdProduct.appendChild(aProduct)

    var tdAboutUs = document.createElement("td")
    var aAboutUs = document.createElement("a")
    aAboutUs.href = "About-Us.html"
    aAboutUs.innerText = "About Us"
    aAboutUs.class = "gbmTopMenuTableLink"
    aAboutUs.style.color = "white"
    aAboutUs.style.textDecoration = "none"
    tdAboutUs.appendChild(aAboutUs)

    var tdContactUs = document.createElement("td")
    var aContactUs = document.createElement("a")
    aContactUs.href = "Contact-Us.html"
    aContactUs.innerText = "Contact Us"
    aContactUs.style.color = "white"
    aContactUs.style.textDecoration = "none"
    aContactUs.class = "gbmTopMenuTableLink"
    tdContactUs.appendChild(aContactUs)


    tr.appendChild(tdHome)
    tr.appendChild(tdProduct)
    tr.appendChild(tdAboutUs)
    tr.appendChild(tdContactUs)
    tbody.appendChild(tr)
    gbmTopMenuTable.appendChild(tbody)
    gbmMasterDivHeader.appendChild(gbmTopMenuTable)
    var body = document.body;
    body.appendChild(gbmMasterDivHeader)
    //document.body.appendChild(gbmMasterDivHeader)

    //gbmMasterDivSideBar
    var gbmMasterDivSideBar = document.createElement("div")
    gbmMasterDivSideBar.id = "gbmMasterDivSideBar"
    gbmMasterDivSideBar.style.background = "#4682B4"
    gbmMasterDivSideBar.style.width = "10%"
    gbmMasterDivSideBar.style.height = "90%"
    gbmMasterDivSideBar.style.top = "10%"
    gbmMasterDivSideBar.style.position = "absolute"
    document.body.appendChild(gbmMasterDivSideBar)

    //gbmMasterDivContainer
    var gbmMasterDivContainer = document.createElement("div")
    gbmMasterDivContainer.id = "gbmMasterDivContainer"
    gbmMasterDivContainer.style.background = "white"
    gbmMasterDivContainer.style.width = "90%"
    gbmMasterDivContainer.style.height = "90%"
    gbmMasterDivContainer.style.left = "10%"
    gbmMasterDivContainer.style.top = "10%"
    gbmMasterDivContainer.style.position = "absolute"
    document.body.appendChild(gbmMasterDivContainer)

    //gbmAboutUsDiv
    var gbmAboutUsDiv = document.createElement("div")
    gbmAboutUsDiv.id = "gbmAboutUsDiv"
    gbmAboutUsDiv.style.width = "50%"
    gbmAboutUsDiv.style.height = "50%"
    gbmAboutUsDiv.style.position = "relative"
    gbmAboutUsDiv.style.left = "7%"
    gbmAboutUsDiv.style.top = "10%"
    gbmMasterDivContainer.appendChild(gbmAboutUsDiv)

    //=>gbmImagesAboutUsDiv
    var gbmImagesAboutUsDiv = document.createElement('img')
    gbmImagesAboutUsDiv.id = "gbmImagesAboutUsDiv"
    gbmImagesAboutUsDiv.src = "img/gbm.jpg"
    gbmImagesAboutUsDiv.style.width = "60%"
    gbmImagesAboutUsDiv.style.height = "100%"
    gbmAboutUsDiv.appendChild(gbmImagesAboutUsDiv)

    //=> gbmDescriptionSpanDiv
    var gbmDescriptionSpanDiv = document.createElement("div")
    gbmDescriptionSpanDiv.id = "gbmDescriptionSpanDiv"
    gbmDescriptionSpanDiv.style.height = "100%"
    gbmDescriptionSpanDiv.style.width = "100%"
    gbmDescriptionSpanDiv.style.position = "relative"
    gbmDescriptionSpanDiv.style.bottom = "104%"
    gbmDescriptionSpanDiv.style.left = "68%"
    gbmDescriptionSpanDiv.style.fontSize = "23px"
    gbmAboutUsDiv.appendChild(gbmDescriptionSpanDiv)


    //==>gbmDescriptionSpan
    var gbmDescriptionSpan = document.createElement('span')
    gbmDescriptionSpan.id = "gbmDescriptionSpan"
    gbmDescriptionSpan.innerHTML = "<strong>Lorem Ipsum</strong>&nbsp;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    gbmDescriptionSpanDiv.appendChild(gbmDescriptionSpan)

}

