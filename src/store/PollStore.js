import { writable } from "svelte/store";

const Pollstore = writable(
    [
    {
      id: 1,
      question: "Python or JavaScript ?",
      answerA: "Python",
      answerB: "Javasript",
      votesA: 9,
      votesB: 15,
    },
  ]
)
export default Pollstore