$(document).ready(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  $(".fullscreen").css("height", window_height);
  $(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({ topSpacing: 0 });

  if (document.getElementById("default-select")) {
    $("select").niceSelect();
  }

  $(".img-pop-up").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".play-btn").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // Select all links with hashes
  $('.main-button a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on("click", function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 50,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  $(document).ready(function () {
    $("html, body").hide();

    if (window.location.hash) {
      setTimeout(function () {
        $("html, body").scrollTop(0).show();

        $("html, body").animate(
          {
            scrollTop: $(window.location.hash).offset().top,
          },
          1000
        );
      }, 0);
    } else {
      $("html, body").show();
    }
  });

  $(document).ready(function () {
    $("#mc_embed_signup").find("form").ajaxChimp();
  });

  $(".filters ul li").click(function () {
    $(".filters ul li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
      filter: data,
    });
  });

  if (document.getElementById("portfolio")) {
    var $grid = $(".grid").isotope({
      itemSelector: ".all",
      percentPosition: true,
      masonry: {
        columnWidth: ".all",
      },
    });
  }
});

$(document).ready(function () {
  // Hide the modal on page load
  $(".modal").hide();

  // Find all the div elements with "chui" class name
  $(
    "#burana, #kol-kogur, #kegetinskiy-vodopad, #sulayman-too, #pik-lenina, #vodopad-abshir-ata , #ozero-son-kol, #ozero-kol-suu, #tash-rabat ,#ozero-besh-tash, #manas-ordo,#ushelye-karavshan,  #ushelye-geti-oguz, #ushelye-karakol, #kanyon-skazka, #zapovednik-sary-chelek, #ozero-toktogul"
  ).click(function () {
    // Get the content of the clicked div
    var content = $(this).html();

    // Create a jQuery object from the obtained content
    var $content = $(content);
    // Find the element you want to modify by its selector
    var $description = $content.find("#description");
    // Modify its CSS properties
    $description.css("display", "inline-block");

    $content.find("img").css("width", "50%");
    $content.find("img").css("height", "50%");
    $content.find("img").css("margin-bottom", "35px");
    // Insert the content into the modal body
    $(".modal-body").html($content);

    // Display the modal
    $(".modal").show();
  });

  // Close the modal when the user clicks on the close button
  $(".close").click(function () {
    $(".modal").hide();
  });
});

var textToSet = null;
var userLang = null;

/*
  -if userLanguage exists they're in IE, else firefox
  -get the first two letters in lowercase to guarantee 
   an easily evaluated base language
  */
console.log(navigator.userLanguage);

// if (navigator.userLanguage)
//   baseLang = substring(navigator.userLanguage, 0, 2).toLowerCase();
// else baseLang = substring(navigator.language, 0, 2).toLowerCase();

// //check languages
// switch (baseLang) {
//   case "de":
//     //German
//     textToSet = "german text";
//     break;
//   default:
//     textToSet = "english text";
// }
// document.getElementById("elementToSetTextInto").innerHTML = textToSet;

// The active locale
let locale = "ru";

// We can have as many locales here as we want,
// and use any locales we want. We have English
// and Arabic as locales here as examples.
const translations = {
  // English translations
  en: {
    appTitle: "My Appy Apperson",
    lead: "Welcome to my little spot on the interwebs!",

    burana: "Tower of the Burana",
    buranaReferences: "Viewing platforms and towers",
    buranaDescription: `Burana Tower, a IX-XI century minaret of the Karakhanid state
                      in the Chui Valley in northern Kyrgyzstan. It is located 80 km
                      from the capital Bishkek, 12 km southwest of Tokmak
                      road in the Kegeti Gorge in the Kyrgyz range, on the left bank of the Chu River.
                      bank of the river Chu. The tower is part of a specially protected
                      archaeological and architectural complex "Burana Tower".
                      Burana Tower is a part of the archaeological-architectural
                      Kyrgyz museum and is protected by the state as a monument
                      cultural and historical heritage. It is one of the
                      oldest minarets made of burnt brick on the territory of
                      Central Asia. It was built in X-XI centuries. It
                      made of burnt bricks and juniper beams. At
                      octahedral stone plinth stands round in section,
                      tapered at the top of the trunk, and is embraced by a band...
                      The round in section tapers towards the top, the trunk is embraced by a belt of ornamental masonry. On the southern side at a height of 5 m.
                      On the southern side there is a doorway, from which a spiral staircase begins.
                      staircase leading to the observation deck. The height of the tower is 21
                      The tower is 21 m high and 9 m in diameter. Its former height is believed to be
                      44-48 м. However, after the earthquake the top of the tower
                      fell down after an earthquake. Today the height is 21.7 meters.
                      Next to the tower there is a "garden of stones" in which the so-called "balbals" (VI-X centuries) are collected.
                      The so-called "balbali" (VI-X centuries) - ancient tombstones
                      These are ancient gravestones, ancient millstones, and stones with petroglyphs and drawings (1,000 years old).
                      drawings (1 thousand years B.C.). The Burana was probably the
                      vertical dominant of the ancient city of Balasagun,
                      the northern capital of the Karakhanid Turkic state. В
                      Balasagun was captured and destroyed by the Tatar-Mongols in 1218 and
                      In the XIV century ceased to exist[1].`,

    kolKogur: "Kol-Kogur Lake",
    kolKogurReferences: "Reservoirs",
    kolKogurDescription: `Kel-Kogur Mountain Lake is considered one of the most beautiful lakes in
                      in Kyrgyzstan! In sunny weather, the lake has a gorgeous
                      reflection of the water in which the clouds, the blue sky and
                      neighboring mountains with fir trees. The lake can be accessed either from the
                      Chon-Kemin Gorge as well as from the side of Lake Issyk-Kul. And of course
                      you can make a good hiking
                      route from Chon-Kemin Gorge to Issyk-Kul Lake Kel-Kogur
                      is located in Kyrgyzstan, on the northern slope of Kungey
                      Ala-Too ridge, in a picturesque wooded area at an altitude of 2,465
                      m above sea level. The lake belongs to the basin of the
                      The lake belongs to the basin of the Chong-Kemin River. The Kel-Kogur River flows out of the lake and becomes
                      It becomes the left tributary of the Chong-Kemin River.`,

    kegetinskiyVodopad: "Kegeti Waterfall",
    kegetinskiyVodopadReferences: "Natural and protected areas - Waterfalls",
    kegetinskiyVodopadDescription: `Large waterfall Kegeti The waterfall is located in the gorge Kegeti
                      which is located in Chui oblast 18 km south of Tokmak city.
                      Tokmak and 50 km to the east of the capital of the Republic, Bishkek. Bishkek.
                      The gorge is part of the Kyrgyz range on the southern and
                      north side of the mountain system. At the bottom of the gorge, there are
                      The valley and the river of the same name, whose slopes are famous for their
                      meadows and alpine forests. The picturesque waterfall
                      Barsa Kelmes, 30 m high in the gorge of the first tributary of the river
                      Kel-Tor; the Kegeti waterfall, 20 m high, in the left tributary
                      of the Kegeti River. The last waterfall is especially beautiful in winter with
                      formed by ice combined with a sparkling stream of
                      water.`,

    sulaymanToo: "Sulaiman Mountain",
    sulaymanTooReferences: "Historical museums",
    sulaymanTooDescription: `Sulaiman-Too Mountain is the first UNESCO World Heritage Site in Kyrgyzstan.
                      UNESCO World Heritage Site. It is located in the center
                      Osh city and rises 175 m above it. Since ancient times
                      Since ancient times Sulaiman-Too has been a sacred place for Muslims and
                      Many pilgrims come here. At present
                      the mountain itself and the buildings on it, many of which were built centuries ago.
                      Sulaiman-Too is a part of the historical-architectural
                      Historical and Architectural Complex. These are the remains
                      A medieval bathhouse in the eastern part of the mountain (11th-14th centuries),
                      Takht-i Sulaiman Mosque on the top of the mountain (16th c.) and
                      The Takht-i Sulayman Mosque at the top of the mountain (16th century) and the Rawat Abdullakhan Mosque (16th c.)
                      the southeastern part of the mountain (18th c.). On Sulaiman-Too one can
                      On Sulaiman-Too one can visit seven sacred caves and see many
                      numerous petroglyphs of ancient times. There are also a number of ancient petroglyphs.
                      Museum, also located on the mountain, has more than 33,000 archaeological and historical exhibits.
                      archaeological and ethnographic
                      archaeological and ethnographic monuments and items of applied arts and crafts,
                      paintings, sculptures and drawings.`,

    pikLenina: "Lenin Peak",
    pikLeninaReferences: "Mountains",
    pikLeninaDescription: `All ascents to Lenin Peak start from the city of Osh,
                      from where you can get to Osh by crossing the Taldyk Pass (3,615
                      the Taldyk Pass (3,615 metres) by cross-country vehicles, and from there you can
                      you can get to the Alai valley by cross-country vehicles. Then from the village of Sary-Tash to
                      village Kashka-Suu, after crossing the bridge (see photo
                      below) through Kyzyl-Suu river and climbing along its tributary -
                      Achik-Tash river, the way goes to the glade of edelweiss, where
                      usually set up base camp. You can also .
                      you can go another 5 kilometers to the famous Lukovaya glade
                      (3,800 m), where there are several base camps, including
                      including the tourist agency "Fortuna-Tour",
                      which organizes climbs to Lenin Peak and tours to
                      Krygyzstan. Further you can only go on foot.
                      Usually the road from Osh to the base camp "Lukovaya Polyana"
                      takes 12 hours.`,

    vodopadAbshirAta: "Abshir-ata Waterfall",
    vodopadAbshirAtaReferences: "Waterfalls",
    vodopadAbshirAtaDescription: `Abshir-Ata National Park is located 70 km from the city of
                      Osh in Kyrgyzstan, at an altitude of 1,500-2,500 m, and is famous for its
                      the beautiful gorge of the Abshir-Sai River and the unusual waterfall
                      Abshir-Ata. Abshir-Sai river takes its beginning from northern spurs of
                      Kichik-Alay and flows through the valley of the same name, where
                      forms a picturesque canyon with a waterfall. Abshir-Ata waterfall
                      is a very spectacular scenery: a powerful stream
                      water rushes out through a round hole right out of a steep
                      rock wall at a height of 12 m. The locals believe that
                      the water gushing from the rock is sacred and can cure
                      many illnesses. That's why you can always see near the waterfall
                      you can always see those who want to take the healing water. Around the area you will find
                      several viewing platforms, where it is convenient to look at
                      waterfall from different angles. In the area of Abshir Say valley there are
                      other interesting sights: the lake of the same name
                      lake, Kotur-Bulak spring in a huge karst grotto,
                      rock paintings. In a word, Abshir-Ata is a wonderful
                      Abshir-Ata is a wonderful place for short picturesque walks in the suburbs of Osh.`,

    ozeroSonKol: "Sonkol Lake",
    ozeroSonKolReferences: "Reservoirs",
    ozeroSonKolDescription: `Son-Kul Lake is located in the heart of the Inner
                      Tien Shan, 90 km north-west of Naryn. The hollow
                      57 km long and 29 km wide is situated inside powerful
                      The depression is 57 kilometers long and 29 kilometers wide and is located within powerful mountain blocks. In the center of this basin stretches the second largest lake in Kyrgyzstan.
                      Kul-Son, the second largest lake in Kyrgyzstan. It
                      has a length of 29 km and a width of 17 km. Its surface is located at an altitude of 3,016 m above sea level.
                      is at an altitude of 3,016 m above sea level, the area of the mirror is 270 sq.
                      Its surface area is at an altitude of 3,016 m above sea level and has a maximum depth of 13.2 m. The lake
                      tectonic origin, filled with fresh water. В
                      There are 18 streams flowing into the lake and the only outlet is the Son-Kul.
                      Son-Kul River. Only 4 rivers have a permanent flow into the lake: Kum-Bel and Ak-Tash-Tash.
                      Kum-Bel, Ak-Tash, Tash-Tebe and Kara-Keche. The coastal
                      The coastal strip has a different character: the northwestern part
                      The northwestern part is rugged with rocky bays and gulfs, while the rest has gently sloping shores.
                      The northwestern part is indented with rocky bays and gulfs, while the rest has gentle coastlines with some marshy areas. В
                      There are many thermokarst sinkholes in the valley of the Son-Kul River.
                      The valley of the Son-Kul River has many thermokarst sinkholes, which were formed as a result of thawing of the permafrost located in the valley.
                      permafrost, located at a depth of 1.5 m. At 4 km
                      from the source, the water stream jumps into a rocky gorge
                      as a cascade of waterfalls - Kek Djerty. The lake freezes up in the second half of October.
                      half of October, begins to open from the ice in the end of
                      begins to open from the ice in late April. In some years, the ice thickness reaches 1 m.
                      The animal life is extremely diverse. In summer here
                      There are many species of ducks, gulls, herons and other waterfowl (66 species).
                      waterfowl (66 species). Because of the harsh climate
                      the lake was without fish until 1959. At present time
                      Osman, pelad and whitefish are acclimatized in the lake.`,

    ozeroKolSuu: "Lake Köl-Suu",
    ozeroKolSuuReferences: "Reservoirs",
    ozeroKolSuuDescription: `The high-mountain lake Köl-Suu is located in the southern part of the
                      Ak-Say valley at an altitude of 3,514 meters above sea level.
                      The lake attracts tourists from all over the world with its pristine
                      beauty, surrounded by steep cliffs with water of emerald color.
                      emerald-colored water. Since the lake is near
                      Kyrgyz-Chinese border you need to have a
                      a border pass. The lake's name translates to
                      "incoming water," and for good reason, because the lake has a way of
                      disappear and then fill up again. At the entrance to the lake.
                      area is rather boggy, and to pass to it it is possible
                      Only a well-prepared off-road vehicle can reach it.`,

    tashRabat: "Tash Rabat",
    tashRabatReferences: "Valleys",
    tashRabatDescription: `About 520 km from Bishkek, 125 km (1.5 hours) from Naryn,
                      17 km from the end of the paved road (just after the
                      alternate airstrip) 90 km (1.5 hours) to the border at
                      Torugart and at an altitude of about 3,500 m above sea level,
                      there is an ancient caravanserai Tash-Rabat. According to
                      one of the sources, it is probably the best
                      well-preserved site of the Silk Road that can be found,
                      and "no other place has preserved its
                      original atmosphere." It is a meticulously
                      restored stone building that once housed the
                      Great Silk Road was once an inn. The date of its
                      of its appearance is uncertain, but archaeological evidence
                      suggest that in the 10th century this place
                      in the 10th century this place was already occupied. 15 km higher at the foot of the Tien Shan
                      There is a beautiful valley, nestled on the slope of the mountain.
                      There are reports that it was both a place of rest and
                      and worship, and it was also used to protect
                      caravans going to and from China from the raging
                      weather and brigands even before the time of Tamerlane and Genghis Khan.
                      Legend has it that the caravanserai was built by a father and
                      son. When they had already finished work and only the top of the dome needed to be
                      only the top of the dome needed to be completed... there were only a few stones left to be pinned
                      a few stones when a caravan appeared from behind the mountains. The son
                      rushed towards them to greet the travelers,
                      but his father said: "Come, let us finish the work first," but the
                      the young man did not obey him--he went
                      to greet the caravan. And among the travelers was
                      beautiful young girl whom he fell in love with... and when the
                      the caravan left, he left with him... and the father never saw
                      his son again, and the dome remained unfinished. Maybe
                      one of the reasons that this place has retained its
                      originality is that it's located on the
                      the main road Bishkek / Naryn - Torugart, 15 km from the valley
                      Kara-Koyun Gorge valley. For many years the curves
                      were not marked with signs and
                      travelers just drove past it without realizing
                      what they were missing. Once off the paved road, the cars
                      have to drive on a gravel embankment along the valley of the
                      Tash-Rabat valley. The slopes there are covered with soddy meadow,
                      which gives them a velvety appearance, on which herds of
                      horses and yaks, flocks of sheep and goats - and even isolated
                      camels grazing on the mountain slopes.`,

    ozeroBeshTash: "Besh Tash Lake",
    ozeroBeshTashReferences: "Natural and protected areas",
    ozeroBeshTashDescription: `High-mountain lake Besh-Tash is located in the valley of the same name
                      at an altitude of 2997 m. The depth of the lake reaches 28 m. In the lake.
                      inhabit fish such as osman, marinka and trout. When
                      good weather, you can see the water is an amazing turquoise
                      color. Hiking to the lake will not leave you indifferent and will open
                      a lot of picturesque landscapes Besh-Tash valley.`,

    manasOrdo: "Manas Ordo",
    manasOrdoReferences: "Cultural sites and attractions",
    manasOrdoDescription: `The epic Manas has more than half a million lines. У
                      each manaschi, the professional narrator of the epic.
                      has his own version. This story holds a place deep in the
                      the heart of Kyrgyz culture and has survived a long series of
                      of conquests and transformations, not least
                      long Soviet censorship, which required it to be
                      editing in accordance with communist
                      ideology. The hero Manas is revered for the unification of the
                      Kyrgyz tribes and victory over their enemies. According to
                      legend, he was buried in the Manas Ordo complex in
                      Talas. The richly decorated brick mausoleum is dedicated
                      "the most famous of the women, Kenizek Khatun, daughter of Emir
                      Abuka." It is said that Manas's faithful wife Kanykei ordered
                      this inscription so that the tomb would not be desecrated by the enemies of her
                      husband. The site also contains several other
                      artifacts, including a first-century burial site and a museum
                      dedicated to the epic of Manas.`,

    ushelyeKaravshan: "Karavshan Gorge",
    ushelyeKaravshanReferences: "Mountains",
    ushelyeKaravshanDescription: `The Karavshin Gorge is located near the Turkestan Ridge. This
                      beautiful place is called the "Asian Patagonia" because
                      with its green meadows, fast streams and
                      strong winds reminiscent of the South American steppes. Here
                      Everyone can find recreation to their liking: hikers
                      hikers can hike through the gorge, and masters
                      mountaineers can test the trails to high peaks.
                      routes to high peaks. Of the famous peaks in the gorge.
                      Karavshin Gorge, there are Asan Peak (4230 m), Usen Peak (4378 m) and Pyramidal Peak (5509 m).
                      Pyramidalny Peak (5509 m), Kotov Peak, Yellow Wall.
                      Slesova Peak, etc. The mountains here are composed of strong granite,
                      limestones and sandstones. Recently, the unique and
                      little-explored Karavshin attracts more and more tourists and
                      lovers of extreme holidays.`,

    goraAygulTash: "Aigul-Tash Mountain",
    goraAygulTashReferences: "Mountains",
    goraAygulTashDescription: `Mount Aigul-Tash is located near the village of Kara-Bulak in
                      Batken region. The mountain has steep stony slopes.
                      This place is unique because only here grows
                      Aigul, an endemic flower. It is mysterious and incredibly beautiful,
                      its petals are fiery orange. According to
                      a sad but romantic legend, the flowers grew here
                      after a beautiful girl, Aigul, threw herself from a mountain
                      onto sharp rocks, unable to bear the death of her lover.
                      Aigul's "moonflower" is listed in the Red Book. The flower
                      only blooms for two weeks a year, in early April, so
                      it would be a great privilege to see it at that time. At the moment
                      Currently, in the area where Mount Aigul-Tash and its
                      The state reserve has been formed.`,

    ushelyeGetiOguz: "Jety-Oguz Gorge",
    ushelyeGetiOguzReferences: "Mountains",
    ushelyeGetiOguzDescription: `The picturesque Jety-Oguz Gorge is located 28 km southwest of Karakol.
                      southwest of Karakol. Its name in
                      Kyrgyz means "seven bulls". The name
                      It is symbolic because a huge wall of seven red bulls stretches for 35 km.
                      reddish-brown rocks, resembling lined up
                      in a line of furious bulls. The extraordinary contrast of the gorge is given
                      ...the gentle slopes in front of the cliffs, densely overgrown with grass and...
                      conifers and from afar resembling a soft carpet.
                      Especially romantic looks the rock "Broken heart",
                      located at the entrance to the gorge. Jety-Oguz is also famous
                      its hot springs, whose water contains radon
                      and hydrogen sulfide. Where they gush out of the ground, at an altitude of
                      2,200 m above sea level, a health resort is built. The water from
                      springs is good for treating rheumatism, stomach and nervous system diseases.
                      diseases of the stomach and the nervous system. If you go higher, you can
                      Kok Djaiyk panorama, where you can get an amazing view of the gorge or the valley.
                      the magnificent view of the gorge, or to the Valley of Flowers,
                      strewn with poppies. In the upper part of Jety-Oguz there are also
                      mountain lakes and noisy waterfalls.`,

    kanyonSkazka: "Fairy Tale Canyon",
    kanyonSkazkaReferences: "Canyons",
    kanyonSkazkaDescription: `Fairy Tale Canyon, located on the southern shore of Lake
                      Issyk-Kul, is one of the most interesting and frequently
                      frequently visited natural places in Kyrgyzstan. It is located 120
                      kilometers from Balykchy and near the village of Tosor. Canyon
                      is located in a gorge of the same name and is famous for its red
                      clay rocks. The wind has been grinding natural and
                      fairy-tale sculptures. One of the most famous rocks
                      is the "Chinese wall. It's been nicknamed by the people
                      because of its resemblance to a famous architectural monument
                      of China. Walking through the labyrinthine canyon, you'll feel like
                      yourself in a real fairy tale. It is not for nothing that the gorge is called exactly
                      so. The rocks resemble castles, towers, monsters, giants,
                      people and animals. And all this is created by nature, not by the hands
                      of man. For some travelers, it might seem as if
                      ...they're on Mars. Some people will see rocks of many colors..,
                      and some will only see red rocks. The fact is that Fairy Tale Canyon
                      opens up to everyone differently. For example, when it's sunny.
                      the canyon looks completely different than it does when it's cloudy.
                      In windy or rainy weather, the topography of the cliffs can
                      and hikers may see different images that
                      nature creates. If you climb one of the cliffs, you
                      will open up a stunning panorama of Lake Issyk-Kul. In this
                      area almost never falls snow, so the canyon
                      You can visit the canyon at any time of year. Please note that
                      In summer you may have to pay a fee to enter the canyon.
                      It is difficult to get lost in the canyon, but we recommend
                      with a guide to learn about all the secrets and legends of the canyon.
                      of the canyon. Not far from the canyon you will find the beach, which is
                      considered one of the most beautiful on the whole Isyk-Kul
                      coast.`,

    ushelyeKarakol: "Kara-Kol Gorge",
    ushelyeKarakolReferences: "Canyons",
    ushelyeKarakolDescription: `Five kilometers south of the largest city in the Issyk-Kul region,
                      Karakol is a gorge of the same name. The canyon canyon
                      Canyon Canyon has a length of up to 40 km and borders on the Terskey Ala-Too Range.
                      Ala-Too Range. In the upper part of the gorge in the warm season
                      functioning mountaineering camp. The tops on which
                      the most often climbed peaks are Jigit Peak (5,130 m), Karakol Peak (5,200 ft) and Karakol Peak (5,200 ft).
                      Karakol Peak (5281 m), Przewalski Peak (4283 m) and Zhukov Peak (4450 m).
                      Zhukov Peak (4,450 m), the peak of Telman (4,460 m), the peak of Dimitrov
                      (4,450 m), Fuchika Peak (4,210 m) and Gastello Peak (4,350 m). At
                      slopes of the Karakol Gorge, sea buckthorn grows,
                      barberry, wild rose hips, mountain flowers and, of course, dense
                      meadow grass. With increasing altitude, they are replaced by spruce
                      and juniper forests, and the composition is completed by subalpine and
                      alpine landscapes complete the composition. The animal world of the gorge is also interesting:
                      ibex, roe deer, lynx, wild boar, snow
                      leopards, wolves, bears and golden eagles. The high-mountain part of the gorge
                      hides many beautiful places like,
                      glacial-marine lakes, cascades of waterfalls, Lake
                      Ala-Kul Lake (3,532 m above sea level).`,

    zapovednikSaryChelek: "Sary-Chelek Reserve",
    zapovednikSaryChelekReferences: "National Parks",
    zapovednikSaryChelekDescription: `Sary-Chelek State Biosphere Reserve
                      is included in the international network of UNESCO reserves. It
                      It is located in the valley and on the slopes of the Chatkal and
                      It is located in the valley of Chatkal and At-Oinok mountain ranges. The reserve occupies an area of
                      area of 23.9 sq. km. It was established in 1959 to preserve the flora and fauna of the
                      flora and fauna of hazelnut forests and high-mountainous
                      landscapes. In the reserve there is a beautiful lake
                      Sary-Chelek, which is the third largest lake in Kyrgyzstan.
                      The lake with fresh water covers an area of about 5 sq. km and
                      It has a maximum depth of 246 m. The lake's name
                      translates as "Yellow Bowl". It is very beautiful in autumn,
                      when the trees around it turn yellow-orange,
                      reflecting off the water surface, as if "coloring" the
                      the lake itself. In the valley, there are also six small lakes and a fairly
                      wide network of rivers. Physical location
                      Sary-Chelek reserve has caused its mild climate:
                      warm in summer and little snow in winter. A significant part of
                      of the reserve are occupied by walnut, apple and pear forests.
                      The fauna of the reserve is very rich. The muskrat lives here,
                      red deer, fallow deer, porcupine, marten, argali, wild boar,
                      goat, as well as 157 different species of birds.`,

    ozeroToktogul: "Toktogul Lake",
    ozeroToktogulReferences: "Reservoirs",
    ozeroToktogulDescription: `The Toktogul Reservoir is the largest
                      reservoir not only in Kyrgyzstan, but also in the whole of
                      It covers an area of 284 square kilometres and is the largest reservoir in the world. Its area is 284 sq. km, and
                      The average depth is about 215 m. The Toktogul
                      for the country's hydroelectric industry.
                      The importance of the Toktogul Reservoir for the country's hydroelectric industry is truly priceless - two powerful hydroelectric power stations are located here.
                      The importance of the Toktogulskoye reservoir for the country's hydroelectric industry is truly priceless. The two powerful Toktogul and Kurpsai hydroelectric power stations are located here.
                      The reservoir was built over 10 years, and now, looking at it, nestled among the mountains and hills, it is impossible to believe it was built at that time.
                      and hills, it is impossible to believe that it is a real man-made miracle.
                      miracle. Recreation on the banks of the Toktogul Reservoir is very
                      popular among the residents and guests of Jalal-Abad region.
                      In the summertime the water here is warm and pleasant - a real
                      A real blessing for those who like to swim. Fishermen will also find happiness here.
                      Fishermen: in the reservoir there are such species of fish as trout,
                      There are trout, carp, pike-perch and carp in the reservoir.`,

    vse: "All",
    chui: "Chuy",
    osh: "Osh",
    naryn: "Naryn",
    talas: "Talas",
    batken: "Batken",
    issykKul: "Issyk-Kul",
    jalalAbad: "Jalal-Abad",
    vseInterseniyeMesta: "All interesting places in Kyrgyzstan",
    vamPonravitsyaKR: "You will like Kyrgyzstan",
    stanteChastyuEtogo: "Be a part of this journey",
    nashPrekrasniy: "Our beautiful Kyrgyzstan",
    poehali: "Let's GO!",
  },
  // Arabic translations
  ar: {
    "app-title": "تطبيقي المطبق",
    lead: "أهلاً بك في مكاني الصغير على النت.",
  },
};
// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
  document
    // Find all elements that have the key attribute
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
});
// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[localStorage.getItem("locale")][key];
  element.innerText = translation;
}

// Attach an event handler to the button click event
$("#enButton").on("click", function () {
  // Change the value of the variable
  window.localStorage.setItem("locale", "en");

  window.location.reload();
  // Output the new value
  console.log(locale);
});

$("#ruButton").on("click", function () {
  // Change the value of the variable
  window.localStorage.setItem("locale", "ru");

  window.location.reload();
  // Output the new value
  console.log(locale);
});

$(document).ready(function () {
  // Function to initialize the map
  function initMap() {
    // Coordinates for the desired location
    var location = { lat: 37.7749, lng: -122.4194 };

    // Create a new map instance
    var map = new google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 13,
    });

    // Add a marker to the map
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Your Location",
    });
  }

  // Call the initMap function when the document is ready
  initMap();
});

console.log(google);

$(document).ready(function () {
  var center = { lat: 37.7749, lng: -122.4194 };

  var map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 12,
  });

  var searchInput = document.getElementById("search-input");
  var searchBox = new google.maps.places.SearchBox(searchInput);

  map.addListener("bounds_changed", function () {
    searchBox.setBounds(map.getBounds());
  });

  searchBox.addListener("places_changed", function () {
    var places = searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }

    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (place) {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      bounds.extend(place.geometry.location);
    });

    map.fitBounds(bounds);
  });
});
