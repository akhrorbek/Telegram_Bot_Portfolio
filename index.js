import TelegramBot from "node-telegram-bot-api";

const PORT = process.env.PORT


const bot = new TelegramBot('5798429408:AAFSa_3h-eDbaQCnwA2_kf5zWmSw2nTo9l8', {
    polling: true
})

bot.onText(/\/start/, msg => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Assalomu aleykum, ${msg.from.first_name} ${msg.from.last_name} xush kelibsiz!`, {
        reply_markup: {
            keyboard: [
                [
                    "Men haqimda 🙋‍♂️", "Mening dasturlarim 👨‍💻"
                ]
            ],
            resize_keyboard: true
        }
    })
})

bot.on('message', msg => {
    const chatId = msg.chat.id

    if (msg.text == 'Men haqimda 🙋‍♂️') {
        bot.sendPhoto(chatId, 'https://findicons.com/files/icons/977/rrze/720/user_customer.png', {
            caption : `Ma'lumotlar:\nFirstname:  ${msg.from.first_name}\nLastname:  ${msg.from.last_name}\nUsername:  ${msg.from.username}\nTelegram ID:  ${msg.from.id}\n`
        })
    }
})

bot.on('message', msg => {
    const chatId = msg.chat.id

    if (msg.text == 'Mening dasturlarim 👨‍💻') {
        bot.sendPhoto(chatId, 'https://hackr.io/blog/best-web-development-projects/thumbnail/large', {
            caption: `<i>Men yaratgan kichik loyihalar 👇</i>\n<span class="tg-spoiler">🤦‍♂️</span>`,
            parse_mode: 'HTML',
            reply_markup: {
                keyboard: [
                    [
                        "Bookshelter 📚",
                        "GitHub Clone 🛠"
                    ],
                    [
                        "Currency 💲",
                        "Weather ☁"
                    ],
                    [
                        "Asosiy menyu 🎯"
                    ]
                ], resize_keyboard: true
            }
        })

    }
})

bot.on('message', msg => {
    const chatId = msg.chat.id

    if(msg.text == "Bookshelter 📚") {
        bot.sendPhoto(chatId, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrHY8q_5BrZYzYLstCsUO4MBr1UKXEYiO3-A&usqp=CAU', {
            caption: "<i><b>Kitob javoni!</b></i>\nJava Script asosida tuzilgan kichik loyiha! 👨‍💻",
            parse_mode:'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text:"Kitobjavoniga o'tish 🚶‍♂️",
                            url:'https://github.com/akhrorbek/Bookshelter_project'
                        }
                    ]
                ]
            }
        })
    }
    if(msg.text == "GitHub Clone 🛠") {
        bot.sendPhoto(chatId, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_aFSH2j7uc_wNvQez4WFbDA6v69Odlw4FcrD6kfHYlGCmDnxlIcHft49GTcvf4zWq2Y&usqp=CAU', {
            caption: "<i><b>GitHub Clone</b></i> loyihasi!\n React.JS asosida tuzilgan kichik loyiha! 👨‍💻",
            parse_mode:"HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text:"GitHub Clone loyihasiga o'tish 🚶‍♂️",
                            url:'https://github.com/akhrorbek/Github_Clone'
                        }
                    ]
                ]
            }
        })
    }

    if(msg.text ==  "Currency 💲") {
        bot.sendPhoto(chatId, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9if7Pd8daNzVFWtgHVHZaKUHNtyw41OD6td310Lnbz9tLDlYrOj4trPhXDsHtvV32Q4&usqp=CAU', {
            caption:"<i><b>Valyuta ayirboshlash!</b></i>\nJava Script asosida tuzilgan kichik loyiha 👨‍💻",
            parse_mode:"HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text:"Loyihaga o'tish 🚶‍♂️",
                            url:'https://currency-uz.netlify.app/'
                        }
                    ]
                ]
            }
        })
    }

    if(msg.text == "Weather ☁") {
        bot.sendPhoto(chatId, 'https://img.freepik.com/premium-vector/cute-weather-icon-set-weather-forecast-icon-isolated-white-background_68708-952.jpg?w=2000', {
            caption: "<i><b>Ob-havo ma'lumotlari!</b></i>\nJava Script asosida tuzilgan kichik loyiha 👨‍💻",
            parse_mode:"HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Loyihaga o'tish 🚶‍♂️",
                            url:'https://github.com/akhrorbek/weather_mini_project'
                        }
                    ]
                ]
            }
        })
    }

    if(msg.text == "Asosiy menyu 🎯") {
        bot.sendMessage(chatId, `Assalomu aleykum, ${msg.from.first_name} ${msg.from.last_name} xush kelibsiz!`, {
            reply_markup: {
                keyboard: [
                    [
                        "Men haqimda 🙋‍♂️", "Mening dasturlarim 👨‍💻"
                    ]
                ],
                resize_keyboard: true
            }
        })

    }
})