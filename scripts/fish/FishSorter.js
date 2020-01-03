export const mostHolyFish = (FishCollectionArray) => {
    let holyFish = [];
    for (const fish of FishCollectionArray) {
        if (fish.size % 3 === 0) {
            holyFish.push(fish);
        }
    }
    // 3, 6, 9, 12, etc... fish
    return holyFish
}

export const soldierFish = (FishCollectionArray) => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldier = [];
    for (const fish of FishCollectionArray) {
        if (fish.size % 5 === 0) {
            soldier.push(fish);
        }
    }

    return soldier
}

export const nonHolyFish= (FishCollectionArray) => {
    let normals = [];
    for (const fish of FishCollectionArray) {
        if (fish.size % 3 !==0 && fish.size % 5 !==0)
        {
            normals.push(fish);
        }
    }
    // Any fish not a multiple of 3 or 5
    return normals
}