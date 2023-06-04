import {
    ConnectWithoutContactRounded,
    FaceRounded,
    HomeRounded,
    MessageRounded,
    TerminalRounded,
    TextSnippetRounded,
} from "@mui/icons-material";


const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
};

export const tabsData = () => {
    const tabs = [
        {
            label: "صفحه اصلی",
            icon: <HomeRounded />,
            iconPosition: "start",
            ...tabProps(0),
        },
        {
            label: "درباره من",
            icon: <FaceRounded />,
            iconPosition: "start",
            ...tabProps(1),
        },
        {
            label: "رزومه من",
            icon: <TextSnippetRounded />,
            iconPosition: "start",
            ...tabProps(2),
        },
        {
            label: "نمونه کارها",
            icon: <TerminalRounded />,
            iconPosition: "start",
            ...tabProps(3),
        },
        {
            label: "نظرات همکاران",
            icon: <MessageRounded />,
            iconPosition: "start",
            ...tabProps(4),
        },
        {
            label: "ارتباط با من",
            icon: <ConnectWithoutContactRounded />,
            iconPosition: "start",
            ...tabProps(5),
        },
    ];

    return tabs;
}
