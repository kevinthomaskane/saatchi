let query;
let bookmarks_selected;
let notes_selected;
let modal_open = false;
let show_searchbar = true;
let chosen_image;

let to_do_items_storage = {};
let notes_storage = {};

const array_of_images = [
  {
    url:
      "https://www.saatchiart.com/art/Painting-Women-denuded-Bather-with-purple-hat-Old-woman-parrot-looking-at-a-vase/671796/2443727/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/671796/art/2633844/1703737-RKWGCZBF-8.jpg",
    title:
      "Women denuded / Bather with purple hat / Old woman - parrot looking at a vase",
    description:
      "Original Wax Painting, measuring: 35.43W x 11.81H x 0.39D Inches",
    artist: "Carlos Blanco Artero (Spain)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-New-Kicks-1/293334/2475659/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/293334/art/2665801/1735694-GKVTIDPV-8.jpg",
    title: "New Kicks 1",
    description:
      "Original Acrylic Painting, measuring: 24.00W x 14.00H x 0.01D Inches",
    artist: "Mary Robertson (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Abstract-SeaScape-X/608620/2257751/view?sku=P242-U608620-A2257751",
    image_url:
      "https://assets.saatchiart.com/saatchi/608620/art/2447628/1517646-OKVJPBFX-8.jpg",
    title: "Abstract SeaScape X",
    description:
      "32x48 Fine Art Paper  Print of an original Color, Digital and Manipulated Photograph, measuring: 39.37W x 27.56H x 0.39D Inches",
    artist: "Igor Vitomirov (Sweden)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Sitting-Nude-Painting-Sitting-on-the-Sun/412927/3823723/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/412927/art/4014883/3084737-ZETYIXOI-8.jpg",
    title: "Sitting Nude Painting - Sitting on the Sun",
    description:
      "Original Oil Painting, measuring: 25.59W x 16.54H x 0.79D Inches",
    artist: "Yuri Pysar (Ukraine)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Printmaking-AK-47-Concert-of-Birds/291153/200716/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/291153/art/529495/289270-ADJTFKTT-8.jpg",
    title: "AK-47 Concert of Birds",
    description:
      "Original GiclÃ©e Printmaking, measuring: 39.37W x 17.72H x 0.04D Inches",
    artist: "Magnus Gjoen (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Theater-watercolor/394248/1581114/view?sku=P207-U394248-A1581114",
    image_url:
      "https://assets.saatchiart.com/saatchi/394248/art/1742127/907424-8.jpg",
    title: "Theater - watercolor",
    description:
      "8x12 Fine Art Paper  Print of an original Watercolor Painting, measuring: 18.50W x 12.60H x 0.39D Inches",
    artist: "Sylvia Baldeva (France)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Emanations/394248/3700823/view?sku=P207-U394248-A3700823",
    image_url:
      "https://assets.saatchiart.com/saatchi/394248/art/3891873/2961756-KYFFLQPX-8.jpg",
    title: "Emanations",
    description:
      "8x12 Fine Art Paper  Print of an original Watercolor Painting, measuring: 19.69W x 12.60H x 0.04D Inches",
    artist: "Sylvia Baldeva (France)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Cosmic-Plan-Triptych/688716/4202450/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/688716/art/4569855/3639693-OMVFNRTW-8.jpg",
    title: "Cosmic Plan (Triptych)",
    description:
      "Original Acrylic Painting, measuring: 42.00W x 17.00H x 0.10D Inches",
    artist: "Yeachin Tsai (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-ROMAN-COUNTRYSIDE-LANDSCAPE-AN-ANCIENT-ROMAN-RUIN-IN-THE-ROMAN-CAMPAGNA-019-Italian-and-roman-countryside-landscapes-oil-on-wood-series/670850/2348396/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/670850/art/2538389/1608326-8.jpg",
    title:
      "ROMAN COUNTRYSIDE LANDSCAPE: AN ANCIENT ROMAN RUIN IN THE ROMAN CAMPAGNA #019 - Italian and roman countryside landscapes",
    description:
      "Original Oil Painting, measuring: 11.81W x 3.94H x 0.12D Inches",
    artist: "Alessandro Nesci (Italy)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Event6/91070/1483239/view?sku=P207-U91070-A1483239",
    image_url:
      "https://assets.saatchiart.com/saatchi/91070/art/1644252/834712-f6881b-8.jpg",
    title: "Event6",
    description:
      "8x12 Fine Art Paper  Print of an original Mixed Media Painting, measuring: 36.00W x 24.00H x 0.80D Inches",
    artist: "HyunRyoung Kim (Canada)"
  },
  {
    url: "https://www.saatchiart.com/art/Painting-Outward/378723/3949015/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/378723/art/4140281/3210132-ZQMUDFMD-8.jpg",
    title: "Outward",
    description:
      "Original Acrylic and Pastel Painting, measuring: 74.00W x 39.00H x 1.50D Inches",
    artist: "Behzad Tabar (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Pine-green-I-X-Abstract-N-2017-26/91068/3864659/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/91068/art/4055845/3125698-GCJEFZOC-8.jpg",
    title: "Pine green I-X [Abstract NÂ°2017-26]",
    description:
      "Original Oil Painting, measuring: 59.06W x 31.50H x 0.08D Inches",
    artist: "Koen Lybaert (Belgium)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-stare-ste-r-Edition-4-10/155519/1733993/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/155519/art/1895006/1026779-8.jpg",
    title: "stare |ste(É™)r| Edition 4/10",
    description:
      "Original Digital, Color and Polaroid Photograph, measuring: 35.43W x 23.62H x 1.97D Inches",
    artist: "Richard Brocken (Netherlands)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Abstracted-Mind-37/58313/2443469/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/58313/art/2633585/1703478-YDNUYQTK-8.jpg",
    title: "Abstracted Mind 37",
    description:
      "Original Enamel, Ink and Acrylic Painting, measuring: 138.00W x 62.00H x 0.10D Inches",
    artist: "Mark Fearn (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Reflejos-4/350734/2097143/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/350734/art/2286994/1362136-8.jpg",
    title: "Reflejos 4",
    description:
      "Original Acrylic, Oil and Paint Painting, measuring: 68.90W x 25.59H x 1.97D Inches",
    artist: "Marcela Ramirez-Aza (Colombia)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-listen/93960/1923408/view?sku=P207-U93960-A1923408",
    image_url:
      "https://assets.saatchiart.com/saatchi/93960/art/2084421/1193143-8.jpg",
    title: "listen",
    description:
      "8x12 Fine Art Paper  Print of an original Acrylic, Gesso and Paint Painting, measuring: 60.24W x 39.76H x 0.63D Inches",
    artist: "Niki Hare (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-HEARTBEAT-edition-1-7/314687/2004070/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/314687/art/2193921/1272579-RWZSPCSH-8.jpg",
    title: "HEARTBEAT / edition 1/7",
    description:
      "Original Digital Photograph, measuring: 72.00W x 36.00H x 1.00D Inches",
    artist: "Ysabel LeMay (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Dontfly-Zen-Study/307665/4123186/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/307665/art/4411209/3481049-JEECLUXB-8.jpg",
    title: "Dontfly (Zen Study)",
    description:
      "Original Acrylic and Ink Painting, measuring: 59.06W x 39.37H x 0.98D Inches",
    artist: "Krisztina Horvath (Netherlands)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Confettical-landscape-29-Limited-Edition-2-of-8/46251/3110816/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/46251/art/3301596/2371483-DSFREMFQ-8.jpg",
    title:
      "Confettical landscape #  29 - Limited Edition 2 of 8",
    description:
      "Original C-type and Color Photograph, measuring: 35.04W x 20.87H x 0.12D Inches",
    artist: "Yigal Pardo (Israel)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Pacific-Ocean-Original-oil-Painting-Large-size/503607/3879390/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/503607/art/4070583/3140436-IPRCHTGH-8.jpg",
    title: "Pacific Ocean",
    description:
      "Original Oil Painting, measuring: 53.00W x 29.00H x 1.50D Inches",
    artist: "Vahe Yeremyan (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Event-7/91070/1687972/view?sku=P207-U91070-A1687972",
    image_url:
      "https://assets.saatchiart.com/saatchi/91070/art/1848985/988206-ZOEKEDHV-8.jpg",
    title: "Event 7",
    description:
      "8x12 Fine Art Paper  Print of an original Mixed Media Painting, measuring: 36.00W x 24.00H x 0.80D Inches",
    artist: "HyunRyoung Kim (Canada)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Caramel/668880/2403219/view?sku=P209-U668880-A2403219",
    image_url:
      "https://assets.saatchiart.com/saatchi/668880/art/2593312/1663206-IZCCFVTT-8.jpg",
    title: "Caramel",
    description:
      "6x12 Fine Art Paper  Print of an original Acrylic Painting, measuring: 70.87W x 39.37H x 1.18D Inches",
    artist: "Tanya Vasilenko (Ukraine)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Imaginary-Landscape-Monotype/311229/2205692/view?sku=P207-U311229-A2205692",
    image_url:
      "https://assets.saatchiart.com/saatchi/311229/art/2395543/1465638-QOASKETV-8.jpg",
    title: '"Imaginary Landscape" Monotype',
    description:
      "8x12 Fine Art Paper  Print of an original C-type and Color Photograph, measuring: 60.00W x 40.00H x 0.10D Inches",
    artist: "Misha Dontsov (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-melancholy-mel-n-k-l-Edition-6-10/155519/1244490/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/155519/art/1405437/671408-NXINISZI-8.jpg",
    title: "melancholy |ËˆmelÉ™nËŒkÃ_lÄ“|  Edition 6/10",
    description:
      "Original Black & White, Digital and Paper Photograph, measuring: 35.43W x 23.62H x 0.20D Inches",
    artist: "Richard Brocken (Netherlands)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-That-s-why/950379/4194364/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/950379/art/4553681/3623519-KKDZWKGL-8.jpg",
    title: "That's why!",
    description:
      "Original Acrylic Painting, measuring: 51.18W x 26.77H x 1.50D Inches",
    artist: "Sanja Milenkovic (Italy)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Sun-s-Footsteps/30352/3857335/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/30352/art/4048517/3118370-DPJYFXTQ-8.jpg",
    title: "Sunâ€™s Footsteps",
    description:
      "Original Acrylic Painting, measuring: 32.00W x 22.00H x 3.00D Inches",
    artist: "Leyla Murr (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-in-the-desert/616459/2673600/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/616459/art/2863905/1933798-ZVWPIOND-8.jpg",
    title: "in the desert",
    description:
      "Original Acrylic Painting, measuring: 51.00W x 32.00H x 2.00D Inches",
    artist: "Daniel Maczynski (Poland)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Drawing-Untitled-No-64/593840/4310846/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/593840/art/4786771/3856599-AZDCVSPQ-8.jpg",
    title: "Untitled No. 64",
    description:
      "Original Ink Drawing, measuring: 46.00W x 22.00H x 0.10D Inches",
    artist: "Sumit Mehndiratta (India)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Fifth-Interaction-Diptych/189576/2500402/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/189576/art/2690563/1760456-ETYRWPCF-8.jpg",
    title: "Fifth Interaction",
    description:
      "Original Acrylic Painting, measuring: 36.00W x 24.00H x 1.50D Inches",
    artist: "Hyeran Lee (Canada)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Dreaming/27510/1432938/view?sku=P207-U27510-A1432938",
    image_url:
      "https://assets.saatchiart.com/saatchi/27510/art/1593948/795987-HGKVRTRS-8.jpg",
    title: "Dreaming",
    description:
      "8x12 Fine Art Paper  Print of an original Acrylic, Airbrush, Digital, Ink and Paper Painting, measuring: 59.06W x 39.37H x 1.18D Inches",
    artist: "Alvarenga Marques (Portugal)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Oasis-Diptych/735974/4374274/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/735974/art/4913705/3983529-TMSHEMMD-8.jpg",
    title: '"Oasis" (Diptych)',
    description:
      "Original Acrylic Painting, measuring: 47.24W x 31.50H x 0.79D Inches",
    artist: "Kirsten Handelmann (Germany)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-White-orchid-Limited-Edition-1-of-6/46251/2049894/view?sku=P207-U46251-A2049894",
    image_url:
      "https://assets.saatchiart.com/saatchi/46251/art/2239745/1314980-DHDPAPCC-8.jpg",
    title:
      "White orchid - Limited Edition # 1 of 6",
    description:
      "8x12 Fine Art Paper  Print of an original C-type and Color Photograph, measuring: 68.90W x 45.28H x 0.39D Inches",
    artist: "Yigal Pardo (Israel)"
  },
  {
    url: "https://www.saatchiart.com/art/Sculpture-The-Bow/296286/2027448/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/296286/art/2217299/1292565-HZAOTWQG-8.jpg",
    title: "The Bow",
    description:
      "Original Steel Sculpture, measuring: 118.11W x 47.24H x 7.87D Inches",
    artist: "Sam Shendi (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-El-Matador-Beach-Malibu/503607/4070814/view?sku=P216-U503607-A4070814",
    image_url:
      "https://assets.saatchiart.com/saatchi/503607/art/4306367/3376207-SZJADZJU-8.jpg",
    title: "El Matador Beach-Malibu",
    description:
      "12x24 Fine Art Paper  Print of an original Oil Painting, measuring: 54.50W x 29.00H x 0.75D Inches",
    artist: "Vahe Yeremyan (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Summer/651106/4273515/view?sku=P242-U651106-A4273515",
    image_url:
      "https://assets.saatchiart.com/saatchi/651106/art/4712063/3781895-WQRNDWZR-8.jpg",
    title: "Summer",
    description:
      "32x48 Fine Art Paper  Print of an original Acrylic and Pastel Painting, measuring: 59.06W x 39.37H x 1.50D Inches",
    artist: "Ira Ivanova (Norway)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Collage-Lake-House/694732/4064367/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/694732/art/4293461/3363303-XVPCSFSJ-8.jpg",
    title: "Lake House",
    description:
      "Original Photo, Paint, Graphite and Pencil Collage, measuring: 8.50W x 5.00H x 0.10D Inches",
    artist: "Athena Petra Tasiopoulos (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Shore-11H/888156/4297510/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/888156/art/4760069/3829899-FLHNWYUR-8.jpg",
    title: "Shore 11H",
    description:
      "Original Ink Painting, measuring: 40.00W x 25.50H x 0.10D Inches",
    artist: "Carlos MartÃ_n (Spain)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Untitled-12/91070/1525751/view?sku=P207-U91070-A1525751",
    image_url:
      "https://assets.saatchiart.com/saatchi/91070/art/1686764/870237-8.jpg",
    title: "Untitled 12",
    description:
      "8x12 Fine Art Paper  Print of an original Mixed Media Painting, measuring: 36.00W x 24.00H x 0.80D Inches",
    artist: "HyunRyoung Kim (Canada)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-GREEN-PATH/733605/2212031/view?sku=P207-U733605-A2212031",
    image_url:
      "https://assets.saatchiart.com/saatchi/733605/art/2401882/1471973-8.jpg",
    title: "GREEN PATH",
    description:
      "8x12 Fine Art Paper  Print of an original Oil Painting, measuring: 59.45W x 40.55H x 1.18D Inches",
    artist: "Sam Radja (Indonesia)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Autumn-Leaves-Nr-5-View-to-the-Almsee-Austria/157668/4090437/view?sku=P207-U157668-A4090437",
    image_url:
      "https://assets.saatchiart.com/saatchi/157668/art/4345643/3415483-WTBIZBKS-8.jpg",
    title: "Autumn Leaves Nr. 5   View to the Almsee",
    description:
      "8x12 Fine Art Paper  Print of an original Oil Painting, measuring: 39.37W x 25.59H x 0.79D Inches",
    artist: "Ellen Fasthuber-Huemer (Austria)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-INSPIRATION-edition-1-7/314687/2227749/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/314687/art/2417600/1487668-VEDTERNN-8.jpg",
    title: "INSPIRATION / edition 1/7",
    description:
      "Original Digital Photograph, measuring: 1.00W x 30.00H x 72.00D Inches",
    artist: "Ysabel LeMay (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-THE-DOCK-Limited-Edition-3-of-25/995974/4219232/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/995974/art/4603439/3673277-KTESREIK-8.jpg",
    title: "THE DOCK - Limited Edition 3 of 25",
    description:
      "Original Color, Digital and Ink Photograph, measuring: 56.00W x 31.50H x 0.10D Inches",
    artist: "Jin-Woo Prensena (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Camps-Bay-Cape-Town/15886/2423124/view?sku=P190-U15886-A2423124",
    image_url:
      "https://assets.saatchiart.com/saatchi/15886/art/2613231/1683124-PZUDCWHU-8.jpg",
    title: "Camps Bay (Cape Town)",
    description:
      "14x21 Canvas  Print of an original Acrylic Painting, measuring: 82.68W x 53.15H x 3.15D Inches",
    artist: "Claudia Bormann (Germany)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-The-Weight-Of-An-Error/953121/4242370/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/953121/art/4649751/3719587-IYGSZCDB-8.jpg",
    title: "The Weight Of An Error",
    description:
      "Original Acrylic, Watercolor, Ink, Pastel and Graphite Painting, measuring: 60.00W x 39.00H x 1.00D Inches",
    artist: "Jessica Matier (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Waiting/283032/1924043/view?sku=P207-U283032-A1924043",
    image_url:
      "https://assets.saatchiart.com/saatchi/283032/art/2085056/1193822-8.jpg",
    title: "Waiting",
    description:
      "8x12 Fine Art Paper  Print of an original Oil Painting, measuring: 36.00W x 24.00H x 1.50D Inches",
    artist: "Ron Cooper (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-The-Unexpected-Answer-Limited-Edition-5-10/348619/1769449/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/348619/art/1930462/1055704-LNCDZEQE-8.jpg",
    title: "The Unexpected Answer (Limited Edition 5/10)",
    description:
      "Original C-type Photograph, measuring: 34.00W x 24.00H x 3.00D Inches",
    artist: "Naomi White (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Lake-Hillier-I-III-Abstract-N-2175-77/91068/4191710/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/91068/art/4548369/3618207-WOFFPBUA-8.jpg",
    title: "Lake Hillier I-III [Abstract NÂ°2175-77]",
    description:
      "Original Oil Painting, measuring: 35.43W x 15.75H x 0.20D Inches",
    artist: "Koen Lybaert (Belgium)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Sculpture-Conch-31/663603/2221088/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/663603/art/2410939/1481017-RYWVSAAI-8.jpg",
    title: "Conch 31",
    description:
      "Original Ceramic Sculpture, measuring: 7.48W x 8.66H x 3.74D Inches",
    artist: "Sharon Brill (Israel)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-It-s-Left-Us/162237/2101720/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/162237/art/2291571/1366716-8.jpg",
    title: "It's Left Us",
    description:
      "Original Acrylic, Ink and Watercolor Painting, measuring: 59.06W x 29.53H x 0.04D Inches",
    artist: "Evie Kitt (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Nr-806-WHITE-RIVER/60867/2006065/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/60867/art/2195916/1274109-DHPRWYSD-8.jpg",
    title: "Nr. 806 / WHITE RIVER",
    description:
      "Original Acrylic Painting, measuring: 51.18W x 31.50H x 0.79D Inches",
    artist: "Michael Lauer (Germany)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Printmaking-Desire-2014/26475/2316973/view?sku=P207-U26475-A2316973",
    image_url:
      "https://assets.saatchiart.com/saatchi/26475/art/2506931/1576914-HCGKCBLF-8.jpg",
    title: "Desire 2014",
    description:
      "8x12 Fine Art Paper  Print of an original Lithograph Printmaking, measuring: 39.37W x 27.56H x 0.04D Inches",
    artist: "Prakornpatara Janthakhaisorn (Thailand)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-journey-j-rn-III-Limited-Edition-1-of-10/155519/4197456/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/155519/art/4559865/3629703-NITGUEXE-8.jpg",
    title:
      "journey | ËˆjÉ™rnÄ“ | III - Limited Edition 1 of 10",
    description:
      "Original Color, Paper and Photo Photograph, measuring: 41.73W x 23.62H x 0.20D Inches",
    artist: "Richard Brocken (Netherlands)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-A-night-time-arrangement/803412/4047404/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/803412/art/4259487/3329335-ZGHLHOKQ-8.jpg",
    title: "A night time arrangement",
    description:
      "Original Oil Painting, measuring: 155.91W x 66.14H x 1.57D Inches",
    artist: "Alec Cumming (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Drawing-Eye-for-an-eye/296904/1329614/view?sku=P116-U296904-A1329614",
    image_url:
      "https://assets.saatchiart.com/saatchi/296904/art/1490598/727795-8.jpg",
    title: "Eye for an eye",
    description:
      "14x21 Rag Paper  Print of an original Charcoal Drawing, measuring: 11.81W x 16.54H x 0.39D Inches",
    artist: "Mehmet Dere (Turkey)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Abstract-No-813/725371/2253519/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/725371/art/2443385/1513409-KKROJPYV-8.jpg",
    title: "Abstract  No. 813",
    description:
      "Original Gesso and Acrylic Painting, measuring: 51.18W x 31.50H x 0.79D Inches",
    artist: "Gerry Van Kerkhof (Netherlands)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Sudden-Heat/208506/4273450/view?sku=P232-U208506-A4273450",
    image_url:
      "https://assets.saatchiart.com/saatchi/208506/art/4711933/3781765-WOBEBBWR-8.jpg",
    title: "Sudden Heat",
    description:
      "24x36 Fine Art Paper  Print of an original Acrylic Painting, measuring: 60.00W x 36.00H x 1.50D Inches",
    artist: "Claire Desjardins (Canada)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Ice-Palace/442098/4081767/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/442098/art/4328297/3398137-WDNMELYH-8.jpg",
    title: "Ice Palace",
    description:
      "Original Acrylic and Pencil Painting, measuring: 44.00W x 22.00H x 0.10D Inches",
    artist: "Hal Mayforth (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Hudson-at-Sunrise-Limited-Edition-1-of-10/947257/3418692/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/947257/art/3609590/2679476-APUUMKIZ-8.jpg",
    title: "Hudson at Sunrise - Limited Edition 1 of 10",
    description:
      "Original Color, C-type and Digital Photograph, measuring: 60.00W x 40.00H x 0.10D Inches",
    artist: "Journey Gong (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-My-party-people/334628/2104679/view?sku=P207-U334628-A2104679",
    image_url:
      "https://assets.saatchiart.com/saatchi/334628/art/2294530/1369673-RXTORBQR-8.jpg",
    title: '"My party people"',
    description:
      "8x12 Fine Art Paper  Print of an original Oil Painting, measuring: 59.06W x 39.37H x 1.97D Inches",
    artist: "Natalia Baykalova (Russia)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-OCEAN-ELEVEN-XII/352287/2112760/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/352287/art/2302611/1377754-8.jpg",
    title: "OCEAN ELEVEN XII",
    description:
      "Original Color Photograph, measuring: 55.12W x 27.56H x 1.97D Inches",
    artist: "Sven Pfrommer (Germany)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Expedition/25738/2195775/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/25738/art/2385626/1455744-WEFORTBV-8.jpg",
    title: "Expedition",
    description:
      "Original Tempera Painting, measuring: 39.37W x 19.69H x 1.57D Inches",
    artist: "Tanja Vetter (Germany)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-PRESUMING-NO-AUDIENCE/308283/2141387/view?sku=P207-U308283-A2141387",
    image_url:
      "https://assets.saatchiart.com/saatchi/308283/art/2331238/1405277-EPLXYQHP-8.jpg",
    title: "PRESUMING NO AUDIENCE",
    description:
      "8x12 Fine Art Paper  Print of an original Oil Painting, measuring: 48.00W x 32.00H x 1.50D Inches",
    artist: "John A Sargent III (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Show-is-going-on/28503/1782454/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/28503/art/1943467/1075476-8.jpg",
    title: "Show is going on",
    description:
      "Original Oil Painting, measuring: 118.11W x 70.87H x 1.57D Inches",
    artist: "Alina Maksimenko (Ukraine)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Crowd-IV/671796/4344776/view?sku=P216-U671796-A4344776",
    image_url:
      "https://assets.saatchiart.com/saatchi/671796/art/4854675/3924503-PJMUDQIX-8.jpg",
    title: "Crowd IV",
    description:
      "12x24 Fine Art Paper  Print of an original Oil, Chalk, Conte, Graphite and Pencil Painting, measuring: 23.62W x 14.17H x 0.04D Inches",
    artist: "Carlos Blanco Artero (Spain)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Still-life/486818/1913549/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/486818/art/2074562/1184430-8.jpg",
    title: "Still life",
    description:
      "Original Acrylic, canvas and pastel Painting, measuring: 47.24W x 23.62H x 0.79D Inches",
    artist: "Aleksandra Toborowicz (Poland)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-All-of-it-all-of-it/162237/2101734/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/162237/art/2291585/1366730-8.jpg",
    title: "All of it",
    description:
      "Original Acrylic, Ink and Watercolor Painting, measuring: 59.06W x 29.53H x 0.04D Inches",
    artist: "Evie Kitt (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Palm-Springs-1-2015-Limited-Edition-5-of-25/96892/2962633/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/96892/art/3153304/2223195-ORFDOMNN-8.jpg",
    title: "Palm Springs #1",
    description:
      "Original Digital and C-type Photograph, measuring: 48.00W x 30.00H x 0.10D Inches",
    artist: "Dean West (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-The-green-metal/302468/2589623/view?sku=P232-U302468-A2589623",
    image_url:
      "https://assets.saatchiart.com/saatchi/302468/art/2779831/1849724-GMKNSUTO-8.jpg",
    title: "The green metal",
    description:
      "24x36 Fine Art Paper  Print of an original Color Photograph, measuring: 47.24W x 31.50H x 0.04D Inches",
    artist: "ERNEST Sebastien (Belgium)"
  },
  {
    url: "https://www.saatchiart.com/art/Drawing-Circuit/416159/2001854/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/416159/art/2191705/1270401-MGYGEOVO-8.jpg",
    title: "Circuit",
    description:
      "Original Ballpoint Pen, Ink and Marker Drawing, measuring: 12.00W x 6.00H x 0.10D Inches",
    artist: "Rebecca Jacoby (United States)"
  },
  {
    url: "https://www.saatchiart.com/art/Painting-red-table/99212/1333925/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/99212/art/1494909/729942-8.jpg",
    title: "red table ",
    description:
      "Original Oil Painting, measuring: 47.24W x 31.50H x 1.18D Inches",
    artist: "Ezzaldin Shahrori (Jordan)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-high-flying-birds/144695/2503128/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/144695/art/2693290/1763183-OFVNALIU-8.jpg",
    title: "high flying birds",
    description:
      "Original Acrylic Painting, measuring: 31.50W x 15.75H x 0.98D Inches",
    artist: "Dariya Afanasyeva (Russia)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Screenprinting-Atelier/70461/1498742/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/70461/art/1659755/846326-NGIHOLRX-8.jpg",
    title: "Screenprinting Atelier",
    description:
      "Original Oil Painting, measuring: 45.67W x 28.74H x 0.79D Inches",
    artist: "Aslihan Kaplan Bayrak (Turkey)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Skater-Girl/39291/1399455/view?sku=P207-U39291-A1399455",
    image_url:
      "https://assets.saatchiart.com/saatchi/39291/art/1560452/774528-WDGSHQCA-8.jpg",
    title: "Skater Girl",
    description:
      "8x12 Fine Art Paper  Print of an original Oil Painting, measuring: 48.03W x 31.89H x 1.18D Inches",
    artist: "Matthew Carter (New Zealand)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Hypothesis-for-a-portrait-of-Mrs-A-Jordan/768354/4421616/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/768354/art/5008449/4078271-OGMNRBSP-8.jpg",
    title: "Hypothesis for a portrait of Mrs. A. Jordan",
    description:
      "Original Oil, Acrylic and Charcoal Painting, measuring: 59.06W x 39.37H x 0.79D Inches",
    artist: "Paolo Damiani (Italy)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-AMOREDELLAMIAVITA/28818/3808014/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/28818/art/3999163/3069017-LLWHUFHR-8.jpg",
    title: "AMOREDELLAMIAVITA",
    description:
      "Original Airbrush, Acrylic and Digital Painting, measuring: 81.50W x 51.18H x 0.04D Inches",
    artist: "Marco Battaglini (Costa Rica)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-At-Rest-23x48/413222/2134397/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/413222/art/2324248/1399373-8.jpg",
    title: "At Rest 23x48",
    description:
      "Original Black & White and Digital Photograph, measuring: 48.00W x 23.00H x 1.00D Inches",
    artist: "Drew Doggett (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-She-hangs-between-both-sides-of-the-Veil/342443/1702726/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/342443/art/1863739/1000700-8.jpg",
    title: "She hangs between both sides of the Veil",
    description:
      "Original Oil Painting, measuring: 48.03W x 24.02H x 1.57D Inches",
    artist: "Lara Cobden (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Texas-Hill-Country-I-III-Abstract-N-2137-39/91068/4127155/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/91068/art/4419147/3488987-TIBHVZQL-8.jpg",
    title: "Texas Hill Country I-III [Abstract NÂ°2137-39]",
    description:
      "Original Oil Painting, measuring: 70.87W x 47.24H x 1.57D Inches",
    artist: "Koen Lybaert (Belgium)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Journey-to-the-center-of-the-galaxy/20877/2281595/view?sku=P116-U20877-A2281595",
    image_url:
      "https://assets.saatchiart.com/saatchi/20877/art/2471500/1541507-KTLQFRTR-8.jpg",
    title: "Journey to the center of the galaxy",
    description:
      "14x21 Rag Paper  Print of an original Acrylic Painting, measuring: 59.06W x 39.37H x 0.79D Inches",
    artist: "Blue Moon - Heike Schmidt (Germany)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Detroit-House-Interior-Living-Room-Couch/493867/1674134/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/493867/art/1835147/984444-8.jpg",
    title: "Detroit House Interior - Living Room Couch",
    description:
      "Original Color Photograph, measuring: 18.00W x 12.00H x 0.20D Inches",
    artist: "Vincent Johnson (United States)"
  },
  {
    url: "https://www.saatchiart.com/art/Painting-Happiness/79335/1670501/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/79335/art/1831514/973991-MNLQWEKS-8.jpg",
    title: "Happiness",
    description:
      "Original Oil Painting, measuring: 59.06W x 31.50H x 0.79D Inches",
    artist: "Tran Tuan (Vietnam)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-untitled-43-60x36/321747/1501881/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/321747/art/1662894/853538-CAGEVDED-8.jpg",
    title: "untitled 43 60x36",
    description:
      "Original Acrylic Painting, measuring: 60.00W x 30.00H x 1.50D Inches",
    artist: "Sanjay Patel (Canada)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Balloon-14-Limited-Edition-30-of-30/785139/3882940/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/785139/art/4074137/3143990-QCFPEBQS-8.jpg",
    title: "Balloon #14 - Limited Edition 30 of 30",
    description:
      "Original C-type Photograph, measuring: 60.00W x 40.00H x 0.10D Inches",
    artist: "Cody Choi (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Another-Long-Day/922469/3257947/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/922469/art/3448787/2518674-JOSVIYVN-8.jpg",
    title: '""Another Long Day"""',
    description:
      "Original Acrylic Painting, measuring: 66.00W x 42.00H x 1.50D Inches",
    artist: "Brad Nuorala (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Champ-de-bl/620837/1782573/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/620837/art/1943586/1066483-8.jpg",
    title: "Champ de blÃ©",
    description:
      "Original Acrylic Painting, measuring: 24.00W x 12.00H x 1.50D Inches",
    artist: "Judith Cameron (Canada)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Second-Genesis/467923/2497077/view?sku=P207-U467923-A2497077",
    image_url:
      "https://assets.saatchiart.com/saatchi/467923/art/2687236/1757129-NXOALVGJ-8.jpg",
    title: "Second Genesis",
    description:
      "8x12 Fine Art Paper  Print of an original Acrylic Painting, measuring: 56.69W x 37.80H x 0.04D Inches",
    artist: "Lau Sze man (Hong Kong)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-STRIPED-Destroyed-space/155526/3855053/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/155526/art/4046235/3116088-EFYASWEL-8.jpg",
    title: "STRIPED/Destroyed space",
    description:
      "Original Acrylic and Manipulated Painting, measuring: 62.99W x 31.50H x 1.18D Inches",
    artist: "Sandro Chkhaidze (Georgia)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Driftings-Large-2/285922/2001159/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/285922/art/2191010/1269706-TLWGMLZX-8.jpg",
    title: "Driftings (Large#2)",
    description:
      "Original Acrylic Painting, measuring: 86.61W x 43.31H x 1.38D Inches",
    artist: "Julien Guibreteau (France)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Tabula-rasa/97233/1668207/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/97233/art/1829220/973462-PGSHTQYH-8.jpg",
    title: "Tabula rasa",
    description:
      "Original Acrylic and Paper Painting, measuring: 99.21W x 46.85H x 0.39D Inches",
    artist: "Dusa Jesih (Slovenia)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Printmaking-THE-MAHARAJAH-MAHARANI-Limited-Edition-15-of-80/291153/3796578/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/291153/art/3987723/3057577-SBWYHIPG-8.jpg",
    title:
      "THE MAHARAJAH & MAHARANI - Limited Edition 15 of 80",
    description:
      "Original GiclÃ©e, Paper and Archival Inks Printmaking, measuring: 25.59W x 11.81H x 0.04D Inches",
    artist: "Magnus Gjoen (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Berry-gr-n-orange-durchwebt/653828/2376107/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/653828/art/2566143/1636063-8.jpg",
    title: "Berry grÃ_n-orange durchwebt",
    description:
      "Original Oil, Tempera and pastels Painting, measuring: 78.74W x 31.50H x 0.79D Inches",
    artist: "Skadi Engeln (Germany)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-purring-for-paintings-extra-large-size-Limited-Edition-1-of-2/622485/3480458/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/622485/art/3671398/2741283-OWBTVNFH-8.jpg",
    title:
      "purring for paintings - extra-large size - Limited Edition 1 of 2",
    description:
      "Original Color and Digital Photograph, measuring: 36.00W x 24.00H x 0.10D Inches",
    artist: "Elle Hanley (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Magnolias/498784/2466321/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/498784/art/2656454/1726347-WJDRHCUA-8.jpg",
    title: "Magnolias",
    description:
      "Original Acrylic Painting, measuring: 73.23W x 44.88H x 0.20D Inches",
    artist: "St Global Nomads Foundation (Netherlands)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Listening-Trees-10-Limited-Edition-4-of-10/418704/2105597/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/418704/art/2295448/1370590-8.jpg",
    title: "Listening Trees #10 (Limited Edition 4 of 10)",
    description:
      "Original Color Photograph, measuring: 13.78W x 9.06H x 0.04D Inches",
    artist: "Petra Rjabinin (Slovakia)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Blue-Seascape-2-Limited-Edition-1-of-15/608620/4153345/view?sku=P242-U608620-A4153345",
    image_url:
      "https://assets.saatchiart.com/saatchi/608620/art/4471581/3541421-UIDMTUMN-8.jpg",
    title:
      "Blue Seascape#2 - Limited Edition 1 of 15",
    description:
      "32x48 Fine Art Paper  Print of an original Color and Digital Photograph, measuring: 59.06W x 39.37H x 0.39D Inches",
    artist: "Igor Vitomirov (Sweden)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Waiting-for-the-summer/387391/219789/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/387391/art/562511/308914-XZNPRYOF-8.jpg",
    title: "Waiting for the summer",
    description:
      "Original Oil Painting, measuring: 27.56W x 19.69H x 0.80D Inches",
    artist: "Christina Nguyen (Ukraine)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-High-heels/948093/3810051/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/948093/art/4001202/3071056-QIHZHJQZ-8.jpg",
    title: "High heels.",
    description:
      "Original Oil Painting, measuring: 53.00W x 34.00H x 0.70D Inches",
    artist: "Lara Vald (Ukraine)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Prison-Break-Limited-Edition-2-of-2/302468/3752544/view?sku=P207-U302468-A3752544",
    image_url:
      "https://assets.saatchiart.com/saatchi/302468/art/3943646/3013516-CMPZOKGP-8.jpg",
    title: "Prison Break - Limited Edition 2 of 2",
    description:
      "8x12 Fine Art Paper  Print of an original Color Photograph, measuring: 64.96W x 43.31H x 0.12D Inches",
    artist: "ERNEST Sebastien (Belgium)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Puberty-BFF/301635/2047220/view?sku=P116-U301635-A2047220",
    image_url:
      "https://assets.saatchiart.com/saatchi/301635/art/2237071/1312308-8.jpg",
    title: "Puberty",
    description:
      "14x21 Rag Paper  Print of an original Oil Painting, measuring: 39.37W x 23.62H x 1.57D Inches",
    artist: "Astrid Oudheusden (Netherlands)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Fourth-Interaction-Diptych/189576/2494452/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/189576/art/2684611/1754504-COQMBIYN-8.jpg",
    title: "Fourth Interaction",
    description:
      "Original Acrylic Painting, measuring: 48.00W x 18.00H x 1.50D Inches",
    artist: "Hyeran Lee (Canada)"
  }
];

function $(el, type) {
  switch (type) {
    case "create":
      return document.createElement(el);
    case "all":
      return document.querySelectorAll(el);
    default:
      return document.querySelector(el);
  }
}

//DOM elements
const body = $("body");
const search_input = $(".search-bar");
const search_btn = $(".search-btn");
const settings_btn = $(".settings-btn");
const settings_modal = $(".settings-modal");
const close_modal = $(".close-modal");
const search_container = $(".search__container");
const placeholder = $(".placeholder");
const saatchi_link = $(".saatchi-link");

//notes container
const notes_container = $(".notes-container");
const add_note = $(".add-note");

//artist card
const artist_card = $(".artist-card");
const artist_name = $(".artist-name");
const title = $(".title");
const description = $(".description");

//tabs
const bookmarks_tab = $(".bookmarks-tab");
const images_tab = $(".images-tab");
const to_do_tab = $(".to-do-tab");
const settings_tab = $(".settings-tab");
const tabs_array = [bookmarks_tab, images_tab, to_do_tab, settings_tab];

//containers
const bookmarks_container = $(".bookmarks-container");
const bookmarks_main_container = $(".bookmarks-main-container");
const to_do_container = $(".to-do-container");
const settings_container = $(".settings-container");
const images_container = $(".images-container");
const images_row = $(".images-row");
const containers_array = [
  bookmarks_main_container,
  to_do_container,
  settings_container,
  images_container
];

//to-do items
const to_do_input = $(".to-do-input");
const to_do_list = $(".to-do-append");
const to_do_add = $(".to-do-add");

//slider pieces
const yes_arr = [...$(".yes", "all")];
const no_arr = [...$(".no", "all")];
const slide_arr = [...$(".slide", "all")];

//show search bar
if (!localStorage.getItem("search-setting")) {
  localStorage.setItem("search-setting", "true");
} else {
  if (localStorage.getItem("search-setting") === "true") {
    search_container.style.display = "block";
  } else {
    search_container.style.display = "none";
    for (let i = 0; i < slide_arr.length; i++) {
      if (slide_arr[i].getAttribute("data-id") === "search-setting") {
        slide_arr[i].setAttribute(
          "style",
          "right: 26px; background: gray; box-shadow: 2px 0px 8px 2px #dbdbdb"
        );
      }
    }
  }
}

if (!localStorage.getItem("artist-setting")) {
  localStorage.setItem("artist-setting", "true");
} else {
  if (localStorage.getItem("artist-setting") === "true") {
    artist_card.style.display = "block";
  } else {
    artist_card.style.display = "none";
    for (let i = 0; i < slide_arr.length; i++) {
      if (slide_arr[i].getAttribute("data-id") === "artist-setting") {
        slide_arr[i].setAttribute(
          "style",
          "right: 26px; background: gray; box-shadow: 2px 0px 8px 2px #dbdbdb"
        );
      }
    }
  }
}

if (!localStorage.getItem("image-setting")) {
  localStorage.setItem("image-setting", "true");
  choose_image(array_of_images);
  localStorage.setItem("image", JSON.stringify(chosen_image));
} else {
  if (localStorage.getItem("image-setting") === "true") {
    choose_image(array_of_images);
  } else {
    for (let i = 0; i < slide_arr.length; i++) {
      if (slide_arr[i].getAttribute("data-id") === "image-setting") {
        slide_arr[i].setAttribute(
          "style",
          "right: 26px; background: gray; box-shadow: 2px 0px 8px 2px #dbdbdb"
        );
      }
    }
    const obj = JSON.parse(localStorage.getItem("image"))
    body.setAttribute(
      "style",
      `background-image: url("${
        obj.image_url
      }");`
    );
    saatchi_link.href = obj.url;
    artist_name.innerHTML = `${
      obj.artist.split("(")[0]
    } <span class="no-bold">(${obj.artist.split("(")[1]}</span>`;
    title.innerHTML = obj.title;
    description.innerHTML = obj.description;
  }
}

//listener for notes
add_note.onclick = function() {
  const note = $("div", "create");
  const delete_btn = $("span", "create");
  const text_area = $("textarea", "create");
  delete_btn.innerHTML = "&times;";
  delete_btn.className = "note-delete";
  note.className = "note-div";
  text_area.className = "note-textarea";
  note.setAttribute("data-id", Math.random());
  delete_btn.setAttribute("data-id", note.getAttribute("data-id"));
  text_area.setAttribute("data-id", note.getAttribute("data-id"));
  text_area.addEventListener("keyup", function(e) {
    notes_storage[text_area.getAttribute("data-id")] = this.value;
    notesToStorage(notes_storage);
  });
  delete_btn.addEventListener("click", function() {
    delete notes_storage[this.getAttribute("data-id")];
    localStorage.setItem("notes", JSON.stringify(notes_storage));
    this.parentElement.remove();
  });
  note.appendChild(delete_btn);
  note.appendChild(text_area);
  add_note.insertAdjacentElement("afterend", note);
};

//set notes to local storage
function notesToStorage(obj) {
  localStorage.setItem("notes", JSON.stringify(obj));
}

//get notes from localstorage
if (localStorage.getItem("notes")) {
  let notes = JSON.parse(localStorage.getItem("notes"));
  notes_storage = notes;
  for (let prop in notes) {
    const note = $("div", "create");
    const delete_btn = $("span", "create");
    const text_area = $("textarea", "create");
    delete_btn.innerHTML = "&times;";
    delete_btn.className = "note-delete";
    note.className = "note-div";
    text_area.className = "note-textarea";
    note.setAttribute("data-id", prop);
    delete_btn.setAttribute("data-id", prop);
    text_area.setAttribute("data-id", prop);
    text_area.value = notes[prop];
    text_area.addEventListener("keyup", function(e) {
      notes_storage[text_area.getAttribute("data-id")] = this.value;
      notesToStorage(notes_storage);
    });
    delete_btn.addEventListener("click", function() {
      delete notes[prop];
      localStorage.setItem("notes", JSON.stringify(notes));
      this.parentElement.remove();
    });
    note.appendChild(delete_btn);
    note.appendChild(text_area);
    notes_container.appendChild(note);
  }
}

//display puppy images
function printImages(arr) {
  for (let i = 0; i < arr.length; i++) {
    const image = $("div", "create");
    image.className = "image";
    image.setAttribute("data-id", arr[i].id);
    image.style.backgroundImage = `url('${arr[i].image_url}')`;
    image.onclick = function() {
      setStorageOptions("image", JSON.stringify(arr[i]));
      setStorageOptions("image-setting", "false");
      for (let i = 0; i < slide_arr.length; i++) {
        if (slide_arr[i].getAttribute("data-id") === "image-setting") {
          slide_arr[i].setAttribute(
            "style",
            "right: 26px; background: gray; box-shadow: 2px 0px 8px 2px #dbdbdb"
          );
        }
      }
      const obj = JSON.parse(localStorage.getItem("image"))
      body.setAttribute(
        "style",
        `background-image: url("${
          obj.image_url
        }");`
      );
      
      saatchi_link.href = obj.url;
      artist_name.innerHTML = `${
        obj.artist.split("(")[0]
      } <span class="no-bold">(${obj.artist.split("(")[1]}</span>`;
      title.innerHTML = obj.title;
      description.innerHTML = obj.description;
    };
    images_row.appendChild(image);
  }
}

printImages(array_of_images);

//set storage
function setStorageOptions(key, value) {
  localStorage.setItem(key, value);
}

//add listener to close modal
close_modal.onclick = function() {
  settings_modal.style.top = "-900px";
  modal_open = false;
};

//add listener to close other tabs
tabs_array.forEach(el => {
  el.onclick = function() {
    el.classList.add("bold-tab");
    closeOtherTabs(el.getAttribute("data-id"));
    removeActiveLink(el);
    openContainer(el);
  };
});

yes_arr.forEach(el => {
  el.addEventListener("click", function() {
    const id = el.getAttribute("data-id");
    const slider = getSlide(id);
    slider.setAttribute(
      "style",
      "right: -1px; background: #f05024; box-shadow: -2px 0px 8px 2px #dbdbdb"
    );
    setStorageOptions(id, "true");
    if (id === "search-setting") {
      search_container.style.display = "block";
    }
    if (id === "image-setting") {
      localStorage.removeItem("image");
    }
    if (id === "artist-setting") {
      artist_card.style.display = "block";
    }
  });
});
no_arr.forEach(el => {
  el.addEventListener("click", function() {
    const id = el.getAttribute("data-id");
    const slider = getSlide(id);
    slider.setAttribute(
      "style",
      "right: 26px; background: gray; box-shadow: 2px 0px 8px 2px #dbdbdb"
    );
    setStorageOptions(id, "false");
    if (id === "search-setting") {
      search_container.style.display = "none";
    }
    if (id === "image-setting") {
      setStorageOptions("image", JSON.stringify(chosen_image));
    }
    if (id === "artist-setting") {
      artist_card.style.display = "none";
    }
  });
});

function getSlide(id) {
  for (let i = 0; i < slide_arr.length; i++) {
    if (slide_arr[i].getAttribute("data-id") === id) {
      return slide_arr[i];
    }
  }
}

if (localStorage.getItem("todos")) {
  placeholder.style.display = "none";
  to_do_items_storage = JSON.parse(localStorage.getItem("todos"));
  listFromStorage(to_do_items_storage);
}

to_do_input.addEventListener("keypress", function(e) {
  if (e.which == 13 || e.code == 13) {
    let item = to_do_input.value;
    placeholder.style.display = "none";
    if (item.length >= 1) {
      const new_item = $("li", "create");
      new_item.setAttribute("data-id", Math.random());
      const trash = $("div", "create");
      trash.setAttribute("data-id", new_item.getAttribute("data-id"));
      trash.innerHTML = "&#128465;";
      trash.className = "to-do-trash";
      new_item.className = "to-do-item";
      new_item.innerText = item;
      new_item.appendChild(trash);
      to_do_items_storage[new_item.getAttribute("data-id")] = item;
      setToDoLocalStorage(to_do_items_storage);
      to_do_list.prepend(new_item);
      trash.addEventListener("click", function() {
        const id = this.getAttribute("data-id");
        for (let prop in to_do_items_storage) {
          if (id === prop) {
            delete to_do_items_storage[prop];
            setToDoLocalStorage(to_do_items_storage);
            const remove_these = [...$(`[data-id='${id}']`, "all")];
            remove_these.forEach(el => el.remove());
          }
        }
      });
      to_do_input.value = "";
    }
  }
});

//add listener for to do input
to_do_add.onclick = function() {
  let item = to_do_input.value;
  placeholder.style.display = "none";
  if (item.length >= 1) {
    const new_item = $("li", "create");
    new_item.setAttribute("data-id", Math.random());
    const trash = $("div", "create");
    trash.setAttribute("data-id", new_item.getAttribute("data-id"));
    trash.innerHTML = "&#128465;";
    trash.className = "to-do-trash";
    new_item.className = "to-do-item";
    new_item.innerText = item;
    new_item.appendChild(trash);
    to_do_items_storage[new_item.getAttribute("data-id")] = item;
    setToDoLocalStorage(to_do_items_storage);
    to_do_list.prepend(new_item);
    trash.addEventListener("click", function() {
      const id = this.getAttribute("data-id");
      for (let prop in to_do_items_storage) {
        if (id === prop) {
          delete to_do_items_storage[prop];
          setToDoLocalStorage(to_do_items_storage);
          const remove_these = [...$(`[data-id='${id}']`, "all")];
          remove_these.forEach(el => el.remove());
        }
      }
    });
    to_do_input.value = "";
  }
};

//append to-do items from storage
function listFromStorage(obj) {
  for (let prop in obj) {
    const new_item = $("li", "create");
    new_item.setAttribute("data-id", prop);
    const trash = $("div", "create");
    trash.setAttribute("data-id", prop);
    trash.innerHTML = "&#128465;";
    trash.className = "to-do-trash";
    new_item.className = "to-do-item";
    new_item.innerText = obj[prop];
    new_item.appendChild(trash);
    to_do_list.appendChild(new_item);
    trash.addEventListener("click", function() {
      const id = this.getAttribute("data-id");
      for (let prop in to_do_items_storage) {
        if (id === prop) {
          delete to_do_items_storage[prop];
          setToDoLocalStorage(to_do_items_storage);
          const remove_these = [...$(`[data-id='${id}']`, "all")];
          remove_these.forEach(el => el.remove());
        }
      }
    });
  }
}

function setToDoLocalStorage(item) {
  if (Object.keys(item).length !== 0) {
    localStorage.setItem("todos", JSON.stringify(to_do_items_storage));
  } else {
    localStorage.removeItem("todos");
  }
}

function closeOtherTabs(tab_name) {
  for (let i = 0; i < containers_array.length; i++) {
    if (containers_array[i].getAttribute("data-id") !== tab_name) {
      containers_array[i].style.display = "none";
    }
  }
}

function removeActiveLink(tab_name) {
  for (let i = 0; i < tabs_array.length; i++) {
    if (tabs_array[i] !== tab_name) {
      tabs_array[i].classList.remove("bold-tab");
    }
  }
}

function openContainer(container) {
  for (let i = 0; i < containers_array.length; i++) {
    if (
      containers_array[i].getAttribute("data-id") ===
      container.getAttribute("data-id")
    ) {
      containers_array[i].style.display = "block";
    }
  }
}

function choose_image(arr) {
  let max_index = arr.length;
  let random_index = Math.floor(Math.random() * max_index);
  body.setAttribute(
    "style",
    `background-image: url("${arr[random_index].image_url}");`
  );
  artist_name.innerHTML = `${
    arr[random_index].artist.split("(")[0]
  } <span class="no-bold">(${arr[random_index].artist.split("(")[1]}</span>`;
  title.innerHTML = arr[random_index].title;
  description.innerHTML = arr[random_index].description;
  chosen_image = arr[random_index];
  saatchi_link.href = chosen_image.url;
}

//listen for user hitting enter
search_input.onkeydown = function(e) {
  if (e.which == 13 || e.keyCode == 13) {
    if (query === undefined) {
      return;
    } else {
      query = this.value
        .trim()
        .split(" ")
        .join("+");
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  } else {
    query = this.value;
  }
};

//search google button
search_btn.onclick = function() {
  if (query === undefined) {
    return;
  } else {
    query = search_input.value
      .trim()
      .split(" ")
      .join("+");
    search_input.value = "";
    window.location.href = `https://www.google.com/search?q=${query}`;
  }
};

//listen for settings button
settings_btn.onclick = function() {
  settings_modal.style.top = "40vh";
  let found = false;
  for (let i = 0; i < tabs_array.length; i++) {
    if (tabs_array[i].className.includes("bold-tab")) {
      found = true;
    }
  }
  if (!found && !modal_open) {
    images_tab.classList.add("bold-tab");
    modal_open = true;
  } else {
    modal_open = true;
  }
};

// fill bookmarks
chrome.bookmarks.getSubTree("0", function(data) {
  let bookmarks_array = data[0].children[0].children;
  for (let i = 0; i < bookmarks_array.length; i++) {
    const card = $("a", "create");
    card.href = bookmarks_array[i].url;
    card.className = "bookmark-card";
    const icon = $("img", "create");
    icon.src = "chrome://favicon/" + bookmarks_array[i].url;
    const title = $("span", "create");
    if (bookmarks_array[i].title.length > 35) {
      let truncated = "";
      for (let j = 0; j < 35; j++) {
        truncated += bookmarks_array[i].title[j];
      }
      truncated += "...";
      title.innerText = truncated;
    } else {
      title.innerText = bookmarks_array[i].title;
    }
    card.appendChild(icon);
    card.appendChild(title);
    bookmarks_container.appendChild(card);
  }
});

const hours = $(".clock-hours");
const minutes = $(".clock-minutes");
const seconds = $(".clock-seconds");
const date = new Date();

hours.innerText = getStandardHours(date.getHours());
minutes.innerText = addZero(date.getMinutes());
seconds.innerText = addZero(date.getSeconds());

function increaseSeconds() {
  let secs = parseInt(seconds.innerText);
  if (secs < 59) {
    if (secs < 9) {
      secs++;
      seconds.innerText = "0" + secs;
      return;
    }
    secs++;
    seconds.innerText = secs;
  } else {
    increaseMinutes();
    secs = "00";
    seconds.innerText = secs;
  }
}

function increaseMinutes() {
  let mins = parseInt(minutes.innerText);
  if (mins < 59) {
    if (mins < 9) {
      mins++;
      minutes.innerText = "0" + mins;
      return;
    }
    mins++;
    minutes.innerText = mins;
  } else {
    increaseHours();
    mins = "00";
    minutes.innerText = mins;
  }
}

function increaseHours() {
  let hrs = parseInt(hours.innerText);
  if (hrs < 12) {
    if (hrs === 0) {
      hours.innerText = "12";
      return;
    }
    hrs++;
    hours.innerText = hrs;
  } else {
    hrs = "1";
    hours.innerText = hrs;
  }
}

function getStandardHours(hrs) {
  if (hrs < 13) {
    return hrs;
  } else {
    return hrs - 12;
  }
}

function addZero(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

setInterval(increaseSeconds, 1000);
