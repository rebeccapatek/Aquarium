/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import { useFish } from './FishDataProvider.js'
import FishComponent from './FishComponent.js'
import {
    mostHolyFish,
    soldierFish,
    nonHolyFish
  } from "/scripts/fish/FishSorter.js";
  
  // Import `useFish` from the data provider module (this module is dependent on the fish_data_provider)
  
  const FishListComponent = () => {
    // Get a reference to the `<article class="content">` element (tells which class to insert the HTML)
    const contentElement = document.querySelector(".fishies");
    const fishes = useFish(); //var fishes now equals the data in the array due to the return statement
    const sortedFish = mostHolyFish(fishes).concat(
      soldierFish(fishes),
      nonHolyFish(fishes)
    );
    contentElement.innerHTML += `
        <section class="fishies">
            ${sortedFish
              .map(currentfish => {
                return FishComponent(currentfish);
              })
              .join("")}
        </section>
    `;
  };
  export default FishListComponent;
