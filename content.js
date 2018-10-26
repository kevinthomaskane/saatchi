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
      "https://www.saatchiart.com/art/Painting-Women-denuded-Bather-with-purple-hat-Old-woman-parrot-looking-at-a-vase/671796/2443727/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/671796/art/2633844/1703737-RKWGCZBF-8.jpg",
    title:
      "Women denuded / Bather with purple hat / Old woman - parrot looking at a vase",
    description: "11.81H x 35.43W x 0.39D Inches",
    price: "$1810",
    artist: "Carlos Blanco Artero (Spain)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-New-Kicks-1/293334/2475659/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/293334/art/2665801/1735694-GKVTIDPV-8.jpg",
    title: "New Kicks 1",
    description: "14.00H x 24.00W x 0.01D Inches",
    price: "$405",
    artist: "Mary Robertson (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Abstract-SeaScape-X/608620/2257751/view?sku=P242-U608620-A2257751?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/608620/art/2447628/1517646-OKVJPBFX-8.jpg",
    title: "Abstract SeaScape X",
    description: "27.56H x 39.37W x 0.39D Inches",
    price: "$980",
    artist: "Igor Vitomirov (Sweden)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Sitting-Nude-Painting-Sitting-on-the-Sun/412927/3823723/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/412927/art/4014883/3084737-ZETYIXOI-8.jpg",
    title: "Sitting Nude Painting - Sitting on the Sun",
    description: "16.54H x 25.59W x 0.79D Inches",
    price: "$3075",
    artist: "Yuri Pysar (Ukraine)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Printmaking-AK-47-Concert-of-Birds/291153/200716/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/291153/art/529495/289270-ADJTFKTT-8.jpg",
    title: "AK-47 Concert of Birds",
    description: "17.72H x 39.37W x 0.04D Inches",
    price: "$750",
    artist: "Magnus Gjoen (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Theater-watercolor/394248/1581114/view?sku=P207-U394248-A1581114?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/394248/art/1742127/907424-8.jpg",
    title: "Theater - watercolor",
    description: "12.60H x 18.50W x 0.39D Inches",
    price: "$1300",
    artist: "Sylvia Baldeva (France)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Emanations/394248/3700823/view?sku=P207-U394248-A3700823?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/394248/art/3891873/2961756-KYFFLQPX-8.jpg",
    title: "Emanations",
    description: "12.60H x 19.69W x 0.04D Inches",
    price: "$970",
    artist: "Sylvia Baldeva (France)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Cosmic-Plan-Triptych/688716/4202450/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/688716/art/4569855/3639693-OMVFNRTW-8.jpg",
    title: "Cosmic Plan (Triptych)",
    description: "17.00H x 42.00W x 0.10D Inches",
    price: "$800",
    artist: "Yeachin Tsai (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-ROMAN-COUNTRYSIDE-LANDSCAPE-AN-ANCIENT-ROMAN-RUIN-IN-THE-ROMAN-CAMPAGNA-019-Italian-and-roman-countryside-landscapes-oil-on-wood-series/670850/2348396/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/670850/art/2538389/1608326-8.jpg",
    title:
      "ROMAN COUNTRYSIDE LANDSCAPE: AN ANCIENT ROMAN RUIN IN THE ROMAN CAMPAGNA #019 - Italian and roman countryside landscapes",
    description: "3.94H x 11.81W x 0.12D Inches",
    price: "$395",
    artist: "Alessandro Nesci (Italy)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Event6/91070/1483239/view?sku=P207-U91070-A1483239?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/91070/art/1644252/834712-f6881b-8.jpg",
    title: "Event6",
    description: "24.00H x 36.00W x 0.80D Inches",
    price: "$2810",
    artist: "HyunRyoung Kim (Canada)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Outward/378723/3949015/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/378723/art/4140281/3210132-ZQMUDFMD-8.jpg",
    title: "Outward",
    description: "39.00H x 74.00W x 1.50D Inches",
    price: "$6200",
    artist: "Behzad Tabar (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Pine-green-I-X-Abstract-N-2017-26/91068/3864659/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/91068/art/4055845/3125698-GCJEFZOC-8.jpg",
    title: "Pine green I-X [Abstract N°2017-26]",
    description:
      "31.50H x 59.06W x 0.08D Inches",
      price: "$2490",
    artist: "Koen Lybaert (Belgium)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-stare-ste-r-Edition-4-10/155519/1733993/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/155519/art/1895006/1026779-8.jpg",
    title: "stare |ste(ə)r| Edition 4/10",
    description: "23.62H x 35.43W x 1.97D Inches",
    price: "$2090",
    artist: "Richard Brocken (Netherlands)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Abstracted-Mind-37/58313/2443469/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/58313/art/2633585/1703478-YDNUYQTK-8.jpg",
    title: "Abstracted Mind 37",
    description: "62.00H x 138.00W x 0.10D Inches",
    price: "SOLD",
    artist: "Mark Fearn (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Reflejos-4/350734/2097143/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/350734/art/2286994/1362136-8.jpg",
    title: "Reflejos 4",
    description: "25.59H x 68.90W x 1.97D Inches",
    price: "$5410",
    artist: "Marcela Ramirez-Aza (Colombia)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-listen/93960/1923408/view?sku=P207-U93960-A1923408?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/93960/art/2084421/1193143-8.jpg",
    title: "listen",
    description: "39.76H x 60.24W x 0.63D Inches",
    price: "NOT FOR SALE",
    artist: "Niki Hare (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-HEARTBEAT-edition-1-7/314687/2004070/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/314687/art/2193921/1272579-RWZSPCSH-8.jpg",
    title: "HEARTBEAT / edition 1/7",
    description: "36.00H x 72.00W x 1.00D Inches",
    price: "$7700",
    artist: "Ysabel LeMay (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Dontfly-Zen-Study/307665/4123186/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/307665/art/4411209/3481049-JEECLUXB-8.jpg",
    title: "Dontfly (Zen Study)",
    description: "39.37H x 59.06W x 0.98D Inches",
    price: "$2960",
    artist: "Krisztina Horvath (Netherlands)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Confettical-landscape-29-Limited-Edition-2-of-8/46251/3110816/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/46251/art/3301596/2371483-DSFREMFQ-8.jpg",
    title: "Confettical landscape #  29 - Limited Edition 2 of 8",
    description: "20.87H x 35.04W x 0.12D Inches",
    price: "$1590",
    artist: "Yigal Pardo (Israel)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Pacific-Ocean-Original-oil-Painting-Large-size/503607/3879390/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/503607/art/4070583/3140436-IPRCHTGH-8.jpg",
    title: "Pacific Ocean",
    description: "29.00H x 53.00W x 1.50D Inches",
    price: "$2200",
    artist: "Vahe Yeremyan (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Event-7/91070/1687972/view?sku=P207-U91070-A1687972?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/91070/art/1848985/988206-ZOEKEDHV-8.jpg",
    title: "Event 7",
    description: "24.00H x 36.00W x 0.80D Inches",
    price: "$2810",
    artist: "HyunRyoung Kim (Canada)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Caramel/668880/2403219/view?sku=P209-U668880-A2403219?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/668880/art/2593312/1663206-IZCCFVTT-8.jpg",
    title: "Caramel",
    description: "39.37H x 70.87W x 1.18D Inches",
    price: "$3410",
    artist: "Tanya Vasilenko (Ukraine)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Imaginary-Landscape-Monotype/311229/2205692/view?sku=P207-U311229-A2205692?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/311229/art/2395543/1465638-QOASKETV-8.jpg",
    title: '"Imaginary Landscape" Monotype',
    description: "40.00H x 60.00W x 0.10D Inches",
    price: "$1480",
    artist: "Misha Dontsov (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-melancholy-mel-n-k-l-Edition-6-10/155519/1244490/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/155519/art/1405437/671408-NXINISZI-8.jpg",
    title: "melancholy |ˈmelənˌkälē| Edition 6/10",
    description: "23.62H x 35.43W x 0.20D Inches",
    price: "$3850",
    artist: "Richard Brocken (Netherlands)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-That-s-why/950379/4194364/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/950379/art/4553681/3623519-KKDZWKGL-8.jpg",
    title: "That's why!",
    description: "26.77H x 51.18W x 1.50D Inches",
    price: "$3750",
    artist: "Sanja Milenkovic (Italy)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Sun-s-Footsteps/30352/3857335/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/30352/art/4048517/3118370-DPJYFXTQ-8.jpg",
    title: "Sun's Footsteps",
    description: "22.00H x 32.00W x 3.00D Inches",
    price: "$2060",
    artist: "Leyla Murr (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-in-the-desert/616459/2673600/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/616459/art/2863905/1933798-ZVWPIOND-8.jpg",
    title: "in the desert",
    description: "32.00H x 51.00W x 2.00D Inches",
    price: "$2450",
    artist: "Daniel Maczynski (Poland)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Drawing-Untitled-No-64/593840/4310846/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/593840/art/4786771/3856599-AZDCVSPQ-8.jpg",
    title: "Untitled No. 64",
    description: "22.00H x 46.00W x 0.10D Inches",
    price: "$600",
    artist: "Sumit Mehndiratta (India)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Fifth-Interaction-Diptych/189576/2500402/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/189576/art/2690563/1760456-ETYRWPCF-8.jpg",
    title: "Fifth Interaction",
    description:
      "24.00H x 36.00W x 1.50D Inches",
      price: "$2260",
    artist: "Hyeran Lee (Canada)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Dreaming/27510/1432938/view?sku=P207-U27510-A1432938?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/27510/art/1593948/795987-HGKVRTRS-8.jpg",
    title: "Dreaming",
    description: "39.37H x 59.06W x 1.18D Inches",
    price: "$3710",
    artist: "Alvarenga Marques (Portugal)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Oasis-Diptych/735974/4374274/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/735974/art/4913705/3983529-TMSHEMMD-8.jpg",
    title: '"Oasis" (Diptych)',
    description: "31.50H x 47.24W x 0.79D Inches",
    price: "$1240",
    artist: "Kirsten Handelmann (Germany)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-White-orchid-Limited-Edition-1-of-6/46251/2049894/view?sku=P207-U46251-A2049894?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/46251/art/2239745/1314980-DHDPAPCC-8.jpg",
    title: "White orchid - Limited Edition # 1 of 6",
    description: "45.28H x 68.90W x 0.39D Inches",
    price: "$3175",
    artist: "Yigal Pardo (Israel)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Sculpture-The-Bow/296286/2027448/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/296286/art/2217299/1292565-HZAOTWQG-8.jpg",
    title: "The Bow",
    description: "47.24H x 118.11W x 7.87D Inches",
    price: "$33,000",
    artist: "Sam Shendi (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-El-Matador-Beach-Malibu/503607/4070814/view?sku=P216-U503607-A4070814?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/503607/art/4306367/3376207-SZJADZJU-8.jpg",
    title: "El Matador Beach-Malibu",
    description: "29.00H x 54.50W x 0.75D Inches",
    price: "$2200",
    artist: "Vahe Yeremyan (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Summer/651106/4273515/view?sku=P242-U651106-A4273515?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/651106/art/4712063/3781895-WQRNDWZR-8.jpg",
    title: "Summer",
    description: "39.37H x 59.06W x 1.50D Inches",
    price: "$2500",
    artist: "Ira Ivanova (Norway)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Collage-Lake-House/694732/4064367/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/694732/art/4293461/3363303-XVPCSFSJ-8.jpg",
    title: "Lake House",
    description: "5.00H x 8.50W x 0.10D Inches",
    price: "$275",
    artist: "Athena Petra Tasiopoulos (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Shore-11H/888156/4297510/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/888156/art/4760069/3829899-FLHNWYUR-8.jpg",
    title: "Shore 11H",
    description: "25.50H x 40.00W x 0.10D Inches",
    price: "$880",
    artist: "Carlos Martín (Spain)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Untitled-12/91070/1525751/view?sku=P207-U91070-A1525751?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/91070/art/1686764/870237-8.jpg",
    title: "Untitled 12",
    description: "24.00H x 36.00W x 0.80D Inches",
    price: "$2810",
    artist: "HyunRyoung Kim (Canada)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-GREEN-PATH/733605/2212031/view?sku=P207-U733605-A2212031?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/733605/art/2401882/1471973-8.jpg",
    title: "GREEN PATH",
    description: "40.55H x 59.45W x 1.18D Inches",
    price: "$6350",
    artist: "Sam Radja (Indonesia)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Autumn-Leaves-Nr-5-View-to-the-Almsee-Austria/157668/4090437/view?sku=P207-U157668-A4090437?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/157668/art/4345643/3415483-WTBIZBKS-8.jpg",
    title: "Autumn Leaves Nr. 5   View to the Almsee",
    description: "25.59H x 39.37W x 0.79D Inches",
    price: "$1230",
    artist: "Ellen Fasthuber-Huemer (Austria)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-INSPIRATION-edition-1-7/314687/2227749/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/314687/art/2417600/1487668-VEDTERNN-8.jpg",
    title: "INSPIRATION / edition 1/7",
    description: "30.00H x 1.00W x 72.00D Inches",
    price: "$7700",
    artist: "Ysabel LeMay (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-THE-DOCK-Limited-Edition-3-of-25/995974/4219232/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/995974/art/4603439/3673277-KTESREIK-8.jpg",
    title: "THE DOCK - Limited Edition 3 of 25",
    description: "31.50H x 56.00W x 0.10D Inches",
    price: "$2920",
    artist: "Jin-Woo Prensena (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Camps-Bay-Cape-Town/15886/2423124/view?sku=P190-U15886-A2423124?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/15886/art/2613231/1683124-PZUDCWHU-8.jpg",
    title: "Camps Bay (Cape Town)",
    description: "53.15H x 82.68W x 3.15D Inches",
    price: "$3150",
    artist: "Claudia Bormann (Germany)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-The-Weight-Of-An-Error/953121/4242370/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/953121/art/4649751/3719587-IYGSZCDB-8.jpg",
    title: "The Weight Of An Error",
    description: "39.00H x 60.00W x 1.00D Inches",
    price: "$3570",
    artist: "Jessica Matier (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Waiting/283032/1924043/view?sku=P207-U283032-A1924043?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/283032/art/2085056/1193822-8.jpg",
    title: "Waiting",
    description: "24.00H x 36.00W x 1.50D Inches",
    price: "$1920",
    artist: "Ron Cooper (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-The-Unexpected-Answer-Limited-Edition-5-10/348619/1769449/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/348619/art/1930462/1055704-LNCDZEQE-8.jpg",
    title: "The Unexpected Answer (Limited Edition 5/10)",
    description: "24.00H x 34.00W x 3.00D Inches",
    price: "$1220",
    artist: "Naomi White (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Lake-Hillier-I-III-Abstract-N-2175-77/91068/4191710/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/91068/art/4548369/3618207-WOFFPBUA-8.jpg",
    title: "Lake Hillier I-III [Abstract N°2175-77]",
    description: "15.75H x 35.43W x 0.20D Inches",
    price: "$1390",
    artist: "Koen Lybaert (Belgium)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Sculpture-Conch-31/663603/2221088/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/663603/art/2410939/1481017-RYWVSAAI-8.jpg",
    title: "Conch 31",
    description: "8.66H x 7.48W x 3.74D Inches",
    price: "$1240",
    artist: "Sharon Brill (Israel)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-It-s-Left-Us/162237/2101720/view",
    image_url:
      "https://assets.saatchiart.com/saatchi/162237/art/2291571/1366716-8.jpg",
    title: "It's Left Us",
    description: "29.53H x 59.06W x 0.04D Inches",
    price: "$2890",
    artist: "Evie Kitt (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Nr-806-WHITE-RIVER/60867/2006065/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/60867/art/2195916/1274109-DHPRWYSD-8.jpg",
    title: "Nr. 806 / WHITE RIVER",
    description: "31.50H x 51.18W x 0.79D Inches",
    price: "$1700",
    artist: "Michael Lauer (Germany)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Printmaking-Desire-2014/26475/2316973/view?sku=P207-U26475-A2316973?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/26475/art/2506931/1576914-HCGKCBLF-8.jpg",
    title: "Desire 2014",
    description: "27.56H x 39.37W x 0.04D Inches",
    price: "$1640",
    artist: "Prakornpatara Janthakhaisorn (Thailand)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-journey-j-rn-III-Limited-Edition-1-of-10/155519/4197456/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/155519/art/4559865/3629703-NITGUEXE-8.jpg",
    title: "journey | ˈjərnē | III - Limited Edition 1 of 10",
    description: "23.62H x 41.73W x 0.20D Inches",
    price: "$1340",
    artist: "Richard Brocken (Netherlands)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-A-night-time-arrangement/803412/4047404/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/803412/art/4259487/3329335-ZGHLHOKQ-8.jpg",
    title: "A night time arrangement",
    description: "66.14H x 155.91W x 1.57D Inches",
    price: "$17,250",
    artist: "Alec Cumming (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Drawing-Eye-for-an-eye/296904/1329614/view?sku=P116-U296904-A1329614?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/296904/art/1490598/727795-8.jpg",
    title: "Eye for an eye",
    description: "16.54H x 11.81W x 0.39D Inches",
    price: "$745",
    artist: "Mehmet Dere (Turkey)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Abstract-No-813/725371/2253519/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/725371/art/2443385/1513409-KKROJPYV-8.jpg",
    title: "Abstract  No. 813",
    description: "31.50H x 51.18W x 0.79D Inches",
    price: "$3350",
    artist: "Gerry Van Kerkhof (Netherlands)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Sudden-Heat/208506/4273450/view?sku=P232-U208506-A4273450?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/208506/art/4711933/3781765-WOBEBBWR-8.jpg",
    title: "Sudden Heat",
    description: "36.00H x 60.00W x 1.50D Inches",
    price: "$3810",
    artist: "Claire Desjardins (Canada)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Ice-Palace/442098/4081767/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/442098/art/4328297/3398137-WDNMELYH-8.jpg",
    title: "Ice Palace",
    description: "22.00H x 44.00W x 0.10D Inches",
    price: "$2320",
    artist: "Hal Mayforth (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Hudson-at-Sunrise-Limited-Edition-1-of-10/947257/3418692/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/947257/art/3609590/2679476-APUUMKIZ-8.jpg",
    title: "Hudson at Sunrise - Limited Edition 1 of 10",
    description: "40.00H x 60.00W x 0.10D Inches",
    price: "$595",
    artist: "Journey Gong (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-My-party-people/334628/2104679/view?sku=P207-U334628-A2104679?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/334628/art/2294530/1369673-RXTORBQR-8.jpg",
    title: '"My party people"',
    description: "39.37H x 59.06W x 1.97D Inches",
    price: "$1400",
    artist: "Natalia Baykalova (Russia)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-OCEAN-ELEVEN-XII/352287/2112760/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/352287/art/2302611/1377754-8.jpg",
    title: "OCEAN ELEVEN XII",
    description: "27.56H x 55.12W x 1.97D Inches",
    price: "$719",
    artist: "Sven Pfrommer (Germany)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Expedition/25738/2195775/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/25738/art/2385626/1455744-WEFORTBV-8.jpg",
    title: "Expedition",
    description: "19.69H x 39.37W x 1.57D Inches",
    price: "$1990",
    artist: "Tanja Vetter (Germany)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-PRESUMING-NO-AUDIENCE/308283/2141387/view?sku=P207-U308283-A2141387?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/308283/art/2331238/1405277-EPLXYQHP-8.jpg",
    title: "PRESUMING NO AUDIENCE",
    description: "32.00H x 48.00W x 1.50D Inches",
    price: "$8180",
    artist: "John A Sargent III (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Show-is-going-on/28503/1782454/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/28503/art/1943467/1075476-8.jpg",
    title: "Show is going on",
    description: "70.87H x 118.11W x 1.57D Inches",
    price: "$21,000",
    artist: "Alina Maksimenko (Ukraine)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Crowd-IV/671796/4344776/view?sku=P216-U671796-A4344776?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/671796/art/4854675/3924503-PJMUDQIX-8.jpg",
    title: "Crowd IV",
    description: "14.17H x 23.62W x 0.04D Inches",
    price: "$1740",
    artist: "Carlos Blanco Artero (Spain)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Still-life/486818/1913549/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/486818/art/2074562/1184430-8.jpg",
    title: "Still life",
    description: "23.62H x 47.24W x 0.79D Inches",
    price: "$2750",
    artist: "Aleksandra Toborowicz (Poland)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-All-of-it-all-of-it/162237/2101734/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/162237/art/2291585/1366730-8.jpg",
    title: "All of it",
    description: "29.53H x 59.06W x 0.04D Inches",
    price: "$2790",
    artist: "Evie Kitt (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Palm-Springs-1-2015-Limited-Edition-5-of-25/96892/2962633/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/96892/art/3153304/2223195-ORFDOMNN-8.jpg",
    title: "Palm Springs #1",
    description: "30.00H x 48.00W x 0.10D Inches",
    price: "$2670",
    artist: "Dean West (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-The-green-metal/302468/2589623/view?sku=P232-U302468-A2589623?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/302468/art/2779831/1849724-GMKNSUTO-8.jpg",
    title: "The green metal",
    description: "31.50H x 47.24W x 0.04D Inches",
    price: "$2750",
    artist: "ERNEST Sebastien (Belgium)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Drawing-Circuit/416159/2001854/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/416159/art/2191705/1270401-MGYGEOVO-8.jpg",
    title: "Circuit",
    description: "6.00H x 12.00W x 0.10D Inches",
    price: "$200",
    artist: "Rebecca Jacoby (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-red-table/99212/1333925/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/99212/art/1494909/729942-8.jpg",
    title: "red table",
    description: "31.50H x 47.24W x 1.18D Inches",
    price: "$3250",
    artist: "Ezzaldin Shahrori (Jordan)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-high-flying-birds/144695/2503128/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/144695/art/2693290/1763183-OFVNALIU-8.jpg",
    title: "high flying birds",
    description: "15.75H x 31.50W x 0.98D Inches",
    price: "$1640",
    artist: "Dariya Afanasyeva (Russia)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Screenprinting-Atelier/70461/1498742/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/70461/art/1659755/846326-NGIHOLRX-8.jpg",
    title: "Screenprinting Atelier",
    description: "28.74H x 45.67W x 0.79D Inches",
    price: "$1490",
    artist: "Aslihan Kaplan Bayrak (Turkey)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Skater-Girl/39291/1399455/view?sku=P207-U39291-A1399455?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/39291/art/1560452/774528-WDGSHQCA-8.jpg",
    title: "Skater Girl",
    description: "31.89H x 48.03W x 1.18D Inches",
    price: "$4050",
    artist: "Matthew Carter (New Zealand)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Hypothesis-for-a-portrait-of-Mrs-A-Jordan/768354/4421616/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/768354/art/5008449/4078271-OGMNRBSP-8.jpg",
    title: "Hypothesis for a portrait of Mrs. A. Jordan",
    description: "39.37H x 59.06W x 0.79D Inches",
    price: "$3560",
    artist: "Paolo Damiani (Italy)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-AMOREDELLAMIAVITA/28818/3808014/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/28818/art/3999163/3069017-LLWHUFHR-8.jpg",
    title: "AMOREDELLAMIAVITA",
    description: "51.18H x 81.50W x 0.04D Inches",
    price: "$40,000",
    artist: "Marco Battaglini (Costa Rica)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-At-Rest-23x48/413222/2134397/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/413222/art/2324248/1399373-8.jpg",
    title: "At Rest 23x48",
    description: "23.00H x 48.00W x 1.00D Inches",
    price: "$2370",
    artist: "Drew Doggett (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-She-hangs-between-both-sides-of-the-Veil/342443/1702726/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/342443/art/1863739/1000700-8.jpg",
    title: "She hangs between both sides of the Veil",
    description: "24.02H x 48.03W x 1.57D Inches",
    price: "$2000",
    artist: "Lara Cobden (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Texas-Hill-Country-I-III-Abstract-N-2137-39/91068/4127155/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/91068/art/4419147/3488987-TIBHVZQL-8.jpg",
    title: "Texas Hill Country I-III [Abstract N°2137-39]",
    description: "47.24H x 70.87W x 1.57D Inches",
    price: "$5850",
    artist: "Koen Lybaert (Belgium)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Journey-to-the-center-of-the-galaxy/20877/2281595/view?sku=P116-U20877-A2281595?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/20877/art/2471500/1541507-KTLQFRTR-8.jpg",
    title: "Journey to the center of the galaxy",
    description: "39.37H x 59.06W x 0.79D Inches",
    price: "$3210",
    artist: "Blue Moon - Heike Schmidt (Germany)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Detroit-House-Interior-Living-Room-Couch/493867/1674134/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/493867/art/1835147/984444-8.jpg",
    title: "Detroit House Interior - Living Room Couch",
    description: "12.00H x 18.00W x 0.20D Inches",
    price: "$1010",
    artist: "Vincent Johnson (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Happiness/79335/1670501/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/79335/art/1831514/973991-MNLQWEKS-8.jpg",
    title: "Happiness",
    description: "31.50H x 59.06W x 0.79D Inches",
    price: "$7238",
    artist: "Tran Tuan (Vietnam)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-untitled-43-60x36/321747/1501881/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/321747/art/1662894/853538-CAGEVDED-8.jpg",
    title: "untitled 43 60x36",
    description: "30.00H x 60.00W x 1.50D Inches",
    price: "$2320",
    artist: "Sanjay Patel (Canada)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Balloon-14-Limited-Edition-30-of-30/785139/3882940/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/785139/art/4074137/3143990-QCFPEBQS-8.jpg",
    title: "Balloon #14 - Limited Edition 30 of 30",
    description: "40.00H x 60.00W x 0.10D Inches",
    price: "$1670",
    artist: "Cody Choi (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Another-Long-Day/922469/3257947/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/922469/art/3448787/2518674-JOSVIYVN-8.jpg",
    title: '"Another Long Day"',
    description: "42.00H x 66.00W x 1.50D Inches",
    price: "$2870",
    artist: "Brad Nuorala (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Champ-de-bl/620837/1782573/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/620837/art/1943586/1066483-8.jpg",
    title: "Champ de blé",
    description:
      "12.00H x 24.00W x 1.50D Inches",
      price: "$300",
    artist: "Judith Cameron (Canada)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Second-Genesis/467923/2497077/view?sku=P207-U467923-A2497077?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/467923/art/2687236/1757129-NXOALVGJ-8.jpg",
    title: "Second Genesis",
    description: "37.80H x 56.69W x 0.04D Inches",
    price: "$2190",
    artist: "Lau Sze man (Hong Kong)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-STRIPED-Destroyed-space/155526/3855053/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/155526/art/4046235/3116088-EFYASWEL-8.jpg",
    title: "STRIPED/Destroyed space",
    description: "31.50H x 62.99W x 1.18D Inches",
    price: "$3750",
    artist: "Sandro Chkhaidze (Georgia)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Driftings-Large-2/285922/2001159/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/285922/art/2191010/1269706-TLWGMLZX-8.jpg",
    title: "Driftings (Large#2)",
    description: "43.31H x 86.61W x 1.38D Inches",
    price: "$6900",
    artist: "Julien Guibreteau (France)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Tabula-rasa/97233/1668207/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/97233/art/1829220/973462-PGSHTQYH-8.jpg",
    title: "Tabula rasa",
    description: "46.85H x 99.21W x 0.39D Inches",
    price: "$2850",
    artist: "Dusa Jesih (Slovenia)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Printmaking-THE-MAHARAJAH-MAHARANI-Limited-Edition-15-of-80/291153/3796578/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/291153/art/3987723/3057577-SBWYHIPG-8.jpg",
    title: "THE MAHARAJAH & MAHARANI - Limited Edition 15 of 80",
    description: "11.81H x 25.59W x 0.04D Inches",
    price: "$395",
    artist: "Magnus Gjoen (United Kingdom)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Berry-gr-n-orange-durchwebt/653828/2376107/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/653828/art/2566143/1636063-8.jpg",
    title: "Berry grün-orange durchwebt",
    description: "31.50H x 78.74W x 0.79D Inches",
    price: "$10,650",
    artist: "Skadi Engeln (Germany)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-purring-for-paintings-extra-large-size-Limited-Edition-1-of-2/622485/3480458/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/622485/art/3671398/2741283-OWBTVNFH-8.jpg",
    title: "purring for paintings - extra-large size - Limited Edition 1 of 2",
    description: "24.00H x 36.00W x 0.10D Inches",
    price: "$1030",
    artist: "Elle Hanley (United States)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Magnolias/498784/2466321/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/498784/art/2656454/1726347-WJDRHCUA-8.jpg",
    title: "Magnolias",
    description: "44.88H x 73.23W x 0.20D Inches",
    price: "$4050",
    artist: "St Global Nomads Foundation (Netherlands)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Listening-Trees-10-Limited-Edition-4-of-10/418704/2105597/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/418704/art/2295448/1370590-8.jpg",
    title: "Listening Trees #10 (Limited Edition 4 of 10)",
    description:
      "9.06H x 13.78W x 0.04D Inches",
      price: "$185",
    artist: "Petra Rjabinin (Slovakia)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Blue-Seascape-2-Limited-Edition-1-of-15/608620/4153345/view?sku=P242-U608620-A4153345?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/608620/art/4471581/3541421-UIDMTUMN-8.jpg",
    title: "Blue Seascape#2 - Limited Edition 1 of 15",
    description: "39.37H x 59.06W x 0.39D Inches",
    price: "$980",
    artist: "Igor Vitomirov (Sweden)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Waiting-for-the-summer/387391/219789/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/387391/art/562511/308914-XZNPRYOF-8.jpg",
    title: "Waiting for the summer",
    description: "19.69H x 27.56W x 0.80D Inches",
    price: "$4410",
    artist: "Christina Nguyen (Ukraine)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-High-heels/948093/3810051/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/948093/art/4001202/3071056-QIHZHJQZ-8.jpg",
    title: "High heels.",
    description: "34.00H x 53.00W x 0.70D Inches",
    price: "$3125",
    artist: "Lara Vald (Ukraine)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Photography-Prison-Break-Limited-Edition-2-of-2/302468/3752544/view?sku=P207-U302468-A3752544?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/302468/art/3943646/3013516-CMPZOKGP-8.jpg",
    title: "Prison Break - Limited Edition 2 of 2",
    description: "43.31H x 64.96W x 0.12D Inches",
    price: "$3200",
    artist: "ERNEST Sebastien (Belgium)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Puberty-BFF/301635/2047220/view?sku=P116-U301635-A2047220?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/301635/art/2237071/1312308-8.jpg",
    title: "Puberty",
    description: "23.62H x 39.37W x 1.57D Inches",
    price: "$1390",
    artist: "Astrid Oudheusden (Netherlands)"
  },
  {
    url:
      "https://www.saatchiart.com/art/Painting-Fourth-Interaction-Diptych/189576/2494452/view?chromeplugin=true",
    image_url:
      "https://assets.saatchiart.com/saatchi/189576/art/2684611/1754504-COQMBIYN-8.jpg",
    title: "Fourth Interaction",
    description: "18.00H x 48.00W x 1.50D Inches",
    price: "$2910",
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
const body = $("body"),
  search_input = $(".search-bar"),
  search_btn = $(".search-btn"),
  settings_btn = $(".settings-btn"),
  settings_modal = $(".settings-modal"),
  close_modal = $(".close-modal"),
  search_container = $(".search__container"),
  placeholder = $(".placeholder"),
  saatchi_link = $(".saatchi-link");

//notes container
const notes_container = $(".notes-container"),
  add_note = $(".add-note");

//artist card
const artist_card = $(".artist-card"),
  artist_name = $(".artist-name"),
  title = $(".title"),
  description = $(".description"),
  price = $(".price");

//tabs
const bookmarks_tab = $(".bookmarks-tab"),
  images_tab = $(".images-tab"),
  to_do_tab = $(".to-do-tab"),
  settings_tab = $(".settings-tab"),
  tabs_array = [bookmarks_tab, images_tab, to_do_tab, settings_tab];

//containers
const bookmarks_container = $(".bookmarks-container"),
  bookmarks_main_container = $(".bookmarks-main-container"),
  to_do_container = $(".to-do-container"),
  settings_container = $(".settings-container"),
  images_container = $(".images-container"),
  images_row = $(".images-row"),
  containers_array = [
    bookmarks_main_container,
    to_do_container,
    settings_container,
    images_container
  ];

//to-do items
const to_do_input = $(".to-do-input"),
  to_do_list = $(".to-do-append"),
  to_do_add = $(".to-do-add");

//slider pieces
const yes_arr = [...$(".yes", "all")],
  no_arr = [...$(".no", "all")],
  slide_arr = [...$(".slide", "all")];

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
    const obj = JSON.parse(localStorage.getItem("image"));
    body.setAttribute("style", `background-image: url("${obj.image_url}");`);
    saatchi_link.href = obj.url;
    artist_name.innerHTML = `${
      obj.artist.split("(")[0]
    } <span class="no-bold">(${obj.artist.split("(")[1]}</span>`;
    title.innerHTML = obj.title;
    description.innerHTML = obj.description;
    price.innerHTML = obj.price;
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
      const obj = JSON.parse(localStorage.getItem("image"));
      body.setAttribute("style", `background-image: url("${obj.image_url}");`);

      saatchi_link.href = obj.url;
      artist_name.innerHTML = `${
        obj.artist.split("(")[0]
      } <span class="no-bold">(${obj.artist.split("(")[1]}</span>`;
      title.innerHTML = obj.title;
      description.innerHTML = obj.description;
      price.innerHTML = obj.price;
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
  price.innerHTML = arr[random_index].price;
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
