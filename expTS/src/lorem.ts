import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});

function gerarLoremIpsum(paragrafos: number): string {
    return lorem.generateParagraphs(paragrafos);
}

export default gerarLoremIpsum;
