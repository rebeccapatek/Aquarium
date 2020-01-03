import initializeDetailButtonEvents from "./dialog.js"
import { useFish } from './fish/FishDataProvider.js'
import FishListComponent from "./fish/FishList.js"


const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}
FishListComponent()
initializeDetailButtonEvents()
