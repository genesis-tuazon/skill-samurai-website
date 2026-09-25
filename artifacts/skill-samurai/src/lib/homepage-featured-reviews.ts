export type HomepageFeaturedReview = {
  name: string;
  initials: string;
  color: string;
  weeksAgo: string;
  rating: number;
  text: string;
  tags: string[];
};

export const homepageFeaturedReviews: HomepageFeaturedReview[] = [
  {
    name: "Bria Lylyk",
    initials: "BL",
    color: "bg-accent text-secondary",
    weeksAgo: "Mar 14, 2025",
    rating: 5,
    tags: ["Age 6", "Screen Time → Skills", "Builds Patience"],
    text: "My 6-year-old son, Hudson, started at Skill Samurai last fall, and I can't praise the program enough! Thanks to Skill Samurai, we've transformed screen time into valuable learning, and I feel so confident in the skills he's developing. Hudson often gets discouraged quickly, but we've noticed he's become much more patient and persistent since he began coding. Genesis and Akil are amazing — so supportive and attentive. They're teaching him not only how to create video games but also how to present them, and he practices this skill often. Hudson looks forward to coding class every week and proudly shares his experiences with his friends and teachers. I'm incredibly grateful we found Skill Samurai and can offer him these valuable skills, which I am confident he will use for a lifetime.",
  },
  {
    name: "Olga Talmatska",
    initials: "OT",
    color: "bg-secondary",
    weeksAgo: "33 weeks ago",
    rating: 5,
    tags: ["Grade 10", "High School", "1+ Year Member", "Affordable"],
    text: "My son has been attending these computer classes for over a year, and he really enjoys them! The atmosphere is very welcoming, and the instructors provide an individual approach to every child. There are many interesting directions to choose from — coding, robotics, STEM, and game development. My son has already completed more than three programs and continues to learn with great interest. I love that these classes help him focus, think critically, and be creative while doing something he truly enjoys. The schedule and location are convenient, and the price is affordable. I highly recommend this program for kids in Winnipeg!",
  },
  {
    name: "Cheryl D",
    initials: "CD",
    color: "bg-secondary",
    weeksAgo: "May 19, 2025",
    rating: 5,
    tags: ["Selective Mutism", "Special Needs", "Patient Staff"],
    text: "My son has been coming here for almost a year now and absolutely loves it! He has Select Mutism and it has been difficult finding an extra curricular activity for him that he is comfortable with and actually enjoys. Akil has been so amazing with him, and can see if he's struggling even without the verbal cues for help. Genesis is also so friendly and helpful. The class is held in a coffee shop with a little play area for toddlers. It's a great place to catch up on work or some reading while my son does his coding.",
  },
];