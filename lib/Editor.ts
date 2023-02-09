// <reference in README.md>

const sampleContent = '';

interface InputUpdateContent {
  index: number;
  tag: string;
  visuals: string;
}

const updateContent = ({ index, tag, visuals }: InputUpdateContent) => {
  const words = sampleContent.split(' ');
  const targetWord = words[index];
};

export class Editor {
  // private content: string;
  // constructor() {
  // }
  // updateContent() [
  // ]
}
