import { HTML_RESPONSE_FORMAT_INSTRUCTIONS } from "../consts";

export const INSTRUCTION = `You are an AI assistant specializing in music marketing analytics. Your primary user is Willie, a marketing manager at Atlantic Records. Your goal is to help Willie understand the performance of his latest music campaign for a musician signed to Atlantic Records.

Willie can ask you questions about various metrics and KPIs. You should provide insights and explanations based on industry standards and best practices in music marketing.
    
Some example questions Willie might ask:

1. What's the rate of free listeners versus paid subscribers for our artist?
2. Can you break down the geographic distribution of our listeners?
3. What's the top scoring fan for our latest campaign?
4. How many spotify follows have we received in the past week?
 
You should focus on providing recommendations along with metrics.

For example, when Willie asks about fan engagement:
"Your fan engagement rate is 12%, which is solid.
To boost this further, consider running a limited-time exclusive content drop or fan contest"

Always strive to provide specific insights backed with quantitive data that can help Willie improve the campaign's performance.
${HTML_RESPONSE_FORMAT_INSTRUCTIONS}`;

export const NOTES = `Meetings notes will help you be more knowledeable in it is role to help Willie in his role responsible for partnerships and working between marketing and release teams.
Meetings notes:
[
    {
        "sentence": "It.",
        "startTime": "00:00",
        "endTime": "00:00",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Hey, what's up, y'all?",
        "startTime": "00:39",
        "endTime": "00:40",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Yo, yo.",
        "startTime": "00:42",
        "endTime": "00:43",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "Hello.",
        "startTime": "00:45",
        "endTime": "00:45",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Hey, nice to meet you.",
        "startTime": "00:49",
        "endTime": "00:51",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Nice to meet you.",
        "startTime": "00:52",
        "endTime": "00:53",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Just waiting for Sydney and Jordan.",
        "startTime": "01:10",
        "endTime": "01:11",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "We'll kick off.",
        "startTime": "01:11",
        "endTime": "01:12",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah, no, sounds great.",
        "startTime": "01:14",
        "endTime": "01:15",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "No rest.",
        "startTime": "01:15",
        "endTime": "01:16",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Did you get a chance to try the new version of the game?",
        "startTime": "01:26",
        "endTime": "01:28",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Yeah, definitely.",
        "startTime": "01:29",
        "endTime": "01:30",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "It looks great.",
        "startTime": "01:30",
        "endTime": "01:31",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "The, the one question I had was just landing tricks now seems to be a little bit harder.",
        "startTime": "01:31",
        "endTime": "01:35",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "I don't know if it was just bugging on my end, but, like, it felt like it got stuck in the trick where I couldn't, like, if I was doing like the split or the grab, it would just stay as the grab and not like, finish the trick to then land.",
        "startTime": "01:35",
        "endTime": "01:47",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So I wasn't really landing any tricks.",
        "startTime": "01:47",
        "endTime": "01:49",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Okay, interesting.",
        "startTime": "01:50",
        "endTime": "01:51",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Let me go.",
        "startTime": "01:51",
        "endTime": "01:52",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I'll run some tests because we did add a new feature.",
        "startTime": "01:52",
        "endTime": "01:54",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "It's a more in line with, like, the original that we're talking about.",
        "startTime": "01:54",
        "endTime": "01:58",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "If you don't perform your tricks in time and you hit the ground, then you'll crash.",
        "startTime": "01:59",
        "endTime": "02:04",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "So you got to perform them before you drop.",
        "startTime": "02:04",
        "endTime": "02:06",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "But if it's a bug where it's getting stuck, then yeah, let me, if I can sort through that.",
        "startTime": "02:06",
        "endTime": "02:10",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "What up?",
        "startTime": "02:12",
        "endTime": "02:13",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "What's good?",
        "startTime": "02:14",
        "endTime": "02:15",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Cool.",
        "startTime": "02:19",
        "endTime": "02:19",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "I mean, we'll give Jordan another little bit, but happy to relay some info your way.",
        "startTime": "02:19",
        "endTime": "02:24",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So there's been another delay to the deluxe album, so we are going to actually push the game launch one more week.",
        "startTime": "02:25",
        "endTime": "02:31",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So next Thursday will be the official game launch.",
        "startTime": "02:32",
        "endTime": "02:34",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Nice.",
        "startTime": "02:34",
        "endTime": "02:35",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And then they wanted to start teasing.",
        "startTime": "02:35",
        "endTime": "02:36",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "The money wins.",
        "startTime": "02:36",
        "endTime": "02:38",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah.",
        "startTime": "02:38",
        "endTime": "02:38",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "What's up, Jordan?",
        "startTime": "02:39",
        "endTime": "02:39",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "What up?",
        "startTime": "02:42",
        "endTime": "02:43",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Dated timeline.",
        "startTime": "02:45",
        "endTime": "02:46",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yep.",
        "startTime": "02:47",
        "endTime": "02:47",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Keep it going.",
        "startTime": "02:48",
        "endTime": "02:48",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Interrupt game is pushed a week, so not this Thursday, but the following Thursday.",
        "startTime": "02:48",
        "endTime": "02:53",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And then they want to start teasing the single that we gave you the following Monday.",
        "startTime": "02:53",
        "endTime": "02:57",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So pretty much give the single like a four and a half, five day window to kind of breathe within the game and use it as a secondary push back to the game.",
        "startTime": "02:57",
        "endTime": "03:05",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So obviously when Thursday comes next week, we'll be pushing, saying, hey, here's your chance to win.",
        "startTime": "03:05",
        "endTime": "03:10",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Rolling loud tickets.",
        "startTime": "03:10",
        "endTime": "03:11",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Have it live Thursday, Friday, Saturday, Sunday, Monday.",
        "startTime": "03:12",
        "endTime": "03:14",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And then some point Monday or Tuesday be like, hey, now, we actually have a new single in the game, so come back and check it out again.",
        "startTime": "03:14",
        "endTime": "03:20",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And we're putting together like a fully robust kind of rollout strategy marketing wise, getting DJ drama, obviously, to either play the game early, talk about it, promote it, et cetera, and seeing another wish list of kind of influencers and twitch streamers that we want to kind of get on board and get this too early as well.",
        "startTime": "03:21",
        "endTime": "03:37",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So we'll have a full fledged marketing rollout plan for this come next week when we actually are hitting the ground running with this fire.",
        "startTime": "03:38",
        "endTime": "03:44",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "All right, cool.",
        "startTime": "03:45",
        "endTime": "03:45",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "That gives you some time, Isaiah, to make any again.",
        "startTime": "03:45",
        "endTime": "03:50",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "That could have been just messing around with the controllers in the wrong way.",
        "startTime": "03:50",
        "endTime": "03:53",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So I'll definitely go back and play this after the call as well and let you know if it still happened on my end or nothing.",
        "startTime": "03:53",
        "endTime": "03:58",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yep, same here.",
        "startTime": "03:58",
        "endTime": "03:59",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "And I was curious about the DJ drama character integration.",
        "startTime": "03:59",
        "endTime": "04:02",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Yeah, no, he's.",
        "startTime": "04:03",
        "endTime": "04:04",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "He's fully in there now, so it should be set.",
        "startTime": "04:04",
        "endTime": "04:07",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I think it's 25,000.",
        "startTime": "04:07",
        "endTime": "04:09",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "So it should take, like, one game if you're stacking, two games if you're not stacking.",
        "startTime": "04:09",
        "endTime": "04:13",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "And then something were.",
        "startTime": "04:15",
        "endTime": "04:17",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Apologies.",
        "startTime": "04:17",
        "endTime": "04:18",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "Something were just previously speaking to with a product manager about Washington.",
        "startTime": "04:19",
        "endTime": "04:23",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "He's about to go on tour.",
        "startTime": "04:23",
        "endTime": "04:25",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Come, like, I think, end of December, top of the new year as well.",
        "startTime": "04:25",
        "endTime": "04:29",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So ways that we can keep pushing this game in those ecosystems.",
        "startTime": "04:29",
        "endTime": "04:32",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So whether it's like a QR code in venues or some sort of verbiage in these kind of places, what we suggested was just a QR code saying, hey, do you want a chance to go to rolling loud with your friend or just go to chance to rolling loud?",
        "startTime": "04:32",
        "endTime": "04:45",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And then it just links directly to the game.",
        "startTime": "04:45",
        "endTime": "04:47",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "But curious if you guys have seen any kind of, on the ground, a signage copy for other games you might have worked on or just in general, things that you've seen that might work in that space, too.",
        "startTime": "04:48",
        "endTime": "04:57",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So there's a couple of things.",
        "startTime": "04:58",
        "endTime": "05:00",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "QR code is great, and that's really easy because then it kind of gives you the power to do whatever marketing campaign you want, print wise, and then just push directly to the game.",
        "startTime": "05:01",
        "endTime": "05:13",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Something else that I've seen that's been really cool is integrating it into, like, an IRL console type thing, similar to kind of how were talking about with the ski resort thing, where, like, setting up a station that lets people kind of play the game there.",
        "startTime": "05:13",
        "endTime": "05:33",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah, that just creates a little bit what seems to be more hypey because a line forms, people are like, what the hell's going on over there?",
        "startTime": "05:33",
        "endTime": "05:42",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Et cetera.",
        "startTime": "05:42",
        "endTime": "05:43",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "How does the game perform on tablets?",
        "startTime": "05:43",
        "endTime": "05:45",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Because I don't think we'll be able to get, like, a full, like, laptop necessarily.",
        "startTime": "05:45",
        "endTime": "05:48",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Maybe someone that's on the team has a laptop we can store, but figure tablet's probably the easiest thing to set up on site.",
        "startTime": "05:48",
        "endTime": "05:54",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So curious.",
        "startTime": "05:54",
        "endTime": "05:55",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "I know we obviously went through the iOS bugs, and everything should be good there, but just curious, from your perspective, if gameplay is optimal on a tablet if went that route.",
        "startTime": "05:55",
        "endTime": "06:04",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Isaiah.",
        "startTime": "06:04",
        "endTime": "06:04",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah, tablets should be good to go.",
        "startTime": "06:04",
        "endTime": "06:06",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Theoretically, tablets should better performance than phones, worse performance than computers.",
        "startTime": "06:07",
        "endTime": "06:12",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "So if that's a setup, like, I think the kind of thing, the in person, always build type, you could really set up a tablet.",
        "startTime": "06:13",
        "endTime": "06:21",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "You could buy a little game controller for it, like the little arcade joysticks.",
        "startTime": "06:21",
        "endTime": "06:26",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I could set it up so the controls can match to that and then.",
        "startTime": "06:26",
        "endTime": "06:28",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Oh, nice.",
        "startTime": "06:28",
        "endTime": "06:29",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And even like, projecting it, like, you know, if you.",
        "startTime": "06:30",
        "endTime": "06:32",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Because only one person could play on a rig at a time, but if you have a screen where it's like feeding, I think that's like pre concert vibes that would go crazy.",
        "startTime": "06:32",
        "endTime": "06:40",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I mean, just from a data perspective for those types of things, obviously, it seems like probably one person's going to log in and then everyone's just going to play on that person's DSP account.",
        "startTime": "06:40",
        "endTime": "06:50",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So it'll still rack up the streams.",
        "startTime": "06:50",
        "endTime": "06:52",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "But curious, from your perspective, is there a way to.",
        "startTime": "06:52",
        "endTime": "06:54",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Obviously, would we have to clear caches or anything if we want each individual person that comes up to log into their DSP provider to get just additional data, I'm assuming.",
        "startTime": "06:54",
        "endTime": "07:03",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "No, it just makes more sense to have one login.",
        "startTime": "07:03",
        "endTime": "07:05",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Everyone just plays a.",
        "startTime": "07:05",
        "endTime": "07:06",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Still racking up streams anyway on the backend.",
        "startTime": "07:06",
        "endTime": "07:08",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "But just curious.",
        "startTime": "07:08",
        "endTime": "07:09",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "No, I would.",
        "startTime": "07:09",
        "endTime": "07:10",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I would do it.",
        "startTime": "07:10",
        "endTime": "07:11",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I would.",
        "startTime": "07:12",
        "endTime": "07:12",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I would do it where after.",
        "startTime": "07:12",
        "endTime": "07:14",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "After every person, you just log out so that the next person has to sit down and log in with their Spotify.",
        "startTime": "07:15",
        "endTime": "07:22",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah.",
        "startTime": "07:24",
        "endTime": "07:24",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "Just thinking about terms of, like, flow of the line and everything.",
        "startTime": "07:24",
        "endTime": "07:27",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Obviously, it doesn't take too long to necessarily log into dsps, as long as, you know, your email and stuff.",
        "startTime": "07:27",
        "endTime": "07:33",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "But I was just thinking through that.",
        "startTime": "07:33",
        "endTime": "07:37",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And then additionally, what were talking about is utilizing the Tyler character that you guys have built for other kind of marketing material, whether it is kind of video assets while he's on tour to then promote it there, or just things that we can make the character do.",
        "startTime": "07:37",
        "endTime": "07:51",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So just curious, you guys have a 3d file for that character, right?",
        "startTime": "07:51",
        "endTime": "07:54",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And that's totally kosher for us to run with.",
        "startTime": "07:54",
        "endTime": "07:59",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah, definitely.",
        "startTime": "07:59",
        "endTime": "08:00",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I could.",
        "startTime": "08:00",
        "endTime": "08:01",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I could locate those 3d files for you guys for sure.",
        "startTime": "08:01",
        "endTime": "08:03",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "And then if you ever wanted to whip up some animations or something, we could commission that too.",
        "startTime": "08:03",
        "endTime": "08:08",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Same way we did the drama thing.",
        "startTime": "08:08",
        "endTime": "08:09",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "If you want to do it like before the concert to play, you know, on the video screen, having the DJ.",
        "startTime": "08:09",
        "endTime": "08:16",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Drama character do some sort of announcement during the.",
        "startTime": "08:16",
        "endTime": "08:19",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "During the show.",
        "startTime": "08:19",
        "endTime": "08:20",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Like pre show, like while you're wait.",
        "startTime": "08:20",
        "endTime": "08:23",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "That would be sick.",
        "startTime": "08:24",
        "endTime": "08:24",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I'm curious and if it's more work than it's necessary, I just.",
        "startTime": "08:24",
        "endTime": "08:30",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I worry that people are going to want to stand there and play the game and wait for other people to play the entirety of the game start to finish.",
        "startTime": "08:30",
        "endTime": "08:37",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Is there a world?",
        "startTime": "08:38",
        "endTime": "08:39",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "And if it defeats the purpose of, like, you want people to sit there and play the game because it counts as streams.",
        "startTime": "08:39",
        "endTime": "08:44",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Whereas I was more thinking we want to collect data and have them sign in or compete.",
        "startTime": "08:44",
        "endTime": "08:49",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "You know, like the Olympics.",
        "startTime": "08:49",
        "endTime": "08:50",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "There's, like, the high ski jump challenge where, like, you just do one jump and then land it, and then that's like the competition.",
        "startTime": "08:50",
        "endTime": "08:57",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I was curious if we could just do, like, a one jump high score challenge where it's like, if you, like, you're competing to have, like, a high score, each person just jumps once instead of having them have the compete the entire race.",
        "startTime": "08:57",
        "endTime": "09:11",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I just would get a higher turnover rate.",
        "startTime": "09:11",
        "endTime": "09:14",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "It probably wouldn't.",
        "startTime": "09:15",
        "endTime": "09:16",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Probably wouldn't be worth the work.",
        "startTime": "09:17",
        "endTime": "09:19",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I think the way they, like, the full run is kind of where the variation comes from.",
        "startTime": "09:19",
        "endTime": "09:26",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "But if you gave everyone the same jump, they'll be too close to really pick scores.",
        "startTime": "09:26",
        "endTime": "09:29",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "But if you wanted to go, oh, no, go ahead.",
        "startTime": "09:29",
        "endTime": "09:32",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Go for it.",
        "startTime": "09:32",
        "endTime": "09:33",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "No, sorry, finish.",
        "startTime": "09:33",
        "endTime": "09:34",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Okay.",
        "startTime": "09:34",
        "endTime": "09:34",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Like, if you wanted to go that route, you could easily, like, before the concert, the huge screen there, just put mrski.com on the screen and say, oh, compete for the leaderboard.",
        "startTime": "09:34",
        "endTime": "09:43",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "And that way everybody in the concert could just go on their mobile phones, go to mrski.com, and then you could just get all the data from everybody individually, and we could check the scores.",
        "startTime": "09:44",
        "endTime": "09:53",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "So it's like, oh, was this score imported during this time of this concert?",
        "startTime": "09:53",
        "endTime": "09:57",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "And then you could, you know, pull that information.",
        "startTime": "09:57",
        "endTime": "09:59",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "That was one thing I was going to mention is obviously getting people on their mobiles to play the game.",
        "startTime": "09:59",
        "endTime": "10:03",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "But I know historically, venues just generally don't have the best service slash wi fi, depending.",
        "startTime": "10:03",
        "endTime": "10:08",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "But I think it could be really cool to make, like, a mini campaign slash activation for each individual tour stop and be like, hey, for this specific Chicago venue, we're going to be doing a high score where people get x, y and z, whether that's like a vip upgrade, a meet greet in the background, whatever it is, or just merch that's sent to them afterwards.",
        "startTime": "10:08",
        "endTime": "10:25",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "I kind of like making up something for each individual show.",
        "startTime": "10:26",
        "endTime": "10:29",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Jordan, what do you think about that?",
        "startTime": "10:29",
        "endTime": "10:30",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah, I mean, that would be sick.",
        "startTime": "10:31",
        "endTime": "10:32",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "If it's possible, I was curious if it's due.",
        "startTime": "10:32",
        "endTime": "10:36",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Oh.",
        "startTime": "10:36",
        "endTime": "10:37",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Hey, what up, sweets?",
        "startTime": "10:42",
        "endTime": "10:43",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yo, yo.",
        "startTime": "10:44",
        "endTime": "10:46",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Totally thought we got hacked.",
        "startTime": "10:46",
        "endTime": "10:47",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I was like, who is this.",
        "startTime": "10:47",
        "endTime": "10:48",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Who's our dev give you a quick update.",
        "startTime": "10:50",
        "endTime": "10:54",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Game release is moving to.",
        "startTime": "10:54",
        "endTime": "10:56",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "When is it moving, Willie?",
        "startTime": "10:56",
        "endTime": "10:57",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I think that's the 17th is a week from this Thursday.",
        "startTime": "10:57",
        "endTime": "10:59",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So week from this Thursday, game will release and then five days later we will update the game to integrate the unreleased track.",
        "startTime": "11:00",
        "endTime": "11:11",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah.",
        "startTime": "11:11",
        "endTime": "11:12",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "So I think that's the 21st.",
        "startTime": "11:12",
        "endTime": "11:13",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Is that Monday of the following week?",
        "startTime": "11:13",
        "endTime": "11:16",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah.",
        "startTime": "11:16",
        "endTime": "11:17",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Cool.",
        "startTime": "11:17",
        "endTime": "11:18",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "So that's the big update.",
        "startTime": "11:19",
        "endTime": "11:20",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And now we're just kind of talking through different marketing campaigns for.",
        "startTime": "11:20",
        "endTime": "11:23",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah, because obviously when we release it's going to be the two big rolling, loud ticket pushes from the most played and the highest score.",
        "startTime": "11:24",
        "endTime": "11:30",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And then we'll try to come up with fun, kind of little ancillary things that we can do on each kind of tour stop along the way as well.",
        "startTime": "11:31",
        "endTime": "11:36",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "I think that's a fun idea.",
        "startTime": "11:36",
        "endTime": "11:37",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah, it'd be.",
        "startTime": "11:40",
        "endTime": "11:41",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Yeah, I like that.",
        "startTime": "11:41",
        "endTime": "11:43",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "It might be too big of a lift, but it'd be cool if we could.",
        "startTime": "11:44",
        "endTime": "11:47",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Or if we pick like three the.",
        "startTime": "11:47",
        "endTime": "11:49",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Scores off the stop, so to speak.",
        "startTime": "11:49",
        "endTime": "11:52",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I mean, yeah.",
        "startTime": "11:52",
        "endTime": "11:52",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Is there a way to like.",
        "startTime": "11:52",
        "endTime": "11:54",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "I don't want to put you guys under too much stress to figure out, okay.",
        "startTime": "11:54",
        "endTime": "11:57",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Like, are these people actually in the venue, like that kind of stuff?",
        "startTime": "11:57",
        "endTime": "12:00",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Is that something that seems like reasonable for you guys to be able to pull out of the data sets of like, okay, these people actually were coming in from Chicago during these 2 hours of the show, et cetera.",
        "startTime": "12:01",
        "endTime": "12:10",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Or is it kind of like hard to parse?",
        "startTime": "12:10",
        "endTime": "12:12",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "The easiest thing on my end is like, we could get a timestamp so we could see if the timestamp lines up with the concert time.",
        "startTime": "12:13",
        "endTime": "12:20",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "But outside of that, in terms of location, I.",
        "startTime": "12:20",
        "endTime": "12:23",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I imagine the scope will go up, but I'm not too sure.",
        "startTime": "12:23",
        "endTime": "12:25",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Okay.",
        "startTime": "12:25",
        "endTime": "12:26",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah.",
        "startTime": "12:27",
        "endTime": "12:27",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Easiest would be timestamp.",
        "startTime": "12:27",
        "endTime": "12:29",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Obviously we know we can match it up.",
        "startTime": "12:31",
        "endTime": "12:33",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yes.",
        "startTime": "12:34",
        "endTime": "12:34",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "We just.",
        "startTime": "12:34",
        "endTime": "12:35",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Sweet.",
        "startTime": "12:35",
        "endTime": "12:35",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "You're saying yes.",
        "startTime": "12:35",
        "endTime": "12:36",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I mean, yeah, we can time get it too.",
        "startTime": "12:39",
        "endTime": "12:40",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So like, we'll know exactly when the post kind of goes up in venue as well and then say, hey, this activation is live for the next 45 minutes.",
        "startTime": "12:40",
        "endTime": "12:49",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "If you get out of that window.",
        "startTime": "12:49",
        "endTime": "12:50",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Sorry, you just not.",
        "startTime": "12:50",
        "endTime": "12:51",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "You just can't participate.",
        "startTime": "12:51",
        "endTime": "12:52",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "But we'll talk to the team on this side and see if we want to do the individual activations or just drive people to the website overall and just make it more aware that the game's there while on tour.",
        "startTime": "12:52",
        "endTime": "13:02",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Do you think really, is it?",
        "startTime": "13:03",
        "endTime": "13:04",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Oh, go ahead.",
        "startTime": "13:04",
        "endTime": "13:05",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Oh, I was like, I think you raised a good point on the download speed at venues because the game is about 74 megabytes so downloading that off of Wi Fi and then especially in, like, a low bandwidth area, probably would take a while.",
        "startTime": "13:06",
        "endTime": "13:19",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "So the more, you know, if you could have one dedicated device to send people through and then give them the QR code from there, I think that might help mitigate any of those things.",
        "startTime": "13:20",
        "endTime": "13:28",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "But something to keep in mind.",
        "startTime": "13:28",
        "endTime": "13:30",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Jordan, what were you going to say?",
        "startTime": "13:31",
        "endTime": "13:32",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "That's a good point.",
        "startTime": "13:33",
        "endTime": "13:34",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I was going to say, I know they're doing vip on tour, so there'll be meet and greets.",
        "startTime": "13:35",
        "endTime": "13:39",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I was curious if.",
        "startTime": "13:40",
        "endTime": "13:41",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "If we're able to pull data in real time, like, could we encourage people to compete for a meet and greet?",
        "startTime": "13:41",
        "endTime": "13:47",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "So it's like, if you're.",
        "startTime": "13:47",
        "endTime": "13:48",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "If you're playing it on site, top score gets to meet Tylere.",
        "startTime": "13:48",
        "endTime": "13:52",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "The leaderboard is real time, right, sweets?",
        "startTime": "13:53",
        "endTime": "13:56",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah.",
        "startTime": "13:56",
        "endTime": "13:57",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "So you guys, you could just check the leaderboard and see who's up top.",
        "startTime": "13:57",
        "endTime": "14:01",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah, it'll be hard to facilitate logistically.",
        "startTime": "14:02",
        "endTime": "14:05",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Like, on the ground of, like, figuring.",
        "startTime": "14:05",
        "endTime": "14:06",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah, that's what I was.",
        "startTime": "14:06",
        "endTime": "14:07",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "That's exactly.",
        "startTime": "14:07",
        "endTime": "14:08",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Someone, like, winning.",
        "startTime": "14:08",
        "endTime": "14:09",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And then someone.",
        "startTime": "14:09",
        "endTime": "14:10",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And, like, we start to bring them back to the Tyler and then someone else actually post the high score.",
        "startTime": "14:10",
        "endTime": "14:14",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "As we're walking this person backstage, it's like, okay, like, obviously.",
        "startTime": "14:14",
        "endTime": "14:18",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Unless, like, obviously, we time gate it.",
        "startTime": "14:18",
        "endTime": "14:20",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "But I just don't trust Tyler's team having somebody on site at facilitate that.",
        "startTime": "14:20",
        "endTime": "14:26",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "What I'm thinking now in terms of, just, like, the general run of show on ground for venue is, like, have a station with one or two tablets and then, like, a QR code slash other signage near it being like, get in line to play the Tyler ski game for a chance to win.",
        "startTime": "14:26",
        "endTime": "14:40",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Rolling loud tickets.",
        "startTime": "14:40",
        "endTime": "14:41",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And then if you're.",
        "startTime": "14:41",
        "endTime": "14:42",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "If you don't make the top of the board, don't worry about it.",
        "startTime": "14:42",
        "endTime": "14:44",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "You can still play the game at home for a chance to win.",
        "startTime": "14:44",
        "endTime": "14:46",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So it's kind of just like, hitting them two sides.",
        "startTime": "14:47",
        "endTime": "14:50",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "I like that.",
        "startTime": "14:52",
        "endTime": "14:53",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Sweets.",
        "startTime": "14:57",
        "endTime": "14:57",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Do we collect geography on sign in, or.",
        "startTime": "14:57",
        "endTime": "15:04",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "It would be where they're not where they're currently at.",
        "startTime": "15:04",
        "endTime": "15:06",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "It would be where their Spotify is registered, right?",
        "startTime": "15:06",
        "endTime": "15:10",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Oh, it's not IP address.",
        "startTime": "15:10",
        "endTime": "15:12",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Currently, we're tracking the country associated with their Spotify account.",
        "startTime": "15:12",
        "endTime": "15:16",
        "speaker_name": "sweetman eth (sweets)",
        "speaker_id": 5
    },
    {
        "sentence": "We have not looked into gathering device data yet.",
        "startTime": "15:17",
        "endTime": "15:21",
        "speaker_name": "sweetman eth (sweets)",
        "speaker_id": 5
    },
    {
        "sentence": "Okay, so it's an option, though, because I'm thinking, like, we.",
        "startTime": "15:24",
        "endTime": "15:28",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I'm thinking of, like, what's the most impactful thing?",
        "startTime": "15:28",
        "endTime": "15:31",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "If there was, like, a.",
        "startTime": "15:31",
        "endTime": "15:32",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Before the show or right before from, you know, whoever's like, what's it called?",
        "startTime": "15:32",
        "endTime": "15:40",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Performing before Tyler?",
        "startTime": "15:40",
        "endTime": "15:42",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah.",
        "startTime": "15:42",
        "endTime": "15:42",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah.",
        "startTime": "15:43",
        "endTime": "15:43",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Whoever's the opening right after the opener, if there's like a hey.",
        "startTime": "15:43",
        "endTime": "15:47",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "For the next five minutes, whoever gets the highest score gets backstage and we can time gate it and location gate it.",
        "startTime": "15:47",
        "endTime": "15:56",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "That would be a, like, you would get everybody in the entire stadium playing to win, which would be a crazy momentous and it would just, you know, be literally extra.",
        "startTime": "15:57",
        "endTime": "16:07",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah.",
        "startTime": "16:08",
        "endTime": "16:08",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "To Jordan's point, I think maybe doing, like, free merch is probably easier because I don't trust litiler's team to actually facilitate, like, a meet and greet on the ground.",
        "startTime": "16:08",
        "endTime": "16:15",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "but, yeah, if that's possible, we'll definitely build some sort of programming around it.",
        "startTime": "16:15",
        "endTime": "16:20",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "But obviously, if it's like, whatever and whatever.",
        "startTime": "16:20",
        "endTime": "16:22",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Don't, don't worry about it.",
        "startTime": "16:22",
        "endTime": "16:24",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah, whatever.",
        "startTime": "16:24",
        "endTime": "16:25",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "The.",
        "startTime": "16:25",
        "endTime": "16:25",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "The prize is just like kind of figuring out a way to get everybody at the show to play would be like, that's at the end of the day, the whole point.",
        "startTime": "16:25",
        "endTime": "16:35",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Right.",
        "startTime": "16:35",
        "endTime": "16:35",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "So, like, how do we.",
        "startTime": "16:35",
        "endTime": "16:36",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "How do we facilitate and make sure that it.",
        "startTime": "16:36",
        "endTime": "16:40",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "When it's capable and to it locks in the people that are at the show for the winners.",
        "startTime": "16:40",
        "endTime": "16:48",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I'll think on it.",
        "startTime": "16:48",
        "endTime": "16:49",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I'll think on it.",
        "startTime": "16:49",
        "endTime": "16:49",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I think it's a really cool conversation to continue down the path of, like, how do we integrate this game into the tour and make the most sense of, like, the activations throughout the tour.",
        "startTime": "16:49",
        "endTime": "17:02",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah.",
        "startTime": "17:02",
        "endTime": "17:02",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "Or even if you guys have good, like, gameplay capture in general, too.",
        "startTime": "17:02",
        "endTime": "17:05",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Like, maybe that's something we can have running on the screen in between the opener and before the Tyler gets on where it's just kind of like the video of it going in the background and then there'll be kind of a lower third or kind of.",
        "startTime": "17:05",
        "endTime": "17:14",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "It will flip out of the video.",
        "startTime": "17:14",
        "endTime": "17:15",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And just be like, willy, that is a.",
        "startTime": "17:15",
        "endTime": "17:18",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "That is exactly like.",
        "startTime": "17:18",
        "endTime": "17:20",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "You guys remember the dvd sign that bops around the screen and never hits the perfect corner?",
        "startTime": "17:20",
        "endTime": "17:24",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Yeah.",
        "startTime": "17:24",
        "endTime": "17:25",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Like, what's, like, what's the version of that we could create that Tyler could put up as like a.",
        "startTime": "17:25",
        "endTime": "17:30",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Like a performance visual before he gets up?",
        "startTime": "17:30",
        "endTime": "17:32",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Like, is it like, could we do a perfect run by the east?",
        "startTime": "17:32",
        "endTime": "17:36",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I think it would almost be hilarious.",
        "startTime": "17:36",
        "endTime": "17:37",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "If you like, this is way too much work, so don't actually do this.",
        "startTime": "17:37",
        "endTime": "17:40",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "But, like, obviously, there are so many ski videos and ski edits out there.",
        "startTime": "17:40",
        "endTime": "17:43",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "It'd be hilarious to do, like, little chop ups of the Tyler characters.",
        "startTime": "17:43",
        "endTime": "17:46",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Like, hitting these tricks even though it's like, obviously clearly in a video game, but making it feel like a hype video for skiing.",
        "startTime": "17:46",
        "endTime": "17:53",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "That would be crazy.",
        "startTime": "17:56",
        "endTime": "17:57",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Yeah, I like that.",
        "startTime": "17:59",
        "endTime": "18:00",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "And in terms of like easiest lift.",
        "startTime": "18:00",
        "endTime": "18:02",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I think your gameplay one was really on the nose because we could have like a ten minute gameplay video just doing the laps.",
        "startTime": "18:02",
        "endTime": "18:09",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "You know, we'll do the highest quality.",
        "startTime": "18:09",
        "endTime": "18:10",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "We'll transition between all the three different characters and stuff and that.",
        "startTime": "18:10",
        "endTime": "18:14",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Yeah, as long as they're like smooth ish runs without that much like downtime or like obviously too many falls or anything like that.",
        "startTime": "18:14",
        "endTime": "18:21",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Just wanted to feel like it's smooth video and gameplay.",
        "startTime": "18:21",
        "endTime": "18:24",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "I think that could work really well, honestly.",
        "startTime": "18:24",
        "endTime": "18:26",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah, I like that.",
        "startTime": "18:27",
        "endTime": "18:28",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "That's manageable because he is Mister Ski.",
        "startTime": "18:28",
        "endTime": "18:30",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So we can call it the ski area.",
        "startTime": "18:30",
        "endTime": "18:32",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Exactly.",
        "startTime": "18:33",
        "endTime": "18:33",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Like some.",
        "startTime": "18:33",
        "endTime": "18:34",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Some sort of mister ski, like, loading screen.",
        "startTime": "18:34",
        "endTime": "18:37",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Like, it's almost like you're waiting for him to perform.",
        "startTime": "18:37",
        "endTime": "18:39",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "This is what you're just going to watch.",
        "startTime": "18:39",
        "endTime": "18:40",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Instead of it just being the loading.",
        "startTime": "18:40",
        "endTime": "18:42",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Screen asset you guys made, I think would work well too.",
        "startTime": "18:42",
        "endTime": "18:44",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Even if that's in between each of the gameplay footages or just like kind of the start and the end of the gameplay footage.",
        "startTime": "18:44",
        "endTime": "18:50",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "It loads into the gameplay footage and then exits with the loading screen as well.",
        "startTime": "18:50",
        "endTime": "18:53",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And then we can say, yo, check out the ski lodge area for your chance to win X, Y and Z.",
        "startTime": "18:54",
        "endTime": "18:57",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Or like play the game yourself.",
        "startTime": "18:57",
        "endTime": "18:59",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "I think that sounds great.",
        "startTime": "18:59",
        "endTime": "19:01",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Random, random question.",
        "startTime": "19:02",
        "endTime": "19:04",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "In the past, we've had some success converting the digital game into physical.",
        "startTime": "19:05",
        "endTime": "19:10",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "In the sense that you just put it on to one of those like modded game Boyd dance cartridges, you know.",
        "startTime": "19:11",
        "endTime": "19:17",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Curious if we could do that with this game and then maybe make a couple physical copies of the Mister ski game.",
        "startTime": "19:20",
        "endTime": "19:25",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "And then that could be a very cool prize as an incentive to participate is like you could get an autographed physical version of the Mister Ski game.",
        "startTime": "19:26",
        "endTime": "19:33",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Yeah.",
        "startTime": "19:34",
        "endTime": "19:34",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "And obviously it would be an offline version and just mostly the time trial as opposed to scores, I would think.",
        "startTime": "19:34",
        "endTime": "19:39",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "But yeah, it's.",
        "startTime": "19:39",
        "endTime": "19:42",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "It's not impossible.",
        "startTime": "19:42",
        "endTime": "19:44",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "It's probably a big lift.",
        "startTime": "19:44",
        "endTime": "19:45",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Let me.",
        "startTime": "19:45",
        "endTime": "19:46",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Let me do one more round of research.",
        "startTime": "19:46",
        "endTime": "19:47",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "When I was dabbling into physicals and the route of going that way, it's a.",
        "startTime": "19:47",
        "endTime": "19:52",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "The arcade cabinet setup seems like such a smoother route because then you could tie straight to the site and you don't have to recode or report everything.",
        "startTime": "19:52",
        "endTime": "20:01",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "So my gut instinct is to say, no, it's too big of a lift.",
        "startTime": "20:01",
        "endTime": "20:04",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "But let me do a little bit of research and if I come across something, I'll let you guys.",
        "startTime": "20:04",
        "endTime": "20:07",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Because that'd be cool though.",
        "startTime": "20:07",
        "endTime": "20:09",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Yeah, we did it for little Uzi ver when we did his Pluto versus baby Pluto game.",
        "startTime": "20:10",
        "endTime": "20:15",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "You could play on his website that.",
        "startTime": "20:15",
        "endTime": "20:17",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Was through cruel toys, right?",
        "startTime": "20:17",
        "endTime": "20:19",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yep, that's the one.",
        "startTime": "20:19",
        "endTime": "20:21",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Yeah.",
        "startTime": "20:21",
        "endTime": "20:21",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Man did his research.",
        "startTime": "20:21",
        "endTime": "20:23",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Rules.",
        "startTime": "20:25",
        "endTime": "20:25",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "Fire.",
        "startTime": "20:25",
        "endTime": "20:25",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I love those guys.",
        "startTime": "20:25",
        "endTime": "20:26",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I think, like, even.",
        "startTime": "20:26",
        "endTime": "20:27",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I mean, if it's, like, off.",
        "startTime": "20:27",
        "endTime": "20:29",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Also, like a one off activation, too.",
        "startTime": "20:29",
        "endTime": "20:31",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Like, it wouldn't be hard to just give them the.",
        "startTime": "20:31",
        "endTime": "20:33",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "The.",
        "startTime": "20:33",
        "endTime": "20:34",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "If they already have all of the setup and everything.",
        "startTime": "20:34",
        "endTime": "20:36",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Just give them the code for.",
        "startTime": "20:36",
        "endTime": "20:39",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "To print physicals.",
        "startTime": "20:39",
        "endTime": "20:41",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah, totally.",
        "startTime": "20:45",
        "endTime": "20:46",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "If they could connect it up.",
        "startTime": "20:46",
        "endTime": "20:47",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I'm down with that.",
        "startTime": "20:48",
        "endTime": "20:49",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I mean.",
        "startTime": "20:51",
        "endTime": "20:51",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah, Jordan, you want to.",
        "startTime": "20:51",
        "endTime": "20:52",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "I mean, you can talk to people, you know, that make the physical stuff and see what they would need from this end.",
        "startTime": "20:52",
        "endTime": "20:55",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And we can see, I mean, the.",
        "startTime": "20:55",
        "endTime": "20:57",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Making the box is no problem.",
        "startTime": "20:57",
        "endTime": "20:59",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "It's just converting the game to the Game Boy cartridges.",
        "startTime": "20:59",
        "endTime": "21:03",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I can.",
        "startTime": "21:03",
        "endTime": "21:04",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I can ping the crow toy folks to see if they would be interested, but I have a feeling they're going to be confused why they're converting somebody else's game to Game Boy and not just working with me directly.",
        "startTime": "21:04",
        "endTime": "21:14",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Yeah.",
        "startTime": "21:14",
        "endTime": "21:15",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "If we want to go the full game boy route, it's like, I could probably.",
        "startTime": "21:15",
        "endTime": "21:18",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I could for sure do, like, the pixel style mister ski in Game Boy cartridge form.",
        "startTime": "21:18",
        "endTime": "21:24",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Like, I could whip that up, no problem.",
        "startTime": "21:24",
        "endTime": "21:26",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "But in terms of the.",
        "startTime": "21:26",
        "endTime": "21:28",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "The.",
        "startTime": "21:28",
        "endTime": "21:29",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "That's.",
        "startTime": "21:29",
        "endTime": "21:29",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "That's where we're going to get obstacles.",
        "startTime": "21:29",
        "endTime": "21:31",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Got you.",
        "startTime": "21:31",
        "endTime": "21:32",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "True.",
        "startTime": "21:34",
        "endTime": "21:34",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Let's dive into it.",
        "startTime": "21:36",
        "endTime": "21:37",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "We'll look more into it.",
        "startTime": "21:38",
        "endTime": "21:39",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah, it's just something to look into because, like, for me, I was just thinking, like, what's something that's not.",
        "startTime": "21:39",
        "endTime": "21:43",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "You don't have to get it day of.",
        "startTime": "21:43",
        "endTime": "21:45",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Right.",
        "startTime": "21:45",
        "endTime": "21:45",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Then it's more like you're competing throughout the tour for a chance to win the physical copy, the autograph.",
        "startTime": "21:45",
        "endTime": "21:51",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Like, there's a reason.",
        "startTime": "21:51",
        "endTime": "21:52",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "And it's only available to people who participated at the tour.",
        "startTime": "21:52",
        "endTime": "21:55",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "So it's like, it's a reason to wait in line is because you might win that physical copy.",
        "startTime": "21:55",
        "endTime": "22:00",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I don't know.",
        "startTime": "22:00",
        "endTime": "22:00",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Maybe it's a surprise pack or something.",
        "startTime": "22:00",
        "endTime": "22:03",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Definitely.",
        "startTime": "22:04",
        "endTime": "22:04",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "How many tour dates are there?",
        "startTime": "22:04",
        "endTime": "22:05",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Do we know?",
        "startTime": "22:05",
        "endTime": "22:06",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Let's see.",
        "startTime": "22:06",
        "endTime": "22:07",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Because I'm like, I could definitely.",
        "startTime": "22:09",
        "endTime": "22:10",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I've dabbled with the game board cartridges before, and the route I went is, like, I have to code it just specifically for the Game Boy cartridge, but porting it, putting onto the Gameboy cartridge is not a problem.",
        "startTime": "22:11",
        "endTime": "22:22",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "And then I also did this thing where we can connect it to, like, NFC chips.",
        "startTime": "22:22",
        "endTime": "22:26",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "So if people don't have a game Boy, they could just tap it with their iPhone and access the game that way.",
        "startTime": "22:26",
        "endTime": "22:30",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "And it's still like, you know, the memorabilia thing, that it'll be a good physical price for people.",
        "startTime": "22:30",
        "endTime": "22:36",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I like that.",
        "startTime": "22:39",
        "endTime": "22:41",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "There are 14 stops on his tour starting October 17 and going until December 15.",
        "startTime": "22:47",
        "endTime": "22:52",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Okay.",
        "startTime": "22:54",
        "endTime": "22:55",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Yeah, that's no problem.",
        "startTime": "22:55",
        "endTime": "22:56",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Like, I could.",
        "startTime": "22:56",
        "endTime": "22:57",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I would need a little budget to pull it off.",
        "startTime": "22:57",
        "endTime": "22:59",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I could easily do like 30.",
        "startTime": "22:59",
        "endTime": "23:00",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "I could produce like 30 cartridges myself for sure.",
        "startTime": "23:01",
        "endTime": "23:03",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Yeah.",
        "startTime": "23:15",
        "endTime": "23:15",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I mean, I think it's.",
        "startTime": "23:15",
        "endTime": "23:16",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "It's worth.",
        "startTime": "23:16",
        "endTime": "23:17",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "It's worth exploring, looking into.",
        "startTime": "23:17",
        "endTime": "23:18",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "And we can bring it up to tenice.",
        "startTime": "23:18",
        "endTime": "23:20",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "It's choppy on my side.",
        "startTime": "23:30",
        "endTime": "23:31",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Is it choppy for you guys?",
        "startTime": "23:31",
        "endTime": "23:33",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Yeah.",
        "startTime": "23:33",
        "endTime": "23:34",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "Rolling loud is December 13 and 15th.",
        "startTime": "23:34",
        "endTime": "23:36",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So.",
        "startTime": "23:36",
        "endTime": "23:36",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "What?",
        "startTime": "23:39",
        "endTime": "23:40",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "Same.",
        "startTime": "23:40",
        "endTime": "23:40",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Sorry, Willie.",
        "startTime": "23:40",
        "endTime": "23:41",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "It was choppy.",
        "startTime": "23:41",
        "endTime": "23:42",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Yeah, I dropped off my computer.",
        "startTime": "23:42",
        "endTime": "23:44",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "It was getting real bad.",
        "startTime": "23:44",
        "endTime": "23:45",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "What were we saying about rolling loud?",
        "startTime": "23:50",
        "endTime": "23:52",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "That's the 13th and 15 December.",
        "startTime": "23:53",
        "endTime": "23:56",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Okay, so we got like a two months ish.",
        "startTime": "23:58",
        "endTime": "24:02",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah.",
        "startTime": "24:03",
        "endTime": "24:03",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Dope.",
        "startTime": "24:04",
        "endTime": "24:05",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "All right.",
        "startTime": "24:06",
        "endTime": "24:07",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Fire.",
        "startTime": "24:07",
        "endTime": "24:07",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Sweet.",
        "startTime": "24:08",
        "endTime": "24:09",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So, to reiterate, we're going to start to think about integration with the tour.",
        "startTime": "24:11",
        "endTime": "24:15",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "When does the tour start?",
        "startTime": "24:15",
        "endTime": "24:17",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "First date of the tour is the 17 October.",
        "startTime": "24:17",
        "endTime": "24:20",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Oh, of October.",
        "startTime": "24:21",
        "endTime": "24:22",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah.",
        "startTime": "24:22",
        "endTime": "24:23",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "But we don't have to hit the first tour stop, obviously.",
        "startTime": "24:23",
        "endTime": "24:25",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "That's the game launch too.",
        "startTime": "24:26",
        "endTime": "24:27",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "That's nice.",
        "startTime": "24:27",
        "endTime": "24:28",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Yeah.",
        "startTime": "24:28",
        "endTime": "24:29",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Okay, cool.",
        "startTime": "24:30",
        "endTime": "24:31",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "So we'll think about Tor integration.",
        "startTime": "24:31",
        "endTime": "24:33",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "We can set up a QR code really easy on our side.",
        "startTime": "24:35",
        "endTime": "24:38",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Or you guys can set it up on your end if you have a QR studio that you can control it a little bit more.",
        "startTime": "24:38",
        "endTime": "24:46",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Let me know if you want me to set it up or if you guys are going to do it.",
        "startTime": "24:48",
        "endTime": "24:51",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "We'll get the game launched next Thursday.",
        "startTime": "24:52",
        "endTime": "24:56",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "We'll make sure we switch the.",
        "startTime": "24:57",
        "endTime": "25:00",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "We'll switch the song to.",
        "startTime": "25:03",
        "endTime": "25:05",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Well, right now, the way we have it set up.",
        "startTime": "25:05",
        "endTime": "25:07",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Once the unreleased MP3 is activated, the player hears what's the current single that's popping right now with the sample.",
        "startTime": "25:07",
        "endTime": "25:18",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Slippery?",
        "startTime": "25:18",
        "endTime": "25:19",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "No, the other one.",
        "startTime": "25:19",
        "endTime": "25:20",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Lth.",
        "startTime": "25:21",
        "endTime": "25:22",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Oh, yeah.",
        "startTime": "25:22",
        "endTime": "25:23",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Lth Vm or something like that.",
        "startTime": "25:23",
        "endTime": "25:25",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "They hear that song when they're playing, they win.",
        "startTime": "25:26",
        "endTime": "25:31",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Or once they get past one round of like what?",
        "startTime": "25:31",
        "endTime": "25:35",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Level one, it stops.",
        "startTime": "25:35",
        "endTime": "25:39",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "The music opens a pop up that says, like, congratulations, you unlocked a new, unreleased song.",
        "startTime": "25:39",
        "endTime": "25:45",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "They can play the song and then go back to playing the game.",
        "startTime": "25:45",
        "endTime": "25:49",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "So it's like you have to win in order to hear the song.",
        "startTime": "25:50",
        "endTime": "25:53",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Got you.",
        "startTime": "25:54",
        "endTime": "25:55",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "So that's dope.",
        "startTime": "25:55",
        "endTime": "25:56",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And it's all in game.",
        "startTime": "25:57",
        "endTime": "26:00",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "So there's like no download button or anything like that.",
        "startTime": "26:00",
        "endTime": "26:02",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "So it should be containable unless somebody super bootlegs it.",
        "startTime": "26:02",
        "endTime": "26:07",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah.",
        "startTime": "26:07",
        "endTime": "26:07",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "No, and I like that they have to play the game fully before they can hear the unreleased song too.",
        "startTime": "26:07",
        "endTime": "26:11",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah, I think that's a great move.",
        "startTime": "26:12",
        "endTime": "26:13",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "That's really important.",
        "startTime": "26:13",
        "endTime": "26:14",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "So, yeah, we can.",
        "startTime": "26:16",
        "endTime": "26:17",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And then we'll launch that on Monday and we're all good.",
        "startTime": "26:17",
        "endTime": "26:19",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And then asset wise, are we all good on assets from our end?",
        "startTime": "26:20",
        "endTime": "26:24",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Is there anything else you guys need?",
        "startTime": "26:24",
        "endTime": "26:26",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "yeah, we'll quickly reconnect with the team on this side about that video footage that were talking about the gameplay and the loading screen asset on either side of it, just to see if we can play it in between the opener and the Tyler.",
        "startTime": "26:26",
        "endTime": "26:37",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "But for now, we're all good.",
        "startTime": "26:38",
        "endTime": "26:39",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Fire.",
        "startTime": "26:40",
        "endTime": "26:40",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Fire.",
        "startTime": "26:41",
        "endTime": "26:41",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "All right, cool.",
        "startTime": "26:42",
        "endTime": "26:43",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Last but not least, did you guys get a chance to check out the ski art website?",
        "startTime": "26:43",
        "endTime": "26:48",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "No.",
        "startTime": "26:51",
        "endTime": "26:51",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Website?",
        "startTime": "26:52",
        "endTime": "26:52",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "No.",
        "startTime": "26:52",
        "endTime": "26:53",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Okay.",
        "startTime": "26:53",
        "endTime": "26:53",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah, it's the thing I sent you guys that I.",
        "startTime": "26:53",
        "endTime": "26:55",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "That I said I built over the weekend.",
        "startTime": "26:55",
        "endTime": "26:56",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I was playing around.",
        "startTime": "26:56",
        "endTime": "26:57",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I didn't see it.",
        "startTime": "26:57",
        "endTime": "26:59",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Let me show you it right quick because it's kind of fire.",
        "startTime": "27:00",
        "endTime": "27:03",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And we can integrate something like this.",
        "startTime": "27:03",
        "endTime": "27:05",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I'll just show it to you.",
        "startTime": "27:07",
        "endTime": "27:08",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "You guys can see what's capable, and then from there, figure out if it makes sense.",
        "startTime": "27:08",
        "endTime": "27:14",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "So I set it up.",
        "startTime": "27:14",
        "endTime": "27:15",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Where can you guys see my screen?",
        "startTime": "27:15",
        "endTime": "27:16",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yep, we can see.",
        "startTime": "27:16",
        "endTime": "27:18",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "So if you go to ski art.com, it basically generates AI images of L'Tyler in any setting.",
        "startTime": "27:19",
        "endTime": "27:27",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "So you can write, like, a cinematic shot of La Tyler on a mountain.",
        "startTime": "27:27",
        "endTime": "27:31",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And it generates this.",
        "startTime": "27:31",
        "endTime": "27:33",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And I, like, built the model so that it, like, mimics it.",
        "startTime": "27:33",
        "endTime": "27:38",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Like, look, recreates Tyler, like, very closely.",
        "startTime": "27:38",
        "endTime": "27:42",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And so basically you can, like, just like, I roll the dice.",
        "startTime": "27:42",
        "endTime": "27:46",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "It'll randomize a prompt and then, like, set it up.",
        "startTime": "27:46",
        "endTime": "27:49",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Shit actually came out.",
        "startTime": "27:49",
        "endTime": "27:51",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Kind of fire.",
        "startTime": "27:51",
        "endTime": "27:52",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Like, all of these.",
        "startTime": "27:52",
        "endTime": "27:53",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Let's see it.",
        "startTime": "27:53",
        "endTime": "27:54",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Look at.",
        "startTime": "27:54",
        "endTime": "27:55",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Look at these shots.",
        "startTime": "27:55",
        "endTime": "27:56",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "They're, like, kind of crazy, right?",
        "startTime": "27:57",
        "endTime": "28:03",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And so the way it's set up is I have it running for, like, it takes about 30 seconds to generate.",
        "startTime": "28:04",
        "endTime": "28:10",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "So you generate it, and we can set it up where they log in with their Spotify and while they're generating, they're streaming a song.",
        "startTime": "28:10",
        "endTime": "28:17",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "So we're increasing the streams on and capturing emails.",
        "startTime": "28:17",
        "endTime": "28:21",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Question for that.",
        "startTime": "28:21",
        "endTime": "28:22",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Is there a way to have, like, a quick share function, like, to socials?",
        "startTime": "28:22",
        "endTime": "28:26",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "If people wanted to post on, like, ig story or Twitter or anything, we.",
        "startTime": "28:26",
        "endTime": "28:29",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Can set up a quick share.",
        "startTime": "28:29",
        "endTime": "28:30",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I was also thinking about setting up, like, a gallery.",
        "startTime": "28:30",
        "endTime": "28:32",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Like, that's the one on him sitting on a city.",
        "startTime": "28:32",
        "endTime": "28:35",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Oh, my God.",
        "startTime": "28:35",
        "endTime": "28:36",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "That's fire.",
        "startTime": "28:36",
        "endTime": "28:36",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "So good, bro.",
        "startTime": "28:36",
        "endTime": "28:37",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "These are upset, bro.",
        "startTime": "28:37",
        "endTime": "28:39",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "We can set this, like, I have this set up where we can literally do this with any artist.",
        "startTime": "28:39",
        "endTime": "28:43",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Now I just have to train a model.",
        "startTime": "28:43",
        "endTime": "28:45",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And if we make, like, a gallery, I can also make it where like people can see other people's images like them.",
        "startTime": "28:45",
        "endTime": "28:52",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Kind of make it like more of like a social fan interaction thing and then share the socials if we want.",
        "startTime": "28:52",
        "endTime": "28:56",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Are you thinking this would be like at the end of the game when someone finishes a lap or just on the website in general?",
        "startTime": "28:56",
        "endTime": "29:01",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "I was thinking on the website in general just like another campaign activation to get fans just playing around.",
        "startTime": "29:01",
        "endTime": "29:07",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Like, you know, make it really easy for fans to like get creative and put Lil Tyler in like different places.",
        "startTime": "29:07",
        "endTime": "29:12",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "We can obviously get even more crazy with features.",
        "startTime": "29:12",
        "endTime": "29:15",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Like, I was thinking it would be fire if like they took a selfie and then I made a model of them and then put them in an image with Lil Tyler.",
        "startTime": "29:15",
        "endTime": "29:24",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Like we can get really fun.",
        "startTime": "29:24",
        "endTime": "29:26",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "It can get really interesting.",
        "startTime": "29:26",
        "endTime": "29:27",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "But yeah, I mean, we'll bring it.",
        "startTime": "29:27",
        "endTime": "29:28",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Up to the team because I think this is great.",
        "startTime": "29:28",
        "endTime": "29:30",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And that's the teasers for the feature on the deluxe album is something that we discussed honestly for the rollout in terms of like, can we give this to someone?",
        "startTime": "29:30",
        "endTime": "29:37",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "that's going to be featured on the deluxe album to like tease the game early so I could see it working in this respect too where it's like, hey, maybe we'll just like low key, throw them in the example kind of prompt or in the example kind of asset that's generated and people could like mess around with it a bit.",
        "startTime": "29:38",
        "endTime": "29:51",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "But yeah, send us the kind of photos that you've generated already in that folder that you have and we'll share obviously the link that you sent us to with the team and just get their thoughts.",
        "startTime": "29:51",
        "endTime": "29:59",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah, I'll send you everything.",
        "startTime": "29:59",
        "endTime": "30:00",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And just think through it because I think it could be something really interesting.",
        "startTime": "30:01",
        "endTime": "30:04",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I'm going to continue to work on kind of like getting.",
        "startTime": "30:04",
        "endTime": "30:06",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Cause honestly for the in person in venue stuff, that might be a better like mechanism where it's like, hey, generate your own photo of the Tyler in whatever situation which everyone gets the most likes, like during this concert is going to get free merch, whatever.",
        "startTime": "30:06",
        "endTime": "30:21",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "If we don't think that the bandwidth capabilities within a venue is good enough to support like multiple people kind of playing this game at once.",
        "startTime": "30:21",
        "endTime": "30:28",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah, that's not a bad idea.",
        "startTime": "30:28",
        "endTime": "30:30",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I also like the QR code of the game because that just gets people playing it.",
        "startTime": "30:30",
        "endTime": "30:33",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "But like, yeah, more of like a real time activation of my thought is like, how do we just get a bunch of Lil Tyler images surfacing on Instagram and he doesn't have to actually take them?",
        "startTime": "30:33",
        "endTime": "30:45",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Like, you know, like that shit, like if you.",
        "startTime": "30:45",
        "endTime": "30:47",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Interesting thought.",
        "startTime": "30:47",
        "endTime": "30:48",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Interesting.",
        "startTime": "30:48",
        "endTime": "30:49",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I just wonder how we get people to do it, how we get people to participate.",
        "startTime": "30:49",
        "endTime": "30:52",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "There would have to be a little call to action booth sign up instead of this.",
        "startTime": "30:53",
        "endTime": "30:56",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Like this.",
        "startTime": "30:56",
        "endTime": "30:58",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Whatever.",
        "startTime": "31:01",
        "endTime": "31:02",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "I'm just thinking maybe there's some sort of connection to the jumbotron or like while he's performing.",
        "startTime": "31:04",
        "endTime": "31:10",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Maybe there's.",
        "startTime": "31:11",
        "endTime": "31:12",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "There's a moment where you get to see like the fan.",
        "startTime": "31:12",
        "endTime": "31:14",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Fan art feature.",
        "startTime": "31:14",
        "endTime": "31:15",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Like, there's like one.",
        "startTime": "31:16",
        "endTime": "31:17",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I don't know.",
        "startTime": "31:17",
        "endTime": "31:17",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I'm just trying to think, why participate if nobody's gonna see it?",
        "startTime": "31:17",
        "endTime": "31:20",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Doesn't matter.",
        "startTime": "31:21",
        "endTime": "31:22",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Would it be cool if you could get it, obviously up on the Jumbotron slash led screen?",
        "startTime": "31:22",
        "endTime": "31:26",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "So I just don't know, logistically for each venue, how you would go about that.",
        "startTime": "31:26",
        "endTime": "31:29",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah.",
        "startTime": "31:29",
        "endTime": "31:30",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "How early in advance do you have to submit or can you submit things in real time like fucking athlete eleven?",
        "startTime": "31:30",
        "endTime": "31:35",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Because they'd be updating that shit real time.",
        "startTime": "31:35",
        "endTime": "31:38",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "I'm sure there's a way actually to do real time that'd be fire to just like feature fan generated images.",
        "startTime": "31:39",
        "endTime": "31:44",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Right.",
        "startTime": "31:44",
        "endTime": "31:44",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Exactly.",
        "startTime": "31:44",
        "endTime": "31:45",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "On the big screen.",
        "startTime": "31:45",
        "endTime": "31:46",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "We're Willie, who was that person we.",
        "startTime": "31:46",
        "endTime": "31:49",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Spoke to that had origin story?",
        "startTime": "31:49",
        "endTime": "31:52",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah, origin story did this.",
        "startTime": "31:52",
        "endTime": "31:54",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "You should look up the company origin story.",
        "startTime": "31:54",
        "endTime": "31:55",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "This is pretty much their.",
        "startTime": "31:55",
        "endTime": "31:56",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Their business model is they do like AI generation for like, venues and concerts.",
        "startTime": "31:56",
        "endTime": "32:03",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Well, they usually have their own festivals, but it's origin story spelled with the o that has like a slash through it for the origin.",
        "startTime": "32:03",
        "endTime": "32:09",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Funny as hell.",
        "startTime": "32:10",
        "endTime": "32:11",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "His whole thing was like, you can perform and, like, you get to control his stage visuals, basically, like, fans submitted.",
        "startTime": "32:12",
        "endTime": "32:19",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Oh, that's fire.",
        "startTime": "32:19",
        "endTime": "32:20",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah, it's a cool concept.",
        "startTime": "32:20",
        "endTime": "32:22",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Hasn't really caught on yet, though.",
        "startTime": "32:22",
        "endTime": "32:23",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Interesting.",
        "startTime": "32:24",
        "endTime": "32:25",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I think it could be a cool activation just for fans in general, but.",
        "startTime": "32:28",
        "endTime": "32:31",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And it's like.",
        "startTime": "32:31",
        "endTime": "32:32",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Yeah, it's like, it's real easy to spin up.",
        "startTime": "32:32",
        "endTime": "32:34",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "So, you know, just throwing as much.",
        "startTime": "32:34",
        "endTime": "32:37",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "As much cool ass shit to La Tyler as possible because he's willing to do it.",
        "startTime": "32:37",
        "endTime": "32:42",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And I feel like he's got a.",
        "startTime": "32:42",
        "endTime": "32:44",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Moment too right now, so.",
        "startTime": "32:44",
        "endTime": "32:45",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Exactly, exactly.",
        "startTime": "32:45",
        "endTime": "32:47",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Keep.",
        "startTime": "32:47",
        "endTime": "32:48",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Keep feeding the moment.",
        "startTime": "32:48",
        "endTime": "32:49",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Absolutely.",
        "startTime": "32:50",
        "endTime": "32:51",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Fire.",
        "startTime": "32:52",
        "endTime": "32:52",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I know we're over time here, so we'll.",
        "startTime": "32:53",
        "endTime": "32:54",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "We'll check in with the team on, obviously, the.",
        "startTime": "32:54",
        "endTime": "32:57",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "The AI generator, and we'll see what kind of route they want to go for the QR codes.",
        "startTime": "32:57",
        "endTime": "33:01",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "We'll see if there's any other kind of.",
        "startTime": "33:01",
        "endTime": "33:03",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "If they're first and foremost willing to play the asset of the gameplay on any of the kind of screens in between shows.",
        "startTime": "33:03",
        "endTime": "33:09",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "And then we'll think about kind of if we're going to do a specific activation at each show or if that's going to be too much of a logistical nightmare for us on the ground, so.",
        "startTime": "33:09",
        "endTime": "33:17",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Okay, cool.",
        "startTime": "33:18",
        "endTime": "33:19",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "All right.",
        "startTime": "33:20",
        "endTime": "33:20",
        "speaker_name": "Sidney Swift",
        "speaker_id": 2
    },
    {
        "sentence": "Yeah.",
        "startTime": "33:20",
        "endTime": "33:20",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "And then I'm going to send you guys a little tool that we're building right now.",
        "startTime": "33:20",
        "endTime": "33:27",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Let's say basically like a chat bot that you can check up on Tyler's, like, activation and fans and shit.",
        "startTime": "33:29",
        "endTime": "33:35",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "So let me know if you like.",
        "startTime": "33:35",
        "endTime": "33:37",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I'll probably have that done by the end of the week.",
        "startTime": "33:37",
        "endTime": "33:39",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Let me know if you want to, like, sit down and go over it or just want to just, like, fuck around with it.",
        "startTime": "33:39",
        "endTime": "33:45",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Excited to see it.",
        "startTime": "33:46",
        "endTime": "33:47",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Definitely.",
        "startTime": "33:47",
        "endTime": "33:48",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Yeah.",
        "startTime": "33:48",
        "endTime": "33:48",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "You should hopefully be able to be like, how many fans played the game this week?",
        "startTime": "33:48",
        "endTime": "33:52",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "And it'll just, like, you can just talk with it instead of having to, you know, log in or do anything like that.",
        "startTime": "33:52",
        "endTime": "33:58",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Oh, nice.",
        "startTime": "33:58",
        "endTime": "33:59",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Sweets has his hand.",
        "startTime": "33:59",
        "endTime": "34:00",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Very.",
        "startTime": "34:00",
        "endTime": "34:00",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "What's up, sweets?",
        "startTime": "34:00",
        "endTime": "34:01",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Are there any questions that you guys are usually asking internally to know whether these campaigns are successful?",
        "startTime": "34:01",
        "endTime": "34:06",
        "speaker_name": "sweetman eth (sweets)",
        "speaker_id": 5
    },
    {
        "sentence": "Are there any questions you'd love, like, when you're imagining talking to this chatbot to know if they care about the streams?",
        "startTime": "34:06",
        "endTime": "34:12",
        "speaker_name": "sweetman eth (sweets)",
        "speaker_id": 5
    },
    {
        "sentence": "They really care about the streams.",
        "startTime": "34:12",
        "endTime": "34:14",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Streams, new followers, average listening time.",
        "startTime": "34:14",
        "endTime": "34:17",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Streams, followers, average listening time.",
        "startTime": "34:18",
        "endTime": "34:21",
        "speaker_name": "sweetman eth (sweets)",
        "speaker_id": 5
    },
    {
        "sentence": "Copy.",
        "startTime": "34:21",
        "endTime": "34:22",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Great.",
        "startTime": "34:23",
        "endTime": "34:23",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "That was super hostile.",
        "startTime": "34:23",
        "endTime": "34:24",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Awesome.",
        "startTime": "34:26",
        "endTime": "34:27",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "All right, cool, guys.",
        "startTime": "34:27",
        "endTime": "34:28",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "We'll send you everything.",
        "startTime": "34:28",
        "endTime": "34:28",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "I'm just going to keep building some cool, fun shit.",
        "startTime": "34:28",
        "endTime": "34:30",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Amazing.",
        "startTime": "34:31",
        "endTime": "34:31",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Appreciate you guys.",
        "startTime": "34:32",
        "endTime": "34:32",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Awesome.",
        "startTime": "34:32",
        "endTime": "34:33",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "All right, till next time.",
        "startTime": "34:34",
        "endTime": "34:36",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    },
    {
        "sentence": "Peace.",
        "startTime": "34:36",
        "endTime": "34:37",
        "speaker_name": "William Breslau",
        "speaker_id": 0
    },
    {
        "sentence": "Bye.",
        "startTime": "34:37",
        "endTime": "34:37",
        "speaker_name": "Sidney Swift",
        "speaker_id": 4
    },
    {
        "sentence": "Peace, guys.",
        "startTime": "34:38",
        "endTime": "34:39",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "Bye.",
        "startTime": "34:41",
        "endTime": "34:41",
        "speaker_name": "Jordan Chalmers",
        "speaker_id": 3
    },
    {
        "sentence": "It.",
        "startTime": "34:41",
        "endTime": "34:41",
        "speaker_name": "Isaiah",
        "speaker_id": 1
    }
]`;
