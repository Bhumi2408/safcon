// Product landing pages: reachable by URL (and listed in the sitemap) but not linked from the site menu.
// Each page shows the listed products as cards, followed by its SEO content.

const pastaMakingMachines = {
  slug: "pasta-making-machine-manufacturer",
  name: "Pasta Making Machines",
  seo: {
    title: "Best Pasta Making Machine Manufacturer in Delhi NCR | Safcon Food Machines",
    description:
      "Looking for a pasta making machine manufacturer in Delhi NCR? Safcon Food Machines offers 100, 200 & 500 kg/h automatic machines with installation & support. Call now!",
  },
  products: [
    "pasta-making-machine-500-kg-h",
    "automatic-pasta-making-machine-200-kg-h-2",
    "automatic-pasta-making-machine-100-kg-h",
    "automatic-pasta-making-machine-200-kg-h",
    "mini-pasta-making-machine",
  ],
  content: [
    "<h2>Pasta Making Machine Manufacturer in Delhi NCR</h2>",
    '<p>Starting or scaling a pasta business begins with choosing the right machine. <strong>Safcon Food Machines</strong> is a <a href="/contact-us"><strong>pasta making machine manufacturer</strong></a> based in Noida, serving food businesses across Delhi NCR and the rest of India. Our range runs from compact mini machines for startups and cloud kitchens to high-capacity 500 kg/h automatic machines for industrial production. Every machine is built for consistent output, easy operation and long working life. You deal directly with the manufacturer, with no middlemen.</p>',
    "<h3>Our Range of Pasta Making Machines</h3>",
    "<p>Choose a machine based on your daily production target and budget.</p>",
    "<table>\n<thead>\n<tr>\n<th>Machine</th>\n<th>Capacity</th>\n<th>Best For</th>\n</tr>\n</thead>\n<tbody>\n" +
      [
        ["Mini Pasta Making Machine", "Compact, entry-level", "Startups, small kitchens, trial production"],
        ["Automatic Pasta Making Machine 100 kg/h", "100 kg/h", "Growing food units, medium-scale production"],
        ["Automatic Pasta Making Machine 200 kg/h", "200 kg/h", "Commercial manufacturers, hotels, cloud kitchens"],
        ["Pasta Making Machine 500 kg/h", "500 kg/h", "Industrial plants, FMCG, export units"],
      ]
        .map((r) => `<tr>\n${r.map((c) => `<td>${c}</td>`).join("\n")}\n</tr>`)
        .join("\n") +
      "\n</tbody>\n</table>",
    "<p><strong>Mini Pasta Making Machine:</strong> A compact, easy-to-operate machine for startups, restaurants and small food businesses. It needs little space and lets you begin production with a lower investment.</p>",
    "<p><strong>100 kg/h Automatic Machine:</strong> A practical step up for growing businesses. Automatic operation reduces manual work and keeps output steady.</p>",
    '<p><strong>200 kg/h Automatic Machine:</strong> Built for commercial pasta units that need higher output every day. A second configuration is also available as the <a href="/product/automatic-pasta-making-machine-200-kg-h-2">Automatic Pasta Making Machine 200 kg/h (alternate model)</a>.</p>',
    '<p><strong>500 kg/h Automatic Machine:</strong> Our highest-capacity range, for long production shifts and bulk orders. See also the <a href="/product/500-kg-h-automatic-pasta-making-machine"><strong>500 kg/h Automatic Pasta Making Machine</strong></a> for the full specification and die options.</p>',
    "<h3>How Our Pasta Making Machines Work</h3>",
    "<p>The process is simple and fully controlled. Flour and water are fed into the hopper and mixed into dough. A vacuum system removes air from the dough, which gives smoother, denser pasta with better texture. The dough is then pushed through a die by the extruder screw, which forms the pasta shape. A cutter slices it to the required length, and the pasta moves on to drying. Water cooling keeps the barrel temperature stable throughout the run.</p>",
    "<h3>Key Features Across Our Range</h3>",
    "<ul>\n" +
      [
        "<strong>Automatic operation</strong> with an electrical control panel",
        "<strong>Water cooling system</strong> for stable temperature during continuous production",
        "<strong>Vacuum system</strong> for air-free, uniform dough",
        "<strong>Premium gearbox</strong> for smooth power transmission",
        "<strong>Separate motors</strong> for the hopper, vacuum pump and cutter",
        "<strong>Multiple pasta shapes</strong> with the right dies, such as macaroni, penne, fusilli, spaghetti and vermicelli",
        "<strong>Standard industrial supply:</strong> 415 V, 50 Hz, 4-wire",
      ]
        .map((li) => `<li>${li}</li>`)
        .join("\n") +
      "\n</ul>",
    "<h3>How to Choose the Right Pasta Making Machine</h3>",
    "<p>Start with your <strong>daily production target</strong>. A startup testing the market does well with a mini machine, while a unit supplying hotels, retailers or distributors needs 100 to 200 kg/h. For industrial and export-scale output, a 500 kg/h machine is the better fit.</p>",
    "<p>Next, think about <strong>pasta shapes</strong>. Dies decide the shape, so tell us which products you plan to make and we will configure the machine for them. Also check your <strong>power supply and floor space</strong> before ordering.</p>",
    '<p>Drying is the other half of pasta production. Pair your machine with our <a href="/product/static-tray-dryer-for-pasta">Static Tray Dryer for Pasta</a> or <a href="/product/box-dryer">Box Dryer</a> to get a complete production line.</p>',
    "<h3>Why Choose Safcon Food Machines in Delhi NCR?</h3>",
    "<p><strong>Direct manufacturer:</strong> We are based at A-66, Sector 8, Noida, so you get factory pricing and faster communication.</p>",
    "<p><strong>Customized solutions:</strong> Capacity, die shapes and electrical configuration can be adjusted to your production needs.</p>",
    "<p><strong>Installation and training:</strong> Our team supports installation, commissioning and operator training.</p>",
    "<p><strong>After-sales support:</strong> Spare parts and technical help are available whenever you need them.</p>",
    "<p><strong>Local reach:</strong> We serve Noida, Greater Noida, Ghaziabad, Delhi, Gurugram and Faridabad, and supply across India.</p>",
    "<h3>Who Uses Our Pasta Machines?</h3>",
    "<p>Pasta and macaroni manufacturers, food processing units, hotels, restaurants, cloud kitchens, FMCG brands and new food startups all use Safcon machines to produce pasta consistently.</p>",
    "<h3>Get a Free Quote</h3>",
    '<p>Tell us your target capacity, pasta shapes and location, and we will recommend the right machine. <a href="/contact-us"><strong>Call +91-9457472321 or click Enquire Now for a free quote</strong></a>.</p>',
    "<h3> FAQs</h3>",
    ...[
      ["1. Who is a reliable pasta making machine manufacturer in Delhi NCR?", "Safcon Food Machines is a pasta making machine manufacturer based in Noida, Sector 8, serving Delhi NCR and pan-India. When comparing manufacturers, check build quality, customization, installation support and after-sales service."],
      ["2. What is the price of a pasta making machine in India?", "Price depends on capacity, automation level, motor configuration and dies. Safcon provides quotations as per your requirement. Call +91-9457472321 or send an enquiry."],
      ["3. How do I choose the right pasta making machine?", "Consider your daily production target, pasta shapes, available power supply, floor space and budget. Small businesses can start with a mini machine, while larger units should choose 100, 200 or 500 kg/h models."],
      ["4. How does a pasta making machine work?", "It mixes flour and water into dough, removes air with a vacuum system, extrudes the dough through a die to form the shape, and cuts it to length. The pasta is then dried."],
      ["5. What machines are needed to set up a pasta plant?", "A complete plant usually includes a mixer, extruder, cutter, dryer, cooling system and control panel. Safcon supplies pasta making machines and dryers for a full setup."],
      ["6. What capacities are available?", "Safcon offers a mini machine and automatic machines of 100 kg/h, 200 kg/h and 500 kg/h for different business sizes."],
      ["7. Which pasta shapes can be made with these machines?", "With the right dies, you can make macaroni, penne, fusilli (spiral), spaghetti, vermicelli and other shapes. Dies are changed according to the product."],
      ["8. Which machine is best for a small business or startup?", "The Mini Pasta Making Machine or the 100 kg/h automatic machine suits startups, restaurants and small units because of lower investment and easy operation."],
      ["9. What power supply does a pasta making machine need?", "Safcon machines run on a 415 V, 50 Hz, 4-wire three-phase supply, which is standard in most industrial units."],
      ["10. Do you provide installation and after-sales support in Delhi NCR?", "Yes. Safcon supports installation, operator training, spare parts and technical assistance across Noida, Delhi NCR and the rest of India."],
    ].map(([q, a]) => `<p><strong>${q}</strong><br/>\n${a}</p>`),
  ].join("\n"),
};

const landingPages = [pastaMakingMachines];

export default landingPages;
