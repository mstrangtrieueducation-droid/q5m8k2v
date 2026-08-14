const A = "assets/images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({
  id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1
});
const input = (id, prompt, answers, explanation, image = "") => ({
  id, type: "input", prompt, answers, explanation, image, points: 1
});

const sections = [
  {
    key: "A", label: "A", title: "Match the words to the pictures.",
    note: "Use the original picture labels a, b, c, and d.", points: 4,
    sectionImage: A + "section-a-pictures.png",
    questions: [
      choice("A1", "1. librarian", ["a", "b", "c", "d"], "d", "Picture d shows a librarian standing in front of bookshelves."),
      choice("A2", "2. principal", ["a", "b", "c", "d"], "a", "Picture a shows the school principal in his office."),
      choice("A3", "3. traffic light", ["a", "b", "c", "d"], "b", "Picture b shows a traffic light."),
      choice("A4", "4. litter", ["a", "b", "c", "d"], "c", "Picture c shows litter on the ground.")
    ]
  },
  {
    key: "B", label: "B", title: "Circle the correct words.",
    note: "Choose the particle that completes each phrasal verb.", points: 4,
    questions: [
      choice("B1", "1. Please put your books away / up.", ["away", "up"], "away", "Put away means return something to its proper place."),
      choice("B2", "2. Please pick up / away the litter.", ["up", "away"], "up", "Pick up means lift or collect something from the ground."),
      choice("B3", "3. Please turn down / away the music.", ["down", "away"], "down", "Turn down means reduce the volume."),
      choice("B4", "4. Please take your toys away / up.", ["away", "up"], "away", "Take away means remove something from a place.")
    ]
  },
  {
    key: "C", label: "C", title: "Look and complete the words.",
    note: "Complete each school-place word to match the picture.", points: 3,
    questions: [
      input("C1", "1. k _ t c h _ n", ["kitchen"], "The picture shows a kitchen.", A + "page1-img8-338x242.png"),
      input("C2", "2. c _ f _ t _ r _ a", ["cafeteria"], "The picture shows a school cafeteria.", A + "page1-img2-338x242.png"),
      input("C3", "3. c l _ s s r _ _ m", ["classroom"], "The picture shows a classroom.", A + "page1-img6-337x242.png")
    ]
  },
  {
    key: "D", label: "D", title: "Listen and complete the sentences.",
    note: "Write the possessive pronoun you hear.", points: 4,
    audio: "assets/audio/Listening-D.mp3",
    questions: [
      input("D1", "1. The backpack is ___.", ["hers"], "The speaker says that the backpack belongs to her, so the possessive pronoun is hers."),
      input("D2", "2. The book is ___.", ["mine"], "The speaker says that the book belongs to me, so the possessive pronoun is mine."),
      input("D3", "3. The classroom is ___.", ["ours"], "The classroom belongs to us, so use ours."),
      input("D4", "4. The lunchbox is ___.", ["his"], "The lunchbox belongs to him, so use his.")
    ]
  },
  {
    key: "E", label: "E", title: "Look and complete the sentences.",
    note: "Write the correct possessive pronoun.", points: 4,
    questions: [
      input("E1", "1. The balloon is ___.", ["hers"], "The balloon belongs to the girl, so use hers.", A + "page2-img2-420x200.png"),
      input("E2", "2. The rabbit is ___.", ["his"], "The rabbit belongs to the boy, so use his.", A + "page2-img4-420x200.png"),
      input("E3", "3. The books are ___.", ["theirs"], "The books belong to them, so use theirs.", A + "page2-img3-420x200.png"),
      input("E4", "4. The pizza is ___.", ["ours"], "The pizza belongs to us, so use ours.", A + "page2-img5-420x200.png")
    ]
  },
  {
    key: "F", label: "F", title: "Write the words in the correct order to make questions. Look at the pictures and answer.",
    note: "Each number has two answers: the complete question and the complete answer.", points: 6,
    questions: [
      {
        id: "F1", type: "paired", points: 2, prompt: "1. doll / is / Whose / that", image: A + "page2-img6-600x300.png", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["Whose doll is that?", "Whose doll is that"], explanation: "Use Whose + noun + is + that: Whose doll is that?" },
          { key: "answer", label: "Complete answer", type: "input", answers: ["It's hers.", "It's hers", "It is hers.", "It is hers"], explanation: "The doll belongs to the girl, so answer: It's hers." }
        ]
      },
      {
        id: "F2", type: "paired", points: 2, prompt: "2. balls / are / those / Whose", image: A + "page2-img7-571x300.png", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["Whose balls are those?", "Whose balls are those"], explanation: "Use Whose + plural noun + are + those: Whose balls are those?" },
          { key: "answer", label: "Complete answer", type: "input", answers: ["They're ours.", "They're ours", "They are ours.", "They are ours"], explanation: "The balls belong to us, so answer: They're ours." }
        ]
      },
      {
        id: "F3", type: "paired", points: 2, prompt: "3. cat / Whose / that / is", image: A + "page2-img8-600x300.png", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["Whose cat is that?", "Whose cat is that"], explanation: "Put the words in question order: Whose cat is that?" },
          { key: "answer", label: "Complete answer", type: "input", answers: ["It's theirs.", "It's theirs", "It is theirs.", "It is theirs"], explanation: "The cat belongs to them, so answer: It's theirs." }
        ]
      }
    ]
  },
  {
    key: "G", label: "G", title: "Look and circle the correct words.",
    note: "Choose the action that matches each picture.", points: 3,
    questions: [
      choice("G1", "1. Choose the correct action.", ["put away", "pick up"], "put away", "The child is putting the toys away.", A + "page3-img1-385x275.png"),
      choice("G2", "2. Choose the correct action.", ["grab", "invite"], "grab", "The picture shows someone grabbing an object.", A + "page3-img2-385x275.png"),
      choice("G3", "3. Choose the correct action.", ["knock", "wash"], "knock", "The child is knocking on the door.", A + "page3-img6-385x275.png")
    ]
  },
  {
    key: "H", label: "H", title: "Complete the sentences with the words in the box.",
    note: "Use: Invite, pass, rude, thoughtful, wash. One word is extra.", points: 4,
    questions: [
      input("H1", "1. Please ___ your hands before dinner.", ["wash"], "Wash your hands is the natural instruction before dinner."),
      input("H2", "2. It is ___ to interrupt someone.", ["rude"], "Rude describes behavior that is not polite."),
      input("H3", "3. Please ___ your friends to the party.", ["invite"], "Invite means ask someone to come to an event."),
      input("H4", "4. It was ___ of you to help.", ["thoughtful"], "Thoughtful describes a kind action that considers another person.")
    ]
  },
  {
    key: "I", label: "I", title: "Listen and check the correct picture. Then write the word.",
    note: "Each number has two answers: choose picture a or b, then write the word.", points: 6,
    audio: "assets/audio/Listening-I.mp3",
    questions: [
      {
        id: "I1", type: "pictureWord", points: 2, prompt: "1.",
        pictures: [{ value: "a", image: A + "page3-img4-300x300.png" }, { value: "b", image: A + "page3-img5-300x300.png" }],
        parts: [
          { key: "picture", label: "Correct picture", type: "pictureChoice", answers: ["a"], explanation: "Picture a shows the computer named in the audio." },
          { key: "word", label: "Write the word", type: "input", answers: ["computer"], explanation: "The correct word is computer." }
        ]
      },
      {
        id: "I2", type: "pictureWord", points: 2, prompt: "2.",
        pictures: [{ value: "a", image: A + "page3-img7-300x300.png" }, { value: "b", image: A + "page3-img8-300x300.png" }],
        parts: [
          { key: "picture", label: "Correct picture", type: "pictureChoice", answers: ["b"], explanation: "Picture b shows the headphones named in the audio." },
          { key: "word", label: "Write the word", type: "input", answers: ["headphones"], explanation: "The correct word is headphones." }
        ]
      },
      {
        id: "I3", type: "pictureWord", points: 2, prompt: "3.",
        pictures: [{ value: "a", image: A + "page3-img9-300x300.png" }, { value: "b", image: A + "page3-img10-300x300.png" }],
        parts: [
          { key: "picture", label: "Correct picture", type: "pictureChoice", answers: ["a"], explanation: "Picture a shows the tablet named in the audio." },
          { key: "word", label: "Write the word", type: "input", answers: ["tablet"], explanation: "The correct word is tablet." }
        ]
      }
    ]
  },
  {
    key: "J", label: "J", title: "Write the words in the correct order to make questions. Look at the pictures and answer.",
    note: "Each number has two answers: the complete question and the complete answer.", points: 4,
    questions: [
      {
        id: "J1", type: "paired", points: 2, prompt: "1. Can / make cupcakes / I", image: A + "page4-img3-493x300.png", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["Can I make cupcakes?", "Can I make cupcakes"], explanation: "A request with can uses Can + I + base verb: Can I make cupcakes?" },
          { key: "answer", label: "Complete answer", type: "input", answers: ["Yes, you can.", "Yes, you can"], explanation: "The picture gives permission, so answer: Yes, you can." }
        ]
      },
      {
        id: "J2", type: "paired", points: 2, prompt: "2. we / May / play soccer", image: A + "page4-img4-545x300.png", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["May we play soccer?", "May we play soccer"], explanation: "A polite request with may uses May + we + base verb: May we play soccer?" },
          { key: "answer", label: "Complete answer", type: "input", answers: ["No, you may not.", "No, you may not", "No, you mayn't.", "No, you mayn't"], explanation: "The picture does not give permission, so answer: No, you may not." }
        ]
      }
    ]
  },
  {
    key: "K", label: "K", title: "Write the words in the correct order to make questions. Match the questions to the pictures.",
    note: "Each number has two answers: the complete question and the original picture label.", points: 8,
    sectionImage: A + "section-k-pictures.png",
    questions: [
      {
        id: "K1", type: "paired", points: 2, prompt: "1. play / we / May / video games", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["May we play video games?", "May we play video games"], explanation: "Put the words in question order: May we play video games?" },
          { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["d"], explanation: "Picture d shows video games." }
        ]
      },
      {
        id: "K2", type: "paired", points: 2, prompt: "2. to / Can / go / park / I / the", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["Can I go to the park?", "Can I go to the park"], explanation: "Put the words in question order: Can I go to the park?" },
          { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["b"], explanation: "Picture b shows the park." }
        ]
      },
      {
        id: "K3", type: "paired", points: 2, prompt: "3. outside / we / May / go", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["May we go outside?", "May we go outside"], explanation: "Put the words in question order: May we go outside?" },
          { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["a"], explanation: "Picture a shows going outside." }
        ]
      },
      {
        id: "K4", type: "paired", points: 2, prompt: "4. Can / watch / I / TV", parts: [
          { key: "question", label: "Complete question", type: "input", answers: ["Can I watch TV?", "Can I watch TV", "Can I watch television?", "Can I watch television"], explanation: "Put the words in question order: Can I watch TV?" },
          { key: "picture", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["c"], explanation: "Picture c shows watching TV." }
        ]
      }
    ]
  }
];
