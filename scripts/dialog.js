const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END
    const allDetailButtons = document.querySelectorAll("button[id^='button--']")

    // Add an event listener to each one
    for (const btn of allDetailButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const theDialog = document.querySelector(`#${theEvent.target.id}+dialog`)
                theDialog.showModal()
            }
        )
    }

    // You will be writing code below this line
    // document.querySelector("#button--goldie").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--goldie")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--bart").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--bart")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--blue").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--blue")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--red").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--red")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--cat").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--cat")
    //         theDialog.showModal()
    //     }
    // )


}
export default initializeDetailButtonEvents
