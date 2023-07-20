import { TTitleRef } from "./burger-ingredients"

export type TTabs = {
    titlesRefs: Array<TTitleRef>;
    currentTab: string;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}