// function hats(id, name, image, description, category, price, alt) {
//   this.id = id;
//   this.name = name;
//   this.image = image;
//   this.description = description;
//   this.category = category;
//   this.price = price;
// }

// const fancyHat = new Hat("fancyHat", "Fancy Hat", "../assets/fancy.png", "Fancy purple top hat accompanied with a purple vegan feather. Wear this for special occasions.", "Fancy", 20);
// const casualHat = new Hat("casualHat", "Casual Day Wear Hat", "../assets/Casual.png", "Need day to day casual wear? We've got you covered. This hat will work with just about any outfit.", "Casual Wear", 20);
// const oottHat = new Hat("oottHat", "Out On The Town Hat", "../assets/OOTT.png", "This fabulous purple pointed hat is the perfect look for a night out on the town! ", "OOTT", 25);
// const rodeoHat = new Hat("rodeoHat", "Rodeo Hat", "../assets/Rodeo.png", "Fantastic wear for your friendly Rodeo themed bachelor party.", "Rodeo", 20);
// const salebogoHat = new Hat("salebogoHat", "Buy One Get One!", "../assets/sale-bogo.png", "Can't decide which one to get for your buddy? Buy a matching hat for you and your friend at our discounted price! Our BOGO deals are the best way to ensure you get the best of the best.", "BOGO", 30);


const fancyHat = {
    id: "fancyHat",
    name: "Fancy Hat",
    imagePath: ".../assets/fancy.png",
    description: "Fancy purple top hat accompanied with a purple vegan feather. Wear this for special occasions.",
    category: "Fancy",
    price: 20,
  };
  
  const casualHat = {
    id: "casualHat",
    name: "Casual Day Wear Hat",
    imagePath: "../assets/Casual.png",
    description: "Need day to day casual wear? We've got you covered. This hat will work with just about any outfit.",
    category: "Casual Wear",
    price: 20,
  };
  
  const oottHat = {
    id: "oottHat",
    name: "Out On The Town Hat",
    imagePath: "../assets/OOTT.png",
    description: "This fabulous purple pointed hat is the perfect look for a night out on the town!",
    category: "OOTT",
    price: 25,
  };
  
  const rodeoHat = {
    id: "rodeoHat",
    name: "Rodeo Hat",
    imagePath: "../assets/Rodeo.png",
    description: "Fantastic wear for your friendly Rodeo themed bachelor party.",
    category: "Rodeo",
    price: 20,
  };
  
  const salebogoHat = {
    id: "salebogoHat",
    name: "Buy One Get One!",
    imagePath: "../assets/sale-bogo.png",
    description: "Can't decide which one to get for your buddy? Buy a matching hat for you and your friend at our discounted price! Our BOGO deals are the best way to ensure you get the best of the best.",
    category: "BOGO",
    price: 30,
  }
  
  const hats = [fancyHat, casualHat, oottHat, rodeoHat, salebogoHat];
  
  export default hats;

