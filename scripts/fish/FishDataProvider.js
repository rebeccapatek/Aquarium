const fishCollection = [
    {
        name: "Goldie",
        species: "Goldfish",
        location: "Carnival",
        food: ["flakes"],
        length: "5 inches",
        image: "/goldie-fish.jpg"
    },
    {
        name: "Bart",
        species: "Clownfish",
        location: "Finding Nemo Movies",
        food: ["algae", "crustaceans"],
        length: "10 inches",
        image: "/Clownfish.jpg"
    },
    {
        name: "Blue Steel",
        species: "Bluefish",
        location: "Great Coral Reef",
        food: ["plankton"],
        length: "3 inches",
        image: "/stripedfish.jpg"
    },    {
        name: "Prettyboy",
        species: "Fan-finned",
        location: "Mississippi River",
        food: ["kittens"],
        length: "27 inches",
        image: "/redfish.jpg"
    },    {
        name: "Mr. Spotty",
        species: "Catfish",
        location: "Buffalo River",
        food: ["garbage"],
        length: "42 inches",
        image: "/catfish.jpg"
    },
    
    
    

]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection
}