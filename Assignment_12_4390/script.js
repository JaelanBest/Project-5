const STORAGE_KEY = "marketplacePostsFigma";
const THEME_KEY = "marketplaceTheme";
const PLACEHOLDER = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220">
  <rect width="320" height="220" fill="#efefef"/>
  <rect x="22" y="22" width="276" height="176" rx="12" fill="#ffffff" stroke="#888"/>
  <circle cx="100" cy="162" r="32" fill="none" stroke="#555" stroke-width="8"/>
  <circle cx="222" cy="162" r="32" fill="none" stroke="#555" stroke-width="8"/>
  <path d="M100 162 L137 108 L175 108 L151 162 Z" fill="none" stroke="#e25a46" stroke-width="8"/>
  <path d="M175 108 L222 162" fill="none" stroke="#e25a46" stroke-width="8"/>
  <path d="M137 108 L120 85" fill="none" stroke="#e25a46" stroke-width="8"/>
  <path d="M175 108 L199 85" fill="none" stroke="#e25a46" stroke-width="8"/>
</svg>
`)}`;

const starterPosts = [
  // BIKES - 25 listings with multiple high-fidelity images
  {id: 1, title: "Mountain Bike - Trek 820", location: "Charlotte", desc: "Steel frame, 21-speed, great for light trails and city riding. Recently tuned up.", price: "$250.00", category: "Bikes", email: "bikerider@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1619405399517-dea6161b029a?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1462824881413-7661fb2e4b71?w=500&h=500&fit=crop"]},
  {id: 2, title: "Road Bike - Specialized Allez", location: "Concord", desc: "Lightweight aluminum frame, drop handlebars, perfect for long-distance rides. Like new condition.", price: "$350.00", category: "Bikes", email: "cyclist@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1585126594052-fc9156fbb8d2?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1614936281992-b8d358a7fb28?w=500&h=500&fit=crop"]},
  {id: 3, title: "BMX Bike - Mongoose Rebel", location: "Matthews", desc: "Great for tricks and stunts. Chrome finish, reinforced frame. Perfect for kids.", price: "$120.00", category: "Bikes", email: "bmxrider@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1576259857919-fc7146b55232?w=500&h=500&fit=crop"]},
  {id: 4, title: "Hybrid Bike - Giant Escape", location: "Gastonia", desc: "Versatile hybrid for commuting and casual riding. Smooth tires, comfortable seat.", price: "$200.00", category: "Bikes", email: "commuter@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1548694505-a4d0f6d3e5a0?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1470359866065-4d456adbe586?w=500&h=500&fit=crop"]},
  {id: 5, title: "Electric Bike - E-Bike Pro", location: "Huntersville", desc: "Pedal-assist electric bike, 50-mile range. Recently serviced, excellent condition.", price: "$600.00", category: "Bikes", email: "ebiker@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1625879298767-056c0fb0b893?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1597821212624-11c6cd12ce4e?w=500&h=500&fit=crop"]},
  {id: 101, title: "Fixie Bike - Urban Rider", location: "Charlotte", desc: "Single speed fixed gear bike. Ideal for smooth street riding and tricks.", price: "$180.00", category: "Bikes", email: "fixie@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop"]},
  {id: 102, title: "Beach Cruiser - Comfort Ride", location: "Concord", desc: "Wide comfortable seat, retro design. Perfect for casual beach rides.", price: "$150.00", category: "Bikes", email: "cruiser@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1575088779033-9e6d04e055e5?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1539571696357-5a69c006ae0f?w=500&h=500&fit=crop"]},
  {id: 103, title: "Gravel Bike - Adventure", location: "Matthews", desc: "Rugged off-road capabilities with smooth street performance. All terrain.", price: "$400.00", category: "Bikes", email: "gravel@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1606050909821-6f4ee6583e80?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=500&fit=crop"]},
  {id: 104, title: "Kids Bike - Training Wheels", location: "Gastonia", desc: "Sized for children ages 5-8. Training wheels included, safety-tested.", price: "$85.00", category: "Bikes", email: "kidsbike@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1584188891435-e5e99cd30625?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=500&fit=crop"]},
  {id: 105, title: "Folding Bike - Portable", location: "Huntersville", desc: "Compact fold design. Great for commuters and travelers.", price: "$220.00", category: "Bikes", email: "foldingbike@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1485346262026-b8055e670c1a?w=500&h=500&fit=crop"]},

  // ELECTRONICS - 10 listings
  {id: 6, title: "iPhone 13 - 128GB Blue", location: "Concord", desc: "Unlocked, excellent condition. Comes with original box and charging cable.", price: "$450.00", category: "Electronics", email: "techsales@me.com", phone: "", images: ["https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"]},
  {id: 7, title: "Samsung 55-inch 4K Smart TV", location: "Huntersville", desc: "Crystal UHD series. Works perfectly, upgrading to a larger size.", price: "$275.00", category: "Electronics", email: "seller99@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1593642632459-35409f301e5e?w=500&h=500&fit=crop"]},
  {id: 8, title: "MacBook Pro 14-inch", location: "Charlotte", desc: "M1 Pro chip, 16GB RAM, 512GB SSD. Barely used, with AppleCare+.", price: "$1,200.00", category: "Electronics", email: "apple@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop"]},
  {id: 9, title: "iPad Air - 64GB", location: "Matthews", desc: "WiFi model, Space Gray, excellent for drawing and productivity apps.", price: "$320.00", category: "Electronics", email: "ipaduser@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1551633900-f5eca613b911?w=500&h=500&fit=crop"]},
  {id: 10, title: "Sony Headphones - WH-1000XM4", location: "Mint Hill", desc: "Noise-canceling wireless headphones. Premium sound quality, 30-hour battery.", price: "$200.00", category: "Electronics", email: "audiophile@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop"]},
  {id: 106, title: "Dell Laptop - Windows 11", location: "Charlotte", desc: "Intel i7, 16GB RAM, SSD. Perfect for work and gaming.", price: "$650.00", category: "Electronics", email: "dellsales@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"]},
  {id: 107, title: "Samsung Galaxy S22", location: "Concord", desc: "Phantom White, 128GB unlocked. Mint condition with accessories.", price: "$500.00", category: "Electronics", email: "galaxy@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1591015667617-465ef6feb91a?w=500&h=500&fit=crop"]},
  {id: 108, title: "GoPro Hero 10", location: "Matthews", desc: "Action camera with mounting accessories. Perfect for adventures.", price: "$350.00", category: "Electronics", email: "gopro@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1606933248051-5ce41febf502?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop"]},
  {id: 109, title: "Nintendo Switch - OLED", location: "Gastonia", desc: "White model with carrying case and games. Like new.", price: "$280.00", category: "Electronics", email: "gaming@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1605559424843-9e4c3ba86d6d?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1538481143235-5d8e32260fe0?w=500&h=500&fit=crop"]},
  {id: 110, title: "Bluetooth Speaker - JBL", location: "Huntersville", desc: "Portable waterproof speaker. Great sound, 20-hour battery.", price: "$120.00", category: "Electronics", email: "speaker@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1589003077984-894e133814c9?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop"]},

  // FURNITURE - 10 listings
  {id: 11, title: "Mid-Century Modern Sofa", location: "Matthews", desc: "Grey fabric sofa with walnut legs. Comfortable and stylish. Non-smoking home.", price: "$300.00", category: "Furniture", email: "homestaging@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1598855912222-b86f0f4d7f9a?w=500&h=500&fit=crop"]},
  {id: 12, title: "Solid Oak Coffee Table", location: "Mint Hill", desc: "Handmade oak table. Heavy and durable. Minor scratches on surface.", price: "$75.00", category: "Furniture", email: "woodworker@yahoo.com", phone: "", images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1586023492125-d641be1b0dfb?w=500&h=500&fit=crop"]},
  {id: 13, title: "Dining Table Set - 6 Chairs", location: "Charlotte", desc: "Solid wood table with matching upholstered chairs. Great condition.", price: "$450.00", category: "Furniture", email: "furniture@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1551632786-de41ec16a83a?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop"]},
  {id: 14, title: "IKEA Bookshelf Unit", location: "Concord", desc: "White shelving unit with 5 shelves. Perfect for storage and display.", price: "$60.00", category: "Furniture", email: "shelves@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1594620305371-c89b4d5d46cc?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1567359781514-3b963ff1a38e?w=500&h=500&fit=crop"]},
  {id: 15, title: "Desk Chair - Ergonomic", location: "Gastonia", desc: "Executive office chair with lumbar support and adjustable height. Black leather.", price: "$120.00", category: "Furniture", email: "office@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1533139406505-ecf155bab6c9?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1598557845153-25fbf61f3c7a?w=500&h=500&fit=crop"]},
  {id: 111, title: "Bedroom Dresser - Wood", location: "Charlotte", desc: "6-drawer solid wood dresser with mirror. Great storage.", price: "$180.00", category: "Furniture", email: "bedroom@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1595605881922-78f8c0b5e9ac?w=500&h=500&fit=crop"]},
  {id: 112, title: "Bed Frame - Queen Size", location: "Matthews", desc: "Metal frame with headboard. Fits standard queen mattress.", price: "$200.00", category: "Furniture", email: "bedframe@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=500&fit=crop"]},
  {id: 113, title: "Reclining Armchair", location: "Concord", desc: "Leather recliner with cup holder. Very comfortable for relaxation.", price: "$250.00", category: "Furniture", email: "recliner@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop"]},
  {id: 114, title: "TV Stand - Modern", location: "Gastonia", desc: "Black TV stand with shelving. Holds up to 65-inch TVs.", price: "$140.00", category: "Furniture", email: "tvstand@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1593642632459-35409f301e5e?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop"]},
  {id: 115, title: "Bar Stools - Set of 4", location: "Huntersville", desc: "Padded counter stools with back support. Easy assembly.", price: "$160.00", category: "Furniture", email: "stools@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1598855912222-b86f0f4d7f9a?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop"]},

  // VEHICLES - 10 listings
  {id: 16, title: "2015 Honda Civic LX", location: "Gastonia", desc: "110k miles, clean title, silver exterior. Great gas mileage and very reliable.", price: "$9,500.00", category: "Vehicles", email: "autosales@gastonia.com", phone: "704-555-0123", images: ["https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1581543645505-297ce3d55db7?w=500&h=500&fit=crop"]},
  {id: 17, title: "2018 Toyota Camry", location: "Charlotte", desc: "35k miles, one owner, gray exterior, excellent condition. Full service history.", price: "$14,800.00", category: "Vehicles", email: "toyotasales@gmail.com", phone: "704-555-0456", images: ["https://images.unsplash.com/photo-1585362778644-cb0f2db6ae3f?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1606611013016-969c19a27081?w=500&h=500&fit=crop"]},
  {id: 18, title: "2012 Ford F-150 Pickup", location: "Matthews", desc: "Regular cab, 4WD, towing package. Recently new tires and brakes.", price: "$12,200.00", category: "Vehicles", email: "truck@gmail.com", phone: "704-555-0789", images: ["https://images.unsplash.com/photo-1533473359331-35b3d856e992?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1606611013016-969c19a27081?w=500&h=500&fit=crop"]},
  {id: 19, title: "2020 Mazda CX-5", location: "Huntersville", desc: "AWD, 28k miles, red exterior, all-weather mats, recently detailed.", price: "$17,900.00", category: "Vehicles", email: "mazda@gmail.com", phone: "704-555-1011", images: ["https://images.unsplash.com/photo-1569382120363-d7ee07bbd881?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1606611013016-969c19a27081?w=500&h=500&fit=crop"]},
  {id: 20, title: "2019 Volkswagen Jetta", location: "Concord", desc: "27k miles, clean interior, new battery, recently serviced.", price: "$11,500.00", category: "Vehicles", email: "vwsales@gmail.com", phone: "704-555-1213", images: ["https://images.unsplash.com/photo-1617469767537-b85561927220?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1581543645505-297ce3d55db7?w=500&h=500&fit=crop"]},
  {id: 116, title: "2016 Chevy Malibu", location: "Charlotte", desc: "75k miles, automatic, white exterior. Excellent condition.", price: "$10,200.00", category: "Vehicles", email: "chevy@gmail.com", phone: "704-555-1314", images: ["https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1606611013016-969c19a27081?w=500&h=500&fit=crop"]},
  {id: 117, title: "2021 Honda CR-V", location: "Matthews", desc: "15k miles, one owner, pristine condition. Full warranty remaining.", price: "$25,500.00", category: "Vehicles", email: "crv@gmail.com", phone: "704-555-1415", images: ["https://images.unsplash.com/photo-1591966060907-f64b630a01e1?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1606611013016-969c19a27081?w=500&h=500&fit=crop"]},
  {id: 118, title: "2014 Nissan Altima", location: "Gastonia", desc: "95k miles, dark blue, regular maintenance. Good reliable car.", price: "$8,700.00", category: "Vehicles", email: "nissan@gmail.com", phone: "704-555-1516", images: ["https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1606611013016-969c19a27081?w=500&h=500&fit=crop"]},
  {id: 119, title: "2017 Hyundai Elantra", location: "Concord", desc: "50k miles, automatic, black exterior. Well-maintained.", price: "$10,800.00", category: "Vehicles", email: "hyundai@gmail.com", phone: "704-555-1617", images: ["https://images.unsplash.com/photo-1591966060907-f64b630a01e1?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1606611013016-969c19a27081?w=500&h=500&fit=crop"]},
  {id: 120, title: "2019 Kia Sportage", location: "Huntersville", desc: "32k miles, AWD, red. Perfect for families and adventures.", price: "$15,900.00", category: "Vehicles", email: "kia@gmail.com", phone: "704-555-1718", images: ["https://images.unsplash.com/photo-1591966060907-f64b630a01e1?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1569382120363-d7ee07bbd881?w=500&h=500&fit=crop"]},

  // SERVICES - 10 listings
  {id: 21, title: "House Cleaning Service", location: "Charlotte", desc: "Professional house cleaning. Reliable, thorough, competitive rates. Free estimates.", price: "$100-$200/visit", category: "Services", email: "cleaning@gmail.com", phone: "704-555-1415", images: ["https://images.unsplash.com/photo-1584622281867-8d4d408c6f69?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1577052891219-acac64386803?w=500&h=500&fit=crop"]},
  {id: 24, title: "Plumbing Repairs", location: "Gastonia", desc: "Licensed plumber. Quick response, fair pricing. Emergencies welcome.", price: "$75/hour", category: "Services", email: "plumber@gmail.com", phone: "704-555-2021", images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop"]},
  {id: 25, title: "Digital Marketing Consulting", location: "Charlotte", desc: "Help grow your business online. SEO, social media, email marketing strategies.", price: "$100/hour", category: "Services", email: "marketing@gmail.com", phone: "704-555-2223", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1460925895917-adf4198c838d?w=500&h=500&fit=crop"]},
  {id: 26, title: "Fitness Training", location: "Mint Hill", desc: "Personal training sessions. Weight loss, strength training, endurance.", price: "$40-$60/session", category: "Services", email: "trainer@gmail.com", phone: "704-555-2425", images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop"]},
  {id: 121, title: "Car Detailing Service", location: "Charlotte", desc: "Professional car wash and detailing. Interior and exterior cleaning.", price: "$80-$150", category: "Services", email: "cardetail@gmail.com", phone: "704-555-1819", images: ["https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=500&fit=crop"]},
  {id: 122, title: "Tutoring Service", location: "Matthews", desc: "Math, English, Science tutoring. All grade levels. Personalized sessions.", price: "$30-$50/hour", category: "Services", email: "tutor@gmail.com", phone: "704-555-1920", images: ["https://images.unsplash.com/photo-1427504494785-05a66e50621d?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=500&fit=crop"]},
  {id: 123, title: "Pet Sitting", location: "Concord", desc: "Reliable pet care while you're away. Dogs, cats, and small animals.", price: "$25-$40/day", category: "Services", email: "petsit@gmail.com", phone: "704-555-2021", images: ["https://images.unsplash.com/photo-1587300411107-2e50c00eba74?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1633722715463-d30628cca6d3?w=500&h=500&fit=crop"]},
  {id: 124, title: "Electrical Repairs", location: "Gastonia", desc: "Licensed electrician. Residential wiring, outlets, fixtures. Emergency service.", price: "$65/hour", category: "Services", email: "electric@gmail.com", phone: "704-555-2122", images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1581092168562-40038f32ae21?w=500&h=500&fit=crop"]},
  {id: 125, title: "Graphic Design", location: "Huntersville", desc: "Logo design, business cards, branding. Professional and affordable.", price: "$50-$200/project", category: "Services", email: "design@gmail.com", phone: "704-555-2223", images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop"]},
  {id: 126, title: "Painting & Drywall", location: "Charlotte", desc: "Interior and exterior painting. Drywall repair and finishing.", price: "$35-$50/hour", category: "Services", email: "painter@gmail.com", phone: "704-555-2324", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1595499282839-d7ed34f54b39?w=500&h=500&fit=crop"]},

  // CLASSES - 10 listings
  {id: 22, title: "Piano Lessons", location: "Matthews", desc: "Professional piano instructor. All ages and skill levels. 30-minute lessons available.", price: "$30/hour", category: "Classes", email: "pianist@gmail.com", phone: "704-555-1617", images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&h=500&fit=crop"]},
  {id: 23, title: "Yoga Classes", location: "Huntersville", desc: "Beginner to advanced yoga classes. Flexible scheduling, friendly instructors.", price: "$50/month", category: "Classes", email: "yoga@gmail.com", phone: "704-555-1819", images: ["https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop"]},
  {id: 30, title: "Community Garden Workshop", location: "Gastonia", desc: "Learn organic gardening. Spring planting workshop this Saturday.", price: "$10", category: "Classes", email: "garden@gmail.com", phone: "704-555-3233", images: ["https://images.unsplash.com/photo-1467527143519-c21fc004467b?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1598436109702-e6c0c8e2a7b1?w=500&h=500&fit=crop"]},
  {id: 127, title: "Guitar Lessons", location: "Charlotte", desc: "Beginner to advanced guitar. Rock, classical, country styles.", price: "$25/lesson", category: "Classes", email: "guitar@gmail.com", phone: "704-555-2425", images: ["https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"]},
  {id: 128, title: "Spanish Language Class", location: "Matthews", desc: "Beginning Spanish course. 6-week program with native speakers.", price: "$120/course", category: "Classes", email: "spanish@gmail.com", phone: "704-555-2526", images: ["https://images.unsplash.com/photo-1434225286191-d282ba0f896d?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500&h=500&fit=crop"]},
  {id: 129, title: "Photography Workshop", location: "Concord", desc: "Learn camera basics and composition. Hands-on workshop.", price: "$65", category: "Classes", email: "photoclass@gmail.com", phone: "704-555-2627", images: ["https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1606933248051-5ce41febf502?w=500&h=500&fit=crop"]},
  {id: 130, title: "Cooking Classes", location: "Gastonia", desc: "Italian cuisine cooking course. Learn authentic recipes from a chef.", price: "$80/class", category: "Classes", email: "cooking@gmail.com", phone: "704-555-2728", images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1504674900967-86ee860c3d72?w=500&h=500&fit=crop"]},
  {id: 131, title: "Tennis Lessons", location: "Huntersville", desc: "Individual and group tennis lessons. All skill levels.", price: "$35/hour", category: "Classes", email: "tennis@gmail.com", phone: "704-555-2829", images: ["https://images.unsplash.com/photo-1554069881-8be0b8da76ff?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1486286701208-1d58dee7d735?w=500&h=500&fit=crop"]},
  {id: 132, title: "Dance Classes", location: "Charlotte", desc: "Hip-hop, contemporary, ballet. Classes for kids and adults.", price: "$40/month", category: "Classes", email: "dance@gmail.com", phone: "704-555-2930", images: ["https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1545230566-cc4642fedca2?w=500&h=500&fit=crop"]},
  {id: 133, title: "Computer Classes", location: "Matthews", desc: "Learn Microsoft Office, Excel, basic coding. Career-focused.", price: "$200/course", category: "Classes", email: "computer@gmail.com", phone: "704-555-3031", images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},

  // ACTIVITIES - 10 listings
  {id: 27, title: "Weekly Board Game Night", location: "Charlotte", desc: "Join us every Friday for board games and fun. All skill levels welcome!", price: "Free", category: "Activities", email: "games@gmail.com", phone: "704-555-2627", images: ["https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop"]},
  {id: 31, title: "Photography Meetup", location: "Huntersville", desc: "Monthly photo walks and critiques. All levels. Bring your camera!", price: "Free", category: "Activities", email: "photography@gmail.com", phone: "704-555-3435", images: ["https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1606933248051-5ce41febf502?w=500&h=500&fit=crop"]},
  {id: 134, title: "Hiking Group", location: "Charlotte", desc: "Weekend hiking adventures. Various difficulty levels. All welcome!", price: "Free", category: "Activities", email: "hiking@gmail.com", phone: "704-555-3132", images: ["https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop"]},
  {id: 135, title: "Running Club", location: "Concord", desc: "Tuesday and Thursday evening runs. Casual pace. Coffee after!", price: "Free", category: "Activities", email: "running@gmail.com", phone: "704-555-3233", images: ["https://images.unsplash.com/photo-1552280900-5ff76b1bada1?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=500&fit=crop"]},
  {id: 136, title: "Trivia Night", location: "Matthews", desc: "Weekly trivia at local pub. Teams of 4-6. Prizes for winners!", price: "$5/person", category: "Activities", email: "trivia@gmail.com", phone: "704-555-3334", images: ["https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1554554236-68c6f07a3c3f?w=500&h=500&fit=crop"]},
  {id: 137, title: "Movie Club", location: "Gastonia", desc: "Monthly classic movie screenings. Discussions and snacks provided.", price: "Free", category: "Activities", email: "movies@gmail.com", phone: "704-555-3435", images: ["https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop"]},
  {id: 138, title: "Arts & Crafts Meetup", location: "Huntersville", desc: "Monthly craft sessions. Painting, sculpting, jewelry-making.", price: "$15/session", category: "Activities", email: "crafts@gmail.com", phone: "704-555-3536", images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1578926078328-123456789012?w=500&h=500&fit=crop"]},
  {id: 139, title: "Volunteer Opportunity", location: "Charlotte", desc: "Help at local food bank. Saturdays 10am-1pm. All ages.", price: "Free", category: "Activities", email: "volunteer@gmail.com", phone: "704-555-3637", images: ["https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1467527143519-c21fc004467b?w=500&h=500&fit=crop"]},
  {id: 140, title: "Cycling Tour", location: "Matthews", desc: "Guided 15-mile bike tour. Scenic routes, pace for all levels.", price: "$25", category: "Activities", email: "cycling@gmail.com", phone: "704-555-3738", images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1619405399517-dea6161b029a?w=500&h=500&fit=crop"]},
  {id: 141, title: "Networking Event", location: "Concord", desc: "Professional networking mixer. Free drinks, connect with locals.", price: "Free", category: "Activities", email: "network@gmail.com", phone: "704-555-3839", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1427504494785-05a66e50621d?w=500&h=500&fit=crop"]},

  // GROUPS - 10 listings
  {id: 28, title: "Local Book Club", location: "Concord", desc: "Monthly book discussions and networking. Next book: Fiction classic.", price: "Free", category: "Groups", email: "bookclub@gmail.com", phone: "704-555-2829", images: ["https://images.unsplash.com/photo-1507842875343-583f20270319?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1507842860435-a0506fa4f56f?w=500&h=500&fit=crop"]},
  {id: 29, title: "Spanish Conversation Group", location: "Matthews", desc: "Practice Spanish with native speakers. Casual, friendly environment.", price: "Free", category: "Groups", email: "spanish@gmail.com", phone: "704-555-3031", images: ["https://images.unsplash.com/photo-1434225286191-d282ba0f896d?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500&h=500&fit=crop"]},
  {id: 142, title: "Parenting Support Group", location: "Charlotte", desc: "Moms and dads share experiences. Weekly coffee meetups.", price: "Free", category: "Groups", email: "parents@gmail.com", phone: "704-555-3940", images: ["https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop"]},
  {id: 143, title: "Gaming Community", location: "Concord", desc: "Video game enthusiasts. Multiplayer nights, tournaments.", price: "Free", category: "Groups", email: "gamers@gmail.com", phone: "704-555-4041", images: ["https://images.unsplash.com/photo-1538481143235-5d8e32260fe0?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1538481143235-5d8e32260fe0?w=500&h=500&fit=crop"]},
  {id: 144, title: "Entrepreneurs Group", location: "Matthews", desc: "Network with local business owners. Advice, mentorship, support.", price: "Free", category: "Groups", email: "entrepreneurs@gmail.com", phone: "704-555-4142", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1460925895917-adf4198c838d?w=500&h=500&fit=crop"]},
  {id: 145, title: "Dog Lovers Club", location: "Gastonia", desc: "Pet owners meetup. Dog park hangouts, training tips shared.", price: "Free", category: "Groups", email: "doglovers@gmail.com", phone: "704-555-4243", images: ["https://images.unsplash.com/photo-1633722715463-d30628cca6d3?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1587300411107-2e50c00eba74?w=500&h=500&fit=crop"]},
  {id: 146, title: "Singles Social Club", location: "Huntersville", desc: "Monthly social events for single professionals. Fun and friendship.", price: "$10/event", category: "Groups", email: "singles@gmail.com", phone: "704-555-4344", images: ["https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop"]},
  {id: 147, title: "Science Enthusiasts", location: "Charlotte", desc: "Monthly discussions on science topics. All ages welcome.", price: "Free", category: "Groups", email: "science@gmail.com", phone: "704-555-4445", images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1632222715019-c73da63b59e7?w=500&h=500&fit=crop"]},
  {id: 148, title: "Music Lovers Group", location: "Matthews", desc: "Discuss music, attend concerts together, share recommendations.", price: "Free", category: "Groups", email: "musiclovers@gmail.com", phone: "704-555-4546", images: ["https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"]},
  {id: 149, title: "Photography Club", location: "Concord", desc: "Photo sharing, critiques, field trips. All skill levels.", price: "Free", category: "Groups", email: "photoclub@gmail.com", phone: "704-555-4647", images: ["https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1606933248051-5ce41febf502?w=500&h=500&fit=crop"]},

  // APARTMENTS - 10 listings
  {id: 32, title: "Apartment for Rent - 2 BR", location: "Charlotte", desc: "Modern 2-bedroom apartment. Hardwood floors, updated kitchen, parking included.", price: "$1,200/month", category: "Apts", email: "landlord1@gmail.com", phone: "704-555-3637", images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop"]},
  {id: 33, title: "House for Rent - 4 BR", location: "Matthews", desc: "Spacious family home. Fenced yard, 2-car garage, good schools nearby.", price: "$1,800/month", category: "Apts", email: "landlord2@gmail.com", phone: "704-555-3839", images: ["https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=500&fit=crop"]},
  {id: 150, title: "Studio Apartment", location: "Concord", desc: "Cozy studio in downtown. All utilities included. Pet friendly.", price: "$850/month", category: "Apts", email: "studio@gmail.com", phone: "704-555-4748", images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=500&fit=crop"]},
  {id: 151, title: "Condo for Rent - 3 BR", location: "Gastonia", desc: "Gated community condo. Pool, gym, security. Modern finishes.", price: "$1,400/month", category: "Apts", email: "condo@gmail.com", phone: "704-555-4849", images: ["https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop"]},
  {id: 152, title: "Townhouse - 3 BR", location: "Huntersville", desc: "Townhouse with patio. Hardwood floors throughout. Move-in ready.", price: "$1,600/month", category: "Apts", email: "townhouse@gmail.com", phone: "704-555-4950", images: ["https://images.unsplash.com/photo-1560072810-1cffb89faf0d?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=500&h=500&fit=crop"]},
  {id: 153, title: "Loft Apartment", location: "Charlotte", desc: "Trendy loft in historic building. Exposed brick, high ceilings.", price: "$1,350/month", category: "Apts", email: "loft@gmail.com", phone: "704-555-5051", images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop"]},
  {id: 154, title: "Garden Apartment", location: "Matthews", desc: "Quiet complex with garden views. 2 BR, washer/dryer in unit.", price: "$1,150/month", category: "Apts", email: "garden@gmail.com", phone: "704-555-5152", images: ["https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop"]},
  {id: 155, title: "Luxury Apartment", location: "Concord", desc: "High-end 2 BR apartment. Amenities include gym, pool, concierge.", price: "$1,750/month", category: "Apts", email: "luxury@gmail.com", phone: "704-555-5253", images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=500&fit=crop"]},
  {id: 156, title: "Cottage - Single Family", location: "Gastonia", desc: "Charming cottage. Fenced yard, mature trees, quiet neighborhood.", price: "$1,500/month", category: "Apts", email: "cottage@gmail.com", phone: "704-555-5354", images: ["https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=500&fit=crop"]},
  {id: 157, title: "Executive Suite", location: "Huntersville", desc: "Upscale apartment complex. Business center, valet parking.", price: "$1,900/month", category: "Apts", email: "executive@gmail.com", phone: "704-555-5455", images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop"]},

  // ROOMS - 10 listings
  {id: 34, title: "Room for Rent", location: "Concord", desc: "Private room in shared house. Furnished, utilities included, flexible lease.", price: "$600/month", category: "Rooms", email: "roomrent@gmail.com", phone: "704-555-4041", images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=500&fit=crop"]},
  {id: 158, title: "Master Bedroom Suite", location: "Charlotte", desc: "Large master with ensuite. Shared kitchen and common areas.", price: "$750/month", category: "Rooms", email: "master@gmail.com", phone: "704-555-5556", images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop"]},
  {id: 159, title: "Shared House Room", location: "Matthews", desc: "Friendly roommate situation. 3-person house, all utilities shared.", price: "$550/month", category: "Rooms", email: "shared@gmail.com", phone: "704-555-5657", images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=500&fit=crop"]},
  {id: 160, title: "Furnished Studio Room", location: "Gastonia", desc: "Private furnished room with kitchenette. WiFi included.", price: "$650/month", category: "Rooms", email: "furnished@gmail.com", phone: "704-555-5758", images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"]},
  {id: 161, title: "Cozy Bedroom", location: "Huntersville", desc: "Bright room with window. Nice neighborhood, parking available.", price: "$500/month", category: "Rooms", email: "cozy@gmail.com", phone: "704-555-5859", images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop"]},
  {id: 162, title: "Executive Bedroom", location: "Charlotte", desc: "Premium furnished room. All amenities, quiet location.", price: "$800/month", category: "Rooms", email: "execroom@gmail.com", phone: "704-555-5960", images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=500&fit=crop"]},
  {id: 163, title: "Student Housing Room", location: "Concord", desc: "Ideal for students. Walking distance to college, budget-friendly.", price: "$450/month", category: "Rooms", email: "student@gmail.com", phone: "704-555-6061", images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"]},
  {id: 164, title: "Private Room - Quiet Area", location: "Matthews", desc: "Quiet residential area. Private bath, independent entry.", price: "$700/month", category: "Rooms", email: "quiet@gmail.com", phone: "704-555-6162", images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=500&fit=crop"]},

  // OFFICE & PARKING - 5 listings
  {id: 35, title: "Office Space - Downtown", location: "Charlotte", desc: "Prime office location. Conference room, parking, reception area included.", price: "$1,000/month", category: "Office", email: "office@gmail.com", phone: "704-555-4243", images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},
  {id: 36, title: "Parking Space", location: "Mint Hill", desc: "Covered parking spot. Secure, well-lit, 24/7 access. Near shopping.", price: "$75/month", category: "Parking", email: "parking@gmail.com", phone: "704-555-4445", images: ["https://images.unsplash.com/photo-1558036117-15ee3e3b0367?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1558036117-15ee3e3b0367?w=500&h=500&fit=crop"]},
  {id: 165, title: "Office Suites - 2 Rooms", location: "Concord", desc: "Professional office space. Shared kitchen, meeting room access.", price: "$800/month", category: "Office", email: "office2@gmail.com", phone: "704-555-6263", images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},
  {id: 166, title: "Garage Parking", location: "Charlotte", desc: "Underground secure garage. Climate controlled, monthly contract.", price: "$120/month", category: "Parking", email: "garage@gmail.com", phone: "704-555-6364", images: ["https://images.unsplash.com/photo-1558036117-15ee3e3b0367?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1558036117-15ee3e3b0367?w=500&h=500&fit=crop"]},
  {id: 167, title: "Retail Space", location: "Matthews", desc: "Street level shop space. High foot traffic location. Contact for details.", price: "$2,000/month", category: "Office", email: "retail@gmail.com", phone: "704-555-6465", images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},

  // ADDITIONAL ELECTRONICS - 20 more listings
  {id: 211, title: "Sony Mirrorless Camera A6400", location: "Charlotte", desc: "24MP sensor, fast AF, excellent for photography and video.", price: "$700.00", category: "Electronics", email: "camera@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1606933248051-5ce41febf502?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop"]},
  {id: 212, title: "Apple Watch Series 7", location: "Concord", desc: "45mm, GPS, excellent condition. Original band and charger.", price: "$280.00", category: "Electronics", email: "watch@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"]},
  {id: 213, title: "Dyson V15 Vacuum", location: "Matthews", desc: "Cordless, laser dust detection. Like new condition.", price: "$450.00", category: "Electronics", email: "vacuum@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&h=500&fit=crop"]},
  {id: 214, title: "LG OLED TV 65-inch", location: "Gastonia", desc: "Perfect blacks, vibrant colors. Premium gaming TV.", price: "$850.00", category: "Electronics", email: "lgtv@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1593642632459-35409f301e5e?w=500&h=500&fit=crop"]},
  {id: 215, title: "AirPods Pro", location: "Huntersville", desc: "Noise cancellation, spatial audio. Original box and charging case.", price: "$180.00", category: "Electronics", email: "airpods@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop"]},
  {id: 216, title: "Canon DSLR Rebel T8i", location: "Charlotte", desc: "24MP, articulating screen, excellent for beginners.", price: "$600.00", category: "Electronics", email: "canon@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1606933248051-5ce41febf502?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop"]},
  {id: 217, title: "Kindle Paperwhite", location: "Concord", desc: "Latest model with warm light. Waterproof, excellent battery.", price: "$140.00", category: "Electronics", email: "kindle@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1551633900-f5eca613b911?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"]},
  {id: 218, title: "Bose QuietComfort Earbuds", location: "Matthews", desc: "Active noise cancellation, premium sound. Like new.", price: "$220.00", category: "Electronics", email: "bose@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"]},
  {id: 219, title: "DJI Mini 3 Pro Drone", location: "Gastonia", desc: "4K camera, 38-minute flight time. All accessories included.", price: "$450.00", category: "Electronics", email: "drone@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1606933248051-5ce41febf502?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop"]},
  {id: 220, title: "Microsoft Surface Laptop", location: "Huntersville", desc: "13.5-inch, Intel i5, 8GB RAM. Sleek design, excellent battery.", price: "$700.00", category: "Electronics", email: "surface@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"]},
  {id: 221, title: "Nikon D3500 DSLR", location: "Charlotte", desc: "24MP, full HD video. Perfect camera for photography enthusiasts.", price: "$550.00", category: "Electronics", email: "nikon@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1606933248051-5ce41febf502?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop"]},
  {id: 222, title: "Google Pixel 7 Pro", location: "Concord", desc: "Unlocked, 128GB, excellent photos. Case and screen protector.", price: "$600.00", category: "Electronics", email: "pixel@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"]},
  {id: 223, title: "Amazon Echo Show 10", location: "Matthews", desc: "Smart display with Alexa. Rotating 10-inch screen.", price: "$200.00", category: "Electronics", email: "echo@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1593642632459-35409f301e5e?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop"]},
  {id: 224, title: "Fujifilm X-T4 Camera", location: "Gastonia", desc: "26MP APS-C sensor. In-body stabilization. Excellent video.", price: "$1,100.00", category: "Electronics", email: "fuji@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1606933248051-5ce41febf502?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop"]},
  {id: 225, title: "Oculus Quest 3", location: "Huntersville", desc: "VR headset, 256GB. Excellent for gaming and experience.", price: "$520.00", category: "Electronics", email: "oculus@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1538481143235-5d8e32260fe0?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1605559424843-9e4c3ba86d6d?w=500&h=500&fit=crop"]},
  {id: 226, title: "OnePlus 11 Phone", location: "Charlotte", desc: "5G, 120Hz display, fast charging. Unlocked.", price: "$520.00", category: "Electronics", email: "oneplus@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"]},
  {id: 227, title: "JBL Flip 6 Speaker", location: "Concord", desc: "Waterproof Bluetooth speaker. Great sound, portable.", price: "$95.00", category: "Electronics", email: "jbl@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1589003077984-894e133814c9?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop"]},
  {id: 228, title: "iPad Mini 6", location: "Matthews", desc: "8.3-inch tablet, 64GB. Perfect for on-the-go use.", price: "$380.00", category: "Electronics", email: "ipadmini@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1551633900-f5eca613b911?w=500&h=500&fit=crop"]},
  {id: 229, title: "Samsung Galaxy Buds", location: "Gastonia", desc: "True wireless earbuds. Noise cancellation, compact design.", price: "$125.00", category: "Electronics", email: "buds@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"]},
  {id: 230, title: "Corsair Gaming Mouse", location: "Huntersville", desc: "Wireless, RGB lighting, programmable buttons. Ergonomic.", price: "$65.00", category: "Electronics", email: "corsair@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1617469767537-b85561927220?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop"]},

  // ADDITIONAL FURNITURE - 15 more listings
  {id: 240, title: "Sectional Sofa L-Shaped", location: "Charlotte", desc: "Grey sectional with chaise. Room for whole family. Excellent condition.", price: "$550.00", category: "Furniture", email: "sectional@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1598855912222-b86f0f4d7f9a?w=500&h=500&fit=crop"]},
  {id: 241, title: "Glass Dining Table", location: "Concord", desc: "Modern glass top with metal base. Seats 4. Pristine.", price: "$220.00", category: "Furniture", email: "glasstable@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1551632786-de41ec16a83a?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1598855912222-b86f0f4d7f9a?w=500&h=500&fit=crop"]},
  {id: 242, title: "Office Desk - Standing", location: "Matthews", desc: "Adjustable height desk. Perfect for home office.", price: "$380.00", category: "Furniture", email: "standdesk@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1594620305371-c89b4d5d46cc?w=500&h=500&fit=crop"]},
  {id: 243, title: "Storage Cabinet - Wood", location: "Gastonia", desc: "4-door wooden cabinet with shelves inside. Great storage.", price: "$280.00", category: "Furniture", email: "cabinet@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1594620305371-c89b4d5d46cc?w=500&h=500&fit=crop"]},
  {id: 244, title: "Nightstand - Modern", location: "Huntersville", desc: "Minimalist nightstand. Two drawers, clean lines.", price: "$95.00", category: "Furniture", email: "nightstand@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop"]},
  {id: 245, title: "Accent Chair", location: "Charlotte", desc: "Blue velvet accent chair. Statement piece. Great condition.", price: "$175.00", category: "Furniture", email: "accentchair@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1533139406505-ecf155bab6c9?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop"]},
  {id: 246, title: "Patio Furniture Set", location: "Concord", desc: "Outdoor table with 4 chairs. Metal frame, weather-resistant.", price: "$350.00", category: "Furniture", email: "patio@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1598855912222-b86f0f4d7f9a?w=500&h=500&fit=crop"]},
  {id: 247, title: "Floating Shelves - Set of 3", location: "Matthews", desc: "Modern floating shelves. White with hardware. Easy install.", price: "$85.00", category: "Furniture", email: "shelves2@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1594620305371-c89b4d5d46cc?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop"]},
  {id: 248, title: "Leather Ottoman", location: "Gastonia", desc: "Brown leather ottoman with storage. Versatile piece.", price: "$130.00", category: "Furniture", email: "ottoman@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1533139406505-ecf155bab6c9?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop"]},
  {id: 249, title: "Console Table", location: "Huntersville", desc: "Long narrow table. Perfect for hallway or entryway.", price: "$140.00", category: "Furniture", email: "console@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1551632786-de41ec16a83a?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1598855912222-b86f0f4d7f9a?w=500&h=500&fit=crop"]},
  {id: 250, title: "Bunk Bed - Wood", location: "Charlotte", desc: "Twin bunk bed. Solid wood construction. Great for kids.", price: "$310.00", category: "Furniture", email: "bunk@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop"]},
  {id: 251, title: "Bookcase - Tall", location: "Concord", desc: "5-shelf tall bookcase. Perfect for organizing books.", price: "$110.00", category: "Furniture", email: "bookcase@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1594620305371-c89b4d5d46cc?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop"]},
  {id: 252, title: "Workspace - Corner Desk", location: "Matthews", desc: "L-shaped desk with storage. Perfect for home office.", price: "$250.00", category: "Furniture", email: "corner@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1594620305371-c89b4d5d46cc?w=500&h=500&fit=crop"]},
  {id: 253, title: "Bedroom Mirror", location: "Gastonia", desc: "Large standalone mirror. Good condition, great for bedroom.", price: "$80.00", category: "Furniture", email: "mirror@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop"]},
  {id: 254, title: "Coat Rack - Standing", location: "Huntersville", desc: "Tall wooden coat rack with hooks. Great for entryway.", price: "$45.00", category: "Furniture", email: "coatrack@gmail.com", phone: "", images: ["https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop"]},

  // ADDITIONAL VEHICLES - 10 more listings
  {id: 300, title: "2013 BMW 328i", location: "Charlotte", desc: "65k miles, black exterior, all service records. Fun to drive.", price: "$12,500.00", category: "Vehicles", email: "bmw@gmail.com", phone: "704-555-1819", images: ["https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1533473359331-35b3d856e992?w=500&h=500&fit=crop"]},
  {id: 301, title: "2011 Ford Escape SUV", location: "Concord", desc: "120k miles, clean title, reliable vehicle. Great for families.", price: "$7,800.00", category: "Vehicles", email: "escape@gmail.com", phone: "704-555-1920", images: ["https://images.unsplash.com/photo-1569382120363-d7ee07bbd881?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop"]},
  {id: 302, title: "2016 Subaru Outback", location: "Matthews", desc: "80k miles, all-wheel drive, excellent for outdoor adventures.", price: "$16,200.00", category: "Vehicles", email: "outback@gmail.com", phone: "704-555-2021", images: ["https://images.unsplash.com/photo-1591966060907-f64b630a01e1?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1569382120363-d7ee07bbd881?w=500&h=500&fit=crop"]},
  {id: 303, title: "2018 Honda Accord", location: "Gastonia", desc: "45k miles, one owner, maintained perfectly. Fuel efficient.", price: "$18,500.00", category: "Vehicles", email: "accord@gmail.com", phone: "704-555-2122", images: ["https://images.unsplash.com/photo-1585362778644-cb0f2db6ae3f?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop"]},
  {id: 304, title: "2015 Toyota RAV4", location: "Huntersville", desc: "88k miles, all-wheel drive, great for families. Very reliable.", price: "$14,200.00", category: "Vehicles", email: "rav4@gmail.com", phone: "704-555-2223", images: ["https://images.unsplash.com/photo-1569382120363-d7ee07bbd881?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1591966060907-f64b630a01e1?w=500&h=500&fit=crop"]},
  {id: 305, title: "2017 Chevy Equinox", location: "Charlotte", desc: "62k miles, white exterior, smooth ride. Perfect family SUV.", price: "$15,800.00", category: "Vehicles", email: "equinox@gmail.com", phone: "704-555-2324", images: ["https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1569382120363-d7ee07bbd881?w=500&h=500&fit=crop"]},
  {id: 306, title: "2014 Dodge Ram Truck", location: "Concord", desc: "98k miles, 4WD, tow package. Heavy-duty vehicle.", price: "$13,900.00", category: "Vehicles", email: "ram@gmail.com", phone: "704-555-2425", images: ["https://images.unsplash.com/photo-1533473359331-35b3d856e992?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop"]},
  {id: 307, title: "2019 Hyundai Santa Fe", location: "Matthews", desc: "38k miles, 3-row seating, all-wheel drive. Pristine.", price: "$18,900.00", category: "Vehicles", email: "santa@gmail.com", phone: "704-555-2526", images: ["https://images.unsplash.com/photo-1591966060907-f64b630a01e1?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1569382120363-d7ee07bbd881?w=500&h=500&fit=crop"]},
  {id: 308, title: "2012 Toyota Prius Hybrid", location: "Gastonia", desc: "115k miles, excellent fuel economy. Eco-friendly car.", price: "$9,200.00", category: "Vehicles", email: "prius@gmail.com", phone: "704-555-2627", images: ["https://images.unsplash.com/photo-1585362778644-cb0f2db6ae3f?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop"]},
  {id: 309, title: "2010 Jeep Wrangler", location: "Huntersville", desc: "Manual transmission, 4WD, removable top. Great for off-roading.", price: "$11,500.00", category: "Vehicles", email: "jeep@gmail.com", phone: "704-555-2728", images: ["https://images.unsplash.com/photo-1533473359331-35b3d856e992?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1569382120363-d7ee07bbd881?w=500&h=500&fit=crop"]},

  // ADDITIONAL SERVICES & CLASSES - 30 more listings
  {id: 310, title: "Web Development", location: "Concord", desc: "Custom websites, e-commerce sites. Mobile-responsive design.", price: "$1,500-$5,000", category: "Services", email: "webdev@gmail.com", phone: "704-555-2728", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"]},
  {id: 311, title: "Landscaping Service", location: "Matthews", desc: "Lawn care, garden design, seasonal maintenance. Professional crew.", price: "$100-$300/month", category: "Services", email: "landscape@gmail.com", phone: "704-555-2829", images: ["https://images.unsplash.com/photo-1467527143519-c21fc004467b?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1584622281867-8d4d408c6f69?w=500&h=500&fit=crop"]},
  {id: 312, title: "Tax Preparation", location: "Gastonia", desc: "CPA certified tax professional. Individual and business returns.", price: "$150-$400", category: "Services", email: "taxes@gmail.com", phone: "704-555-2930", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},
  {id: 313, title: "Home Inspection", location: "Huntersville", desc: "Pre-purchase home inspection. Detailed report included.", price: "$350-$500", category: "Services", email: "inspection@gmail.com", phone: "704-555-3031", images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1584622281867-8d4d408c6f69?w=500&h=500&fit=crop"]},
  {id: 314, title: "Writing & Editing", location: "Charlotte", desc: "Professional editing, proofreading, content writing.", price: "$40-$80/hour", category: "Services", email: "writer@gmail.com", phone: "704-555-3132", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"]},
  {id: 315, title: "Dog Walking Service", location: "Concord", desc: "Daily dog walking. Reliable, professional pet care.", price: "$15-$25/walk", category: "Services", email: "dogwalk@gmail.com", phone: "704-555-3233", images: ["https://images.unsplash.com/photo-1633722715463-d30628cca6d3?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1587300411107-2e50c00eba74?w=500&h=500&fit=crop"]},
  {id: 316, title: "HVAC Service", location: "Matthews", desc: "Air conditioning and heating repair. Emergency service available.", price: "$85/hour", category: "Services", email: "hvac@gmail.com", phone: "704-555-3334", images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1584622281867-8d4d408c6f69?w=500&h=500&fit=crop"]},
  {id: 317, title: "Roof Inspection", location: "Gastonia", desc: "Professional roof inspection and repair estimates. Free quotes.", price: "$200", category: "Services", email: "roof@gmail.com", phone: "704-555-3435", images: ["https://images.unsplash.com/photo-1584622281867-8d4d408c6f69?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop"]},
  {id: 318, title: "Translation Services", location: "Huntersville", desc: "Professional document translation. Multiple languages available.", price: "$0.25-$0.50/word", category: "Services", email: "translate@gmail.com", phone: "704-555-3536", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"]},
  {id: 319, title: "Virtual Assistant", location: "Charlotte", desc: "Administrative support, email management, scheduling. Reliable.", price: "$20-$35/hour", category: "Services", email: "va@gmail.com", phone: "704-555-3637", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"]},
  {id: 320, title: "Guitar Lessons", location: "Charlotte", desc: "Beginner to advanced guitar. Rock, classical, country styles.", price: "$25/lesson", category: "Classes", email: "guitar@gmail.com", phone: "704-555-2425", images: ["https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"]},
  {id: 321, title: "Spanish Language Class", location: "Matthews", desc: "Beginning Spanish course. 6-week program with native speakers.", price: "$120/course", category: "Classes", email: "spanish@gmail.com", phone: "704-555-2526", images: ["https://images.unsplash.com/photo-1434225286191-d282ba0f896d?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500&h=500&fit=crop"]},
  {id: 322, title: "Photography Workshop", location: "Concord", desc: "Learn camera basics and composition. Hands-on workshop.", price: "$65", category: "Classes", email: "photoclass@gmail.com", phone: "704-555-2627", images: ["https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1606933248051-5ce41febf502?w=500&h=500&fit=crop"]},
  {id: 323, title: "Cooking Classes", location: "Gastonia", desc: "Italian cuisine cooking course. Learn authentic recipes from a chef.", price: "$80/class", category: "Classes", email: "cooking@gmail.com", phone: "704-555-2728", images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop"]},
  {id: 324, title: "Tennis Lessons", location: "Huntersville", desc: "Individual and group tennis lessons. All skill levels.", price: "$35/hour", category: "Classes", email: "tennis@gmail.com", phone: "704-555-2829", images: ["https://images.unsplash.com/photo-1554069881-8be0b8da76ff?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1486286701208-1d58dee7d735?w=500&h=500&fit=crop"]},
  {id: 325, title: "Dance Classes", location: "Charlotte", desc: "Hip-hop, contemporary, ballet. Classes for kids and adults.", price: "$40/month", category: "Classes", email: "dance@gmail.com", phone: "704-555-2930", images: ["https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop"]},
  {id: 326, title: "Computer Classes", location: "Matthews", desc: "Learn Microsoft Office, Excel, basic coding. Career-focused.", price: "$200/course", category: "Classes", email: "computer@gmail.com", phone: "704-555-3031", images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},
  {id: 327, title: "Hiking Group", location: "Charlotte", desc: "Weekend hiking adventures. Various difficulty levels. All welcome!", price: "Free", category: "Activities", email: "hiking@gmail.com", phone: "704-555-3132", images: ["https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop"]},
  {id: 328, title: "Running Club", location: "Concord", desc: "Tuesday and Thursday evening runs. Casual pace. Coffee after!", price: "Free", category: "Activities", email: "running@gmail.com", phone: "704-555-3233", images: ["https://images.unsplash.com/photo-1552280900-5ff76b1bada1?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=500&fit=crop"]},
  {id: 329, title: "Trivia Night", location: "Matthews", desc: "Weekly trivia at local pub. Teams of 4-6. Prizes for winners!", price: "$5/person", category: "Activities", email: "trivia@gmail.com", phone: "704-555-3334", images: ["https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1554554236-68c6f07a3c3f?w=500&h=500&fit=crop"]},
  {id: 330, title: "Movie Club", location: "Gastonia", desc: "Monthly classic movie screenings. Discussions and snacks provided.", price: "Free", category: "Activities", email: "movies@gmail.com", phone: "704-555-3435", images: ["https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop"]},
  {id: 331, title: "Arts & Crafts Meetup", location: "Huntersville", desc: "Monthly craft sessions. Painting, sculpting, jewelry-making.", price: "$15/session", category: "Activities", email: "crafts@gmail.com", phone: "704-555-3536", images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},
  {id: 332, title: "Volunteer Opportunity", location: "Charlotte", desc: "Help at local food bank. Saturdays 10am-1pm. All ages.", price: "Free", category: "Activities", email: "volunteer@gmail.com", phone: "704-555-3637", images: ["https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1467527143519-c21fc004467b?w=500&h=500&fit=crop"]},
  {id: 333, title: "Cycling Tour", location: "Matthews", desc: "Guided 15-mile bike tour. Scenic routes, pace for all levels.", price: "$25", category: "Activities", email: "cycling@gmail.com", phone: "704-555-3738", images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1619405399517-dea6161b029a?w=500&h=500&fit=crop"]},
  {id: 334, title: "Networking Event", location: "Concord", desc: "Professional networking mixer. Free drinks, connect with locals.", price: "Free", category: "Activities", email: "network@gmail.com", phone: "704-555-3839", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1427504494785-05a66e50621d?w=500&h=500&fit=crop"]},
  {id: 335, title: "Wine Tasting", location: "Gastonia", desc: "Local wine tastings with expert sommelier. Pairing bites included.", price: "$40", category: "Activities", email: "wine@gmail.com", phone: "704-555-3940", images: ["https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1554554236-68c6f07a3c3f?w=500&h=500&fit=crop"]},
  {id: 336, title: "Book Club - Sci-Fi", location: "Huntersville", desc: "Monthly sci-fi book discussions. Next book announced soon!", price: "Free", category: "Activities", email: "scifi@gmail.com", phone: "704-555-4041", images: ["https://images.unsplash.com/photo-1507842875343-583f20270319?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop"]},

  // ADDITIONAL APARTMENTS & ROOMS - 15 more listings
  {id: 400, title: "1-BR Apartment Downtown", location: "Charlotte", desc: "Walk to shops and restaurants. Recently renovated. Pet OK.", price: "$1,100/month", category: "Apts", email: "downtown@gmail.com", phone: "704-555-4142", images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=500&fit=crop"]},
  {id: 401, title: "2-BR House - Backyard", location: "Concord", desc: "Nice house with big backyard. Washer/dryer hookup. Garage.", price: "$1,350/month", category: "Apts", email: "backyard@gmail.com", phone: "704-555-4243", images: ["https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1560959375-cdab75760ce0?w=500&h=500&fit=crop"]},
  {id: 402, title: "Spacious 3-BR House", location: "Matthews", desc: "Corner lot, large living area, excellent for families.", price: "$1,650/month", category: "Apts", email: "spacious@gmail.com", phone: "704-555-4344", images: ["https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=500&fit=crop"]},
  {id: 403, title: "Efficiency Apartment", location: "Gastonia", desc: "All-in-one space. Utilities included. Great starter place.", price: "$700/month", category: "Apts", email: "efficiency@gmail.com", phone: "704-555-4445", images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"]},
  {id: 404, title: "Luxury 2-BR Condo", location: "Huntersville", desc: "Granite counters, stainless appliances, waterfront view.", price: "$1,900/month", category: "Apts", email: "waterfront@gmail.com", phone: "704-555-4546", images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1567538096051-b6643b8e8530?w=500&h=500&fit=crop"]},
  {id: 405, title: "Co-Working Space", location: "Charlotte", desc: "Flexible membership. High-speed WiFi, meeting rooms, café.", price: "$350-$500/month", category: "Office", email: "cowork@gmail.com", phone: "704-555-4647", images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},
  {id: 406, title: "Industrial Space", location: "Concord", desc: "Large warehouse space. Loading dock, high ceiling. Flexible terms.", price: "$1,500/month", category: "Office", email: "industrial@gmail.com", phone: "704-555-4748", images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop"]},
  {id: 407, title: "Street Parking - Premium", location: "Matthews", desc: "Prime downtown parking. Reserved spot. Month-to-month.", price: "$100/month", category: "Parking", email: "premium@gmail.com", phone: "704-555-4849", images: ["https://images.unsplash.com/photo-1558036117-15ee3e3b0367?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1533488269670-251e6c922f7e?w=500&h=500&fit=crop"]},
  {id: 408, title: "Studio Space", location: "Gastonia", desc: "Artist/photographer studio. Natural light, kitchenette.", price: "$600/month", category: "Office", email: "studio2@gmail.com", phone: "704-555-4950", images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},
  {id: 409, title: "Lot Parking - 10 Spaces", location: "Huntersville", desc: "Small parking lot. Perfect for business. Paved, well-lit.", price: "$500/month", category: "Parking", email: "lotpark@gmail.com", phone: "704-555-5051", images: ["https://images.unsplash.com/photo-1558036117-15ee3e3b0367?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1544611521-7e0519ad3bc9?w=500&h=500&fit=crop"]},
  {id: 410, title: "Salsa Dancing Nights", location: "Charlotte", desc: "Learn salsa with professionals. Beginner-friendly group.", price: "$15/night", category: "Activities", email: "salsa@gmail.com", phone: "704-555-4142", images: ["https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop"]},
  {id: 411, title: "Crafting Workshops", location: "Concord", desc: "DIY projects and creative workshops. All materials included.", price: "$20-$50", category: "Activities", email: "diycraft@gmail.com", phone: "704-555-4243", images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},
  {id: 412, title: "Outdoor Adventure Club", location: "Matthews", desc: "Monthly outdoor adventures. Rock climbing, kayaking, more.", price: "$30-$75", category: "Activities", email: "adventure@gmail.com", phone: "704-555-4344", images: ["https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop"]},
  {id: 413, title: "Meditation & Mindfulness", location: "Gastonia", desc: "Daily meditation sessions. Stress relief and relaxation.", price: "$10/session", category: "Activities", email: "meditate@gmail.com", phone: "704-555-4445", images: ["https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=500&fit=crop"]},
  {id: 414, title: "Comedy Show Night", location: "Huntersville", desc: "Local comedians perform. Dinner and drinks available.", price: "$25", category: "Activities", email: "comedy@gmail.com", phone: "704-555-4546", images: ["https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1554554236-68c6f07a3c3f?w=500&h=500&fit=crop"]},

  // JOBS - ACCOUNTING
  {id: 500, title: "Accountant - Full Time", location: "Charlotte", desc: "CPA required. 5+ years experience. Tax preparation, audits, financial reporting. Health insurance included.", price: "$60K-$75K/year", category: "Jobs", email: "hr@accfirm.com", phone: "704-555-1001", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1460925895917-adf4198c838d?w=500&h=500&fit=crop"]},
  {id: 501, title: "Bookkeeper - Part Time", location: "Concord", desc: "20 hours/week. QuickBooks experience required. Small business accounting, invoicing, payroll.", price: "$25-$30/hour", category: "Jobs", email: "bookkeep@smallbiz.com", phone: "704-555-1002", images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},
  {id: 502, title: "Tax Accountant", location: "Matthews", desc: "Full-time position. Tax prep specialist. Individual and corporate returns. Flexible schedule.", price: "$55K-$70K/year", category: "Jobs", email: "taxes@taxpro.com", phone: "704-555-1003", images: ["https://images.unsplash.com/photo-1460925895917-adf4198c838d?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},

  // JOBS - BUSINESS
  {id: 503, title: "Business Analyst", location: "Charlotte", desc: "Analyze business processes and systems. Data-driven insights. MBA preferred. Growth opportunity.", price: "$65K-$85K/year", category: "Jobs", email: "business@techcorp.com", phone: "704-555-1004", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"]},
  {id: 504, title: "Operations Manager", location: "Gastonia", desc: "Manage daily operations. Team leadership. 3+ years management experience. Competitive salary.", price: "$50K-$65K/year", category: "Jobs", email: "ops@company.com", phone: "704-555-1005", images: ["https://images.unsplash.com/photo-1460925895917-adf4198c838d?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},
  {id: 505, title: "Business Development Executive", location: "Huntersville", desc: "Generate leads and close deals. Commission-based. High earning potential. Startup environment.", price: "$40K + commission", category: "Jobs", email: "sales@startup.com", phone: "704-555-1006", images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1460925895917-adf4198c838d?w=500&h=500&fit=crop"]},

  // JOBS - CUSTOMER SERVICE
  {id: 506, title: "Customer Service Representative", location: "Charlotte", desc: "Phone & email support. Full-time position. 9am-5pm shift. Benefits package and call center training.", price: "$28K-$35K/year", category: "Jobs", email: "jobs@callcenter.com", phone: "704-555-1007", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop"]},
  {id: 507, title: "Customer Support Specialist", location: "Matthews", desc: "Remote work available. Help customers with technical issues. IT knowledge helpful. Flexible hours.", price: "$32K-$40K/year", category: "Jobs", email: "support@techhelp.com", phone: "704-555-1008", images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop"]},
  {id: 508, title: "Client Relations Manager", location: "Concord", desc: "Manage key client accounts. Account retention. Salary + bonus. Professional environment.", price: "$45K-$60K/year", category: "Jobs", email: "hr@consultancy.com", phone: "704-555-1009", images: ["https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},

  // JOBS - FOOD
  {id: 509, title: "Chef - Fine Dining", location: "Charlotte", desc: "Upscale restaurant. 5+ years experience. Menu development. Health insurance & meals.", price: "$50K-$70K/year", category: "Jobs", email: "chef@finedining.com", phone: "704-555-1010", images: ["https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop"]},
  {id: 510, title: "Line Cook Position", location: "Gastonia", desc: "Busy restaurant. Part-time/Full-time available. Food handler certification required. Meals included.", price: "$20-$25/hour", category: "Jobs", email: "jobs@bistro.com", phone: "704-555-1011", images: ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=500&fit=crop"]},
  {id: 511, title: "Restaurant Manager", location: "Huntersville", desc: "Lead management team. Staff scheduling. Profit management. Opening opportunity.", price: "$35K-$50K/year", category: "Jobs", email: "management@restaurant.com", phone: "704-555-1012", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop"]},

  // JOBS - WRITING
  {id: 512, title: "Content Writer", location: "Charlotte", desc: "Full-time position. Blog posts, articles, web content. SEO knowledge helpful. Remote option available.", price: "$40K-$55K/year", category: "Jobs", email: "content@agency.com", phone: "704-555-1013", images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]},
  {id: 513, title: "Copy Editor", location: "Matthews", desc: "Part-time freelance. Proofread and edit content. Attention to detail crucial. Flexible schedule.", price: "$25-$35/hour", category: "Jobs", email: "editorial@publishing.com", phone: "704-555-1014", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"]},
  {id: 514, title: "Technical Writer", location: "Concord", desc: "Create documentation. User guides and manuals. Software background helpful. Full-time role.", price: "$55K-$70K/year", category: "Jobs", email: "tech@software.com", phone: "704-555-1015", images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"]}
];

function getPosts() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
return JSON.parse(saved);
} catch (error) {
console.error(error);
}
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(starterPosts));
  return [...starterPosts];
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

function setActiveNav() {
  const currentPage = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function setupMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a, button").forEach((item) => {
    item.addEventListener("click", () => {
      if (item.tagName.toLowerCase() === "a") {
        mobileMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.setAttribute("data-theme", theme);
  document.querySelectorAll(".theme-toggle, .mobile-theme-toggle").forEach((button) => {
    button.textContent = theme === "dark" ? "☀️" : "🌙";
    button.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
    button.setAttribute("aria-pressed", "true");
  });
}

function setupTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(savedTheme);
  document.querySelectorAll(".theme-toggle, .mobile-theme-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
      applyTheme(nextTheme);
    });
  });
}

function escapeHtml(text = "") {
  return String(text)
.replace(/&/g, "&amp;")
.replace(/</g, "&lt;")
.replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function listingCard(post, includeContact = false) {
  const images = post.images && post.images.length ? post.images : [PLACEHOLDER];
  const mainImage = images[0];
  const hasMultipleImages = images.length > 1;
  
  // Encode images as JSON for easy access in JS
  const imagesJson = JSON.stringify(images).replace(/"/g, '&quot;');
  
  // Create thumbnail gallery HTML if there are multiple images
  const thumbnailGallery = hasMultipleImages ? `
    <div class="image-thumbnails">
      ${images.slice(0, 5).map((img, idx) => `
        <button class="thumbnail ${idx === 0 ? 'active' : ''}" 
                data-image-index="${idx}" 
                aria-label="View image ${idx + 1}"
                style="background-image: url('${img}')"
                title="Image ${idx + 1} of ${images.length}">
        </button>
      `).join('')}
      ${images.length > 5 ? `<div class="thumbnail more-images" title="View all ${images.length} images">+${images.length - 5}</div>` : ''}
    </div>
  ` : '';
  
  // Add image counter badge if multiple images
  const imageCounter = hasMultipleImages ? `<div class="image-counter">${images.length}</div>` : '';
  
  return `
    <article class="listing-card" data-post-id="${post.id}" data-images="${imagesJson}">
      <div class="image-gallery">
        <div class="main-image-container">
          <img class="listing-image main-listing-image" 
               src="${mainImage}" 
               alt="${escapeHtml(post.title)}"
               loading="lazy">
          ${imageCounter}
          ${hasMultipleImages ? '<div class="multi-image-badge">📸</div>' : ''}
        </div>
        ${thumbnailGallery}
      </div>
      <div class="listing-content">
        <div class="listing-title-row">
          <div>
            <h3 class="listing-title">${escapeHtml(post.title)}</h3>
            <p class="listing-meta">${escapeHtml(post.location || "Location")}</p>
          </div>
          <strong class="listing-price">${escapeHtml(post.price || "Contact")}</strong>
        </div>
        <p class="listing-desc">${escapeHtml(post.desc || "No description")}</p>
        ${includeContact ? `<p class="listing-contact">📧 ${escapeHtml(post.email || post.phone || "Not provided")}</p>` : ""}
      </div>
    </article>
  `;
}

function syncSearchFields() {
  const desktop = document.getElementById("searchDesktop");
  const mobile = document.getElementById("searchMobile");
  if (!desktop || !mobile) return;
  desktop.addEventListener("input", () => {
    mobile.value = desktop.value;
    window.dispatchEvent(new CustomEvent("search-updated"));
  });
  mobile.addEventListener("input", () => {
    desktop.value = mobile.value;
    window.dispatchEvent(new CustomEvent("search-updated"));
  });

  const desktopLocation = document.getElementById("locationDesktop");
  const mobileLocation = document.getElementById("locationMobile");
  desktopLocation?.addEventListener("input", () => {
    mobileLocation.value = desktopLocation.value;
    window.dispatchEvent(new CustomEvent("search-updated"));
  });
  mobileLocation?.addEventListener("input", () => {
    desktopLocation.value = mobileLocation.value;
    window.dispatchEvent(new CustomEvent("search-updated"));
  });
}

function setupCategoryLinks() {
  const categoryLabels = document.querySelectorAll("[data-category]");
  categoryLabels.forEach((item) => {
    item.addEventListener("click", () => {
    if (!item.dataset.category) return;
      window.location.href = `Listings.html?category=${encodeURIComponent(item.dataset.category)}`;
      });
      });
}

function toggleDropdown(btn) {
  const dropdown = btn.nextElementSibling;
  if (!dropdown) return;
  
  // Close all other dropdowns
  document.querySelectorAll(".category-dropdown.active").forEach((d) => {
    if (d !== dropdown) d.classList.remove("active");
  });
  
  // Toggle current dropdown
  dropdown.classList.toggle("active");
  
  // Close when clicking outside
  if (dropdown.classList.contains("active")) {
    document.addEventListener("click", function closeDropdown(e) {
      if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
        dropdown.classList.remove("active");
        document.removeEventListener("click", closeDropdown);
      }
    });
  }
}

function renderAccountPage() {
  const accountPosts = document.getElementById("accountPosts");
  if (!accountPosts) return;
  const posts = getPosts();
  accountPosts.innerHTML = posts.map((post) => listingCard(post, true)).join("");
  document.getElementById("accountEmptyState").classList.toggle("hidden", posts.length !== 0);
  
  // Setup image gallery interactivity
  setupImageGalleries();
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}

function renderPreview(files) {
  const preview = document.getElementById("preview");
  if (!preview) return;
  preview.innerHTML = "";
  files.forEach((file) => {
    const item = document.createElement("div");
    item.className = "preview-item";
    const img = document.createElement("img");
    img.alt = file.name;
    img.src = URL.createObjectURL(file);
    item.appendChild(img);
    preview.appendChild(item);
  });
}

function setupPostForm() {
  const postForm = document.getElementById("postForm");
  if (!postForm) return;

  const upload = document.getElementById("imageUpload");
  const errorEl = document.getElementById("error");
  const successEl = document.getElementById("success");
  const submitBtn = document.getElementById("submitBtn");

  // 1. Validation Rules Configuration - Helpful messages that guide users
  const fields = {
    title: {
      input: document.getElementById("title"),
      error: document.getElementById("titleError"),
      validate: (val) => {
        const trimmed = val.trim();
        if (trimmed.length === 0) return "Add a title to describe what you're selling";
        if (trimmed.length < 5) return `${5 - trimmed.length} more character(s) needed`;
        return "";
      }
    },
    location: {
      input: document.getElementById("location"),
      error: document.getElementById("locationError"),
      validate: (val) => {
        const trimmed = val.trim();
        if (trimmed.length === 0) return "Where is this item located?";
        if (trimmed.length < 3) return `${3 - trimmed.length} more character(s) needed`;
        return "";
      }
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("emailError"),
      validate: (val) => {
        if (val.length === 0) return "How can buyers contact you?";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Please use a valid email (like name@example.com)";
        return "";
      }
    },
    desc: {
      input: document.getElementById("desc"),
      error: document.getElementById("descError"),
      validate: (val) => {
        const trimmed = val.trim();
        if (trimmed.length === 0) return "Tell buyers about your item";
        if (trimmed.length < 15) return `${15 - trimmed.length} more character(s) needed`;
        return "";
      }
    }
  };

  // 2. Real-Time Feedback Loop - Helpful and Supportive
  Object.values(fields).forEach(field => {
    const updateFieldState = () => {
      const msg = field.validate(field.input.value);
      const hasValue = field.input.value.trim().length > 0;
      
      // Update error message
      field.error.textContent = msg;
      
      // Visual feedback: Error state (red)
      if (msg) {
        field.input.classList.remove("input-success");
        field.input.classList.add("input-error");
      } 
      // Visual feedback: Success state (green) - only show after user has typed
      else if (hasValue) {
        field.input.classList.remove("input-error");
        field.input.classList.add("input-success");
      }
      // Default state (empty field)
      else {
        field.input.classList.remove("input-error", "input-success");
      }
    };

    // Show feedback when user focuses on field
    field.input.addEventListener("focus", () => {
      updateFieldState();
    });

    // Update feedback as user types (real-time validation)
    field.input.addEventListener("input", () => {
      updateFieldState();
      
      // Update submit button state in real-time
      const isAllValid = Object.values(fields).every(f => f.validate(f.input.value) === "");
      submitBtn.disabled = !isAllValid;
      
      // Show success message when form is ready
      if (isAllValid) {
        successEl.classList.remove("hidden");
        successEl.textContent = "✅ All fields are complete and valid!";
      } else {
        successEl.classList.add("hidden");
      }
    });

    // Validate on blur (when leaving field)
    field.input.addEventListener("blur", () => {
      updateFieldState();
    });
  });

  // 3. Existing Image Preview Logic
  upload?.addEventListener("change", () => {
    renderPreview(Array.from(upload.files || []));
  });

  // Make upload area clickable to trigger file selection
  const uploadArea = document.querySelector(".file-upload-area");
  uploadArea?.addEventListener("click", () => {
    upload?.click();
  });

  // 4. Submission Logic (Saves to LocalStorage)
  postForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    // Show loading spinner
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;

    try {
      // Simulate minimal delay for UX feedback (shows spinner)
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const files = Array.from(upload?.files || []);
      const images = files.length ? await Promise.all(files.map(fileToDataUrl)) : [PLACEHOLDER];
      
      const posts = getPosts();
      posts.unshift({
        id: Date.now(),
        title: fields.title.input.value,
        location: fields.location.input.value,
        desc: fields.desc.input.value,
        price: "Contact Seller",
        category: document.getElementById("category").value,
        email: fields.email.input.value,
        images: images
      });

      savePosts(posts);
      
      // Remove loading state
      submitBtn.classList.remove("loading");
      
      // Show success feedback
      successEl.classList.remove("hidden");
      successEl.textContent = "✓ Listing posted successfully!";
      
      // Redirect after showing success
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1200);
    } catch (err) {
      // Remove loading state on error
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
      
      // Show error feedback
      errorEl.textContent = "Error saving listing. Please try again.";
    }
  });
}

function setupImageGalleries() {
  // Setup thumbnail click handlers for image galleries
  const thumbnails = document.querySelectorAll(".thumbnail:not(.more-images)");
  
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", (e) => {
      e.preventDefault();
      const imageIndex = parseInt(thumbnail.dataset.imageIndex);
      const card = thumbnail.closest(".listing-card");
      const mainImage = card.querySelector(".main-listing-image");
      const allThumbnails = card.querySelectorAll(".thumbnail:not(.more-images)");
      
      // Get images from data attribute
      try {
        const imagesJson = card.getAttribute("data-images");
        if (!imagesJson) return;
        
        const images = JSON.parse(imagesJson.replace(/&quot;/g, '"'));
        
        if (images[imageIndex]) {
          mainImage.src = images[imageIndex];
          
          // Update active state
          allThumbnails.forEach((t, idx) => {
            t.classList.toggle("active", idx === imageIndex);
          });
        }
      } catch (error) {
        console.error("Error switching gallery image:", error);
      }
    });
  });
}

function renderListings(posts) {
  const mainContent = document.querySelector(".main-content");
  if (!mainContent) return;
  
  // Get category from URL
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  
  if (posts.length === 0) {
    mainContent.innerHTML = "<p style='text-align: center; padding: 2rem; color: var(--muted);'>No listings found. Try adjusting your search.</p>";
    return;
  }
  
  // Add category header if filtering
  let categoryHeader = "";
  if (category) {
    categoryHeader = `
      <div class="listings-header">
        <h1 class="listings-category-title">${category} Listings</h1>
        <p class="listings-count">Showing ${posts.length} ${posts.length === 1 ? "listing" : "listings"}</p>
      </div>
    `;
  }
  
  mainContent.innerHTML = categoryHeader + `<div class="listing-list">${posts.map((post) => listingCard(post)).join("")}</div>`;
  
  // Setup image gallery interactivity
  setupImageGalleries();
}

function renderHomePage() {
  const currentPage = document.body.dataset.page;
  
  // Only render featured listings on home page
  if (currentPage !== "home") return;
  
  const posts = getPosts();
  
  // Populate featured listings
  const featuredContainer = document.getElementById("featuredListingsContainer");
  if (featuredContainer) {
    // Get 6 random featured listings
    const shuffled = [...posts].sort(() => Math.random() - 0.5).slice(0, 6);
    
    featuredContainer.innerHTML = shuffled.map(post => `
      <div class="featured-listing" onclick="window.location.href='Listings.html?category=${encodeURIComponent(post.category)}'">
        <div class="featured-listing-image">
          <img src="${post.images && post.images[0] ? post.images[0] : 'https://via.placeholder.com/300x200?text=No+Image'}" alt="${post.title}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
          <div class="featured-listing-badge">${post.category}</div>
        </div>
        <div class="featured-listing-content">
          <h3 class="featured-listing-title">${post.title}</h3>
          <div class="featured-listing-price">${post.price}</div>
          <div class="featured-listing-location">📍 ${post.location}</div>
        </div>
      </div>
    `).join("");
  }
}

function handleSearch() {
  const currentPage = document.body.dataset.page;
  
  // Desktop search
  const searchInput = document.getElementById("searchDesktop");
  const locationInput = document.getElementById("locationDesktop");
  const searchBtn = document.querySelector(".search-btn");
  
  // Hero search (homepage only)
  const heroSearchInput = document.getElementById("heroSearch");
  const heroLocationInput = document.getElementById("heroLocation");
  const heroSearchBtn = document.querySelector(".hero-search-btn");
  
  const performSearch = () => {
    const searchQuery = (document.getElementById("searchDesktop")?.value || document.getElementById("heroSearch")?.value || "").toLowerCase();
    const locationQuery = (document.getElementById("locationDesktop")?.value || document.getElementById("heroLocation")?.value || "").toLowerCase();
    const posts = getPosts();
    
    const filtered = posts.filter(post => {
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery) || 
        post.desc.toLowerCase().includes(searchQuery);
      
      const matchesLocation = !locationQuery || 
        post.location.toLowerCase().includes(locationQuery);
      
      return matchesSearch && matchesLocation;
    });
    
    if (currentPage === "listings") {
      renderListings(filtered);
    } else if (currentPage === "home") {
      window.location.href = `Listings.html?search=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(locationQuery)}`;
    }
  };
  
  // Bind search buttons
  searchBtn?.addEventListener("click", performSearch);
  heroSearchBtn?.addEventListener("click", performSearch);
  
  // Also allow search on Enter key
  searchInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performSearch();
  });
  
  heroSearchInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performSearch();
  });
  
  // Handle category filter from URL
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const search = params.get("search");
  const location = params.get("location");
  
  if (currentPage === "listings") {
    let posts = getPosts();
    
    if (category) {
      posts = posts.filter(post => post.category === category);
    }
    
    if (search) {
      const searchLower = search.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(searchLower) || 
        post.desc.toLowerCase().includes(searchLower)
      );
    }
    
    if (location) {
      const locationLower = location.toLowerCase();
      posts = posts.filter(post => post.location.toLowerCase().includes(locationLower));
    }
    
    renderListings(posts);
  }
}

setActiveNav();
setupMenu();
setupTheme();
setupCategoryLinks();
renderHomePage();
handleSearch();
renderAccountPage();
  setupPostForm();



function setupSearchSuggestions() {
  const searchInput = document.getElementById("searchDesktop");
  const mobileInput = document.getElementById("searchMobile");
  if (!searchInput || !mobileInput) return;

  let suggestionBox = document.createElement("div");
  suggestionBox.className = "suggestion-box";
  suggestionBox.setAttribute("role", "listbox");
  suggestionBox.setAttribute("aria-label", "Search suggestions");
  searchInput.parentNode.appendChild(suggestionBox);

  function updateSuggestions(value) {
    const posts = getPosts();
    suggestionBox.innerHTML = "";

    // If input is empty, hide suggestions and reset
    if (!value || value.trim() === "") {
      suggestionBox.style.display = "none";
      suggestionBox.innerHTML = "";
      return;
    }

    // Filter posts based on search value (title + description)
    const filtered = posts.filter(p =>
      (p.title + " " + p.desc).toLowerCase().includes(value.toLowerCase())
    );

    // No results state
    if (filtered.length === 0) {
      suggestionBox.innerHTML = "<p class='no-suggest'>🔍 No listings found</p>";
      suggestionBox.style.display = "block";
      return;
    }

    // Show up to 5 suggestions
    filtered.slice(0, 5).forEach((p, index) => {
      const item = document.createElement("div");
      item.className = "suggest-item";
      item.setAttribute("role", "option");
      item.setAttribute("tabindex", "0");
      item.textContent = p.title;
      item.title = p.title;
      
      // Click or Enter key to select
      const selectItem = () => {
        searchInput.value = p.title;
        mobileInput.value = p.title;
        suggestionBox.style.display = "none";
        suggestionBox.innerHTML = "";
        window.dispatchEvent(new CustomEvent("search-updated"));
      };
      
      item.addEventListener("click", selectItem);
      item.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectItem();
        }
      });
      
      suggestionBox.appendChild(item);
    });

    suggestionBox.style.display = "block";
  }

  // Real-time search as user types
  searchInput.addEventListener("input", e => updateSuggestions(e.target.value));
  mobileInput.addEventListener("input", e => updateSuggestions(e.target.value));
  
  // Hide suggestions when clicking elsewhere
  document.addEventListener("click", (e) => {
    if (e.target !== searchInput && e.target !== mobileInput && e.target !== suggestionBox) {
      suggestionBox.style.display = "none";
    }
  });
  
  // Hide suggestions on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      suggestionBox.style.display = "none";
    }
  });
}

setupSearchSuggestions();