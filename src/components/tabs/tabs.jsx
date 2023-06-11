import PropTypes from 'prop-types'
import styles from "./tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const Tabs = ({ titlesRefs, setCurrentTab, currentTab }) => {
    const onTabClick = (tab) => {
        setCurrentTab(tab);

        const element = titlesRefs.find(item => item.name === tab).title.current;

        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div className={`${styles.ingredients__tabs} mb-10`}>
                <Tab onClick={onTabClick} active={currentTab === 'buns'} value='buns'>Булки</Tab>
                <Tab onClick={onTabClick} active={currentTab === 'sauces'} value='sauces'>Соусы</Tab>
                <Tab onClick={onTabClick} active={currentTab === 'mains'} value='mains'>Начинки</Tab>
            </div></>
    )
}

Tabs.propTypes = {
    titlesRefs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.oneOfType([PropTypes.node, PropTypes.object])
    }).isRequired).isRequired,
    currentTab: PropTypes.string.isRequired,
    setCurrentTab: PropTypes.func.isRequired
}

export default Tabs;