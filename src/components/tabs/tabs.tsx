import { FC } from "react";
import styles from "./tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

// Types
import { TTabs } from "../../types";

const Tabs: FC<TTabs> = ({ titlesRefs, setCurrentTab, currentTab }) => {
    const onTabClick = (tab: string): void => {
        setCurrentTab(tab);

        const element = titlesRefs.find((item) => item.name === tab)?.title.current;

        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={`${styles.ingredients__tabs} mb-10`}>
            <Tab onClick={onTabClick} active={currentTab === "buns"} value="buns">
                Булки
            </Tab>
            <Tab onClick={onTabClick} active={currentTab === "sauces"} value="sauces">
                Соусы
            </Tab>
            <Tab onClick={onTabClick} active={currentTab === "mains"} value="mains">
                Начинки
            </Tab>
        </div>
    );
};

export default Tabs;
