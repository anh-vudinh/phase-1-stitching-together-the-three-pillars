/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
const refreshBtn = document.createElement("BUTTON")
refreshBtn.textContent = 'Refresh Page'
refreshBtn.addEventListener('click', doNothing)
body.append(refreshBtn)

function doNothing(){
    return testVar;
}