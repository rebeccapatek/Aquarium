/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import { useFish } from './FishDataProvider.js'
import FishComponent from './FishComponent.js'


const FishListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishies")
    const fishes = useFish()
    contentElement.innerHTML += `
        <section class="fishList">
            ${
                fishes.map(fish => FishComponent(fish)).join("")
            }
        </section>
    `
}


export default FishListComponent