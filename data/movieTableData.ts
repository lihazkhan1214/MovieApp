const movies = [
    {
      time: "16:58",
      channel: "Pink Premium",
      title: "Public Enemies",
      imageUrl:
        "https://mojtv.rs/images/2023-09/9c06ddbf-8075-4eb0-bc7b-35f1e0.jpg",
      description:
        "An FBI agent is on the hunt for the rulers of American underground crime.",
      year: 2009,
      schedule:'9/25/2024',
      genres: ["crime", "drama"],
      cast: [
        "Christian Bale",
        "Johnny Depp",
        "Channing Tatum",
        "Stephen Graham",
        "Billy Crudup",
      ],
    },
    {
      time: "17:12",
      channel: "Pink Action",
      title: "Blade Runner 2049",
      imageUrl:
        "https://mojtv.rs/images/2017-07/881834f4-049a-4934-aa60-fdee7b.jpg",
      description:
        "A young police officer uncovers a secret that could forever change the fate of humanity.",
      year: 2017,
      schedule:'9/25/2024',
      genres: ["science fiction", "thriller"],
      cast: [
        "Ryan Gosling",
        "Robin Wright",
        "Ana de Armas",
        "Harrison Ford",
        "Jared Leto",
      ],
    },
    {
      time: "17:24",
      channel: "Red TV",
      title: "The Bourne Supremacy",
      imageUrl:
        "https://mojtv.rs/images/0f865f3a-83cc-4f18-bd4c-1db58d9e4fa3.jpg",
      description:
        "A former professional assassin must confront his mysterious past.",
      year: 2004,
      schedule:'9/25/2024',
      genres: ["adventure", "action", "thriller"],
      cast: [
        "Matt Damon",
        "Franka Potente",
        "Brian Cox",
        "Julia Stiles",
        "Karl Urban",
      ],
    },
    {
      time: "18:05",
      channel: "Cinestar Premiere 2",
      title: "Devotion",
      imageUrl:
        "https://mojtv.rs/images/2023-04/e8df3a78-fd8d-49ac-9231-60f8b8.jpg",
      description: "In a forgotten American war, they wrote history.",
      year: 2022,
      schedule:'9/25/2024',
      genres: ["war", "action", "drama"],
      cast: [
        "Jonathan Majors",
        "Glen Powell",
        "Christina Jackson",
        "Daren Kagasoff",
        "Joe Jonas",
      ],
    },

    {
      time: "18:25",
      channel: "Cinestar TV",
      title: "Can You Keep a Secret?",
      imageUrl:
        "https://mojtv.rs/images/2020-10/b2573be3-cca7-4fa0-84bd-ab5808.jpg",
      description: "Sometimes telling the truth isn't the smartest idea.",
      year: 2019,
      schedule:'9/25/2024',
      genres: ["romance", "comedy"],
      cast: [
        "Alexandra Daddario",
        "Sunita Mani",
        "Tyler Hoechlin",
        "Kimiko Glenn",
      ],
    },
    {
      time: "18:26",
      channel: "PINK Crime & Mystery",
      title: "The Big Lebowski",
      imageUrl:
        "https://mojtv.rs/images/0dfa0c22-254f-4281-b6d6-0fd9f94a16cb.jpg",
      description:
        "A slacker's boring daily life is disrupted by two dangerous men who want to collect a debt.",
      year: 1998,
      schedule:'9/25/2024',
      genres: ["crime", "thriller", "comedy"],
      cast: [
        "Jeff Bridges",
        "John Goodman",
        "Julianne Moore",
        "Steve Buscemi",
        "David Huddleston",
      ],
    },
    {
      time: "18:30",
      channel: "Cinestar Fantasy",
      title: "Asterix & Obelix vs Caesar",
      imageUrl:
        "https://mojtv.rs/images/8689f9bb-7796-4841-ace7-25e1d158bc63.jpg",
      description:
        "A small Gallic village is the only place resisting the attacks of the Roman Empire.",
      year: 1999,
      schedule:'9/25/2024',
      genres: ["family", "adventure", "comedy"],
      cast: [
        "Christian Clavier",
        "Gérard Depardieu",
        "Roberto Benigni",
        "Michel Galabru",
        "Claude Piéplu",
      ],
    },
    {
      time: "18:46",
      channel: "PINK Thriller",
      title: "Men Of War",
      imageUrl:
        "https://mojtv.rs/images/6b00fdf2-f37b-4146-bfcc-2b0decb69ddc.jpg",
      description:
        "A mining corporation sends a group of mercenaries to an island in the South Seas to secure a mining site.",
      year: 1994,
      schedule:'9/25/2024',
      genres: ["war", "action", "drama"],
      cast: [
        "Dolph Lundgren",
        "Charlotte Lewis",
        "B.D. Wong",
        "Anthony John (Tony) Denison",
        "Tim Guinee",
      ],
    },
    {
      time: "18:55",
      channel: "TV 1000",
      title: "Dirty Dancing",
      imageUrl:
        "https://mojtv.rs/images/9602e99e-605f-47e8-8a5f-2ea0ca2518d1.jpg",
      description:
        "A teenager is mesmerized by dance moves and falls in love with her experienced instructor.",
      year: 1987,
      schedule:'9/25/2024',
      genres: ["music", "romance", "drama"],
      cast: [
        "Jennifer Grey",
        "Patrick Swayze",
        "Jerry Orbach",
        "Cynthia Rhodes",
        "Jack Weston",
      ],
    },
    {
        time: "08:57",
        channel: "HBO",
        title: "Mr. Turner",
        imageUrl: 'https://mojtv.rs/images/86c41a60-09a6-41af-8975-66d8fb4752f1.jpg',
        description: "The story of the last years of famous British painter J.M.W. Turner.",
        year: 2014,
        schedule:'9/25/2024',
        genres: ["historical", "biographical", "drama"],
        cast: ["Timothy Spall", "Paul Jesson", "Dorothy Atkinson", "Marion Bailey", "Karl Johnson"]
      },
      {
        time: "09:06",
        channel: "Pink Movies",
        title: "Hard Time: The David Milgaard Story",
        imageUrl: 'https://mojtv.rs/images/ea10a63f-1eb6-45f6-b6c2-47c734ba1e9c.jpg',
        description: "Young David spends half his life in prison due to a wrongful conviction.",
        year: 1999,
        schedule:'9/25/2024',
        genres: ["biographical", "drama"],
        cast: ["Ian Tracey", "Gabrielle Rose", "Tom Melissis"]
      },
      {
        time: "09:30",
        channel: "Pink Comedy",
        title: "My Lucky Elephant",
        imageUrl: 'https://mojtv.rs/images/a04eb2cc-6750-4276-a5d2-7466726262df.jpg',
        description: "A touching story of friendship between a lonely boy and a talented elephant.",
        year: 2013,
        schedule:'9/25/2024',
        genres: ["family", "adventure", "drama"],
        cast: ["First Khunchan", "Thanyarat Praditthaen", "Charlie Sungkawess", "Wallop Terathong"]
      },
      {
        time: "09:45",
        channel: "Pink Film",
        title: "We Are Not Angels 2",
        imageUrl: 'https://mojtv.rs/images/fd083fc7-b513-4eba-9b9b-f4af97a33aaf.jpg',
        description: "A playboy and a possessive father of a teenage girl try to handle her many suitors.",
        year: 2005,
        schedule:'9/25/2024',
        genres: ["comedy"],
        cast: ["Mirka Vasiljević", "Nikola Kojo", "Srđan Todorović", "Zoran Cvijanović", "Uroš Djurić"]
      },
      {
        time: "09:47",
        channel: "Pink Action",
        title: "A Breed Apart",
        imageUrl: 'https://mojtv.rs/images/45a1d438-5958-49db-90b2-a6f72cf5385e.jpg',
        description: "A protector of rare eagles clashes with a mercenary trying to steal their eggs.",
        year: 1984,
        schedule:'9/25/2024',
        genres: ["action"],
        cast: ["Rutger Hauer", "Powers Boothe", "Kathleen Turner", "Donald Pleasence", "Brion James"]
      },
      {
        time: "10:00",
        channel: "Nova Max",
        title: "Get Santa",
        imageUrl: 'https://mojtv.rs/images/1ca38ed3-76a5-4d12-8a6f-59aac5a9838c.jpg',
        description: "A father and son team up to save Christmas.",
        year: 2014,
        schedule:'9/25/2024',
        genres: ["family", "comedy"],
        cast: ["Warwick Davis", "Rafe Spall", "Jim Broadbent", "Nonso Anozie"]
      },
      {
        time: "10:00",
        channel: "PINK Thriller",
        title: "Paranoid Park",
        imageUrl: 'https://mojtv.rs/images/78978bcb-3ba7-4831-8d02-4de53debbbee.jpg',
        description: "A teenager's novel about his adventures reveals details of a night watchman's murder.",
        year: 2007,
        schedule:'9/25/2024',
        genres: ["crime", "thriller", "drama"],
        cast: ["Gabe Nevins", "Daniel Liu", "Jake Miller", "Taylor Momsen", "Lauren McKinney"]
      },
      {
        time: "10:00",
        channel: "PINK Crime & Mystery",
        title: "The Brooklyn Banker",
        imageUrl: 'https://mojtv.rs/images/2019-10/fc4aff4f-9df2-4508-b08f-7aaac3.jpg',
        description: "A mobster recruits a banker with a photographic memory in a quest for power.",
        year: 2016,
        schedule:'9/25/2024',
        genres: ["action", "drama", "comedy"],
        cast: ["Troy Garity", "Paul Sorvino", "David Proval", "Elizabeth Masucci"]
      },
      {
        time: "10:09",
        channel: "Pink Classic",
        title: "Death Wish",
        imageUrl: 'https://mojtv.rs/images/b81466b1-0c76-4013-92fd-e4f1542c1d96.jpg',
        description: "A peaceful architect decides to rid the city of crime after his wife is murdered.",
        year: 1974,
        schedule:'9/25/2024',
        genres: ["crime", "action", "drama"],
        cast: ["Charles Bronson", "Hope Lange", "Vincent Gardenia"]
      },
      {
        time: "10:10",
        channel: "Cinestar Premiere 2",
        title: "Shaun the Sheep",
        imageUrl: 'https://mojtv.rs/images/65b79cdf-c8a2-437a-b4d6-3eea4d19549a.jpg',
        description: "A playful sheep decides to take a day off from life on the farm.",
        year: 2015,
        schedule:'9/25/2024',
        genres: ["family", "animated", "adventure"],
        cast: ["Justin Fletcher", "John Sparkes", "Omid Djalili", "Richard Webber", "Kate Harbour"]
      },
      {
        time: "10:40",
        channel: "Cinemax 2",
        title: "Stories from the Chestnut Woods",
        imageUrl: 'https://mojtv.rs/images/2023-11/ce4e0880-983b-415c-a840-af59a6.jpg',
        description: "The feature debut of a young Slovenian director.",
        year: 2019,
        schedule:'9/25/2024',
        genres: ["drama"],
        cast: ["Massimo De Francovich", "Ivana Roščić", "Giusi Merli", "Tomi Janežič", "Anita Kravos"]
      },
      {
        time: "10:55",
        channel: "Cinestar TV Comedy",
        title: "It's a Disaster",
        imageUrl: 'https://mojtv.rs/images/3f26d24c-3298-44ea-8c14-b2bf80204b6a.jpg',
        description: "Four couples are trapped in a house as the world outside comes to an end.",
        year: 2012,
        schedule:'9/25/2024',
        genres: ["drama", "comedy"],
        cast: ["Rachel Boston", "Laura Adkin", "Kevin M. Brennan", "David Cross", "America Ferrera"]
      },
      {
        time: "11:00",
        channel: "Cinemania",
        title: "After the Ball",
        imageUrl: 'https://mojtv.rs/images/aa2fe9c6-1ff9-482b-be12-fea6d59f1fe0.jpg',
        description: "The most famous fairy tale in modern attire!",
        year: 2015,
        schedule:'9/25/2024',
        genres: ["comedy"],
        cast: ["Portia Doubleday", "Marc-André Grondin", "Chris Noth", "Lauren Holly", "Natalie Krill"]
      },
      {
        time: "11:00",
        channel: "PINK SC-FI & Fantasy",
        title: "Arctic Blast",
        imageUrl: 'https://mojtv.rs/images/5f72c403-b047-4b7e-9b13-320c63f9ecd9.jpg',
        description: "A wave of extremely cold air approaches Earth, leading to catastrophic consequences.",
        year: 2010,
        schedule:'9/25/2024',
        genres: ["science fiction"],
        cast: ["Michael Shanks", "Alexandra Davies", "Saskia Hampele", "Indiana Evans"]
      },
      {
        time: "11:00",
        channel: "Pink Action",
        title: "A Breed Apart",
        imageUrl: 'https://mojtv.rs/images/45a1d438-5958-49db-90b2-a6f72cf5385e.jpg',
        description: "A protector of rare eagles clashes with a mercenary trying to steal their eggs.",
        year: 1984,
        schedule:'9/25/2024',
        genres: ["action"],
        cast: ["Rutger Hauer", "Powers Boothe", "Kathleen Turner", "Donald Pleasence", "Brion James"]
      },
      {
        time: "11:15",
        channel: "Pink Film",
        title: "Brothers by Mother",
        imageUrl: 'https://mojtv.rs/images/ec346bc2-dce5-41e2-abd1-62b2e7061731.jpg',
        description: "Two brothers, one Croatian and one Serbian, grow up in the harsh Knin landscape.",
        year: 1988,
        schedule:'9/25/2024',
        genres: ["drama"],
        cast: ["Žarko Laušević", "Slavko Štimac", "Dragomir Čumić", "Mira Furlan", "Slobodan Ninković"]
      },
      {
        time: "11:23",
        channel: "HBO",
        title: "Dunkirk",
        imageUrl: 'https://mojtv.rs/images/2017-06/6754c112-055c-4a15-a540-93b3a9.jpg',
        description: "The astonishing true story of the Battle of Dunkirk.",
        year: 2017,
        schedule:'9/25/2024',
        genres: ["historical", "war", "action", "drama"],
        cast: ["Tom Hardy", "Kenneth Branagh", "Cillian Murphy", "Mark Rylance", "Harry Styles"]
      },
      {
        time: "11:30",
        channel: "Cinestar Action & Thriller",
        title: "Now You See Me 2",
        imageUrl: 'https://mojtv.rs/images/59597527-d0c2-4e3f-b76f-8d72ff2b4013.jpg',
        description: "Atlas and the team return to the stage to take down a ruthless tech magnate.",
        year: 2016,
        schedule:'9/25/2024',
        genres: ["action", "thriller", "comedy"],
        cast: ["Jesse Eisenberg", "Woody Harrelson", "Dave Franco", "Lizzy Caplan", "Michael Caine"]
      },
      {
        time: "11:33",
        channel: "Pink Comedy",
        title: "Lady Bird",
        imageUrl: 'https://mojtv.rs/images/2018-02/7ba31ede-feba-4c4a-a8b1-a89306.jpg',
        description: "A look at the life of an artistically inclined teenager from Sacramento.",
        year: 2017,
        schedule:'9/25/2024',
        genres: ["drama", "comedy"],
        cast: ["Saoirse Ronan", "Laurie Metcalf", "Tracy Letts", "Lucas Hedges"]
      },
      {
        time: "11:35",
        channel: "TV 1000",
        title: "Teenage Mutant Ninja Turtles: Out of the Shadows",
        imageUrl: 'https://mojtv.rs/images/36b37e9b-5817-40c1-86a5-610af6be3a4f.jpg',
        description: "The famous turtles return to save the city from a tremendous threat!",
        year: 2016,
        schedule:'9/25/2024',
        genres: ["adventure", "action", "comedy"],
        cast: ["Megan Fox", "Will Arnett", "Stephen Amell", "Alan Ritchson", "Noel Fisher"]
      },
      {
        time: "11:45",
        channel: "Cinestar Premiere 1",
        title: "The Light Between Oceans",
        imageUrl: 'https://mojtv.rs/images/2017-10/e6d3358c-6dc6-4650-962c-1cb46f.jpg',
        description: "A touching story that reveals the true meaning of family.",
        year: 2016,
        schedule:'9/25/2024',
        genres: ["romance", "drama"],
        cast: ["Michael Fassbender", "Alicia Vikander", "Rachel Weisz", "Florence Clery"]
      },
  ];


  export default movies