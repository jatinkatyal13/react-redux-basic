/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function (state=null, action) {
    var dummy_data = [
        {
            id: 1,
            first: "Bucky",
            selected: false,
            last: "Roberts",
            age: 71,
            description: "Bucky is a React developer and YouTuber",
            thumbnail: "http://i.imgur.com/7yUvePI.jpg"
        },
        {
            id: 2,
            first: "Joby",
            selected: false,
            last: "Wasilenko",
            age: 27,
            description: "Joby loves the Packers, cheese, and turtles.",
            thumbnail: "http://i.imgur.com/52xRlm8.png"
        },
        {
            id: 3,
            first: "Madison",
            selected: false,
            last: "Williams",
            age: 24,
            description: "Madi likes her dog but it is really annoying.",
            thumbnail: "http://i.imgur.com/4EMtxHB.png"
        }
    ]

    if (state){
        switch(action.type){
            case 'USER_SELECTED':
                var active = state.find((user) => user.selected == true);
                if (active){
                    active.selected=false
                }
                state.find((user) => user.id == action.payload.id).selected=true;
                // return Object.assign({}, state)
                break;
        }
        // console.log(Object.assign({}, state))
        // console.log(state)
        return Object.create(state)
    }

    return dummy_data;
}
