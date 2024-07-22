const _5Lakh = 500000;
let youtube_analytics_data = {
  youtuber: [],
  subscribers: [],
  video_views: [],
  category: [],
  country: [],
  uploads: [],
  shorts: [],
  live_streaming: [],
  active_users: [],
  average_likes: [],
  average_comments: [],
  growth_speed: [],
  video_views_rank: [],
  video_views_for_the_last_30_days: [],
  lowest_monthly_earnings: [],
  highest_monthly_earnings: [],
  lowest_yearly_earnings: [],
  highest_yearly_earnings: [],
  subscribers_for_last_30_days: [],
  created_date: [],
};

let {
  youtuber,
  subscribers,
  video_views,
  category,
  country,
  uploads,
  shorts,
  live_streaming,
  active_users,
  average_likes,
  average_comments,
  growth_speed,
  video_views_rank,
  video_views_for_the_last_30_days,
  lowest_monthly_earnings,
  highest_monthly_earnings,
  lowest_yearly_earnings,
  highest_yearly_earnings,
  subscribers_for_last_30_days,
  created_date,
} = youtube_analytics_data;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function columnDataHandler(
  array,
  range1,
  range2,
  range3,
  range4,
  range5,
  range6,
  range7
) {
  subscribers.map((subs) => {
    if (subs > 1000 && subs < 10000) {
      array.push(getRandomNumber(range1, range2));
    } else if (subs > 10000 && subs < 50000) {
      array.push(getRandomNumber(range3, range4));
    } else if (subs > 50000 && subs < 100000) {
      array.push(getRandomNumber(range4, range5));
    } else if (subs > 100000 && subs < 200000) {
      array.push(getRandomNumber(range5, range6));
    } else if (subs > 200000 && subs < 300000) {
      array.push(getRandomNumber(range6, range7));
    }
  });
}

function rankYoutubers(subscribersArray) {
  const subscribersWithIndex = subscribersArray.map((subscribers, index) => ({
    subscribers,
    index,
  }));

  subscribersWithIndex.sort((a, b) => b.subscribers - a.subscribers);

  const ranks = new Array(subscribersArray.length);

  subscribersWithIndex.forEach((item, rank) => {
    ranks[item.index] = rank + 1;
  });

  return ranks;
}

function getRandomDate(start, end) {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  const year = date.getFullYear(); // Get full year
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}-${month}-${year}`;
}

function generateRandomDates(startDate, endDate) {
  let randomDates = [];
  for (let i = 0; i < _5Lakh; i++) {
    randomDates.push(getRandomDate(startDate, endDate));
  }
  return randomDates;
}

//subscribers
for (let i = 1; i < _5Lakh; i++) {
  subscribers.push(getRandomNumber(1000, 300000));
}

//youtubers
for (let i = 0; i < _5Lakh; i++) {
  const letters = "abcdefghijklmnopxyzwvuqrs";
  let letter1 = letters[getRandomNumber(0, letters.length - 1)];
  let letter2 = letters[getRandomNumber(0, letters.length - 1)];
  let uni_number = getRandomNumber(1, 500);
  youtuber.push(`youtuber-${uni_number}-${letter1 + letter2}`);
}

//video_views
columnDataHandler(video_views, 1000, 50000, 100000, 500000, 1e6, 2e6, 3e6);

// category
const categories = [
  "Music",
  "Film & Animation",
  "Entertainment",
  "Education",
  "Shows",
  "nan",
  "People & Blogs",
  "Gaming",
  "Sports",
  "Howto & Style",
  "News & Politics",
  "Comedy",
  "Trailers",
  "Nonprofits & Activism",
  "Science & Technology",
  "Movies",
  "Pets & Animals",
  "Autos & Vehicles",
  "Travel & Events",
];
for (let i = 0; i < _5Lakh; i++) {
  const index = getRandomNumber(0, categories.length - 1);
  category.push(categories[index]);
}

// countries
const countries = [
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "China",
  "Russia",
  "South Korea",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Belgium",
  "Switzerland",
  "Austria",
  "New Zealand",
  "Japan",
  "India",
  "Brazil",
  "Mexico",
  "Argentina",
  "South Africa",
  "Nigeria",
  "Egypt",
  "Turkey",
  "Saudi Arabia",
  "United Arab Emirates",
  "Singapore",
  "United States",
];

for (let i = 0; i < _5Lakh; i++) {
  const index = getRandomNumber(0, countries.length - 1);
  country.push(countries[index]);
}

//uploads
columnDataHandler(uploads, 10, 100, 200, 500, 1000, 5000, 10000);

//shorts
columnDataHandler(shorts, 10, 50, 100, 200, 400, 800, 1000);

//live_streaming
columnDataHandler(live_streaming, 10, 30, 50, 80, 100, 140, 200);

// active_users
columnDataHandler(active_users, 1000, 5000, 10000, 50000, 100000, 500000, 1e6);

// average_like
columnDataHandler(average_likes, 1000, 50000, 100000, 500000, 1e6, 2e6, 3e6);

//average_comments
columnDataHandler(
  average_comments,
  1000,
  5000,
  10000,
  30000,
  60000,
  100000,
  100001
);

//growth_speed
columnDataHandler(growth_speed, 10, 30, 50, 70, 80, 90, 95);

//video views rank
const ranks = rankYoutubers(subscribers);
youtube_analytics_data["video_views_rank"] = ranks;

// video_views_for_the_last_30_days
columnDataHandler(
  video_views_for_the_last_30_days,
  50,
  1000,
  5000,
  10000,
  20000,
  40000,
  40001
);

// lowest_monthly_earnings
columnDataHandler(
  lowest_monthly_earnings,
  1000,
  3000,
  5000,
  10000,
  50000,
  100000,
  200000
);

// highest_monthly_earnings
columnDataHandler(
  highest_monthly_earnings,
  10000,
  30000,
  50000,
  100000,
  500000,
  1e6,
  2e6
);

// lowest_yearly_earnings
columnDataHandler(
  lowest_yearly_earnings,
  1e3 * 12,
  3e3 * 12,
  5e3 * 12,
  1e4 * 12,
  5e4 * 12,
  1e5 * 12,
  2e5 * 12
);

// highest_yearly_earnings
columnDataHandler(
  highest_yearly_earnings,
  1e4 * 12,
  3e4 * 12,
  5e4 * 12,
  1e5 * 12,
  5e5 * 12,
  1e6 * 12,
  2e6 * 12
);

// subscribers_for_last_30_days
columnDataHandler(
  subscribers_for_last_30_days,
  30,
  80,
  150,
  500,
  1000,
  5000,
  10000
);

// created_date
const startDate = new Date("2009-01-01");
const endDate = new Date("2022-01-01");
const randomDates = generateRandomDates(startDate, endDate);
youtube_analytics_data["created_date"] = Array.from(randomDates);

let analytics_data = [];

for (let i = 0; i < youtube_analytics_data.youtuber.length; i++) {
  let analyticsObject = {
    youtuber: youtube_analytics_data.youtuber[i],
    subscribers: youtube_analytics_data.subscribers[i],
    video_views: youtube_analytics_data.video_views[i],
    category: youtube_analytics_data.category[i],
    country: youtube_analytics_data.country[i],
    uploads: youtube_analytics_data.uploads[i],
    shorts: youtube_analytics_data.shorts[i],
    live_streaming: youtube_analytics_data.live_streaming[i],
    active_users: youtube_analytics_data.active_users[i],
    average_likes: youtube_analytics_data.average_likes[i],
    average_comments: youtube_analytics_data.average_comments[i],
    growth_speed: youtube_analytics_data.growth_speed[i] + "%",
    video_views_rank: youtube_analytics_data.video_views_rank[i],
    video_views_for_the_last_30_days:
      youtube_analytics_data.video_views_for_the_last_30_days[i],
    lowest_monthly_earnings: youtube_analytics_data.lowest_monthly_earnings[i],
    highest_monthly_earnings:
      youtube_analytics_data.highest_monthly_earnings[i],
    lowest_yearly_earnings: youtube_analytics_data.lowest_yearly_earnings[i],
    highest_yearly_earnings: youtube_analytics_data.highest_yearly_earnings[i],
    subscribers_for_last_30_days:
      youtube_analytics_data.subscribers_for_last_30_days[i],
    created_date: youtube_analytics_data.created_date[i],
  };

  analytics_data.push(analyticsObject);
}

// module.exports = {
//   analytics_data,
// };


