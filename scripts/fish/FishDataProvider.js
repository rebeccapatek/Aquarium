const fishCollection = [
    {
        name: "Goldie",
        species: "Goldfish",
        location: "Carnival",
        food: ["flakes"],
        length: 5,
        image: "/goldie-fish.jpg"
    },
    {
        name: "Bart",
        species: "Clownfish",
        location: "Finding Nemo Movies",
        food: ["algae", "crustaceans"],
        length: 10,
        image: "/Clownfish.jpg"
    },
    {
        name: "Blue Steel",
        species: "Bluefish",
        location: "Great Coral Reef",
        food: ["plankton"],
        length: 3,
        image: "/stripedfish.jpg"
    },    {
        name: "Prettyboy",
        species: "Fan-finned",
        location: "Mississippi River",
        food: ["kittens"],
        length: 27,
        image: "/redfish.jpg"
    },    {
        name: "Mister Spotty",
        species: "Catfish",
        location: "Buffalo River",
        food: ["garbage"],
        length: 42,
        image: "/catfish.jpg"
    },
    
    
    

]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection
}