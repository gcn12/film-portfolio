const content = {
    newyear: {
        url: "newyear",
        header: "A New Year (Music Video)",
        displayTitle: "A New Year",
        video: "",
        thumbnail: "https://live.staticflickr.com/65535/50208144398_e6159d9acb_k.jpg",
        album: "72157715436444986",
        sixteenNine: true
    },
    fallen: {
        url: "fallen",
        header: "The Fallen (Feature)",
        displayTitle: "The Fallen",
        video: "388770525", //vimeo link id
        videoHost: 'vimeo',
        thumbnail: "https://live.staticflickr.com/65535/50208714186_4d58f0f266_k.jpg",
        album: "72157715437437658",
        sixteenNine: false,
    },  
    occult: {
        url: "occult",
        header: "The Occult (Short Film)",
        displayTitle: "The Occult",
        video: "",
        thumbnail: "https://live.staticflickr.com/65535/50209006287_da33fdd21a_k.jpg",
        album: "72157715435274906",
        sixteenNine: false,
    },
    lovestruth: {
        url: "lovestruth",
        header: "Love's Truth Behind (Music Video)",
        displayTitle: "Love's Truth Behind",
        video: "391693065",
        videoHost: 'vimeo',
        thumbnail: "https://live.staticflickr.com/65535/50208723206_90bbcc26f8_k.jpg",
        album: "72157715437288708",
        sixteenNine: false,
    },
    december: {
        url: "december",
        header: "December (Short Film)",
        displayTitle: "December",
        video: "390813222",
        videoHost: 'vimeo',
        thumbnail: "https://live.staticflickr.com/65535/50208199958_f09cc5c7b2_k.jpg",
        album: "72157715437186658",
        sixteenNine: false,
    },
    wiches: {
        url: "wiches",
        header: "Snitches Get Wiches (Short Film)",
        displayTitle: "Snitches Get Wiches",
        video: "",
        thumbnail: "https://live.staticflickr.com/65535/50208725981_aa3ffb8051_k.jpg",
        album: "72157715438246752",
        sixteenNine: false,
    },
    butterfly: {
        url: "butterfly",
        header: "Butterfly (Short Film)",
        displayTitle: "Butterfly",
        video: "387162188",
        videoHost: 'vimeo',
        thumbnail: "https://live.staticflickr.com/65535/50220736487_6bf925f764_k.jpg",
        album: "72157715467643243",
        sixteenNine: true,
    },
    yesno: {
        url: "yesno",
        header: "Yes/No (Short Film)",
        displayTitle: "Yes/No",
        video: "",
        thumbnail: "https://live.staticflickr.com/65535/50219876208_8b579a0fcb_k.jpg",
        album: "72157715467676103",
        sixteenNine: true,
    },
    idealconversation: {
        url: "idealconversation",
        header: "An Ideal Conversation (Short Film)",
        displayTitle: "An Ideal Conversation",
        video: "https://www.youtube.com/embed/UeVJnwMX5RU",
        videoHost: 'youtube',
        thumbnail: "https://live.staticflickr.com/65535/50395049843_94d04e201b_k.jpg", //comes from embed code
        album: "72157716167409576",
        sixteenNine: true,
    },
    oatmilk: {
        url: "oatmilk",
        header: "Oat Milk (Short Film)",
        displayTitle: "Oat Milk",
        video: "",
        videoHost: '',
        thumbnail: "https://live.staticflickr.com/65535/50397304353_d79b3603ef_k.jpg", //comes from embed code
        album: "72157716179489073",
        sixteenNine: true,
    },
}

//<iframe width="560" height="315" src="https://www.youtube.com/embed/UeVJnwMX5RU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

// const content = [
//     {
//         url: "newyear",
//         header: "A New Year (Music Video)",
//         displayTitle: "A New Year",
//         video: "",
//         thumbnail: "https://live.staticflickr.com/65535/50208144398_e6159d9acb_k.jpg",
//         album: "72157715436444986",
//         sixteenNine: true
//     },
//     {
//         url: "fallen",
//         header: "The Fallen (Feature)",
//         displayTitle: "The Fallen",
//         video: "388770525", //vimeo link id
//         thumbnail: "https://live.staticflickr.com/65535/50208714186_4d58f0f266_k.jpg",
//         album: "72157715437437658",
//         sixteenNine: false,
//     },  
//     {
//         url: "occult",
//         header: "The Occult (Short Film)",
//         displayTitle: "The Occult",
//         video: "",
//         thumbnail: "https://live.staticflickr.com/65535/50209006287_da33fdd21a_k.jpg",
//         album: "72157715435274906",
//         sixteenNine: false,
//     },
//     {
//         url: "lovestruth",
//         header: "Love's Truth Behind (Music Video)",
//         displayTitle: "Love's Truth Behind",
//         video: "391693065",
//         thumbnail: "https://live.staticflickr.com/65535/50208723206_90bbcc26f8_k.jpg",
//         album: "72157715437288708",
//         sixteenNine: false,
//     },
//     {
//         url: "december",
//         header: "December (Short Film)",
//         displayTitle: "December",
//         video: "390813222",
//         thumbnail: "https://live.staticflickr.com/65535/50208199958_f09cc5c7b2_k.jpg",
//         album: "72157715437186658",
//         sixteenNine: false,
//     },
//     {
//         url: "wiches",
//         header: "Snitches Get Wiches (Short Film)",
//         displayTitle: "Snitches Get Wiches",
//         video: "",
//         thumbnail: "https://live.staticflickr.com/65535/50208725981_aa3ffb8051_k.jpg",
//         album: "72157715438246752",
//         sixteenNine: false,
//     },
//     {
//         url: "butterfly",
//         header: "Butterfly (Short Film)",
//         displayTitle: "Butterfly",
//         video: "387162188",
//         thumbnail: "https://live.staticflickr.com/65535/50220736487_6bf925f764_k.jpg",
//         album: "72157715467643243",
//         sixteenNine: true,
//     },
//     {
//         url: "yesno",
//         header: "Yes/No (Short Film)",
//         displayTitle: "Yes/No",
//         video: "",
//         thumbnail: "https://live.staticflickr.com/65535/50219876208_8b579a0fcb_k.jpg",
//         album: "72157715467676103",
//         sixteenNine: true,
//     },
// ]

export default content