const line = require("@line/bot-sdk");

const client = new line.Client({
  channelAccessToken:
    "tDcCgW6YfJUhQ15V/Oii2uzvvIqEXUE/3xsEuAtIYeKWTMF+4CbtY77ohXp6Ry9Q/mhHO1r212CrHvUokkxk28P1W5sQdBA6dJ4jeH/4OUHbDbxRhl6EFuHsu0e6TZoNHQg7GZZzI0A8hk9BTzrUMgdB04t89/1O/w1cDnyilFU=",
});

const AppointmentConfirm = (userName, initial_Symptoms, date, time, doctorName, status) => {
  return [
    {
          type: "flex",
          altText: "คำขอการทำนัด",
          contents: {
            "type": "bubble",
            "direction": "ltr",
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "คำขอการทำนัด",
                  "weight": "bold",
                  "size": "xl",
                  "align": "start",
                  "contents": []
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "margin": "lg",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "ชื่อ",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${userName}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "อาการ",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${initial_Symptoms}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "วัน",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "align": "start",
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${date}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "เวลา",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "align": "start",
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${time}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "ชื่อแพทย์",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${doctorName}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "separator"
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "สถานะ",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${status}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
        }
  ]
};

const PostponeAppointmentConfirm = (userName, initial_Symptoms, Date, OldTime, NewTime, olddate, doctorName, status) => {
  return [
    {
          type: "flex",
          altText: "คำขอเลื่อนนัดสำเร็จ",
          contents: {
            "type": "bubble",
            "direction": "ltr",
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "คำขอเลื่อนนัด",
                  "weight": "bold",
                  "size": "xl",
                  "align": "start",
                  "contents": []
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "margin": "lg",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "ชื่อ",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${userName}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "อาการ",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${initial_Symptoms}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "ชื่อแพทย์",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${doctorName}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "separator"
                    },
                    {
                      "type": "text",
                      "text": "ข้อมูลการทำนัดเก่า",
                      "weight": "bold",
                      "align": "start",
                      "contents": []
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "วัน",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "align": "start",
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${olddate}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "เวลา",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "align": "start",
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${OldTime}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "separator",
                      "margin": "md",
                      "color": "#FFFFFFFF"
                    },
                    {
                      "type": "text",
                      "text": "ข้อมูลการทำนัดใหม่",
                      "weight": "bold",
                      "align": "start",
                      "contents": []
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "วัน",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "align": "start",
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${Date}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "เวลา",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "align": "start",
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${NewTime}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "separator"
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "สถานะ",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${status}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        },
                        {
                          "type": "spacer"
                        }
                      ]
                    }
                  ]
                }
              ]
            }          

          },
        }
  ]
};

const CancelAppointment = (userName, initial_Symptoms, date, time, doctorName, status) => {
  return [
    {
          type: "flex",
          altText: "คำขอยกเลิกนัดสำเร็จ",
          contents: {
            "type": "bubble",
            "direction": "ltr",
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "คำขอยกเลิกนัด",
                  "weight": "bold",
                  "size": "xl",
                  "align": "start",
                  "contents": []
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "margin": "lg",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "ชื่อ",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${userName}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "อาการ",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${initial_Symptoms}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "วัน",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "align": "start",
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${date}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "เวลา",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "align": "start",
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${time}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "ชื่อแพทย์",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${doctorName}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "separator"
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "สถานะ",
                          "size": "md",
                          "color": "#AAAAAA",
                          "flex": 1,
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": `${status}`,
                          "size": "md",
                          "color": "#666666",
                          "flex": 2,
                          "wrap": true,
                          "contents": []
                        },
                        {
                          "type": "spacer"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          
          },
        }
  ]
};




// console.log("start")
// client.pushMessage('Ue28402bc40f682c854562028a4df4040', message("Appointment"))
//     .then(() => {
//         console.log('done')
//     })
//     .catch((err) => {
//         // error handling
//         console.log(err)
//     });

module.exports = { client, AppointmentConfirm, PostponeAppointmentConfirm, CancelAppointment };
