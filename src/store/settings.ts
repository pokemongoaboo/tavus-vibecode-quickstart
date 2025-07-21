import { atom } from "jotai";

interface Settings {
  name: string;
  language: string;
  interruptSensitivity: string;
  greeting: string;
  context: string;
  persona: string;
  replica: string;
}

const getInitialSettings = (): Settings => {
  const savedSettings = localStorage.getItem('tavus-settings');
  if (savedSettings) {
    return JSON.parse(savedSettings);
  }
  return {
    name: "",
    language: "chinese",
    interruptSensitivity: "medium",
    greeting: "你好！很高興見到你！",
    context: "",
    persona: "pdedc2200e9d",
    replica: "r62baeccd777",
  };
};

export const settingsAtom = atom<Settings>(getInitialSettings());

export const settingsSavedAtom = atom<boolean>(false); 