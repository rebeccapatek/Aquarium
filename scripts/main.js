import initializeDetailButtonEvents from "./dialog.js"
import { useFish } from './fish/FishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

initializeDetailButtonEvents()
