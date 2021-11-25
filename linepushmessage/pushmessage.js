const line = require("@line/bot-sdk");

const client = new line.Client({
  channelAccessToken:
    "tDcCgW6YfJUhQ15V/Oii2uzvvIqEXUE/3xsEuAtIYeKWTMF+4CbtY77ohXp6Ry9Q/mhHO1r212CrHvUokkxk28P1W5sQdBA6dJ4jeH/4OUHbDbxRhl6EFuHsu0e6TZoNHQg7GZZzI0A8hk9BTzrUMgdB04t89/1O/w1cDnyilFU=",
});

const message = (name) => {
  return [
    {
      type: "flex",
      altText: "This is flex messages",
      contents: {
        type: "bubble",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
          size: "full",
          aspectRatio: "20:13",
          aspectMode: "cover",
          action: {
            type: "uri",
            uri: "http://linecorp.com/",
          },
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: `${name}`,
              weight: "bold",
              size: "xl",
            },
            {
              type: "box",
              layout: "baseline",
              margin: "md",
              contents: [
                {
                  type: "icon",
                  size: "sm",
                  url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                },
                {
                  type: "icon",
                  size: "sm",
                  url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                },
                {
                  type: "icon",
                  size: "sm",
                  url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                },
                {
                  type: "icon",
                  size: "sm",
                  url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                },
                {
                  type: "icon",
                  size: "sm",
                  url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
                },
                {
                  type: "text",
                  text: "4.0",
                  size: "sm",
                  color: "#999999",
                  margin: "md",
                  flex: 0,
                },
              ],
            },
            {
              type: "box",
              layout: "vertical",
              margin: "lg",
              spacing: "sm",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "Place",
                      color: "#aaaaaa",
                      size: "sm",
                      flex: 1,
                    },
                    {
                      type: "text",
                      text: "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
                      wrap: true,
                      color: "#666666",
                      size: "sm",
                      flex: 5,
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "Time",
                      color: "#aaaaaa",
                      size: "sm",
                      flex: 1,
                    },
                    {
                      type: "text",
                      text: "10:00 - 23:00",
                      wrap: true,
                      color: "#666666",
                      size: "sm",
                      flex: 5,
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  ];
};



// console.log("start")
// client.pushMessage('U3469bee1028c5f4c2e16199bb53ec5b7', message("Appointment"))
//     .then(() => {
//         console.log('done')
//     })
//     .catch((err) => {
//         // error handling
//         console.log(err)
//     });

module.exports = { client, message };
