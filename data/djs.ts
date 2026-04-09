// ============================================================
// ARTIST DATA
// Edit this file to update bios, profile images, videos, and music.
// ============================================================

export interface ArtistVideo {
  id: string;
  title: string;
  caption: string;
  src: string;
  poster: string;
  posterPosition?: string;
}

export interface ArtistTrack {
  id: string;
  title: string;
  src: string;
  note: string;
  artwork?: string;
}

export interface Artist {
  id: string;
  name: string;
  origin: string;
  bio: string;
  photo: string;
  photoPosition?: string;
  editorialImage?: string;
  tags: string[];
  additionalVideos: ArtistVideo[];
  tracks?: ArtistTrack[];
}

const artists: Artist[] = [
  {
    id: "wenshuai",
    name: "WENSHUAI",
    origin: "Ghent / China",
    bio: "Wenshuai moves between legal linguistics research in Ghent and Europe's underground dance floors with uncommon poise. Drawing on Chinese heritage and avant-techno pressure, she fractures ancestral melodies into a stark, future-facing club language. Featured by Marie Claire, she represents a generation of Asian creatives reshaping the conversation around intellect, femininity, and electronic music. Her sets feel cerebral, physical, and defiantly unclassifiable.",
    photo: "/assets/artists/wenshuai/profile.jpg",
    photoPosition: "center 28%",
    editorialImage: "/assets/artists/wenshuai/image-1.jpg",
    tags: ["Avant-Techno", "Chinese Motifs", "Cerebral Heat", "Underground Europe"],
    additionalVideos: [
      {
        id: "wenshuai-archive-1",
        title: "Wenshuai — Live Fragment I",
        caption: "A sharp collision of ritual atmosphere, vinyl instinct, and late-night pressure.",
        src: "/assets/videos/wenshuai/featured.mp4",
        poster: "/assets/artists/wenshuai/cover-1.jpg",
      },
      {
        id: "wenshuai-archive-2",
        title: "Wenshuai — Live Fragment II",
        caption: "Club energy refracted through texture-heavy, detail-driven sequencing.",
        src: "/assets/videos/wenshuai/archive-2.mp4",
        poster: "/assets/artists/wenshuai/image-10.jpg",
      },
      {
        id: "wenshuai-archive-3",
        title: "Wenshuai — Live Fragment III",
        caption: "A darker cut from the archive, balancing precision with physical force.",
        src: "/assets/videos/wenshuai/archive-3.mp4",
        poster: "/assets/artists/wenshuai/cover-4.jpg",
      },
      {
        id: "wenshuai-archive-4",
        title: "Wenshuai — Live Fragment IV",
        caption: "An intimate performance moment from the movement's visual memory.",
        src: "/assets/videos/wenshuai/archive-4.mp4",
        poster: "/assets/artists/wenshuai/cover-5.jpg",
      },
    ],
    tracks: [
      {
        id: "wenshuai-track-1",
        title: "Beneath the Low Sky",
        src: "/assets/music/beneath-the-low-sky.mp3",
        note: "Original composition",
        artwork: "/assets/artists/wenshuai/image-1.jpg",
      },
    ],
  },
  {
    id: "seckey",
    name: "SECKEY",
    origin: "Beijing / Club Lineage",
    bio: "Seckey moves fluidly through hip-hop, trap pop, house, and funk, shaped by years immersed in street and club culture. At just 17, he was already playing Beijing's legendary CLUB MIX, sharing nights with world-class DJs and absorbing the city's golden era of party culture firsthand. That early education sharpened both his musical instincts and his command of the room. Today, his crisp mixing and fearless cross-genre fluency deliver sets that feel sleek, physical, and impossible to ignore.",
    photo: "/assets/artists/seckey/profile.jpg",
    photoPosition: "center center",
    tags: ["Hip-Hop", "Trap Pop", "House", "Funk"],
    additionalVideos: [],
  },
  {
    id: "wicus",
    name: "WICUS",
    origin: "Bass Architecture / China",
    bio: "Inspired by Skrillex, Wicus entered bass music early and has spent years refining a sound rooted in dubstep, hybrid trap, and high-impact low end. He commands everything from 128 to 150 BPM, welding house and bass into sets that never let the vibe drop. Backed by 11 years in audio engineering and seven years of vinyl scratch technique, he treats system response as part of the performance itself. Exclusive edits, personal remixes, and razor-clean transitions give his sets a dense, physical signature that lands with precision.",
    photo: "/assets/artists/wicus/profile.jpg",
    photoPosition: "center 18%",
    tags: ["Dubstep", "Hybrid Trap", "Scratch Technique", "Bass Pressure"],
    additionalVideos: [
      {
        id: "wicus-archive-1",
        title: "Wicus — Live Fragment I",
        caption: "Low-end architecture, scratch discipline, and high-velocity transitions.",
        src: "/assets/videos/wicus/featured.mp4",
        poster: "/assets/videos/wicus/featured-thumb.jpg",
      },
      {
        id: "wicus-archive-2",
        title: "Wicus — Live Fragment II",
        caption: "A heavier archive cut built for sub pressure and motion control.",
        src: "/assets/videos/wicus/archive-1.mp4",
        poster: "/assets/videos/wicus/archive-1-thumb.jpg",
      },
      {
        id: "wicus-archive-3",
        title: "Wicus — Live Fragment III",
        caption: "A short-form glimpse into his club-facing, bass-first performance style.",
        src: "/assets/videos/wicus/archive-2.mp4",
        poster: "/assets/videos/wicus/archive-2-thumb.jpg",
      },
    ],
  },
  {
    id: "zhow",
    name: "ZHOW",
    origin: "Peak-Hour Energy / China",
    bio: "ZHOW is a high-energy DJ and founder of FTB DJ Studio, known for translating competition-level technique into explosive club momentum. He earned the popularity championship at the 2020 ARKHAM DJ Mixing Competition in Shanghai and placed third nationally at the 2019 SMC DJ Scratch Masters. His resume spans clubs and guest sets across Changsha, Beijing, Shenzhen, and Changchun, earning recognition from nightlife crowds and music professionals alike. Leaning into bounce, reverse bass, hardstyle, and big room, he builds peak-time sets with sharp identity and relentless impact.",
    photo: "/assets/artists/zhow/profile.jpg",
    photoPosition: "center 18%",
    tags: ["Hardstyle", "Reverse Bass", "Big Room", "Peak-Time Force"],
    additionalVideos: [
      {
        id: "zhow-archive-1",
        title: "ZHOW — Live Fragment I",
        caption: "Fast-rising hard-dance pressure with a polished, competition-bred edge.",
        src: "/assets/videos/zhow/featured.mp4",
        poster: "/assets/videos/zhow/featured-thumb.jpg",
      },
      {
        id: "zhow-archive-2",
        title: "ZHOW — Live Fragment II",
        caption: "A concise archive clip focused on crowd ignition and pure peak-hour drive.",
        src: "/assets/videos/zhow/archive-1.mp4",
        poster: "/assets/videos/zhow/archive-1-thumb.jpg",
      },
    ],
  },
  {
    id: "amaze",
    name: "AMAZE",
    origin: "Hip-Hop / Beijing",
    bio: "Amaze came into hip-hop through breaking in 2011 and moved into professional DJ practice in 2016, bringing that physical foundation into everything he plays. After being selected for Beijing's DJ Star Path and winning Best Student in 2017, he held residencies at Beijing International Trade Club and Club MIX in Gongti. He has since appeared at major platforms including IRON MIC, MDSK Music Festival, Strawberry Music Festival, and FLEXROOM CLUB alongside Higher Brothers. With roots in rap culture and years of live experience, his sets balance crowd command, rhythmic sharpness, and street-bred instinct.",
    photo: "/assets/artists/amaze/profile.jpg",
    photoPosition: "center 20%",
    editorialImage: "/assets/artists/amaze/editorial.jpg",
    tags: ["Hip-Hop", "Festival Energy", "Rap Culture", "Club Legacy"],
    additionalVideos: [
      {
        id: "amaze-archive-1",
        title: "Amaze — Live Fragment I",
        caption: "Street-trained instincts sharpened for clubs, festivals, and headline moments.",
        src: "/assets/videos/amaze/featured.mp4",
        poster: "/assets/videos/amaze/featured-thumb.jpg",
      },
      {
        id: "amaze-archive-2",
        title: "Amaze — Live Fragment II",
        caption: "A compact highlight from the archive with confident, club-facing energy.",
        src: "/assets/videos/amaze/archive-1.mp4",
        poster: "/assets/videos/amaze/archive-1-thumb.jpg",
      },
      {
        id: "amaze-archive-3",
        title: "Amaze — Live Fragment III",
        caption: "Another archive cut tracing his crossover between rap culture and nightlife.",
        src: "/assets/videos/amaze/archive-2.mp4",
        poster: "/assets/videos/amaze/archive-2-thumb.jpg",
      },
      {
        id: "amaze-archive-4",
        title: "Amaze — Live Fragment IV",
        caption: "A more direct performance moment built around rhythm and room command.",
        src: "/assets/videos/amaze/archive-3.mp4",
        poster: "/assets/videos/amaze/archive-3-thumb.jpg",
      },
      {
        id: "amaze-archive-5",
        title: "Amaze — Live Fragment V",
        caption: "An atmospheric late-night archive frame from the wider Amaze circuit.",
        src: "/assets/videos/amaze/archive-4.mp4",
        poster: "/assets/videos/amaze/archive-4-thumb.jpg",
      },
      {
        id: "amaze-archive-6",
        title: "Amaze — Live Fragment VI",
        caption: "A short editorial clip that closes the archive with tension and release.",
        src: "/assets/videos/amaze/archive-5.mp4",
        poster: "/assets/videos/amaze/archive-5-thumb.jpg",
      },
    ],
    tracks: [
      {
        id: "amaze-track-1",
        title: "New Hip-Hop Mix Tape NO.1",
        src: "/assets/music/amaze-hiphop-mix-2024.mp3",
        note: "Full-length mix set",
      },
      {
        id: "amaze-track-2",
        title: "New Hip-Hop Set NO.2",
        src: "/assets/music/amaze-hiphop-set-2023.mp3",
        note: "Full-length mix set",
      },
      {
        id: "amaze-track-3",
        title: "New Hip-Hop Set NO.3",
        src: "/assets/music/amaze-hiphop-set-2.mp3",
        note: "Full-length mix set",
      },
      {
        id: "amaze-track-4",
        title: "New Hip-Hop Set NO.4",
        src: "/assets/music/amaze-hiphop-set-3.mp3",
        note: "Full-length mix set",
      },
    ],
  },
];

export const visualArchive = artists.flatMap((artist) =>
  artist.additionalVideos.map((video) => ({
    ...video,
    artistId: artist.id,
    artistName: artist.name,
    artistOrigin: artist.origin,
    artistTags: artist.tags,
  })),
);

export default artists;
