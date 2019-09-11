import React, {
    createContext,
    useState,
    useEffect
} from "react";
import axios from "axios";
export const DataContext = createContext();

const DataContextProvider = props => {
    const [icons, setIcons] = useState([]);
    const [skills, setSkills] = useState([]);
    const [menu, setMenu] = useState([]);
    const [experience, setExperience] = useState([]);
    const [socialLinks, setSocialLinks] = useState([]);
    const [content, setContent] = useState({});
    const [loading, setLoading] = useState(false);

    // Fetch all offers from local mock.json file
    const fetchIcons = async () => {
        setLoading(true);
        const res = await axios.get("../db.json");
        setIcons(res.data.icons);
        setSkills(res.data.skills);
        setMenu(res.data.menu);
        setContent(res.data.content);
        setSocialLinks(res.data.socialLinks);
        setExperience(res.data.experience);
        setLoading(false);
    };

    useEffect(() => {
        fetchIcons();
    }, []);

    return (
        <DataContext.Provider value={{ menu, content, socialLinks, experience, icons, skills, loading }} >
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider