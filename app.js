/* ============================================================
   ARTWORK SHOWCASE — Application Logic
   ============================================================ */

// ---------- Artwork Data ----------
const artworks = [
  {
    id: 1,
    title: 'The Smiling Worker',
    artist: 'Oliver Tong',
    category: 'painting',
    medium: 'Acrylic Painting',
    year: '2024',
    size: '16 x 14',
    image: 'images/smiling_worker.jpeg',
    description:
      'At home, I regularly saw a UPS worker driving along our street and delivering packages to the surrounding homes. Whether it was raining or sunny, windy or snowing, he always seemed to greet each delivery with a smile. I noticed the lines around his eyes when he smiled. They made me wonder how many houses he had visited over the years and how many people he had met along the way.\n\n' +
      'I created this acrylic painting to capture his warm smile and the lines around his eyes. I wanted those lines to show the years of work and experience behind his smile.\n\n' +
      'Through this painting, I want viewers to appreciate the dignity and quiet joy found in everyday work. His smile reminds me that ordinary moments can leave a lasting impression on the people around us.',
  },
  {
    id: 2,
    title: 'The Multi-Tasker',
    artist: 'Oliver Tong',
    category: 'drawing',
    medium: 'Pencil Sketch',
    year: '2024',
    size: '22 x 16',
    image: 'images/multi_tasker.jpeg',
    description:
      'I created this pencil drawing to show what it feels like to have too many things competing for your attention. The figure has multiple hands, each occupied with a different task, reflecting the many things we try to handle at the same time.\n\n' +
      'I varied the finger positions and gestures so that the hands seem to be moving in different directions, creating a feeling of constant activity. Together, the gestures make the drawing feel crowded and restless. The heavy wrinkles across the forehead suggest the stress of trying to keep up with everything.\n\n' +
      'I think the figure reflects something many of us experience: trying to keep up with work, school, relationships, and everyday responsibilities while feeling that there is never enough time. I wanted the drawing to capture that feeling of being pulled in several directions.',
  },
  {
    id: 3,
    title: 'Crying Woman',
    artist: 'Oliver Tong',
    category: 'mixed-media',
    medium: 'Mixed Media',
    year: '2024',
    size: '12 x 10',
    image: 'images/crying_woman.jpeg',
    description:
      'This mixed-media artwork was inspired by a documentary about water shortages and prolonged drought in several parts of Africa and how they affect the land, crops, and people who depend on them. As the earth becomes dry and cracked, crops fail and harvests disappear, making it difficult for families to grow enough food.\n\n' +
      'I used tissue stained with yellow tones to represent the dry, cracked earth. Its rough texture makes the surface look dry and fragile, like land that has been dried out over time. I used acrylic paint to portray a Black woman with tears in her eyes, representing the grief of living through a crisis that affects something as basic as access to water.\n\n' +
      'Through this work, I want viewers to think about what it means for people to live without reliable access to water. I also hope the painting encourages viewers to learn more about the water crisis and the people affected by it.',
  },
  {
    id: 4,
    title: 'Molding Life From Clay',
    artist: 'Oliver Tong',
    category: 'painting',
    medium: 'Acrylic Paint',
    year: '2025',
    size: '20 x 16',
    image: 'images/molding_life_from_clay.jpeg',
    description:
      'This acrylic painting depicts a sculptor carefully shaping a small, delicate jar from clay. Two hands, their fingers covered in clay, hold the unfinished piece for close inspection. In the background, the rotating machinery adds movement to the scene and contrasts with the slow, careful movements of the hands.\n\n' +
      'I wanted to show how a simple piece of clay can gradually take shape through the artist’s hands. The rough, earthy surface of the clay contrasts with the delicate form of the jar, showing how much can change through patience and careful work.\n\n' +
      'I want viewers to appreciate the skill and patience involved in shaping something by hand. I also want them to notice how a simple material can become something useful and beautiful through the creative process.',
  },
  {
    id: 5,
    title: 'Inner Vision',
    artist: 'Oliver Tong',
    category: 'painting',
    medium: 'Acrylic Oil Painting',
    year: '2025',
    size: '24 x 18',
    image: 'images/sightless_wisdom_endures.jpeg',
    description:
      'This acrylic-oil painting portrays a blind man with a long beard sitting in quiet contemplation. I used dark tones in his eyes, beard, and hair to create contrast with his skin and emphasize the quiet mood of the portrait. His gray clothing blends into the dark gray background, giving the painting a subdued and reflective feeling.\n\n' +
      'His calm expression and composed posture made me think about the different ways people experience and understand the world. Although sight is absent, there is still a strong sense of awareness and presence in his expression. I wanted to explore the idea that seeing is not limited to what we perceive with our eyes. Memory, experience, and emotion can also shape how we understand the world.\n\n' +
      'Through this painting, I hope viewers will think about the different ways we experience the world beyond physical sight.',
  },
  {
    id: 6,
    title: 'Man Covering Face',
    artist: 'Oliver Tong',
    category: 'painting',
    medium: 'Acrylic Oil Painting',
    year: '2025',
    size: '24 x 20',
    image: 'images/man_covering_face.jpeg',
    description:
      'An evocative acrylic oil painting capturing a moment of vulnerability and introspection. ' +
      'The gesture of covering the face invites the viewer to question the hidden emotions and the stories left untold.',
  },
  {
    id: 7,
    title: 'Longing for the Ocean',
    artist: 'Oliver Tong',
    category: 'drawing',
    medium: 'Colored Pencil Drawing',
    year: '2024',
    size: '16 x 12',
    image: 'images/longing_for_the_ocean.jpeg',
    description:
      'In this colored pencil drawing, I depict a young woman with long flaxen hair gazing at a framed image of blue ocean waves and colorful seashells. I designed her braids to echo the movement of the waves, with the strands weaving together like ripples across the sea. The connection between her hair and the ocean suggests her desire to be somewhere peaceful and close to the sea.\n\n' +
      'I began this drawing as a way to challenge myself to capture the texture, movement, and highlights of hair with colored pencils. As I worked on the braids, I noticed that their flowing shapes reminded me of ocean waves, and the idea of connecting the two became part of the drawing.\n\n' +
      'Through this piece, I hope viewers notice the relationship between the braids and the waves and sense the woman’s longing for the sea.',
  },
  {
    id: 8,
    title: 'AI Hand',
    artist: 'Oliver Tong',
    category: 'sculpture',
    medium: 'Sculpture',
    year: '2022',
    size: '8 x 6 x 4',
    image: 'images/AI_hand.jpeg',
    description:
      'A sculpture created during my middle school years, exploring the relationship between human creativity and artificial intelligence. ' +
      'This piece marks my early experimentation with three-dimensional forms and conceptual art.',
  },
  {
    id: 9,
    title: 'Minimalist and Modern',
    artist: 'Oliver Tong',
    category: 'architecture',
    medium: 'Pencil Architecture & Design',
    year: '2025',
    size: '16 x 22',
    image: 'images/minimalist_and_modern.jpeg',
    description:
      'A precise pencil rendering exploring minimalist architectural principles. ' +
      'This design focuses on clean lines, balance, and the interplay of light and space in modern structures.',
  },
  {
    id: 10,
    title: 'Constitution Day Poster 1',
    artist: 'Oliver Tong',
    category: 'drawing',
    medium: 'Colored Pencil',
    year: '2025',
    size: '11 x 8',
    image: 'images/constitution_day_poster_design_1.jpeg',
    description:
      'A vibrant poster design celebrating the principles of the Constitution. ' +
      'This artwork was selected as a Finalist in the 2025 Constitution Day Poster Competition.',
  },
  {
    id: 11,
    title: 'Constitution Day Poster 2',
    artist: 'Oliver Tong',
    category: 'drawing',
    medium: 'Colored Pencil',
    year: '2022',
    size: '11 x 8',
    image: 'images/constitution_day_poster_design_2.jpeg',
    description:
      'An alternative poster design for Constitution Day, utilizing bold colors and symbolic imagery to convey civic values through artistic expression.',
  },
  {
    id: 12,
    title: 'Village Ramen',
    artist: 'Oliver Tong',
    category: 'painting',
    medium: 'Acrylic Oil Painting',
    year: '2026',
    size: '16 x 12',
    image: 'images/village_ramen.jpeg',
    description:
      'In this acrylic-oil painting, I depict a small ramen shop in a quiet village. The green doors, potted plants, and trees contrast with the clear blue sky, making the shop stand out against the surrounding landscape. I was drawn to the combination of these colors and the simple setting of the shop.\n\n' +
      'Although the building is modest and slightly weathered, I liked the character that came from its age and surroundings. What caught my attention was the greenery, open sky, and welcoming feeling of the place. I wanted to capture the feeling of a small local shop that has become part of its surroundings.\n\n' +
      'Through this painting, I hope viewers can sense the peacefulness of the village and imagine what it might be like to spend an ordinary day there. To me, the shop shows how a simple place can become memorable because of its surroundings and the feeling it creates.',
  },
  {
    id: 13,
    title: 'Yawning Kitten',
    artist: 'Oliver Tong',
    category: 'drawing',
    medium: 'Colored Pencil',
    year: '2024',
    size: '18 x 16',
    image: 'images/yawning_kitten.jpeg',
    description:
      'A charming colored pencil drawing of a kitten mid-yawn. ' +
      'The detailed texture of the fur and the wide expression capture the innocence and playfulness of the subject.',
  },
  {
    id: 14,
    title: 'The Little Girl and Her Mom',
    artist: 'Oliver Tong',
    category: 'drawing',
    medium: 'Pencil Sketch',
    year: '2024',
    size: '11 x 14',
    image: 'images/the_little_girl_and_her_mom.jpeg',
    description:
      'A tender pencil sketch capturing a quiet moment of connection between a mother and her daughter. ' +
      'The delicate shading emphasizes the emotional bond and the softness of the scene.',
  },
  {
    id: 15,
    title: 'Unity in Vibrant Peace',
    artist: 'Oliver Tong',
    category: 'drawing',
    medium: 'Colored Pencil',
    year: '2025',
    size: '18 x 24',
    image: 'images/unity_in_vibrant_peace.jpeg',
    description:
      'A dynamic colored pencil composition that uses bold hues and fluid forms to symbolize harmony and togetherness. ' +
      'The vibrant energy of the piece reflects a hopeful vision of peace.',
  },
  {
    id: 16,
    title: 'A Dose of Strength',
    artist: 'Oliver Tong',
    category: 'mixed-media',
    medium: 'Acrylic Paint & Colored Pencil',
    year: '2025',
    size: '18 x 24',
    image: 'images/a_dose_of_strength.jpeg',
    description:
      'A powerful mixed-media work combining the boldness of acrylics with the delicate detail of colored pencil. ' +
      'The piece explores themes of resilience and inner fortitude.',
  },
  {
    id: 17,
    title: 'Two Souls Breathing Together',
    artist: 'Oliver Tong',
    category: 'drawing',
    medium: 'Pencil Sketch',
    year: '2025',
    size: '18 x 14',
    image: 'images/two_souls_breathing_together.jpeg',
    description:
      'An intimate pencil sketch capturing the profound connection between two beings. ' +
      'The soft shading and fluid lines evoke a sense of shared breath and unity.',
  },
  {
    id: 18,
    title: 'Crimson Cramming',
    artist: 'Oliver Tong',
    category: 'drawing',
    medium: 'Colored Pencil',
    year: '2025',
    size: '24 x 18',
    image: 'images/crimson_cramming.jpeg',
    description:
      'This colored pencil artwork shows a high school student studying late at night, surrounded by practice sheets and stacks of books. I used deep crimson tones on his face, neck, and hands to emphasize his exhaustion and tension. In the background, Math and English practice sheets and a thick stack of brightly colored books fill the space around him, making the amount of work feel almost impossible to ignore.\n\n' +
      'The artwork is inspired by my own experience during my junior year of high school. I wanted to capture the exhaustion of studying late into the night while still feeling that I had to keep going because there was always another assignment or exam to prepare for.\n\n' +
      'Through this piece, I hope viewers can relate to the pressure of trying to do well in school while also dealing with exhaustion and the feeling that there is never enough time.',
  },
  {
    id: 19,
    title: 'Blonde Aspiration',
    artist: 'Oliver Tong',
    category: 'painting',
    medium: 'Acrylic Paint',
    year: '2024',
    size: '12 x 16',
    image: 'images/blonde_aspiration.jpeg',
    description:
      'An expressive acrylic portrait capturing a look of hope and determination. ' +
      'The warm tones and confident brushstrokes reflect youthful ambition.',
  },
  {
    id: 20,
    title: 'Day Dream Girl',
    artist: 'Oliver Tong',
    category: 'drawing',
    medium: 'Colored Pencil',
    year: '2025',
    size: '18 x 14',
    image: 'images/day_dream_girl.jpeg',
    description:
      'A whimsical colored pencil drawing capturing a moment of reverie. ' +
      'The soft colors and distant gaze suggest a mind wandering through imaginary worlds.',
  },
  {
    id: 21,
    title: 'Study with a Cup of Tea',
    artist: 'Oliver Tong',
    category: 'drawing',
    medium: 'Colored Pencil',
    year: '2025',
    size: '16 x 14',
    image: 'images/study_with_a_cup_of_tea.jpeg',
    description:
      'A cozy and intimate colored pencil drawing depicting a quiet moment of study accompanied by a warm cup of tea. ' +
      'The scene evokes a sense of focus, comfort, and the simple pleasures of learning.',
  },

  {
    id: 29,
    title: 'Concept Car',
    artist: 'Oliver Tong',
    category: 'digital',
    medium: 'Digital Art',
    year: '2025',
    size: 'Digital',
    image: 'images/car2_lol_sam_result.png',
    description:
      'An experimental Human-In-The-Loop AI generated digital artwork from my seminar work "Object-Aware Image Reconstruction: Comparative Strategies for Selective Enhancement in Latent Diffusion Models"',
  },
  {
    id: 30,
    title: 'Whimsical Cat',
    artist: 'Oliver Tong',
    category: 'digital',
    medium: 'Digital Art',
    year: '2025',
    size: 'Digital',
    image: 'images/cat2_lol_sam_result.png',
    description:
      'An experimental Human-In-The-Loop AI generated digital artwork from my seminar work "Object-Aware Image Reconstruction: Comparative Strategies for Selective Enhancement in Latent Diffusion Models"',
  },
  {
    id: 31,
    title: 'Majestic Horse',
    artist: 'Oliver Tong',
    category: 'digital',
    medium: 'Digital Art',
    year: '2025',
    size: 'Digital',
    image: 'images/horse2_lol_sam_result.png',
    description:
      'An experimental Human-In-The-Loop AI generated digital artwork from my seminar work "Object-Aware Image Reconstruction: Comparative Strategies for Selective Enhancement in Latent Diffusion Models"',
  },
  {
    id: 32,
    title: 'Wise Old Man',
    artist: 'Oliver Tong',
    category: 'printmaking',
    medium: 'Ink on Paper',
    year: '2025',
    size: '16 x 14',
    image: 'images/old_man.jpeg',
    description:
      'A detailed ink on paper print capturing the deep character and weathered wisdom of an elderly man, exploring textures and contrast across the wood grain.',
  },
  {
    id: 33,
    title: 'The Witch',
    artist: 'Oliver Tong',
    category: 'printmaking',
    medium: 'Ink on Paper',
    year: '2024',
    size: '16 x 14',
    image: 'images/the_witch.jpeg',
    description:
      'A captivating ink on paper print depicting a witch, created with intricate detail. This artwork received an Honorable Mention in the 2024 NYC Scholastic Art & Writing Awards.',
  },
  {
    id: 34,
    title: 'Man and Mountain',
    artist: 'Oliver Tong',
    category: 'painting',
    medium: 'Oil Painting',
    year: '2026',
    size: '24 x 18',
    image: 'images/Man_and_mountain.jpeg',
    description:
      'In this oil painting, I depict a weary man seated before a range of jagged mountains, with an expansive chain of peaks stretching across the distant horizon. He leans forward with his head resting on his clasped hands, his eyes gazing slightly upward. His posture suggests exhaustion to me, but also a moment of stopping to reflect.\n\n' +
      'I used rich brushstrokes and layered textures to emphasize the wrinkles on his face and echo the rough, broken surfaces of the mountains. The man and the mountains are both marked by time and hardship, creating a connection between the figure and the landscape.\n\n' +
      'I was interested in the idea that difficult experiences can shape us over time, just as wind and weather shape a mountain. Through this painting, I wanted to show the man not as separate from the landscape, but as someone whose experience is reflected in it. I hope viewers can recognize something familiar in his expression and think about their own moments of exhaustion, reflection, and perseverance.',
  },
  {
    id: 35,
    title: 'Sea Shell',
    artist: 'Oliver Tong',
    category: 'drawing',
    medium: 'Charcoal on Paper',
    year: '2026',
    size: '18 x 24',
    image: 'images/sea_shell.jpeg',
    description:
      'In this charcoal-on-paper drawing, I depict a cloth arranged with objects inspired by the sea: a small wooden box marked with a silver anchor, two dark rocks beside it, and two pale seashells in the foreground. I created this work to explore how charcoal could capture the shapes, textures, and subtle contrasts of still-life objects.\n\n' +
      'The folds and wrinkles of the cloth introduced a sense of movement and reminded me of waves. The weathered wooden box and worn silver anchor made me think of age and memories connected to the sea, while the dark rocks and seashells strengthen that connection.\n\n' +
      'Together, these objects remind me of an earlier time when sailing was a way of life. Through this drawing, I wanted to capture not only the textures of the objects but also a quiet sense of history and nostalgia.',
  },
];

const earlyArtworks = [
  {
    id: 101,
    title: 'Little girl',
    artist: 'Oliver Tong',
    category: 'portraits',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Little_girl.jpg',
    description:
      'A playful early childhood drawing capturing a young girl in a moment of exploration and color.',
  },
  {
    id: 102,
    title: 'Girl and flower',
    artist: 'Oliver Tong',
    category: 'portraits',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Girl_and_flower.jpg',
    description:
      'A cheerful early drawing showing a girl with a flower, celebrating innocence and the joy of simple details.',
  },
  {
    id: 103,
    title: 'Girl portrait',
    artist: 'Oliver Tong',
    category: 'portraits',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Girl_portrait.jpg',
    description:
      'A portrait study from elementary school highlighting early curiosity about faces, expression, and character.',
  },
  {
    id: 104,
    title: "Girl's hair",
    artist: 'Oliver Tong',
    category: 'portraits',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Girl_s_hair.jpg',
    description:
      'An expressive early drawing focusing on hair detail and the playful style of a young artist.',
  },
  {
    id: 106,
    title: 'Singing chorus',
    artist: 'Oliver Tong',
    category: 'people-scenes',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '11 x 14',
    image: 'images_kindergarten_elementary/Singing_chorus.jpg',
    description:
      'An animated early sketch capturing a chorus of singers filled with movement and joyful energy.',
  },
  {
    id: 107,
    title: "Happy mother's day",
    artist: 'Oliver Tong',
    category: 'people-scenes',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Happy_mother_s_day.jpg',
    description:
      'A heartfelt early celebration drawing made for Mother’s Day, full of warmth and youthful sincerity.',
  },
  {
    id: 108,
    title: 'Happy new year 2020',
    artist: 'Oliver Tong',
    category: 'people-scenes',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Happy_new_year_2020.jpg',
    description:
      'A festive early classroom drawing welcoming the new year with cheerful lettering and celebration.',
  },
  {
    id: 109,
    title: 'Fountain',
    artist: 'Oliver Tong',
    category: 'people-scenes',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Fountain.jpg',
    description:
      'An imaginative early landscape drawing featuring a fountain and the storytelling charm of childhood scenes.',
  },
  {
    id: 110,
    title: 'Watchtower',
    artist: 'Oliver Tong',
    category: 'people-scenes',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Watchtower.jpg',
    description:
      'A dramatic early sketch of a watchtower, showing big ideas and early architectural curiosity.',
  },
  {
    id: 111,
    title: 'Mountain and lake',
    artist: 'Oliver Tong',
    category: 'people-scenes',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Mountain_and_lake.jpg',
    description:
      'A scenic early drawing combining mountains and water with lively composition and nostalgic charm.',
  },
  {
    id: 112,
    title: 'Mountain and waterfall',
    artist: 'Oliver Tong',
    category: 'people-scenes',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Mountain_and_waterfall.jpg',
    description:
      'An adventurous early study of landscape with cascading water and bold natural forms.',
  },
  {
    id: 113,
    title: 'Door and bike',
    artist: 'Oliver Tong',
    category: 'people-scenes',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Door_and_bike.jpg',
    description:
      'A charming early everyday scene showing a doorway, bicycle, and a playful sense of place.',
  },
  {
    id: 114,
    title: 'City',
    artist: 'Oliver Tong',
    category: 'people-scenes',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '11 x 14',
    image: 'images_kindergarten_elementary/City.jpg',
    description:
      'An early townscape filled with buildings and lively street energy from a young artist’s point of view.',
  },
  {
    id: 115,
    title: 'Horse',
    artist: 'Oliver Tong',
    category: 'animals',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '11 x 14',
    image: 'images_kindergarten_elementary/Horse.jpg',
    description:
      'A bold early animal drawing of a horse, celebrating movement, form, and imagination.',
  },
  {
    id: 116,
    title: 'Puppy',
    artist: 'Oliver Tong',
    category: 'animals',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Puppy.jpg',
    description:
      'A sweet early sketch of a puppy with playful proportions and expressive charm.',
  },
  {
    id: 117,
    title: 'Parrot',
    artist: 'Oliver Tong',
    category: 'animals',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '11 x 14',
    image: 'images_kindergarten_elementary/Parrot.jpg',
    description:
      'A colorful early animal study of a parrot, capturing bright feathers and lively personality.',
  },
  {
    id: 118,
    title: 'Cat',
    artist: 'Oliver Tong',
    category: 'animals',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/cat.jpg',
    description:
      'A charming early pet portrait of a cat, reflecting a young artist’s love for animals and simple forms.',
  },
  {
    id: 119,
    title: 'Fox',
    artist: 'Oliver Tong',
    category: 'animals',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '11 x 14',
    image: 'images_kindergarten_elementary/Fox.jpg',
    description:
      'An early animal illustration of a fox, using confident line work and expressive detail.',
  },
  {
    id: 120,
    title: 'Flying eagle',
    artist: 'Oliver Tong',
    category: 'animals',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Flying_eagle.jpg',
    description:
      'A dynamic early sketch of an eagle in flight, showing a young artist’s fascination with powerful animals.',
  },
  {
    id: 121,
    title: 'American bald eagle',
    artist: 'Oliver Tong',
    category: 'animals',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '11 x 14',
    image: 'images_kindergarten_elementary/American_bald_eagle.jpg',
    description:
      'A patriotic early drawing of an American bald eagle, focused on bold form and confident composition.',
  },
  {
    id: 122,
    title: 'Humming bird',
    artist: 'Oliver Tong',
    category: 'animals',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/humming_bird.jpg',
    description:
      'A delicate early drawing of a hummingbird capturing small details and playful movement.',
  },
  {
    id: 123,
    title: 'Butterfly and cat',
    artist: 'Oliver Tong',
    category: 'animals',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Butterfly_and_cat.jpg',
    description:
      'A whimsical early composition featuring a cat and butterfly, mixing animal charm with storytelling.',
  },
  {
    id: 124,
    title: 'Bird and eggs',
    artist: 'Oliver Tong',
    category: 'animals',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '11 x 14',
    image: 'images_kindergarten_elementary/Bird_and_eggs.jpg',
    description:
      'A gentle early nature study of a bird and its eggs, demonstrating careful observation and narrative detail.',
  },
  {
    id: 125,
    title: 'Nest of eggs',
    artist: 'Oliver Tong',
    category: 'nature',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '11 x 14',
    image: 'images_kindergarten_elementary/Nest_of_eggs.jpg',
    description:
      'A thoughtful early drawing of a nest and eggs, celebrating nature and the comfort of quiet scenes.',
  },
  {
    id: 126,
    title: 'Pumpkins',
    artist: 'Oliver Tong',
    category: 'nature',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '11 x 14',
    image: 'images_kindergarten_elementary/Pumpkins.jpg',
    description:
      'A seasonal early study of pumpkins, rich with texture and autumnal color exploration.',
  },
  {
    id: 127,
    title: 'Flowers in shoe',
    artist: 'Oliver Tong',
    category: 'nature',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Shoe_and_flower.jpg',
    description:
      'A creative early still life combining shoes and flowers, showing curiosity about everyday objects.',
  },
  {
    id: 128,
    title: 'Flowers in glass',
    artist: 'Oliver Tong',
    category: 'nature',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Flower_in_glass.jpg',
    description:
      'An early floral drawing focused on the delicate contrast between a flowers and their glass vessel.',
  },
  {
    id: 129,
    title: 'Flowers in basket',
    artist: 'Oliver Tong',
    category: 'nature',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Flower_in_basket.jpg',
    description:
      'A charming early still life of flowers arranged in a basket, with a warm, homespun feel.',
  },
  {
    id: 130,
    title: 'Flowers in pot',
    artist: 'Oliver Tong',
    category: 'nature',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '14 x 11',
    image: 'images_kindergarten_elementary/Flower_in_pot.jpg',
    description:
      'A joyful early sketch of a potted flowers, combining botanical observation with bright youthful energy.',
  },
  {
    id: 131,
    title: 'Flowers in jar',
    artist: 'Oliver Tong',
    category: 'nature',
    medium: 'Kindergarten Drawing',
    year: 'Early Years',
    size: '11 x 14',
    image: 'images_kindergarten_elementary/Flower_in_jar.jpg',
    description:
      'An early study of flowers in a jar, highlighting simple beauty and the experimental spirit of childhood art.',
  },
];

// ---------- DOM References ----------
const galleryGrid = document.getElementById('gallery-grid');
const filterBar = document.getElementById('filter-bar');
const earlyWorksGrid = document.getElementById('early-works-grid');
const earlyFilterBar = document.getElementById('early-filter-bar');
const lightbox = document.getElementById('lightbox');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxArtist = document.getElementById('lightbox-artist');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxMedium = document.getElementById('lightbox-medium');
const lightboxYear = document.getElementById('lightbox-year');
const lightboxSize = document.getElementById('lightbox-size');

let currentFilter = 'all';
let currentLightboxIndex = -1;
let filteredArtworks = [...artworks];
let filteredEarlyArtworks = [...earlyArtworks];
let currentArtworkList = [...artworks];

// ---------- Analytics helper (safe wrapper around gtag) ----------
function sendGtagEvent(eventName, params = {}) {
  if (typeof gtag === 'function') {
    try {
      gtag('event', eventName, params);
    } catch (err) {
      console.warn('gtag event failed', err);
    }
  }
}

// ---------- Render Gallery Cards ----------
function renderGallery(filter = 'all') {
  currentFilter = filter;
  const galleryList =
    filter === 'all'
      ? [...artworks]
      : artworks.filter((a) => a.category === filter);
  filteredArtworks = galleryList;
  currentArtworkList = galleryList;

  galleryGrid.innerHTML = '';

  galleryList.forEach((artwork, index) => {
    const card = document.createElement('div');
    card.className = 'artwork-card';
    card.dataset.index = index;
    card.innerHTML = `
      <div class="artwork-card__image-wrap">
        <img src="${artwork.image}" alt="${artwork.title} by ${artwork.artist}" loading="lazy" />
      </div>
      <div class="artwork-card__info">
        <span class="artwork-card__category">${artwork.category}</span>
        <h3 class="artwork-card__title">${artwork.title}</h3>
        <p class="artwork-card__description">${artwork.description}</p>
      </div>
      <div class="artwork-card__view-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      </div>
    `;
    card.addEventListener('click', () => {
      openLightbox(index, galleryList);
      sendGtagEvent('artwork_open', {
        artwork_id: artwork.id,
        artwork_title: artwork.title,
        category: artwork.category,
      });
    });
    galleryGrid.appendChild(card);
  });

  // Observe new cards for reveal animation
  observeCards();
}

function renderEarlyWorks(filter = 'all') {
  currentFilter = filter;
  const earlyList =
    filter === 'all'
      ? [...earlyArtworks]
      : earlyArtworks.filter((a) => a.category === filter);
  filteredArtworks = earlyList;
  filteredEarlyArtworks = earlyList;
  currentArtworkList = earlyList;

  earlyWorksGrid.innerHTML = '';

  earlyList.forEach((artwork, index) => {
    const card = document.createElement('div');
    card.className = 'artwork-card';
    card.dataset.index = index;
    card.innerHTML = `
      <div class="artwork-card__image-wrap">
        <img src="${artwork.image}" alt="${artwork.title} by ${artwork.artist}" loading="lazy" />
      </div>
      <div class="artwork-card__info">
        <span class="artwork-card__category">${artwork.category}</span>
        <h3 class="artwork-card__title">${artwork.title}</h3>
        <p class="artwork-card__description">${artwork.description}</p>
      </div>
      <div class="artwork-card__view-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      </div>
    `;
    card.addEventListener('click', () => {
      openLightbox(index, earlyList);
      sendGtagEvent('artwork_open', {
        artwork_id: artwork.id,
        artwork_title: artwork.title,
        category: artwork.category,
        collection: 'kindergarten-elementary',
      });
    });
    earlyWorksGrid.appendChild(card);
  });

  observeCards();
}

// ---------- Intersection Observer (Scroll Reveal) ----------
function observeCards() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger the animation
          const card = entry.target;
          const delay = parseInt(card.dataset.index, 10) * 100;
          setTimeout(() => card.classList.add('revealed'), delay);
          observer.unobserve(card);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.artwork-card').forEach((card) => {
    observer.observe(card);
  });
}

// ---------- Filter Buttons ----------
filterBar.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  filterBar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  renderGallery(btn.dataset.filter);
  sendGtagEvent('filter_select', { filter: btn.dataset.filter });
});

earlyFilterBar.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  earlyFilterBar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  renderEarlyWorks(btn.dataset.filter);
  sendGtagEvent('early_filter_select', { filter: btn.dataset.filter });
});

// ---------- Open Artwork By Title (from About links) ----------
function openArtworkByTitle(title) {
  // Reset filter to "all" so the artwork is visible
  filterBar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  const allBtn = filterBar.querySelector('[data-filter="all"]');
  if (allBtn) allBtn.classList.add('active');
  renderGallery('all');

  // Find the artwork index in the (now unfiltered) list
  const index = filteredArtworks.findIndex(
    (a) => a.title.toLowerCase() === title.toLowerCase()
  );

  if (index === -1) return;

  // Scroll to gallery, then open lightbox after a short delay
  const gallerySection = document.getElementById('gallery');
  if (gallerySection) {
    gallerySection.scrollIntoView({ behavior: 'smooth' });
  }

  setTimeout(() => openLightbox(index), 600);
}

// ---------- Filter Gallery By Category (from About links) ----------
function filterGalleryByCategory(category) {
  // Activate the matching filter button
  filterBar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  const targetBtn = filterBar.querySelector(`[data-filter="${category}"]`);
  if (targetBtn) targetBtn.classList.add('active');
  renderGallery(category);

  // Scroll to gallery
  const gallerySection = document.getElementById('gallery');
  if (gallerySection) {
    gallerySection.scrollIntoView({ behavior: 'smooth' });
  }

  sendGtagEvent('filter_select', { filter: category, source: 'about_link' });
}

// ---------- Lightbox ----------
function resetZoom() {
  const lightboxContent = document.querySelector('.lightbox__content');
  const zoomBtn = document.getElementById('lightbox-zoom');
  if (lightboxContent) {
    lightboxContent.classList.remove('is-zoomed');
  }
  if (zoomBtn) {
    zoomBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
      Zoom In
    `;
  }
}

function openLightbox(index, artworkList = currentArtworkList) {
  currentLightboxIndex = index;
  currentArtworkList = artworkList;
  const artwork = artworkList[index];

  lightboxImage.src = artwork.image;
  lightboxImage.alt = `${artwork.title} by ${artwork.artist}`;
  lightboxCategory.textContent = artwork.category;
  lightboxTitle.textContent = artwork.title;
  lightboxDescription.textContent = artwork.description;
  if (lightboxDescription) {
    lightboxDescription.scrollTop = 0;
    lightboxDescription.scrollLeft = 0;
  }
  lightboxMedium.textContent = artwork.medium;
  lightboxYear.textContent = artwork.year;
  lightboxSize.textContent = artwork.size;

  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  resetZoom();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  resetZoom();
}

function navigateLightbox(direction) {
  const total = currentArtworkList.length;
  currentLightboxIndex = (currentLightboxIndex + direction + total) % total;
  const artwork = currentArtworkList[currentLightboxIndex];

  lightboxImage.src = artwork.image;
  lightboxImage.alt = `${artwork.title} by ${artwork.artist}`;
  lightboxCategory.textContent = artwork.category;
  lightboxTitle.textContent = artwork.title;
  lightboxDescription.textContent = artwork.description;
  if (lightboxDescription) {
    lightboxDescription.scrollTop = 0;
    lightboxDescription.scrollLeft = 0;
  }
  lightboxMedium.textContent = artwork.medium;
  lightboxYear.textContent = artwork.year;
  lightboxSize.textContent = artwork.size;
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
lightboxNext.addEventListener('click', () => navigateLightbox(1));

const backToGalleryBtn = document.getElementById('lightbox-back');
if (backToGalleryBtn) {
  backToGalleryBtn.addEventListener('click', closeLightbox);
}

const fullResBtn = document.getElementById('lightbox-fullres');
if (fullResBtn) {
  fullResBtn.addEventListener('click', () => {
    // Open the current lightbox image in a new tab
    if (lightboxImage && lightboxImage.src) {
      window.open(lightboxImage.src, '_blank');
      // Analytics: full_resolution_view
      sendGtagEvent('full_resolution_view', {
        artwork_src: lightboxImage.src,
      });
    }
  });
}

const zoomBtn = document.getElementById('lightbox-zoom');
const lightboxContent = document.querySelector('.lightbox__content');

if (zoomBtn && lightboxContent) {
  zoomBtn.addEventListener('click', () => {
    const isNowZoomed = lightboxContent.classList.toggle('is-zoomed');
    if (isNowZoomed) {
      zoomBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
        </svg>
        Zoom Out
      `;
    } else {
      zoomBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
        Zoom In
      `;
    }
  });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
});

// ---------- Contact Form ----------
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = new FormData(e.target);

    // Replace this URL with your actual Formspree endpoint (e.g. https://formspree.io/f/xyza123)
    // For now, I'm setting a placeholder.
    const formspreeUrl = 'https://formspree.io/f/xojndzpp';

    fetch(formspreeUrl, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      // Analytics: contact form submitted successfully (no PII sent)
      sendGtagEvent('contact_form_submit', { method: 'formspree', success: true });
      // Show success notification regardless for demo purposes
      const notification = document.createElement('div');
      notification.className = 'notification';
      notification.textContent = 'Message Sent Successfully!';
      document.body.appendChild(notification);

      // Trigger animation
      setTimeout(() => notification.classList.add('show'), 10);

      // Return to gallery after 3 seconds
      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);

        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
        contactForm.reset();
      }, 3000);
    }).catch(error => {
      // Analytics: contact form submit failed
      sendGtagEvent('contact_form_submit', { method: 'formspree', success: false });
      console.error('Submission error:', error);
      alert('Oops! There was a problem sending your message.');
    });
  });

  // Clear button handler
  const clearBtn = document.getElementById('clear-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      contactForm.reset();
    });
  }

  // Floating Actions Handler
  const floatingActions = document.getElementById('floating-actions');
  if (floatingActions) {
    window.addEventListener('scroll', () => {
      // Show buttons after scrolling down 300px
      if (window.scrollY > 300) {
        floatingActions.classList.add('visible');
      } else {
        floatingActions.classList.remove('visible');
      }
    });
  }
}

// ---------- About Section: Scroll Reveal ----------
function observeAboutSection() {
  const aboutElements = document.querySelectorAll(
    '.about-section .about-image-col, .about-section .about-intro, .about-timeline__item'
  );

  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const siblings = [...aboutElements];
          const idx = siblings.indexOf(el);
          const delay = idx * 120;
          setTimeout(() => {
            el.classList.add('revealed');
          }, delay);
          aboutObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.15 }
  );

  aboutElements.forEach((el) => aboutObserver.observe(el));
}

// ---------- Initial Render ----------
renderGallery();
renderEarlyWorks();
observeAboutSection();
