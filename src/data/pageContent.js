import { ArrowRight, Award, Compass, Globe2, Heart, Mountain, Sparkles, Shield, Users, Waves, TreeDeciduous, MapPin, Play, Target } from 'lucide-vue-next'
import gorillaImage from '../assets/images/Gorilla.png'
import hotelImage from '../assets/images/Luxury Hotel.png'
import conventionImage from '../assets/images/Conventional.png'
import lakeImage from '../assets/images/shoreline-of-lake-kivu-congo-africa.jpg'
import volcanoImage from '../assets/images/virunga-mountains-and-volcanoes-in-rwanda.jpg'
import cityImage from '../assets/images/kigali-city-panorama.jpg'
import forestImage from '../assets/images/african-morning-first-daylight-in-the-rainforest-rwanda.jpg'
import countrysideImage from '../assets/images/countryside-in-rwanda.jpg'
import welcomeImage from '../assets/images/village-and-volcano.jpg'
import perspectiveImage from '../assets/images/city-view-of-kigali-and-surrounding-hills-in-rwanda.jpg'

const galleryFiles = Object.entries(import.meta.glob('../assets/images/*.{jpg,png}', { eager: true }))
  .filter(([path]) => !path.includes('favicon'))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, module]) => {
    const fileName = path.split('/').pop().replace(/\.[^.]+$/, '')
    const title = fileName.replace(/[-_]+/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
    return {
      title,
      subtitle: 'A beautiful scene from Rwanda.',
      image: (module && module.default) ? module.default : module
    }
  })

export const pages = {
  about: {
    hero: {
      tag: 'About Rwanda Retreat',
      title: 'Travel thoughtfully across Rwanda',
      subtitle: 'We connect guests with premium local experiences using sustainable planning, personal guidance, and curated journeys.',
      image: welcomeImage,
      actions: [
        { label: 'Meet our team', to: '/services', primary: true },
        { label: 'Start planning', to: '/contact' }
      ]
    },
    sections: [
      {
        title: 'A thoughtful travel company',
        subtitle: 'The same luxury homepage experience, now across every page of your journey.',
        type: 'text',
        paragraphs: [
          'Rwanda Retreat blends boutique hospitality, wildlife access, and cultural depth into a single seamless itinerary.',
          'Each trip is designed with local partners, expert guides, and handpicked accommodations so every stay feels personal and unforgettable.',
          'From volcano hiking to city exploration, our approach honors your pace while bringing the best of Rwanda into view.'
        ]
      },
      {
        title: 'What makes us different',
        type: 'features',
        items: [
          { title: 'Local knowledge', description: 'Deep, trusted relationships with guides, lodges, and communities across Rwanda.', icon: Compass },
          { title: 'Luxury comfort', description: 'Upscale stays, private transportation, and curated dining experiences on every itinerary.', icon: Mountain },
          { title: 'Authentic culture', description: 'Meaningful visits, community-led experiences, and genuine storytelling at every stop.', icon: Globe2 },
          { title: 'Personalized service', description: 'Dedicated trip support from planning through departure, tailored to your travel vision.', icon: Sparkles }
        ]
      },
      {
        title: 'Trusted by travelers',
        subtitle: 'Numbers that reflect our commitment to safe, memorable, and worthwhile trips.',
        type: 'stats',
        items: [
          { icon: Users, value: '120+', label: 'travelers welcomed', },
          { icon: Award, value: '10', label: 'years of experience' },
          { icon: Heart, value: '98%', label: 'satisfaction rating' },
          { icon: Shield, value: '24/7', label: 'travel support' }
        ]
      }
    ],
    cta: {
      label: 'Plan your next stay',
      title: 'Ready to turn Rwanda into your next unforgettable journey?',
      subtitle: 'Book a consultation with our travel specialists and see how a tailored itinerary can feel effortless.',
      primary: { label: 'Contact us', to: '/contact' },
      secondary: { label: 'View services', to: '/services' }
    }
  },
  services: {
    hero: {
      tag: 'Our services',
      title: 'Curated travel services for every Rwanda itinerary',
      subtitle: 'From gorilla treks to private shorefront stays, every service is designed to feel deliberate and effortless.',
      image: hotelImage,
      actions: [
        { label: 'Book a trip', to: '/contact', primary: true },
        { label: 'Explore destinations', to: '/destination' }
      ]
    },
    sections: [
      {
        title: 'Services crafted around experience',
        subtitle: 'Each service supports a luxury stay rooted in local insight and premium hospitality.',
        type: 'cards',
        items: [
          { title: 'Private itineraries', subtitle: 'Custom routes for your interests and travel style.', icon: Compass, link: '/contact' },
          { title: 'Luxury retreats', subtitle: 'Handpicked accommodations and lakeside hideaways.', icon: Mountain, link: '/contact' },
          { title: 'Wildlife access', subtitle: 'Gorilla treks, national parks, and exclusive wildlife encounters.', icon: Globe2, link: '/contact' }
        ]
      },
      {
        title: 'Rwanda travel expertise',
        type: 'stats',
        items: [
          { icon: MapPin, value: '120+', label: 'unique experiences curated' },
          { icon: Award, value: '10', label: 'years connecting guests to Rwanda' },
          { icon: Heart, value: '98%', label: 'traveler satisfaction' },
          { icon: Users, value: '35+', label: 'local partners across the country' }
        ]
      },
      {
        title: 'Featured journeys',
        type: 'gallery',
        items: [
          { title: 'Gorilla trekking', subtitle: 'Volcanoes National Park and close wildlife encounters.', image: gorillaImage },
          { title: 'Lake Kivu escape', subtitle: 'Waterfront leisure, boutique stays, and calm horizons.', image: lakeImage },
          { title: 'City luxury', subtitle: 'Modern Kigali hospitality and cultural city experiences.', image: cityImage }
        ]
      }
    ],
    cta: {
      label: 'Begin your journey',
      title: 'Choose a service that matches your travel dreams.',
      primary: { label: 'Talk to an expert', to: '/contact' },
      secondary: { label: 'Browse destinations', to: '/destination' }
    }
  },
  contact: {
    hero: {
      tag: 'Contact us',
      title: 'Reach out for your custom Rwanda itinerary',
      subtitle: 'Our team is ready to plan every detail of your trip, from arrival to departure.',
      image: lakeImage,
      actions: [
        { label: 'Start planning', to: '/services', primary: true },
        { label: 'View destinations', to: '/destination' }
      ]
    },
    sections: [
      {
        title: 'Get in touch',
        subtitle: 'Send a quick message and we’ll follow up with a personalized travel proposal.',
        type: 'form'
      }
    ],
    cta: {
      label: 'Quick support',
      title: 'Prefer to speak directly with a travel specialist?',
      subtitle: 'We can also arrange a phone consultation or WhatsApp call to start planning right away.',
      primary: { label: 'Email support', href: 'mailto:hello@rwandaretreat.com' },
      secondary: { label: 'Explore services', to: '/services' }
    }
  },
  destination: {
    hero: {
      tag: 'Destinations',
      title: 'Discover Rwanda’s most unforgettable regions',
      subtitle: 'From misty volcanoes to serene lakes, each destination delivers an authentic and luxurious experience.',
      image: volcanoImage,
      actions: [
        { label: 'Plan your route', to: '/contact', primary: true },
        { label: 'See services', to: '/services' }
      ]
    },
    sections: [
      {
        title: 'Explore the regions',
        subtitle: 'Each region offers a different side of Rwanda, from wildlife to culture and city life.',
        type: 'cards',
        items: [
          { title: 'Kigali Province', subtitle: 'City energy, markets, and boutique stays.', image: cityImage, link: '/kigali' },
          { title: 'Northern Province', subtitle: 'Gorillas, volcanoes, and rainforest trails.', image: gorillaImage, link: '/northern' },
          { title: 'Western Province', subtitle: 'Lake Kivu shores and mountain escapes.', image: lakeImage, link: '/western' },
          { title: 'Southern Province', subtitle: 'Rolling hills, cultural villages, and quiet lodges.', image: forestImage, link: '/southern' },
          { title: 'Eastern Province', subtitle: 'Expansive plains, wildlife reserves, and community visits.', image: countrysideImage, link: '/eastern' }
        ]
      }
    ],
    cta: {
      label: 'Start your trip',
      title: 'Ready to choose the regions that match your travel style?',
      subtitle: 'We can connect multiple provinces into a seamless itinerary with premium logistics and service.',
      primary: { label: 'Contact travel expert', to: '/contact' }
    }
  },
  gallery: {
    hero: {
      tag: 'Gallery',
      title: 'A visual journey through Rwanda’s landscapes',
      subtitle: 'Browse curated images and travel inspiration for every destination and experience.',
      image: perspectiveImage,
      actions: [
        { label: 'Plan your stay', to: '/contact', primary: true },
        { label: 'View services', to: '/services' }
      ]
    },
    sections: [
      {
        title: 'Featured moments',
        subtitle: 'A collection of iconic landscapes, wildlife, and memorable experiences.',
        type: 'media'
      },
      {
        title: 'All photos',
        subtitle: 'Browse every image from our Rwanda gallery.',
        type: 'gallery',
        items: galleryFiles
      }
    ],
    media: [
      { title: 'Gorilla encounter', subtitle: 'Up close with gentle giants in the forest.', image: gorillaImage, type: 'image' },
      { title: 'Lake Kivu sunrise', subtitle: 'Peaceful mornings on the water.', image: lakeImage, type: 'image' },
      { title: 'Kigali nightlife', subtitle: 'The city comes alive after sunset.', image: cityImage, type: 'image' },
      { title: 'Journey highlights', subtitle: 'Watch curated travel inspirations.', image: volcanoImage, src: 'https://www.youtube.com/watch?v=9bZkp7q19f0', type: 'video' },
      { title: 'Camera-ready views', subtitle: 'Photography moments across the country.', image: forestImage, src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', type: 'video' }
    ]
  },
  kigali: {
    hero: {
      tag: 'Kigali Province',
      title: 'Experience Rwanda’s modern heartbeat',
      subtitle: 'Kigali blends contemporary luxury with market culture, design, and cuisine.',
      image: cityImage,
      actions: [
        { label: 'Plan your Kigali stay', to: '/contact', primary: true },
        { label: 'Browse services', to: '/services' }
      ]
    },
    sections: [
      {
        title: 'Kigali highlights',
        subtitle: 'Creative districts, secure hotels, and city tours for first-time visitors.',
        type: 'cards',
        items: [
          { title: 'Art & culture', subtitle: 'Gallery visits, local studios, and curated dining.', image: cityImage },
          { title: 'Modern comfort', subtitle: 'Premium hotels with urban convenience.', image: hotelImage },
          { title: 'City discovery', subtitle: 'Markets, memorials, and riverside neighborhoods.', image: perspectiveImage }
        ]
      }
    ],
    cta: {
      label: 'Discover Kigali',
      title: 'Plan a stay that balances city energy and calm escapes.',
      primary: { label: 'Contact us', to: '/contact' }
    }
  },
  northern: {
    hero: {
      tag: 'Northern Province',
      title: 'Hiking, gorillas, and volcanic ridgelines',
      subtitle: 'The north is Rwanda’s adventure core, with misty peaks and forest journeys.',
      image: volcanoImage,
      actions: [
        { label: 'Plan your trek', to: '/contact', primary: true },
        { label: 'See services', to: '/services' }
      ]
    },
    sections: [
      {
        title: 'Northern adventures',
        type: 'cards',
        items: [
          { title: 'Gorilla trekking', subtitle: 'Volcanoes National Park guided treks.', image: gorillaImage },
          { title: 'Scenic hikes', subtitle: 'Misty volcano trails and panoramic overlooks.', image: perspectiveImage },
          { title: 'Luxury lodges', subtitle: 'Forest villas with curated comfort.', image: hotelImage }
        ]
      }
    ],
    cta: {
      label: 'Book northern travel',
      title: 'We’ll design your northern Rwanda adventure with every detail covered.',
      primary: { label: 'Contact our team', to: '/contact' }
    }
  },
  western: {
    hero: {
      tag: 'Western Province',
      title: 'Lake Kivu shores and calm mountain retreats',
      subtitle: 'The west is perfect for slow travel, lakeside luxury, and scenic relaxation.',
      image: lakeImage,
      actions: [
        { label: 'Plan your retreat', to: '/contact', primary: true },
        { label: 'Explore destinations', to: '/destination' }
      ]
    },
    sections: [
      {
        title: 'Western escapes',
        type: 'cards',
        items: [
          { title: 'Lakefront stays', subtitle: 'Private villas and sunset views.', image: lakeImage },
          { title: 'Quiet villages', subtitle: 'Local markets and tranquil countryside.', image: countrysideImage },
          { title: 'Premium dining', subtitle: 'Fresh lakeside cuisine and crafted menus.', image: hotelImage }
        ]
      }
    ],
    cta: {
      label: 'Start with western Rwanda',
      title: 'Create a lakeside itinerary with premium comfort and ease.',
      primary: { label: 'Contact us', to: '/contact' }
    }
  },
  southern: {
    hero: {
      tag: 'Southern Province',
      title: 'Rolling hills, cultural villages, and hidden escapes',
      subtitle: 'The south is rich with local encounters, calm lodges, and gentle landscapes.',
      image: forestImage,
      actions: [
        { label: 'Plan your southern stay', to: '/contact', primary: true },
        { label: 'View services', to: '/services' }
      ]
    },
    sections: [
      {
        title: 'Southern discoveries',
        type: 'cards',
        items: [
          { title: 'Village experiences', subtitle: 'Cultural immersion and community visits.', image: countrysideImage },
          { title: 'Forest retreats', subtitle: 'Serene lodges and nature moments.', image: forestImage },
          { title: 'Heritage journeys', subtitle: 'Local storytelling and creative events.', image: perspectiveImage }
        ]
      }
    ],
    cta: {
      label: 'Explore the south',
      title: 'We’ll craft a southern Rwanda itinerary that feels both authentic and luxurious.',
      primary: { label: 'Contact travel planners', to: '/contact' }
    }
  },
  eastern: {
    hero: {
      tag: 'Eastern Province',
      title: 'Wide plains, wildlife reserves, and gentle wilderness',
      subtitle: 'The east offers open landscapes, quiet reserves, and wildlife discovery.',
      image: countrysideImage,
      actions: [
        { label: 'Plan eastern travel', to: '/contact', primary: true },
        { label: 'Browse destinations', to: '/destination' }
      ]
    },
    sections: [
      {
        title: 'Eastern highlights',
        type: 'cards',
        items: [
          { title: 'Wildlife reserves', subtitle: 'Broad plains and quiet safari days.', image: countrysideImage },
          { title: 'Community tours', subtitle: 'Local culture, craft visits, and authentic encounters.', image: perspectiveImage },
          { title: 'Relaxed pacing', subtitle: 'Low-key stays with nature as the focus.', image: lakeImage }
        ]
      }
    ],
    cta: {
      label: 'Begin eastern planning',
      title: 'Let us connect your travel plan with Rwanda’s open, wildlife-rich east.',
      primary: { label: 'Contact us', to: '/contact' }
    }
  }
}
