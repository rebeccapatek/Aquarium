const FishComponent = (fish) => {
    return `
        <div class="fishes">
            <div>
                <img class="fishies--image" src="${fish.image}" alt="">
            </div>
            <div class="fish__name">${fish.name}</div>
            <button id="button--${fish.name.split(" ").join("-")}">Details</button>

            <dialog class="dialog--fish" id="details--${fish.name.split(" ").join("-")}">
                <div>Species: ${fish.species}</div>
                <div>Location: ${fish.location}</div>
                <div>Length: ${fish.size}</div>
                <div>Food: ${fish.food.join(", ")}</div>

                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}

export default FishComponent