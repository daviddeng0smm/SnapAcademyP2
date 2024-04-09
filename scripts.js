/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

let founders = [
    {
        name: "Jiahao (David) Deng",
        company: "Not sure yet",
        industry: "Social Media",
        country: "United States",
        background: "Current student at University of California Irvine studying Software Engineering. Will be known as one of the pioneers of decision making",
        contribution: "Will be a pioneer and revolutionize the process of decisions, making it easier to and effortless to make simple day to day decisions.",
        image: "https://previews.dropbox.com/p/thumb/ACMwgbrJe0z1_Vs3hPMOZKJVywhoQ1mPKWBGNscJ2yqJW0NZI18_SVbsz-Z6zPTs0T8IutE3g1BmaXYpS5y5ErFYXnXN6AeFsnFMdyn6uUHbKYGCcVRMuzYwIyX7tIOjbWSRklWEht2o5kOV8Fam8xf3dgPxn3PtaSw34miEos6-Zys_cwgEAQnt39ns4h_YY0WDLxgW1X8oCZhNlInvd_nogyMn_KIpMtYDNdf_CilpgvyGxJwMe6wZ5ZAofIGn5Mqw3qcOkpwO03T--fwXrv9LYWdYIWhCV1I6jFT_NwElT_YiKvZHNZz2LTd0-LuYMT_ua3zzZ2PWCqc_2rWDBrTXb8O3HXj1FJ4A3LiUylMtQA/p.png",
        website: "https://www.linkedin.com/in/-jiahaodeng/",
        networth: "$20.67",
    },

    {
        "name": "Evan Spiegel",
        "company": "Snap Inc.",
        "industry": "Social Media",
        "country": "United States",
        "background": "Evan Spiegel attended Stanford University, where he co-founded Snapchat with Bobby Murphy and Reggie Brown. The app introduced disappearing messages and multimedia, revolutionizing digital communication.",
        "contribution": "Introduced a new paradigm in social media and digital communication with the creation of Snapchat, emphasizing privacy and the ephemeral nature of moments.",
        "image": "https://www.geeknack.com/wp-content/uploads/2019/08/evan-spiegel-005.jpg",
        "website": "https://www.snap.com",
        "networth": "$2.9 Billion",
    },
    {
        "name": "Mark Zuckerberg",
        "company": "Facebook",
        "industry": "Social Media",
        "country": "United States",
        "background": "Mark Zuckerberg founded Facebook while attending Harvard University, becoming a major influence in tech entrepreneurship.",
        "contribution": "Revolutionized social networking and had a significant impact on social media marketing and communication.",
        "image": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,h_900,q_60,w_1600/028312e71b680f185a18af0bf8d6ab0d.jpg",
        "website": "https://www.facebook.com",
        "networth": "$184.8 Billion",
    },
    {
        "name": "Whitney Wolfe Herd",
        "company": "Bumble",
        "industry": "Social Networking",
        "country": "United States",
        "background": "CEO and co-founder of Bumble, Whitney Wolfe Herd, attended Southern Methodist University before launching Bumble to empower women in the dating scene.",
        "contribution": "Revolutionized the online dating industry by prioritizing safety and respect within the platform, promoting gender equality.",
        "image": "https://assets.entrepreneur.com/content/3x2/2000/20170531220859-phpqlRy8n.jpeg",
        "website": "https://bumble.com",
        "networth": "$1.6 Billion",
    },
    {
        "name": "Anne Wojcicki",
        "company": "23andMe",
        "industry": "Biotechnology",
        "country": "United States",
        "background": "Anne Wojcicki co-founded 23andMe after studying biology at Yale University, providing direct-to-consumer DNA testing services.",
        "contribution": "Streamlining the process of DNA testing and made it accessible to the general public, offering insights into ancestry and health.",
        "image": "https://www.sequoiacap.com/wp-content/uploads/sites/6/2023/03/ANNE-WOJCICKI-7qs-OG.jpg",
        "website": "https://www.23andme.com",
        "networth": "$270 Million",
    },

    {
        "name": "Steve Huffman",
        "company": "Reddit",
        "industry": "Social Media",
        "country": "United States",
        "background": "Steve Huffman co-founded Reddit, a social news aggregation, web content rating, and discussion website, with Alexis Ohanian. Huffman studied computer science at the University of Virginia. He has also served as Reddit's CEO, guiding the platform through various stages of growth and development.",
        "contribution": "Co-founded Reddit, which has become one of the most popular websites globally, offering a platform for users to submit content, engage in discussions, and create communities around various interests.",
        "image": "https://images.inc.com/uploaded_files/image/1920x1080/SteveHuffman_88101.jpg",
        "website": "https://www.reddit.com",
        "networth": "$50 Million",
    },

    {
        "name": "Alexis Ohanian",
        "company": "Reddit",
        "industry": "Social Media",
        "country": "United States",
        "background": "Alexis Ohanian co-founded Reddit alongside Steve Huffman as a roommate at the University of Virginia, where he majored in history and commerce. Ohanian has played a pivotal role in the early development and growth of Reddit, and has been involved in various ventures since stepping away from the company.",
        "contribution": "Helped launch Reddit, which has evolved into a significant online platform for community-driven content sharing, discussion, and interaction across thousands of topics.",
        "image": "https://images.inc.com/uploaded_files/image/1920x1080/IN0417COV01_163376.jpg",
        "website": "https://www.reddit.com",
        "networth": "$70 Million",
    },

    {
        "name": "Reid Hoffman",
        "company": "LinkedIn",
        "industry": "Social Networking",
        "country": "United States",
        "background": "Reid Hoffman co-founded LinkedIn, the world's largest professional networking platform, in 2002. Before LinkedIn, Hoffman was an executive at PayPal. He holds a bachelor's degree from Stanford University and a master's degree from Oxford University.",
        "contribution": "LinkedIn, under Hoffman's co-founding vision, transformed professional networking by creating a platform that not only allows individuals to maintain a professional online profile but also enables companies to post jobs and search for potential candidates.",
        "image": "https://d3gie47r7c2778.cloudfront.net/656024/uploads/7666e000-7e24-11ee-a0ac-f7cbca3e455d_800_420.jpeg",
        "website": "https://www.linkedin.com",
        "networth": "$2.5 Billion",
    },

    {
        "name": "Jason Citron",
        "company": "Discord",
        "industry": "Social Media & Communication",
        "country": "United States",
        "background": "Jason Citron founded Discord, a VoIP, instant messaging and digital distribution platform designed for creating communities. He previously founded OpenFeint, a social gaming platform for mobile games, which he sold in 2011. Citron aimed to create a modern, easy-to-use communication platform for gamers.",
        "contribution": "Under Citron's leadership, Discord has expanded beyond gaming to become a general-use platform for various communities to communicate and share content. It's widely used for its text, image, video, and audio communication between users in private chats or as part of communities called 'servers'.",
        "image": "https://static01.nyt.com/images/2021/12/22/business/00discord1/00discord1-videoSixteenByNineJumbo1600-v2.jpg",
        "website": "https://www.discord.com",
        "networth": "$800 Million",
    },

    {
        "name": "Jack Ma",
        "company": "Alibaba Group",
        "industry": "E-commerce, Technology",
        "country": "China",
        "background": "Jack Ma founded Alibaba Group in 1999, which has grown into one of the world's largest e-commerce and tech conglomerates. A former English teacher, Ma struggled to find his path before launching his company, which revolutionized e-commerce in China and globally.",
        "contribution": "Jack Ma's vision for Alibaba was to create a platform that could help small and medium-sized enterprises in China and around the world to reach global markets. His work has significantly impacted global e-commerce, digital finance, and technology.",
        "image": "https://c.files.bbci.co.uk/91BA/production/_129160373_c101e5fedac273898f1088230ab766de576d4a500_0_5568_31321000x563.jpg",
        "website": "https://www.alibabagroup.com",
        "networth": "$24.3 Billion",
    },

    {
        "name": "Leonard Bosack",
        "company": "Cisco Systems",
        "industry": "Networking Hardware",
        "country": "United States",
        "background": "Leonard Bosack co-founded Cisco Systems in 1984 alongside Sandy Lerner. Both were part of Stanford University's computer operations staff when they pioneered the development of the multi-protocol router, a key technology that helped lead to the commercial expansion of the Internet.",
        "contribution": "His innovation in networking technology was instrumental in the foundational development of the Internet.",
        "image": "https://www.sequoiacap.com/wp-content/uploads/sites/6/2021/12/leonard-bosack-cisco-ink-v2.jpg",
        "website": "https://www.cisco.com",
        "networth": "$200 Million",
    },


    {
        "name": "Sandy Lerner",
        "company": "Cisco Systems",
        "industry": "Networking Hardware",
        "country": "United States",
        "background": "Sandy Lerner co-founded Cisco Systems with Leonard Bosack. While at Stanford University, they developed the first multi-protocol router, significantly contributing to the digital infrastructure underlying the Internet.",
        "contribution": "Her work in creating the multi-protocol router was crucial to the development of the Internet, establishing Cisco as a key player in networking technology.",
        "image": "https://images.inc.com/uploaded_files/image/1920x1080/ff_sandylerner_65955.jpg",
        "website": "https://www.cisco.com",
        "networth": "$200 Million",
    },

    {
        "name": "John Warnock",
        "company": "Adobe Inc.",
        "industry": "Software",
        "country": "United States",
        "background": "John Warnock co-founded Adobe Inc. with Charles Geschke in 1982. Their development of PostScript laid the groundwork for the desktop publishing revolution, enabling users to print documents as they appeared on screen.",
        "contribution": "Warnock's invention of PostScript was a pivotal moment in the history of publishing, positioning Adobe as a leader in the software industry.",
        "image": "https://media.cnn.com/api/v1/images/stellar/prod/230821120719-john-warnock-adobe.jpg?c=original",
        "website": "https://www.adobe.com",
        "networth": "$337 Million",
    },


    {
        "name": "Marc Benioff",
        "company": "Salesforce",
        "industry": "Cloud Computing, Software as a Service (SaaS)",
        "country": "United States",
        "background": "Marc Benioff is the co-founder, chairman, and CEO of Salesforce, a leading enterprise cloud computing company. Before founding Salesforce in 1999, Benioff worked at Oracle Corporation for 13 years in a variety of executive positions in sales, marketing, and product development. He is a graduate of the University of Southern California.",
        "contribution": "Benioff pioneered the concept of delivering enterprise applications via a website, which has transformed the software industry. Salesforce is widely recognized for revolutionizing customer relationship management (CRM) software by moving it to the cloud, making it more accessible and scalable for businesses.",
        "image": "https://imageio.forbes.com/specials-images/imageserve/5f45cc21ce0dca409742369b/DREAMFORCE-2016/0x0.jpg?format=jpg&crop=4000,2250,x0,y203,safe&width=960",
        "website": "https://www.salesforce.com",
        "networth": "$10.5 Billion",
    },

    {
        "name": "Travis Kalanick",
        "company": "Uber Technologies Inc.",
        "industry": "Ride-Sharing / Transportation",
        "country": "United States",
        "background": "Travis Kalanick co-founded Uber Technologies Inc. after attending the University of California, Los Angeles, transforming global transportation.",
        "contribution": "Played a pivotal role in revolutionizing the transportation industry and the gig economy with the founding of Uber.",
        "image": "https://img.money.com/2018/01/180105-uber-ceo-travis-kalanick.jpg",
        "website": "https://www.uber.com",
        "networth": "$3-7 Billion",
    },
    {
        "name": "Julia Hartz",
        "company": "Eventbrite",
        "industry": "Event Management & Ticketing",
        "country": "United States",
        "background": "Julia Hartz co-founded Eventbrite, utilizing her experience from Pepperdine University to innovate in the event management sector.",
        "contribution": "Transformed the way events are organized and attended, making it easier to host and discover events.",
        "image": "https://static01.nyt.com/images/2019/02/02/business/02corneroffice/02corneroffice-superJumbo.jpg",
        "website": "https://www.eventbrite.com",
        "networth": "$12.2 Million",
    },
    {
        "name": "Rashmi Sinha",
        "company": "SlideShare",
        "industry": "Content Sharing",
        "country": "United States",
        "background": "Rashmi Sinha, holding a PhD from Brown University, co-founded SlideShare, enhancing the sharing of professional content online.",
        "contribution": "Simplified the sharing of professional knowledge and content online.",
        "image": "https://pbs.twimg.com/media/F6LdSxGXAAAKdRl.jpg",
        "website": "https://www.slideshare.net",
        "networth": "Not disclosed",
    },
    {
        "name": "Logan Green",
        "company": "Lyft, Inc.",
        "industry": "Ride-Sharing / Transportation",
        "country": "United States",
        "background": "Logan Green co-founded Lyft, Inc. after studying at the University of California, Santa Barbara, offering innovative urban mobility solutions.",
        "contribution": "Crucial in transforming urban mobility with a friendly and sustainable alternative to traditional taxi services.",
        "image": "https://upload.wikimedia.org/wikipedia/en/9/9a/Logan_Green_TCD.jpg",
        "website": "https://www.lyft.com",
        "networth": "$67.3 Million",
    },

    {
        "name": "Brian Chesky",
        "company": "Airbnb",
        "industry": "Hospitality",
        "country": "United States",
        "background": "Brian Chesky, who studied at the Rhode Island School of Design, co-founded Airbnb, revolutionizing the hospitality industry.",
        "contribution": "Pioneered the sharing economy by creating a platform for peer-to-peer lodging services.",
        "image": "https://i0.wp.com/www.morningfuture.com/wp-content/uploads/2021/06/4903faee-2c0c-4cb6-b6d8-5e1a0b04d8ac.jpg?fit=2427%2C1820&ssl=1",
        "website": "https://www.airbnb.com",
        "networth": "$10.8 Billion",
    },

    {
        "name": "Jensen Huang",
        "company": "NVIDIA Corporation",
        "industry": "Technology / Semiconductors",
        "country": "United States",
        "background": "Jensen Huang co-founded NVIDIA in 1993, focusing on graphics processing units (GPUs) for gaming and professional markets. Born in Taiwan, he moved to the U.S., earning an electrical engineering degree from Oregon State University and a master's from Stanford University.",
        "contribution": "Under Huang's leadership, NVIDIA has become a leader in GPU technology for gaming, professional visualization, data centers, and AI applications, driving innovation across various industries.",
        "image": "https://image.cnbcfm.com/api/v1/image/107340708-1701276069835-gettyimages-1820585655-dsc_2416_wma4pvaf.jpeg?v=1708706721&w=1920&h=1080",
        "website": "https://www.nvidia.com",
        "networth": "$77.4 Billion ",
    },

    {
        "name": "Melanie Perkins",
        "company": "Canva",
        "industry": "Technology",
        "country": "Australia",
        "background": "Melanie Perkins co-founded Canva after attending the University of Western Australia, significantly impacting the graphic design industry.",
        "contribution": "Democratized design through an easy-to-use platform, making graphic design accessible.",
        "image": "https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/91f363fc-57bf-4f79-828a-ec98904e9038/Melanie_Perkins.png?t=1676223982",
        "website": "https://www.canva.com",
        "networth": "$4.4 Billion"
    },

    {
        "name": "Kevin Systrom",
        "company": "Instagram",
        "industry": "Social Media",
        "country": "United States",
        "background": "Kevin Systrom co-founded Instagram, a photo and video-sharing social networking service, with Mike Krieger. Systrom graduated from Stanford University with a degree in management science and engineering. Before Instagram, he worked at Google and Odeo.",
        "contribution": "Systrom led Instagram to become one of the most popular social media platforms globally, focusing on easy photo sharing, filters, and stories, before its acquisition by Facebook in 2012.",
        "image": "https://api.letsdiskuss.com/resources/static/asset/uploads/1696349301991-Kevin-Systrom-CEO-of-Instagram.jpg",
        "website": "https://www.instagram.com",
        "networth": "$2.9 Billion",
    },

    {
        "name": "Lei Jun",
        "company": "Xiaomi",
        "industry": "Consumer Electronics",
        "country": "China",
        "background": "Lei Jun founded Xiaomi Corporation after graduating from Wuhan University, quickly rising to a leading position in the global smartphone market.",
        "contribution": "Revolutionized the smartphone industry by offering high-quality, affordable technology.",
        "image": "https://pandayoo925336606.files.wordpress.com/2024/01/xqjh15632661114181n.jpg?w=900&h=504&crop=1",
        "website": "https://www.mi.com",
        "networth": "$13.2 Billion",
    },

    {
        "name": "Kimberly Bryant",
        "company": "Black Girls CODE",
        "industry": "Education & Technology",
        "country": "United States",
        "background": "Kimberly Bryant founded Black Girls CODE after her studies in electrical engineering, aiming to reduce the gender gap in technology.",
        "contribution": "Significantly contributed to reducing the gender gap in the technology and engineering sectors.",
        "image": "https://blog.siggraph.org/wp-content/uploads/2022/02/KimberlyBryant_01327e-copy-2.jpg",
        "website": "https://www.blackgirlscode.com",
        "networth": "$1-5 Million",
    },

    {
        "name": "Reed Hastings",
        "company": "Netflix",
        "industry": "Entertainment",
        "country": "United States",
        "background": "Reed Hastings co-founded Netflix after attending Bowdoin College, transforming how people consume media and entertainment globally.",
        "contribution": "Pioneered the streaming model for movies and television, significantly impacting the entertainment industry.",
        "image": "https://image.cnbcfm.com/api/v1/image/104284856-Reed_Hastings_Netflix.jpg?v=1587491527&w=1600&h=900",
        "website": "https://www.netflix.com",
        "networth": "$4.5 Billion",
    },

    {
        "name": "Sean Rad",
        "company": "Tinder",
        "industry": "Social Networking",
        "country": "United States",
        "background": "Sean Rad, co-founder of Tinder, attended the University of Southern California before changing the digital dating landscape.",
        "contribution": "Transformed the way people meet and date online, with Tinder becoming a cultural phenomenon.",
        "image": "https://nypost.com/wp-content/uploads/sites/2/2023/07/NYPICHPDPICT000013628228.jpg?quality=75&strip=all&w=744",
        "website": "https://tinder.com",
        "networth": "$3.19 Billion",
    },

    {
        "name": "Elon Musk",
        "company": "Tesla, Inc.",
        "industry": "Aerospace, Automotive, Technology",
        "country": "United States",
        "background": "Elon Musk, involved in several groundbreaking ventures such as SpaceX and Tesla, studied at the University of Pennsylvania, influencing multiple industries.",
        "contribution": "Known for advancing electric vehicles, space exploration, and renewable energy.",
        "image": "https://stayweird.com/wp-content/uploads/2023/07/elon_musk_subsidies.webp",
        "website": "https://www.tesla.com",
        "networth": "$189.2 Billion"
    },

    {
        "name": "Katrina Lake",
        "company": "Stitch Fix",
        "industry": "E-commerce, Fashion",
        "country": "United States",
        "background": "Katrina Lake founded Stitch Fix while attending Harvard Business School. The company offers personalized clothing and styling services through a combination of data science and human judgment. Her innovative approach to retail has reshaped how people shop for clothes.",
        "contribution": "Revolutionized the retail industry by combining technology and personal styling to create a unique shopping experience.",
        "image": "https://cdn.vox-cdn.com/thumbor/TRqChhVZGJ5G8QdLacm8wUMvoGU=/0x0:3840x2560/1200x800/filters:focal(2155x536:2769x1150)/cdn.vox-cdn.com/uploads/chorus_image/image/64797892/REC_BFARSACE_CCMAR17-20170320-170223-2642.0.0.jpeg",
        "website": "https://www.stitchfix.com",
        "networth": "$168 Million",
    },

    {
        "name": "Steve Jobs",
        "company": "Apple Inc.",
        "industry": "Technology",
        "country": "United States",
        "background": "Steve Jobs, co-founder of Apple Inc., dropped out of Reed College to revolutionize personal computing and various other industries.",
        "contribution": "Revolutionized personal computers, animated movies, music, phones, tablet computing, and digital publishing.",
        "image": "https://nypost.com/wp-content/uploads/sites/2/2021/12/steve-jobs-01.jpg?quality=75&strip=all",
        "website": "https://www.apple.com",
        "networth": "$10.2 Billion",
    },

    {
        "name": "Jack Dorsey",
        "company": "Twitter, Inc., Square, Inc.",
        "industry": "Social Media, Financial Services",
        "country": "United States",
        "background": "Jack Dorsey, co-founder of Twitter and Square, studied at New York University before significantly impacting social media and financial services.",
        "contribution": "Instrumental in popularizing microblogging through Twitter and transforming financial transactions with Square.",
        "image": "https://variety.com/wp-content/uploads/2016/07/twitter-jack-dorsey-e1533736603829.jpg?w=1000",
        "website": "https://twitter.com",
        "networth": "$4.8 Billion",
    },

    {
        "name": "Bill Gates",
        "company": "Microsoft Corporation",
        "industry": "Technology / Software",
        "country": "United States",
        "background": "Bill Gates co-founded Microsoft Corporation after attending Harvard University, fundamentally changing the technology landscape.",
        "contribution": "His vision for personal computing fundamentally changed the way the world uses technology.",
        "image": "https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg?rev=010c433f329e4818ba412ec713c888d6",
        "website": "https://www.gatesnotes.com",
        "networth": "$131.2 Billion",
    },

    {
        "name": "Ma Huateng",
        "company": "Tencent",
        "industry": "Internet & Technology",
        "country": "China",
        "background": "Ma Huateng, also known as Pony Ma, co-founded Tencent, one of China's largest and most used Internet service portals. He graduated from Shenzhen University with a degree in computer science.",
        "contribution": "Under his leadership, Tencent has grown into a conglomerate in social networking, gaming, entertainment, and fintech services.",
        "image": "https://nairametrics.com/wp-content/uploads/2021/04/Ma-Huateng.jpg",
        "website": "https://www.tencent.com",
        "networth": "$65.8 Billion",
    },

    {
        "name": "Jeff Bezos",
        "company": "Amazon",
        "industry": "E-commerce and Cloud Computing",
        "country": "United States",
        "background": "Jeff Bezos founded Amazon.com in a garage in Bellevue, Washington, after graduating from Princeton University with degrees in electrical engineering and computer science.",
        "contribution": "Transformed Amazon from an online bookstore into the world's largest online retailer and cloud infrastructure provider, significantly impacting global e-commerce and computing.",
        "image": "https://i.insider.com/64d915005e5d5a00195d0233?width=800&format=jpeg&auto=webp",
        "website": "https://www.amazon.com",
        "networth": "$177 Billion",
    },

    {
        "name": "Adi Tatarko",
        "company": "Houzz",
        "industry": "Interior Design and Decorating",
        "country": "United States",
        "background": "Adi Tatarko co-founded Houzz with her husband Alon Cohen out of a personal project to remodel their own home. The platform was created to address the difficulties homeowners face in finding inspiration and professionals for home remodeling and design.",
        "contribution": "Revolutionized the home remodeling and design industry by creating a comprehensive platform for homeowners to find design inspiration, project advice, and professionals.",
        "image": "https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/images/panoramic/AdiTatarko_1_466714_ndlhjs.jpg",
        "website": "https://www.houzz.com",
        "networth": " $430 million",
    },

    {
        "name": "Larry Page",
        "company": "Google",
        "industry": "Internet & Technology",
        "country": "United States",
        "background": "Larry Page co-founded Google with Sergey Brin in 1998 while they were Ph.D. students at Stanford University. Their mission to organize the world's information and make it universally accessible and useful led to the creation of the most popular search engine.",
        "contribution": "Page's vision for Google has drastically shaped the internet, making information accessible to billions and revolutionizing digital advertising.",
        "image": "https://imageio.forbes.com/specials-images/imageserve/5de7d8c0b269e900075d5ecb/Former-Google-CEO-Larry-Page-holds-a-press-announcement-/960x0.jpg?format=jpg&width=960",
        "website": "https://www.google.com",
        "networth": "$104 Billion",
    },

    {
        "name": "Sergey Brin",
        "company": "Google",
        "industry": "Internet & Technology",
        "country": "United States",
        "background": "Sergey Brin co-founded Google alongside Larry Page. Born in Russia and emigrating to the United States at a young age, Brin attended Stanford University for his Ph.D., where he met Page. Together, they changed how the world accesses information.",
        "contribution": "Brin played a key role in developing the algorithms that power Google, leading to its status as the world's most popular search engine.",
        "image": "https://i.insider.com/62b34f5e5bcf7200181ebc1d?width=700",
        "website": "https://www.google.com",
        "networth": "$100 Billion",
    },

    {
        "name": "Jan Koum",
        "company": "WhatsApp",
        "industry": "Social Media",
        "country": "United States",
        "background": "Jan Koum, co-founder of WhatsApp, moved from Ukraine to the United States as a teenager. He taught himself computer programming before enrolling at San Jose State University. He worked at Yahoo before leaving to start WhatsApp, which became the world's most popular messaging app.",
        "contribution": "Koum's creation of WhatsApp changed communication, offering a free, secure, and international messaging platform.",
        "image": "https://i.insider.com/57bf8728b996eb94008b49d6?width=1200&format=jpeg",
        "website": "https://www.whatsapp.com",
        "networth": "$10 Billion",
    },

    {
        "name": "Daniel Ek",
        "company": "Spotify",
        "industry": "Music Streaming",
        "country": "Sweden",
        "background": "Daniel Ek co-founded Spotify, the world's largest music streaming service provider, after studying engineering at the KTH Royal Institute of Technology in Sweden.",
        "contribution": "Transformed music consumption globally with Spotify, creating a legal streaming model that benefits both artists and consumers.",
        "image": "https://www.thekeyexecutives.com/wp-content/uploads/2024/03/The-Entrepreneurial-Journey-of-Daniel-Ek-From-Skepticism-to-Spotifys-Success.png",
        "website": "https://www.spotify.com",
        "networth": "$4.7 Billion",
    },

    {
        "name": "Sam Altman",
        "company": "OpenAI",
        "industry": "Technology, Venture Capital",
        "country": "United States",
        "background": "Sam Altman, CEO of OpenAI and former president of Y Combinator, attended Stanford University, making notable contributions to AI and startups.",
        "contribution": "Known for his significant contributions to artificial intelligence through OpenAI.",
        "image": "https://cdn.analyticsvidhya.com/wp-content/uploads/2024/01/saml-altman-openai-ceo.webp",
        "website": "https://www.openai.com",
        "networth": "$1 Billion",
    },

    {
        "name": "Cher Wang",
        "company": "HTC Corporation",
        "industry": "Consumer Electronics",
        "country": "Taiwan",
        "background": "Cher Wang co-founded HTC Corporation and has played a pivotal role in its rise as a major competitor in the global smartphone market. She graduated from the University of California, Berkeley, with a degree in economics.",
        "contribution": "Under her leadership, HTC has been at the forefront of several innovations in the smartphone industry, including some of the world's first touch and wireless hand-held devices.",
        "image": "https://www.arrowleadership.org/wp-content/uploads/2020/01/HTC_Cher_Wang_27DEC11_052-1.0.0.jpg",
        "website": "https://www.htc.com",
        "networth": "$1.1 Billion",
    },

    {
        "name": "Bob Parsons",
        "company": "GoDaddy",
        "industry": "Internet",
        "country": "United States",
        "background": "Bob Parsons, founder of GoDaddy, is a United States Marine Corps veteran who attended the University of Baltimore before entering the web services industry.",
        "contribution": "Significantly impacted the web services industry by making domain registration and web hosting accessible.",
        "image": "https://vz.cnwimg.com/wp-content/uploads/2010/11/Bob-Parsons.jpg",
        "website": "https://www.godaddy.com",
        "networth": "$3.6 Billion",
    },

];

let currentIndex = 0;


function showCards(filter = '') {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";


    const filteredFounders = filter ?
        founders.filter(founder => founder.name.toLowerCase().includes(filter.toLowerCase())) :
        [founders[currentIndex]];

    filteredFounders.forEach(founder => {
        const nextCard = document.importNode(document.getElementById("founder-template").content, true);
        nextCard.querySelector("h2").textContent = founder.name;
        nextCard.querySelector(".company-name").textContent = founder.company;
        nextCard.querySelector(".industry").textContent = founder.industry;
        nextCard.querySelector(".country").textContent = founder.country;
        nextCard.querySelector(".background").textContent = founder.background;
        nextCard.querySelector(".contribution").textContent = founder.contribution;
        nextCard.querySelector("img").src = founder.image;
        nextCard.querySelector("img").alt = `Picture of ${founder.name}`;
        nextCard.querySelector(".website").href = founder.website;
        nextCard.querySelector(".networth").textContent = founder.networth;
        cardContainer.appendChild(nextCard);
    });
}

function showNextCard() {
    if (currentIndex < founders.length - 1) {
        currentIndex++;
        showCards();
    }
}

function showPreviousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        showCards();
    }
}

function searchFounder() {
    const searchInput = document.getElementById('search-input').value;
    currentIndex = 0;
    showCards(searchInput);
}

function removeCurrentFounder() {
    if (founders.length > 0) {
        founders.splice(currentIndex, 1);

        if (currentIndex >= founders.length) {
            currentIndex = Math.max(founders.length - 1, 0);
        }

        showCards();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    showCards(); // Initially show the first card
    document.getElementById('next-button').addEventListener('click', showNextCard);
    document.getElementById('prev-button').addEventListener('click', showPreviousCard);
    document.getElementById('search-button').addEventListener('click', searchFounder);
    document.getElementById('remove-button').addEventListener('click', removeCurrentFounder);
});